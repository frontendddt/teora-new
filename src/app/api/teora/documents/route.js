 
import { db } from '@/lib/db';
import { writeFile, unlink } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server'; 
export async function GET() {
  const [rows] = await db.execute('SELECT * FROM teora_documents ORDER BY created_at DESC');
  return NextResponse.json(rows);
} 
export async function POST(req) {
  const data = await req.formData();
  const file = data.get('file');

  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  if (file.type !== 'application/pdf') {
    return NextResponse.json({ error: 'Only PDF files are allowed' }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const filename = Date.now() + '_' + file.name;
  const filePath = path.join(process.cwd(), 'public', 'uploaded-documents', filename);

  await writeFile(filePath, buffer);

  await db.execute(
    'INSERT INTO teora_documents (file_name, file_url) VALUES (?, ?)',
    [file.name, `/uploaded-documents/${filename}`]
  );

  return NextResponse.json({ success: true });
}

 
export async function DELETE(req) {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');

  if (!id) return NextResponse.json({ error: 'Missing document ID' }, { status: 400 });

  try{
       const [rows] = await db.execute(
        'SELECT file_url FROM teora_documents WHERE id = ?',
        [id]
      );

      if (!rows.length) {
        return NextResponse.json({ error: 'Document not found' }, { status: 404 });
      }
       const fileUrl = rows[0].file_url;

      const safeFileUrl = fileUrl.replace(/^\/+/, '');
      const filePath = path.join(process.cwd(), 'public', safeFileUrl);

    try {
          await unlink(filePath);
        }catch (err) {
          console.warn('File deletion failed, continuing...', err.message);
      }
       
      await db.execute('DELETE FROM teora_documents WHERE id = ?', [id]); 
      return NextResponse.json({ success: true });

  }catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }   
}
