"use client";

import React, { useState, useEffect } from "react";
import '@ant-design/v5-patch-for-react-19';
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation"; 
import Sidebar from "@/component_admin/Siderbar";
import BootstrapClient from "@/components/bootstrap/BootstrapClient";
import { CiLogout } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";

import { IoMdAdd  } from "react-icons/io";
import { PiSlidersHorizontal, PiYoutubeLogo  } from "react-icons/pi";
import { GrDocumentPerformance } from "react-icons/gr";
import { RiMenuSearchLine } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TbLogs } from "react-icons/tb";

 const adminNavbar = [
  {
    link: 'dashboard',
    menuname:'Dashboard',
    navicon: <IoMdAdd/>
  },
  {
    link: 'teora-hub',
    menuname:'Teora Hub',
    navicon: <IoDocumentTextOutline/>
  },
  {
    link: 'pageadd',
    menuname:'New Page Create',
    navicon: <IoMdAdd/>
  },
  {
    link: 'sliders',
    menuname:'Sliders',
    navicon: <PiSlidersHorizontal/>
  },
  {
    link: 'videos',
    menuname:'Video Update',
    navicon: <PiYoutubeLogo />
  },
  {
    link: 'header-menu',
    menuname:'Header Menu',
    navicon: <RiMenuSearchLine/>
   },
  {
    link: 'footer-menu',
    menuname:'Footer Menu',
    navicon: <RiMenuSearchLine/>
   },
  {
    link: 'job-post',
    menuname:'Job Post',
    navicon: <GrDocumentPerformance/>
   },
  {
    link: 'blog-post',
    menuname:'Blog Post',
    navicon: <TbLogs/>
   },

 ]

export default function AdminClientLayout({ children }) {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  const handleLogout = () => {
    signOut({ callbackUrl: "/admin/login" });
  };

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;
      setIsMobile(isNowMobile);
      setIsSidebarOpen(!isNowMobile); 
    };

    handleResize();  
       window.addEventListener("resize", handleResize);
       return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <>
      {!isLoginPage ? (
        <div className="main_wrapper"> 
         
            <aside className='left_sidebar purpleBg'
                style={{
                  width: isSidebarOpen ? '260px' : '50px',
                  position: isMobile ? 'fixed' : 'fixed', 
                  zIndex: isMobile && isSidebarOpen ? 99999 : 'auto',
                  top: 0,
                  left: 0,
                  height: '100%',
                  transition: 'all 0.3s ease-in-out',
                }}
              >
               <Sidebar isSidebarOpen={isSidebarOpen} adminNavbar={adminNavbar} toggleSidebar={toggleSidebar}/> 
            </aside>

           <div className="page-wrapper" 
                style={{
                    marginLeft: isMobile ? '50px' : isSidebarOpen ? '260px' : '50px',  
                    transition: 'margin-left 0.3s ease-in-out',
                }}
           >
            <div className="logout_header header_logos corporateBg d-flex justify-content-between" style={{zIndex:'999'}}>
                  
              <span className="sidemenu_btn" onClick={toggleSidebar}> 
                <RiMenu3Fill/> 
              </span>
                                  
              <button className="logout_admin" suppressHydrationWarning={true} type="button" onClick={handleLogout}>
                <CiLogout />
                <span>Logout</span>
              </button>
            </div>
            <div className="content-wrapper">{children}</div>
          </div>
        </div>
      ) : (
        <main>{children}</main>
      )}
      <BootstrapClient />
    </>
  );
}
