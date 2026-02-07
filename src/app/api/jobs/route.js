// /api/jobs/route.jsx
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import { deleteImages } from '@/lib/deleteImages';
 
export async function GET() {
  const [rows] = await db.query(
    'SELECT * FROM jobs ORDER BY created_at DESC'
  );
  return NextResponse.json(rows);
} 
export async function POST(req) {
  try {
    const body = await req.json();
    const {
      title,
      slug,
      address,
      shift,
      min_salary,
      max_salary,
      description
    } = body;

    if (!title || !slug) {
      return NextResponse.json(
        { message: 'Title and slug required' },
        { status: 400 }
      );
    } 
    const [exist] = await db.query(
      'SELECT id FROM jobs WHERE slug=?',
      [slug]
    );

    if (exist.length > 0) {
      return NextResponse.json(
        { message: 'Slug already exists' },
        { status: 409 }
      );
    }

    await db.query(
      `INSERT INTO jobs 
      (title, slug, address, shift, min_salary, max_salary, description)
      VALUES (?,?,?,?,?,?,?)`,
      [title, slug, address, shift, min_salary, max_salary, description]
    );

    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json(
      { message: 'Server Error' },
      { status: 500 }
    );
  }
}
 
export async function PUT(req) {
  try {
    const body = await req.json();
    const {
      id,
      title,
      slug,
      address,
      shift,
      min_salary,
      max_salary,
      description,
      is_active
    } = body;

    if (!id || !title || !slug) {
      return NextResponse.json(
        { message: 'Invalid data' },
        { status: 400 }
      );
    }
 
    const [exist] = await db.query(
      'SELECT id FROM jobs WHERE slug=? AND id!=?',
      [slug, id]
    );

    if (exist.length > 0) {
      return NextResponse.json(
        { message: 'Slug already exists' },
        { status: 409 }
      );
    }

    await db.query(
      `UPDATE jobs SET 
        title=?,
        slug=?,
        address=?,
        shift=?,
        min_salary=?,
        max_salary=?,
        description=?,
        is_active=?
      WHERE id=?`,
      [
        title,
        slug,
        address,
        shift,
        min_salary,
        max_salary,
        description,
        is_active ?? 1,
        id
      ]
    );

    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json(
      { message: 'Server Error' },
      { status: 500 }
    );
  }
}
 
export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { message: 'ID required' },
        { status: 400 }
      );
    } 
    const [rows] = await db.query('SELECT description FROM jobs WHERE id=?', [id]);
    if (!rows.length) {
      return NextResponse.json({ message: 'Job not found' }, { status: 404 });
    }

    const { description } = rows[0]; 
    await deleteImages(description); 

    await db.query('DELETE FROM jobs WHERE id=?', [id]);
    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json(
      { message: 'Server Error' },
      { status: 500 }
    );
  }
}
