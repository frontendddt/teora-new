
import { promises as fs } from 'fs';
import path from 'path';
export async function POST(req) {
  const data = await req.formData();
  const banner = data.get('banner');
  
  if (!banner || typeof banner === 'string') {
    return new Response(JSON.stringify({ error: 'No file provided' }), { status: 400 });
  }

  const buffer = Buffer.from(await banner.arrayBuffer());
  const fileName = `${Date.now()}_${banner.name}`;
  const filePath = path.join(process.cwd(), 'public', 'uploads', fileName);

  await fs.writeFile(filePath, buffer);
  return new Response(JSON.stringify({ url: `/uploads/${fileName}` }), { status: 200 });
}
