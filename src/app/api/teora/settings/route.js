 
import { db } from '@/lib/db';
import { NextResponse } from 'next/server'; 
export async function GET() {
  try {
    const [rows] = await db.execute('SELECT label_text, is_visible FROM teora_settings WHERE id = 1');
    return NextResponse.json(rows[0]);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
} 
export async function POST(req) {
  try {
    const body = await req.json();
    const { type } = body; 
    if (type === 'visibility') {
      const { visible } = body;
      await db.execute('UPDATE teora_settings SET is_visible = ? WHERE id = 1', [visible ? 1 : 0]);
      return NextResponse.json({ success: true });
    } 
    if (type === 'label') {
      const { label } = body;
      if (!label) return NextResponse.json({ error: 'Label is required' }, { status: 400 });

      await db.execute('UPDATE teora_settings SET label_text = ? WHERE id = 1', [label]);
      return NextResponse.json({ success: true });

    } else if (type === 'active') {
      const { id } = body;
      if (!id) return NextResponse.json({ error: 'Document ID is required' }, { status: 400 });

      await db.execute('UPDATE teora_documents SET is_active = 0');
      await db.execute('UPDATE teora_documents SET is_active = 1 WHERE id = ?', [id]);

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
