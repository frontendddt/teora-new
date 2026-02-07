 "use client"
import Styles from "./header.module.css";
import Link from "next/link";
import { FileText, Search } from 'lucide-react';
 import { TiThMenu } from "react-icons/ti";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { usePathname } from "next/navigation";
const Header = () =>{ 
        const pathname = usePathname();
        const [navList, setNavList] = useState([]); 
        useEffect(() => {
            const fetchMenu = async () => {
                try {
                    const res = await fetch("/api/header");
                    const data = await res.json();
                    setNavList(data);
                } catch (err) {
                    console.error("Failed to load header menu:", err);
                }
            };

            fetchMenu();
        }, []); 
    const [label, setLabel] = useState('Teora Hub');  
    const [activeDoc, setActiveDoc] = useState(null);
    const [visible, setVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(false); 
        useEffect(() => {
            const offcanvasEl = document.getElementById("offcanvasNavbar");
            if (!offcanvasEl) return;
            const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
            const instance = bootstrap.Offcanvas.getInstance(offcanvasEl); 
            if (window.innerWidth < 992 && instance) {
                instance.hide();
                }
        }, [pathname]);  
         useEffect(() => {
            const checkMobile = () => setIsMobile(window.innerWidth <= 991);
            checkMobile(); 
            window.addEventListener("resize", checkMobile);
            return () => window.removeEventListener("resize", checkMobile);
        }, []); 
        useEffect(() => {
            async function fetchLabel() {
                try {
                    const res = await fetch('/api/teora/settings');
                    if (res.ok) {
                        const data = await res.json();
                        setLabel(data.label_text || 'Teora Hub');
                        setVisible(Boolean(data.is_visible));
                    }
                } catch (error) {
                    console.error('Failed to fetch label:', error);
                }
            }
            fetchLabel();
        }, []); 
        useEffect(() => {
            async function fetchActiveDoc() {
             try {
                const res = await fetch('/api/teora/documents');
                if (res.ok) {
                    const docs = await res.json();
                    const active = docs.find((doc) => doc.is_active === 1);
                    setActiveDoc(active || null);
                }
            } catch (error) {
                console.error('Failed to fetch documents:', error);
            }
            }
              fetchActiveDoc();
        }, []); 
        const handleDownload = () => {
            if (activeDoc && activeDoc.file_url) {
              window.open(activeDoc.file_url, '_blank');
            } else {  
               toast.warn('No active document available for download', {
                position: 'top-right', 
                theme: 'colored',
                style: { 
                    zIndex: 99999999, 
                    top: '80px',
                    background: '#C32B30',   
                    color: 'white',     
                    fontSize: '16px'  
                  },
                });
            }
        }; 
   return(
          <header className="sticky-top m-0 tectureBg" style={{ zIndex:'99999'}}>
               <div className={`${Styles.header_container}`}>
                     <nav className={`navbar navbar-expand-lg ${Styles.navvbarWidth}`}>
                        <div className={`container position-relative ${Styles.nav_container}`}>
                            <Link className="navbar-brand" href="/" style={{outline:'none'}}>  
                                <img src="/logo/teora-logo2.png" 
                                      alt="eora company logo"
                                      width={170}
                                      className="company_logo"
                                ></img>
                            </Link> 

                             <div className={`d-flex align-items-center ${Styles.navMenu} `}>
                                <span className="navbar-toggler navbar-menu"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                  <span className="d-flex gap-1 align-items-center purpleColor">
                                         <TiThMenu/>
                                          <span className="menuText">Menu</span>
                                  </span>
                               </span>
                                <div className="offcanvas offcanvas-end menu_sidebar" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                    <div className="offcanvas-header">
                                        <div className="offcanvas-title" id="offcanvasNavbarLabel">
                                                 <Link className="navbar-brand" href="/">  
                                                    <img src="/logo/teora-logo2.png" 
                                                        alt="eora company logo"
                                                        width={170}
                                                        className="company_logo"
                                                    ></img>
                                                </Link> 
                                        </div>
                                        <span type="button" className="btn-close closeBtns" data-bs-dismiss="offcanvas" aria-label="Close" style={{outline:'none'}}></span>
                                       
                                    </div>
                                    <div className="offcanvas-body">
                                        <ul className={`navbar-nav justify-content-end flex-grow-1 pe-3 ${Styles.navbar_list}`}> 
                                             {
                                                navList.map((item) => (
                                              
                                                        item.submenu?.length > 0 ? ( 
                                                            <li className={`nav-item  ${item.submenu[0].is_visible === 0 ? '' : `dropdown flex_wrap_nav ${!isMobile ? 'dropdown_hover' : '' }`}`} key={item.id}>  
                                                                <Link
                                                                    className={`nav-link ${item.submenu[0].is_visible === 0 ? '' : `${!isMobile ? 'dropdown-toggle' : ''} `}`} 
                                                                    href={item.navLink}   
                                                                    > 
                                                                    {item.navName} {item.has_sup ? <sup>™</sup> : ''}  
                                                                </Link>  
                                                                {item.submenu[0].is_visible != 0 &&
                                                                   <span  role="button" data-bs-toggle="dropdown" aria-expanded="false" className="mobile_only"><IoMdArrowDropdown/> </span>  
                                                                } 

                                                                <ul className={`dropdown-menu custom_dropdown ${isMobile ? 'w-100' : ''}`}>
                                                                    {item.submenu.map((subItem, subIndex) => { 
                                                                      if(subItem.is_visible === 1){
                                                                       return <li key={subIndex}>
                                                                                    <Link className="dropdown-item" href={subItem.link}>
                                                                                        {subItem.name}
                                                                                    </Link>
                                                                                </li>
                                                                        }
                                                                })}
                                                                </ul>
                                                            </li>
                                                        ) : (
                                                            <li className="nav-item" key={item.id}>
                                                                <Link className="nav-link" href={item.navLink}>
                                                                    {item.navName} {item.has_sup == 1 ? <sup>™</sup> : ''}
                                                                </Link>
                                                            </li>
                                                        )  
                                                ))}
                                                
                                        </ul>  
                                    </div> 
                                </div> 
                                <div className={`d-flex align-items-center ${Styles.teora_documents}`}>
                                   {visible &&(
                                         <button 
                                            className={` ${Styles.teora_hub}`} 
                                            onClick={handleDownload}
                                            type="button"
                                            title={activeDoc ? activeDoc.file_name : 'No active document'}
                                        >
                                            <FileText className={Styles.tora_hub_doc} /><span>{label}</span> 
                                        </button>
                                       )
                                    }
                                    <button className={`d-flex align-items-center justify-content-center ${Styles.header_search}`}>
                                        <span><Search strokeWidth={3}/></span>
                                    </button>
                                </div>
                                  
                             </div>

                        </div>
                    </nav> 
               </div>
          </header>
   )
}
export default Header;