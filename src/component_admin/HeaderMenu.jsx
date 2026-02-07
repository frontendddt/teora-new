 
"use client";
import Swal from 'sweetalert2';
import { useState } from "react";
import { MdOutlineEditNote } from "react-icons/md";
import {Switch, Modal, Input } from "antd";
 
export default function HeaderMenu({ sections }) {
  const [menuSections, setMenuSections] = useState(sections);
  const [editingLink, setEditingLink] = useState(null);
  const [editedLabel, setEditedLabel] = useState("");

  const toggleVisibility = async (id, current) => {
    const newVisible = !current;
    try{

     const res = await fetch(`/api/header-links/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ is_visible: newVisible }),
          });
         if (!res.ok) throw new Error("Failed to toggle visibility"); 
        setMenuSections((prev) =>
          prev.map((link) =>
            link.id === id
              ? { ...link, is_visible: newVisible }
              : {
                  ...link,
                  submenu: link.submenu?.map((sub) =>
                    sub.id === id ? { ...sub, is_visible: newVisible } : sub
                  ),
                }
          )
        );

    }catch(err){
      console.error(err);
    } 
  };
 
  const handleToggleConfirm = async (id, current, label) => {
    const result = await Swal.fire({
      title: `Are you sure you want to ${current ? 'hide' : 'show'} "${label}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, confirm',
      cancelButtonText: 'Cancel',
      customClass: {
        title: 'swal-title-md',
        htmlContainer:'swal-body-md'
      }
    });

    if (result.isConfirmed) {
      toggleVisibility(id, current);
    }
  }; 
  const openEdit = (link) => {
    setEditingLink(link);
    setEditedLabel(link.label);
  };

  const saveEdit = async () => {

    try{ 
        const res = await fetch(`/api/header-links/${editingLink.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ label: editedLabel }),
          });
         if (!res.ok) throw new Error("Failed to update label");

             setMenuSections((prev) =>
                prev.map((link) =>
                  link.id === editingLink.id
                    ? { ...link, label: editedLabel }
                    : {
                        ...link,
                        submenu: link.submenu?.map((sub) =>
                          sub.id === editingLink.id ? { ...sub, label: editedLabel } : sub
                        ),
                      }
                )
              );
          setEditingLink(null);

    }catch(err){
         console.error(err);
    }

    await fetch(`/api/header-links/${editingLink.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ label: editedLabel }),
    });
    setEditingLink(null);
  
  };

  return (
    <div className="parent"> 
      <div className="card card_container mt-3">
        <h4 className="heading_titles purpleColor adminh4">Header Menu</h4>
        <div className="card-body table-responsive">
          <table className="table tables_style">
            <thead>
              <tr>
                <th>#</th>
                <th style={{minWidth:'120px'}}>Menu Name</th>
                <th style={{minWidth:'100px'}}>URL</th>
                <th style={{minWidth:'170px'}}>Visible / Edit</th>
              </tr>
            </thead>
            <tbody>
              {menuSections.map((link, idx) => (
                <tr key={link.id}>
                  <td>{idx + 1}</td>
                  <td>{link.label}</td>
                  <td>{link.url}</td>
                  <td>
                    <div className="d-flex gap-3 justify-content-center align-items-center">
                      <span onClick={() => openEdit(link)} className="edit_menu">
                        <MdOutlineEditNote />
                      </span>
                      <div className="d-flex gap-2 purpleColor" style={{ width: "110px" }}> 
                         {
                         <Switch
                          checked={link.is_visible} 
                           onChange={() => handleToggleConfirm(link.id, link.is_visible, link.label)}
                        />
                        } 
                       
                        <span style={{ fontSize: "14px", fontWeight: "500" }}>
                          {link.is_visible ? "Show" : "Hide"}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> 
      <Modal
        title="Edit Menu Label"
        open={!!editingLink}
        onOk={saveEdit}
        onCancel={() => setEditingLink(null)}
      >
        <Input value={editedLabel} onChange={(e) => setEditedLabel(e.target.value)} />
      </Modal>
    </div>
  );
}
