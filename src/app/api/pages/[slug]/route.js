 
import { promises as fs } from 'fs';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import path from 'path';
import { deleteImages } from '@/lib/deleteImages';
export async function GET(_, { params }) {
  const slug = params.slug;
  try {
    const [rows] = await db.query('SELECT * FROM pages WHERE slug = ?', [slug]);
    if (rows.length === 0) {
      return new Response(JSON.stringify({ error: 'Page not found' }), { status: 404 });
    }
    return new Response(JSON.stringify(rows[0]), { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return new Response(JSON.stringify({ error: 'Fetch failed' }), { status: 500 });
  }
}

export async function PUT(request, { params }) {

  const apiKey = request.headers.get('x-api-key');
  const expected = process.env.ADMIN_API_KEY;
 
  if (apiKey !== expected) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 403 });
  }

  const slug = params.slug;
  try { 

    const {
      title,
      metaTitle,
      metaDescription,
      banner,
      content,
      menuPosition,
      footerOptions
    } = await request.json();

    const footerNavigation = footerOptions.footerNavigation ? 1 : 0;
    const footerSolution = footerOptions.footerSolution ? 1 : 0;
    const footerAboutus = footerOptions.footerAboutus ? 1 : 0; 
    let sectionId = null;
    if (footerNavigation) sectionId = 1;
    else if (footerSolution) sectionId = 2;
    else if (footerAboutus) sectionId = 3;

      const [pages] = await db.execute('SELECT banner FROM pages WHERE slug = ?', [slug]); 
      const oldBanner = pages.length ? pages[0].banner : null;
 
        if (banner && oldBanner && oldBanner !== banner) {
          const safeOldBanner = oldBanner.replace(/^\/+/, '');
          const oldFilePath = path.join(process.cwd(), 'public', safeOldBanner);
          try {
            await fs.unlink(oldFilePath);
          } catch (err) {
            console.warn('Old banner file deletion failed:', err.message);
          }
        }
          const bannerToSave = banner || oldBanner;

    await db.execute(
      `UPDATE pages SET 
        title = ?, 
        meta_title = ?, 
        meta_description = ?, 
        banner = ?, 
        content = ?, 
        menu_position = ?, 
        footer_navigation = ?, 
        footer_solution = ?, 
        footer_aboutus = ? 
       WHERE slug = ?`,
      [
        title,
        metaTitle,
        metaDescription,
        bannerToSave,
        content,
        menuPosition, 
        footerNavigation,
        footerSolution,
        footerAboutus,
        slug
      ]
    );

       const pageUrl = `/${slug}`;
      if (sectionId !== null) {
        await db.execute(
          `UPDATE footer_links
          SET section_id = ?
          WHERE url = ?`,
          [sectionId, pageUrl]
        );
      }

    revalidatePath(`/${slug}`);
    revalidatePath('/');
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('PUT error:', error);
    return new Response(JSON.stringify({ error: 'Update failed' }), { status: 500 });
  }
} 

export async function DELETE(_, { params }) {
  const slug = params.slug;

  try { 
    const [pages] = await db.execute('SELECT banner, content FROM pages WHERE slug = ?', [slug]);
    if (!pages.length) return new Response(JSON.stringify({ error: 'Page not found' }), { status: 404 });
     
     const { banner, content } = pages[0];
     await deleteImages(content, banner); 
    const url = `/${slug}`;
    await db.execute('DELETE FROM footer_links WHERE url = ?', [url]);
    await db.execute('DELETE FROM pages WHERE slug = ?', [slug]); 
    revalidatePath(`/${slug}`);
    revalidatePath('/');
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('DELETE error:', error);
    return new Response(JSON.stringify({ error: 'Delete failed' }), { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  const slug = params.slug;
  const apiKey = request.headers.get('x-api-key');

  if (apiKey !== process.env.ADMIN_API_KEY) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 403 });
  }

  try {
    const { is_visible } = await request.json();
    await db.execute('UPDATE pages SET is_visible = ? WHERE slug = ?', [is_visible, slug]);
    revalidatePath(`/${slug}`);
    revalidatePath('/');

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('PATCH visibility error:', error);
    return new Response(JSON.stringify({ error: 'Failed to update visibility' }), { status: 500 });
  }
}
