 
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

function normalizeLabel(label) { 
  return label
    ?.toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

export async function GET() {
  try {
    const [headerRows] = await db.query(`
      SELECT * FROM header_links WHERE is_visible = 1 ORDER BY position
    `);

    const [pageRows] = await db.query(`
      SELECT title, slug, menu_position, is_visible FROM pages
    `); 
    const menu = headerRows
      .filter(item => item.parent_id === null)
      .map(parent => {
        const submenuItems = [];

        const normalizedParentLabel = normalizeLabel(parent.label);

        const matchingPages = pageRows.filter(
          page => normalizeLabel(page.menu_position) === normalizedParentLabel
        );
        for (const page of matchingPages) {
          submenuItems.push({
            name: page.title,
            link: `/${page.slug}`,
            is_visible: page.is_visible
          });
        }

        return {
          id: parent.id,
          navName: parent.label,
          navLink: parent.url,
          has_sup: parent.has_sup,
          submenu: submenuItems
        };
      });

    return NextResponse.json(menu);
  } catch (error) {
    console.error("Header menu fetch error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
 