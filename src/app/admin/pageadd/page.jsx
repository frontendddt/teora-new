 
'use client';
import dynamic from 'next/dynamic'; 
const MyEditor = dynamic(() => import('@/component_admin/MyEditor'), { ssr: false }); 
import { MdOutlineEditNote } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
 
const selectedMenu = [ 
     { label: 'About', value: 'about' },
    { label: 'Why Us', value: 'whyus' },
    { label: 'SOLAQ', value: 'solaq' },
    { label: 'Solutions', value: 'solutions' },
    { label: 'Contact', value: 'contact' },
    { label: 'Awards & Media', value: 'awardsmedia' },
];

const PageAdd = () =>
{   
    
    const [pageTitle, setPageTitle] = useState('');
    const [metaTitle, setMetaTitle] = useState('');
    const [editorData, setEditorData] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [selected, setSelected] = useState('about');
    const [bannerFile, setBannerFile] = useState(null);
    const [footerOptions, setFooterOptions] = useState({
        footerNavigation: false,
        footerSolution: false,
        footerAboutus: false,
    }); 
    const [allPages, setAllPages] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editSlug, setEditSlug] = useState(null); 
    const fetchPages = async () => {
        const res = await fetch('/api/pages');
        const data = await res.json();
        setAllPages(data.pages || []); 
    };

    useEffect(() => {
        fetchPages();
    }, []);

    const handleFooterChange = (e) =>
    {
        const { id, checked } = e.target;
        setFooterOptions((prev) => ({
            ...prev,
            [id]: checked,
        }));
    };

    
    const handleBannerChange = (e) => setBannerFile(e.target.files?.[0]);  
    const uploadBanner = async () => {
        if (!bannerFile) return '';
        const formData = new FormData();
        formData.append('banner', bannerFile); 
        const res = await fetch('/api/upload/banner', { method: 'POST', body: formData });
        if (res.ok) {
            const { url } = await res.json();
            return url;
        }
        return '';
    };

    const handelSubmitNewPage = async (e) =>
    {
        e.preventDefault();

         const confirmResult = await Swal.fire({
                icon: 'question',
                title: isEditing ? 'Are you sure you want to update this page?' : 'Are you sure you want to create this page?',
                showCancelButton: true,
                confirmButtonText: isEditing ? 'Yes, Update it!' : 'Yes, Create it!',
                cancelButtonText: 'Cancel',
                customClass: {
                    title: 'swal-title-md',
                    htmlContainer:'swal-body-md'
                }
            });
        
        if(!confirmResult.isConfirmed) return; 

         const banner = await uploadBanner();
         const slug = pageTitle.trim().toLowerCase().replace(/\s+/g, '-');

           const payload = {
                title: pageTitle,
                slug,
                metaTitle,
                metaDescription,
                banner,
                content: editorData,
                menuPosition: selected,
                footerOptions
            };

         if(isEditing && editSlug){
            await fetch(`/api/pages/${editSlug}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json',
                      'x-api-key': 'TmX1nA7K9dZqFvP2uJh6RbEtLgWqCvY3'
                 },
                body: JSON.stringify(payload), 
            });
         }else{
                await fetch('/api/pages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });  
         } 
        await fetchPages(); 
        setPageTitle(''); setMetaTitle(''); setMetaDescription(''); setEditorData('');
        setBannerFile(null); setIsEditing(false); setEditSlug(null);
        await fetchPages(); 
          Swal.fire({
            icon: 'success',
            title: isEditing ? 'Page updated successfully' : 'Page created successfully',
            timer: 2000,
            showConfirmButton: false,
            customClass: {
                 title: 'swal-title-md',
                 htmlContainer:'swal-body-md'
            },
        });

    }
 
    const handleEdit = async (page) => {

        try{
               const res = await fetch(`/api/pages/${page.slug}`);
               const fullPage = await res.json();   

                setPageTitle(fullPage.title);
                setMetaTitle(fullPage.meta_title || '');
                setMetaDescription(fullPage.meta_description || '');
                setEditorData(fullPage.content || '');
                setSelected(fullPage.menu_position);
                setFooterOptions({
                    footerNavigation: fullPage.footer_navigation === 1,
                    footerSolution: fullPage.footer_solution === 1,
                    footerAboutus: fullPage.footer_aboutus === 1,
                });
                setIsEditing(true);
                setEditSlug(fullPage.slug); 
             
        }catch(error){
              console.error("Failed to load page for editing", error);
              Swal.fire({
                icon: 'error',
                title: 'Failed to load page details',
                text: 'Try again later.',
                 customClass: {
                  title: 'swal-title-md', 
                  htmlContainer:'swal-body-md' 
               },
            });
        } 
      
    };
 
    const handleDelete = async (slug) => { 
       const result = await Swal.fire({
        title: 'Are you sure?',
        text: "This page will be permanently deleted!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
        customClass: {
                title: 'swal-title-md',  
                htmlContainer:'swal-body-md'
            },
        });

        if (!result.isConfirmed) return;
        await fetch(`/api/pages/${slug}`, { 
            method: 'DELETE',
            credentials: 'include', 
         });
        await fetchPages();
        Swal.fire({
            icon: 'success',
            title: 'Page deleted!',
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                title: 'swal-title-md',  
                htmlContainer:'swal-body-md'
            },
        });
    }; 
    const handalCleare = async () =>{
          setPageTitle(''); setMetaTitle(''); setMetaDescription(''); setEditorData('');
          setBannerFile(null); setIsEditing(false); setEditSlug(null);
         await fetchPages();
    } 
    

    return (
        <>
            <section>
                <h4 className="heading_titles purpleColor adminh4">New Page Create</h4>
                <div className="card card_container">
                    <form onSubmit={handelSubmitNewPage}>
                        <div className="row"> 

                            <div className="col-sm-6">
                                <div className="formcontrol ">
                                    <label>Page title</label>
                                    <input type="text"
                                        className="form-input"
                                        placeholder="Page title...! "
                                        value={pageTitle}
                                        onChange={(e) => setPageTitle(e.target.value)}
                                        required
                                    ></input>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="formcontrol">
                                    <label>Page Banner</label>
                                    <input type="file"
                                        accept=".webp,.png,.jpg,.jpeg"
                                        className="form-input"
                                        placeholder="page banner"
                                        onChange={handleBannerChange}
                                    ></input>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="formcontrol">
                                    <label>Meta Title</label>
                                    <input type="text"
                                        className="form-input"
                                        placeholder="Add Meta Title"
                                        value={metaTitle}
                                        onChange={(e) => setMetaTitle(e.target.value)}
                                        required
                                    ></input>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                 <div className="formcontrol ">
                                    <label>Meta Description</label>
                                    <textarea className="form-input"
                                        placeholder="Meta Description"
                                        value={metaDescription}
                                        onChange={(e) => setMetaDescription(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                            </div> 

                            <div className="col-md-12">
                                <h6 className="purpleColor mb-3">Description</h6> 
                                <MyEditor editorData={editorData} setEditorData={setEditorData} />  
                            </div>

                            <div className="col-12">
                                <div className="row mt-4">
                                    <div className="col-6">
                                        <h6 className="purpleColor mb-3 adminh6">Select Menu Position</h6>
                                        {
                                            selectedMenu.map((menu, index) => (
                                                <div className="form-check mt-2 adminLabel" key={index}>
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="menuPosition"
                                                        id={menu.value}
                                                        value={menu.value}
                                                        checked={selected === menu.value}
                                                        onChange={() => setSelected(menu.value)}
                                                    />
                                                    <label className="form-check-label" htmlFor={menu.name}>
                                                        {menu.label}
                                                    </label>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className="col-6 adminLabel">
                                        <h6 className="purpleColor mb-3 adminh6">Select Footer Position</h6>
                                        <div className="form-check form-switch mt-2">
                                            <input className="form-check-input" type="checkbox"
                                                role="switch" id="footerNavigation"
                                                checked={footerOptions.footerNavigation}
                                                onChange={handleFooterChange}
                                            ></input>
                                            <label className="form-check-label" htmlFor="footerNavigation">Navigation</label>
                                        </div>

                                        <div className="form-check form-switch mt-2">
                                            <input className="form-check-input" type="checkbox"
                                                role="switch" id="footerSolution"
                                                checked={footerOptions.footerSolution}
                                                onChange={handleFooterChange}
                                            ></input>
                                            <label className="form-check-label" htmlFor="footerSolution">Solutions </label>
                                        </div>

                                        <div className="form-check form-switch mt-2">
                                            <input className="form-check-input" type="checkbox"
                                                role="switch" id="footerAboutus"
                                                checked={footerOptions.footerAboutus}
                                                onChange={handleFooterChange}
                                            ></input>
                                            <label className="form-check-label" htmlFor="footerAboutus">About Us </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 d-flex gap-3 justify-content-end mt-4">
                                <button type="submit" className="submit_button_admin">
                                    {isEditing ? 'Update' : 'Create Page'}
                                </button>

                                 <button type="button" className="clear_button_admin"
                                  onClick={handalCleare}
                                 >
                                    Clear
                                </button>

                                {isEditing && (
                                    <button
                                        type="button"
                                        className="clear_button_admin ms-3"
                                        onClick={() => {
                                            setIsEditing(false);
                                            setEditSlug(null);
                                            setPageTitle('');
                                            setMetaTitle('');
                                            setMetaDescription('');
                                            setEditorData('');
                                            setFooterOptions({
                                                footerNavigation: false,
                                                footerSolution: false,
                                                footerAboutus: false,
                                            });
                                         }}
                                    >
                                      Cancel Edit
                                    </button>
                                    )}
                            </div>
                        </div>
                    </form>
                </div>


                 <div className="card card_container mt-3">
                        <h4 className="heading_titles purpleColor adminh4 adminh4">New Pages</h4>
                        <div className="card-body table-responsive">
                          <table className="table tables_style">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th style={{minWidth:'120px'}}>Title</th>
                                <th style={{minWidth:'120px'}}>Menu position</th> 
                                <th style={{minWidth:'150px'}}>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                                   {allPages.map((page, index) => (
                                        <tr key={page.slug}>
                                            <td>{index + 1}</td>
                                            <td>{page.title}</td>
                                            <td>{page.menu_position}</td>
                                            <td>
                                                <div className="d-flex gap-3 justify-content-center align-items-center">
                                                    <span className="edit_menu" onClick={() => handleEdit(page)}>
                                                        <MdOutlineEditNote />
                                                    </span>
                                                    <span className="delete_menu" onClick={() => handleDelete(page.slug)}>
                                                        <RiDeleteBin6Line />
                                                    </span> 
                                                </div>
                                            </td>
                                        </tr>
                                    ))} 
                             
                            </tbody>
                          </table>
                        </div>
                  </div>

            </section>
        </>
    )
}
export default PageAdd;