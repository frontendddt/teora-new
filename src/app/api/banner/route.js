
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
 
export async function GET() {
  try {
    const [rows] = await db.query(
      'SELECT * FROM banners ORDER BY slider_number ASC'
    ); 
    const formattedRows = rows.map((row) => ({
      ...row,
      images: row.images ? JSON.parse(row.images) : [],
    }));

    return NextResponse.json({
      success: true,
      data: formattedRows,
    });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch banners' },
      { status: 500 }
    );
  }
} 
export async function POST(req) {
  try {
    const formData = await req.formData();

    const sliderNumber = parseInt(formData.get('slider_number'), 10);
    const heading = formData.get('heading');
    const banner = formData.get('banner');

    if (isNaN(sliderNumber)) {
      return NextResponse.json(
        { success: false, message: 'Missing slider number' },
        { status: 400 }
      );
    }

    let images = null;
 
    if (banner && typeof banner === 'object' && banner.name) {
      const buffer = Buffer.from(await banner.arrayBuffer());

      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      const filePath = path.join(uploadDir, banner.name);

      await writeFile(filePath, buffer);

      images = JSON.stringify([`/uploads/${banner.name}`]);
    } 
    await db.query(
      `INSERT INTO banners (slider_number, heading, images)
       VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE
         heading = VALUES(heading),
         images = VALUES(images)`,
      [
        sliderNumber,
        heading || null,
        images,
      ]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to save banner' },
      { status: 500 }
    );
  }
}
