 
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
export async function GET() {
  try {
    const [pages] = await db.query('SELECT slug, title, menu_position, is_visible, footer_navigation, footer_solution, footer_aboutus FROM pages');
    return new Response(JSON.stringify({ pages }), { status: 200 });
  } catch (error) {
    console.error('GET all pages error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch pages' }), { status: 500 });
  }
}

export async function POST(request) {
  try {
    const {
      title,
      slug,
      metaTitle,
      metaDescription,
      banner,
      content,
      menuPosition,
      footerOptions
    } = await request.json(); 

    await db.execute(
      `INSERT INTO pages
       (title, slug, meta_title, meta_description, banner, content, menu_position, footer_navigation, footer_solution, footer_aboutus)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        slug,
        metaTitle,
        metaDescription,
        banner,
        content,
        menuPosition,
        footerOptions.footerNavigation ? 1 :0,
        footerOptions.footerSolution ? 1 :0,
        footerOptions.footerAboutus ? 1 :0,
      ]
    ); 
    const pageUrl = `/${slug}`; 
    const insertFooterLink = async (sectionTitle) => { 
      const [sections] = await db.query(
        'SELECT id FROM footer_sections WHERE title = ? LIMIT 1',
        [sectionTitle]
      );

      if (sections.length === 0) return; 
      const sectionId = sections[0].id; 
      const [positions] = await db.query(
        'SELECT MAX(position) as maxPosition FROM footer_links WHERE section_id = ?',
        [sectionId]
      );

      const nextPosition = (positions[0].maxPosition || 0) + 1; 
      await db.execute(
        `INSERT INTO footer_links
         (section_id, label, url, position, is_visible, created_at)
         VALUES (?, ?, ?, ?, 1, NOW())`,
        [sectionId, title, pageUrl, nextPosition]
      );
    }; 
    if (footerOptions.footerNavigation) await insertFooterLink('Navigation');
    if (footerOptions.footerSolution) await insertFooterLink('Solutions');
    if (footerOptions.footerAboutus) await insertFooterLink('About Us'); 
        revalidatePath(pageUrl);
        revalidatePath('/');

    return new Response(JSON.stringify({ success: true }), { status: 201 });
  } catch (error) {
    console.error('POST create page error:', error);
    return new Response(JSON.stringify({ error: 'Create failed' }), { status: 500 });
  }
}
