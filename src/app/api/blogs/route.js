// /app/api/blogs/route.js

import { promises as fs } from 'fs';
import path from 'path';
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { deleteImages } from '@/lib/deleteImages';
 
export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT * FROM blogs ORDER BY created_at DESC"
    );
    return NextResponse.json(rows);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
 
export async function POST(req) {
  try {
    const data = await req.formData();

    const banner = data.get('banner');
    if (!banner || typeof banner === 'string') {
      return NextResponse.json(
        { error: "Banner is required" },
        { status: 400 }
      );
    }
 
    const buffer = Buffer.from(await banner.arrayBuffer());
    const fileName = `${Date.now()}_${banner.name}`;
    const uploadDir = path.join(process.cwd(), 'public', 'uploadBlog-banner');
    await fs.mkdir(uploadDir, { recursive: true });
    await fs.writeFile(path.join(uploadDir, fileName), buffer);

    await db.query(
      `INSERT INTO blogs
      (blog_title, short_description, slug, description, banner, meta_title, meta_description, is_active)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.get('blog_title'),
        data.get('short_description'),
        data.get('slug'),
        data.get('description'),
        `/uploadBlog-banner/${fileName}`,
        data.get('meta_title'),
        data.get('meta_description'),
        1 
      ]
    );

    return NextResponse.json({ message: "Blog created successfully" });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
 
export async function PUT(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: "Missing blog ID" }, { status: 400 });
  } 
  try {
    const body = await req.json();

    await db.query(
      `UPDATE blogs SET
        blog_title = ?,
        short_description = ?,
        slug = ?,
        description = ?,
        banner = ?,
        meta_title = ?,
        meta_description = ?,
        is_active = ?
      WHERE id = ?`,
      [
        body.blog_title,
        body.short_description,
        body.slug,
        body.description,
        body.banner,
        body.meta_title,
        body.meta_description,
        body.is_active ? 1 : 0,
        id
      ]
    ); 
    return NextResponse.json({ message: "Blog updated successfully" });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
 
export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) return NextResponse.json({ error: 'Missing blog ID' }, { status: 400 });
  try {
    const [rows] = await db.query('SELECT banner, description FROM blogs WHERE id = ?', [id]);
    if (!rows.length) return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    const { banner, description } = rows[0];
    await deleteImages(description, banner); 
    await db.query('DELETE FROM blogs WHERE id = ?', [id]);
    return NextResponse.json({ message: 'Blog and images deleted successfully' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}