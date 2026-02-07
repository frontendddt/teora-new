
import NotFoundPage from "@/components/notFoundPage/NotFoundPage"; 
import Image from "next/image";
import styles from "../blog.module.css";
import { LinkCustom } from "@/components/common/Custom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const getblog = async (slug) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`, {
         cache: "no-store",
    });
    const blogs = await res.json();
    return blogs.find(blog => blog.slug === slug);
};

export async function generateMetadata({params}) {

      const { slug } = await params; 
      const blog = await getblog(slug);

    if(!blog){
        return{
              title: "Blog Not Found",
              description: "The requested blog does not exist.",
        };
    } 
    return {
           title: blog.meta_title || blog.blog_title,
           description: blog.meta_description || blog.short_description,
           openGraph: {
           title: blog.meta_title || blog.blog_title,
           description: blog.meta_description || blog.short_description,
           images: [blog.banner],
        },
    };
}
 
const blogDetails = async ({params}) =>{
      const { slug } = await params; 
      const blog = await getblog(slug);
      if(!blog) return <NotFoundPage/> 
    return(
         <section > 
               <div className="position-relative w-100" style={{height:350}}>
                    <Image
                        src={blog.banner} 
                        fill
                        alt={blog.blog_title}
                        style={{objectFit: "cover"}}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100"
                        style={{ background: "rgba(0, 0, 0, 0.4)", zIndex: 1}} >
                         <div className="container position-absolute top-50 start-50 translate-middle text-white z-2">
                              <span className="d-flex align-items-center gap-2 text-primaryBeige" style={{fontSize: 17, fontWeight:500}}>
                                <LinkCustom href="/" label="Home" p0="p-0" className="text-primaryBeige" />
                                 <MdOutlineKeyboardDoubleArrowRight/>
                                <LinkCustom href="/blog" label="Blog" p0="p-0" className="text-primaryBeige" />
                                <MdOutlineKeyboardDoubleArrowRight/>
                                <span>{blog.blog_title.slice(0, 30)}</span>
                              </span>
                              
                        </div>
                    </div>
               </div> 
               <div className="container section-space"> 
                   <h2 className="purpleColor mb-4">{blog.blog_title}</h2>
                   <div className={styles.bolgsStyles} dangerouslySetInnerHTML={{ __html: blog.description }} />
              </div>
        </section>
    )
}
export default blogDetails;