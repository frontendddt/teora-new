
 
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request) {
  try {
    const [sections] = await db.execute('SELECT * FROM footer_sections ORDER BY position');
    const [links] = await db.execute('SELECT * FROM footer_links WHERE is_visible = 1');

    const groupedSections = sections.map(section => ({
      f_heading: section.title,
      list: links
        .filter(link => link.section_id === section.id)
        .map(link => ({ link: link.url, linkName: link.label })),
    }));

    return NextResponse.json(groupedSections);
  } catch (err) {
    console.error('API /api/footer error:', err);
    return NextResponse.json({ error: err.message || 'Unknown Error' }, { status: 500 });
  }
}

