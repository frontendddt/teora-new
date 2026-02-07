
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
 
export async function GET() {
  const [rows] = await db.execute('SELECT video_url FROM teora_video ORDER BY updated_at DESC LIMIT 1');
  if (rows.length === 0) {
    return NextResponse.json({ error: 'No video found' }, { status: 404 });
  }
  return NextResponse.json({ video_url: rows[0].video_url });
}
export async function POST(req) {
  const body = await req.json();
  const { video_url } = body;

  if (!video_url || !video_url.startsWith('https://www.youtube.com/embed/')) {
    return NextResponse.json({ error: 'Invalid YouTube embed URL' }, { status: 400 });
  }

  await db.execute('DELETE FROM teora_video');
  await db.execute('INSERT INTO teora_video (video_url) VALUES (?)', [video_url]);

  return NextResponse.json({ success: true });
}
