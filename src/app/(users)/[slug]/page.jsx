
import NotFoundPage from '@/components/notFoundPage/NotFoundPage';
import { db } from '@/lib/db';
import Image from 'next/image';
export async function generateStaticParams() {
  const [pages] = await db.query('SELECT slug FROM pages');
  return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const [rows] = await db.query(
    'SELECT meta_title, meta_description, is_visible FROM pages WHERE slug = ?',
    [slug]
  );

  if (rows.length === 0 || rows[0].is_visible === 0) {
    return {
      title: '404 Not Found',
      description: 'The requested page was not found.',
    };
  }

  const meta = rows[0];
  return {
    title: meta.meta_title,
    description: meta.meta_description,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const [rows] = await db.query(
    'SELECT title, banner, content, is_visible FROM pages WHERE slug = ?',
    [slug]
  );

  if (rows.length === 0 || rows[0].is_visible === 0) {
    return <NotFoundPage />;
  }

  const page = rows[0];

  return (
    <section className='corporateBg purpleColor w-100'>
      {page.banner && (  
         <div className="position-relative w-100" style={{height:550}}>
            <Image
                src={page.banner} 
                fill
                alt="page banner"
                style={{objectFit: "cover"}}
                className="pageBanner"
            />
          </div>
      )}

      <div className='section-space-2'>
        <div className="container container2">
          <div
            className='w-100'
            dangerouslySetInnerHTML={{ __html: page.content }}
            style={{ listStyle: 'auto' }}
          />
        </div>
      </div>
 
    </section>
  );
}
