 
  import { promises as fs } from 'fs';
  import path from 'path';

  export async function POST(req) {
    try {
      const formData = await req.formData();
      const file = formData.get('upload');

      if (!file || typeof file === 'string') {
        return new Response(JSON.stringify({ error: 'No file uploaded' }), { status: 400 });
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      const timestamp = Date.now();
      const safeName = file.name.replace(/[^a-z0-9.-]/gi, '_').toLowerCase();
      const fileName = `${timestamp}_${safeName}`;
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      const filePath = path.join(uploadDir, fileName);

      await fs.mkdir(uploadDir, { recursive: true });
      await fs.writeFile(filePath, buffer);

      return new Response(
        JSON.stringify({ url: `/uploads/${fileName}` }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } catch (err) {
      console.error('CKEditor upload error:', err);
      return new Response(JSON.stringify({ error: 'Upload failed' }), { status: 500 });
    }
  }
