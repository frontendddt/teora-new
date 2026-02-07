
"use client"
export const dynamic = 'force-dynamic';
import styles from "../blog.module.css";
import { ImageCustom } from "@/components/common/Custom";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";
import { useSearchParams } from "next/navigation";

const ITEMS_PAR_PAGE = 9;

export default function BlogClient(){
 
const [blogData, setBlogData] = useState([]); 
const [loader, setLoader] = useState(false);

 const searchParams = useSearchParams();
 const currentPage = Number(searchParams.get("page")) || 1;

const fetchBlogs = async () =>{
    try{
        setLoader(true);
        const res = await fetch('/api/blogs');
        const data = await res.json(); 
        setBlogData(data.filter(item => item.is_active != 0)); 
    }catch(error){
        console.log(error);
    }finally{
        setLoader(false);
    }
}
useEffect(() =>{
    fetchBlogs();
},[]);

    const totalPages = Math.ceil(blogData.length / ITEMS_PAR_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PAR_PAGE;
    const paginatedBlogs  = blogData.slice(startIndex, startIndex + ITEMS_PAR_PAGE);

    return(
        <section className="">
             <div className="position-relative w-100" style={{height:350}}>
                <Image
                    src="/bgImage/solaq_powerBg.jpeg" 
                    fill
                    priority
                    alt="Teora Blog - Sharp, Useful Reads—From Biotech"
                    style={{objectFit: "cover"}}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                    style={{ background: "rgba(0, 0, 0, 0.4)", zIndex: 1}}> 
                    <div className="container">
                        <h2 className="text-primaryBeige" style={{fontWeight:'600'}}>Teora Blog - Sharp, Useful Reads—From Biotech To Business Of Food.</h2>
                    </div>
                </div>
            </div> 
            <div className="container section-space">
                 
                 <div className="row"> 
                   {loader && <Loader/>}
                     {
                        paginatedBlogs.map((blog) =>(
                           <div className="col-md-4 col-12 padding_manage mbmd4 mb-3" key={blog.id}>
                                <div className={`card p-3 blogsfooter d-flex flex-column justify-content-between overflow-hidden`} style={{minHeight:'500px'}} >
                                    <div>
                                        <ImageCustom
                                            src={blog.banner}
                                            className="overflow-hidden"
                                            style={{height:260, borderRadius: 10}}
                                            alt={blog.blog_title}
                                        />
                                        <div className={`purpleColor ${styles.blogDescriptions}`}>
                                            <h4 className="">{` ${blog.blog_title.slice(0, 50)}${blog.blog_title.length > 50 ? '...' : ''}`}</h4>
                                            <p className="mb-0 mt-2">{blog.short_description.slice(0, 90)}{blog.short_description.length > 90 ? '...' : ''}</p>
                                        </div>
                                    </div>
                                    <Link href={`/blog/${blog.slug}`} target="_blank" className="blog_buttons d-flex justify-content-between align-items-center"> 
                                        <span className={`purpleColor ${styles.readmore}`}>Read More</span>
                                        <span className="msg_box purpleColor" type="button"> <IoIosArrowForward/></span>
                                    </Link> 
                                </div>
                        </div> 
                        ))
                     } 
                 </div>  
            </div>
            
            {
                totalPages > 1 &&(
                      <div className="section-space pt-0">
                        <div className="corporateBg">
                            <div className="container d-flex justify-content-end  pt-4 pb-4">
                                <nav aria-label="Page navigation">
                                    <ul className={`pagination mb-0 ${styles.paginations}`}>

                                        <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
                                            <Link className="page-link purpleBg"
                                                href={`?page=${currentPage - 1}`}
                                                aria-label="Previous">
                                                Previous
                                            </Link>
                                        </li>
                                        {[...Array(totalPages)].map((_, i) =>(
                                            <li className={`page-item ${currentPage === i + 1 && 'active'}`}
                                             key={i}>
                                                <Link href={`?page=${i + 1}`} className="page-link">{i + 1}</Link>
                                            </li>
                                        ))} 

                                        <li className={`page-item ${currentPage === totalPages && 'disabled'}`}>
                                            <Link
                                                href={`?page=${currentPage + 1}`}
                                                className="page-link"
                                                aria-label="Next">
                                                Next
                                            </Link>
                                        </li>

                                    </ul>
                                </nav>
                            </div>
                        </div>  
                    </div> 
                )
            } 


        </section>
    )
}
 