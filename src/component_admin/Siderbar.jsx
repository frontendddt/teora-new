import Link from "next/link"; 
import { MdOutlineClose } from "react-icons/md";
const Sidebar = ({isSidebarOpen, adminNavbar, toggleSidebar}) =>{
    return(
        <>  
            <div className=" ">
                <div className={`corporateBg d-flex justify-content-center align-items-center adminheadrlogo`}>
                    {
                        isSidebarOpen ?
                           <img 
                                src="/logo/teora-logo2.png"
                                width={120}
                            /> :
                             <img
                                src="/favicon.png"
                                width={35}
                            />
                    }  
                    {isSidebarOpen ? <span className="closeAdminmenu" onClick={toggleSidebar}><MdOutlineClose/></span> : ''}
                    
                </div>

                <div className="sidebar_menu">
                    <ul className="dashboard_menu_list"> 
                        {
                           adminNavbar.map((items, index) =>(
                                <li key={index}>
                                    <Link href={`/admin/${items.link}`}>
                                            <div className={`d-flex gap-2 align-items-center admin-sidbar ${!isSidebarOpen ? 'justify-content-center' : '' }`}>
                                             {items.navicon}
                                             {isSidebarOpen ? <span>{items.menuname}</span> : ''}
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>  
            </div> 
        </>
    )
}
export default Sidebar;