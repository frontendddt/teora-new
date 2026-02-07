
import HeaderMenu from '@/component_admin/HeaderMenu';
import { db } from '@/lib/db';

export default async function HeaderMenuPage() {
  const [menu] = await db.query(`
    SELECT id, label, url, parent_id, is_visible, position FROM header_links ORDER BY position
  `);
  const parents = menu.filter(link => link.parent_id === null);
  const data = parents.map(parent => ({
    ...parent,
    submenu: menu.filter(link => link.parent_id === parent.id),
  }));

  return (
    <section>
      <h4 className="heading_titles purpleColor">Header Menu</h4>
      <div className="row">
     
          <div className="col-12" > 
            <HeaderMenu sections={data}/>
          </div>
      
      </div>
    </section>
  );
}
