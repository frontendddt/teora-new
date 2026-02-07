
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import PageVisibilityToggle from './PageVisibilityToggle';
import PieChartSVG from '@/component_admin/PieChartSVG';

export default async function AdminDashboard() {
    const chartData = [
      { label: 'About', value: 5 },
      { label: 'Contact', value: 3 },
      { label: 'Solutions', value: 7 },
      { label: 'Media', value: 2 }
    ];  

  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/admin/login');  
  }
  const [pages] = await db.query('SELECT title, slug, is_visible FROM pages');
  
  return ( 
      <section> 
            <h4 className="heading_titles adminh4 purpleColor mb-3">Dashboard</h4>  
            <div className="row"> 

                <div className="col-md-4 col-6">
                      <PieChartSVG data={chartData} />
                 </div>

                <div className="col-md-4 col-6">
                    <Link href='/admin/pageadd'>
                          <div className="card p-3 purpleColor dashboardCard">
                              <div className="card-body ">
                                <h2 className=''>{pages.length}</h2>
                                <h6 className='text-end ' style={{fontWeight:'600'}}>All pages</h6>
                              </div>
                          </div>
                    </Link>
                </div>

                <div className="col-md-4 col-6">
                    <Link href='/admin/sliders'>
                          <div className="card p-3 purpleColor dashboardCard">
                              <div className="card-body ">
                                <h2 className=''>4</h2>
                                <h6 className='text-end' style={{fontWeight:'600'}}>Sliders</h6>
                              </div>
                          </div>
                    </Link>
                </div>

                  
            </div>
            
             <div className="card card_container mt-3">
                    <h4 className="heading_titles purpleColor adminh4">All created page</h4>
                    <div className="card-body table-responsive">
                         <table className="table tables_style">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th style={{minWidth:'120px'}}>Title</th>
                                <th style={{minWidth:'120px'}}>URL</th>
                                <th style={{minWidth:'150px'}}>Visible</th>
                              </tr>
                            </thead>
                            <tbody>
                           
                              {pages.map((page, index) => (
                                <tr key={page.slug}>
                                  <td>{index + 1}</td>
                                  <td>{page.title}</td>
                                  <td>
                                    <a
                                      href={`/${page.slug}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      /{page.slug}
                                    </a>
                                  </td>
                                  <td className='d-flex justify-content-center'>
                                    <PageVisibilityToggle
                                      slug={page.slug}
                                      isVisible={page.is_visible}
                                    />
                                  </td>
                                </tr>
                              ))}
                            
                            </tbody>
                          </table>
                    </div>
              </div>
              
      </section> 
  );
}

