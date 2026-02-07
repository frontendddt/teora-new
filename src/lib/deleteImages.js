
import { promises as fs } from 'fs';
import path from 'path';

/**
 * 
 * @param {string} contentHtml 
 * @param {string|null} bannerPath 
 */
export async function deleteImages(contentHtml, bannerPath = null)
{
  if (contentHtml)
  {
    const regex = /<img[^>]+src="([^">]+)"/g;
    let match;
    while ((match = regex.exec(contentHtml)) !== null)
    {
      const src = match[1];
      if (src.startsWith('/uploads/'))
      {
        const filePath = path.join(process.cwd(), 'public', src.replace(/^\/+/, ''));
        try
        {
          await fs.unlink(filePath);
        } catch (err)
        {
          console.warn('CKEditor image not found or already deleted:', filePath);
        }
      }
    }
  }

  if (bannerPath)
  {
    const safeBanner = path.join(process.cwd(), 'public', bannerPath.replace(/^\/+/, ''));
    try
    {
      await fs.unlink(safeBanner);
    } catch (err)
    {
      console.warn('Banner file not found or already deleted:', safeBanner);
    }
  }
}
