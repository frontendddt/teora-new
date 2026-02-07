
"use client";
import Swal from 'sweetalert2';
import { useState } from "react";
import { Switch, Modal, Input } from "antd";
import { MdOutlineEditNote } from "react-icons/md";

export default function MenuCard({ section }) {
  const [links, setLinks] = useState(section?.links || []);
  const [editingLink, setEditingLink] = useState(null);
  const [editedLabel, setEditedLabel] = useState("");

  const toggleVisibility = async (id, current) => {
    const newVisibility = !current; 

    try {
      const res = await fetch(`/api/footer-links/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_visible: newVisibility }),
      });

      if (!res.ok) throw new Error("Failed to toggle visibility");

      setLinks((prev) =>
        prev.map((l) => (l.id === id ? { ...l, is_visible: newVisibility } : l))
      );
    } catch (err) {
      console.error("Toggle failed:", err);
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
    try {
      const res = await fetch(`/api/footer-links/${editingLink.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label: editedLabel }),
      });

      if (!res.ok) throw new Error("Failed to update label");

      setLinks((prev) =>
        prev.map((l) => (l.id === editingLink.id ? { ...l, label: editedLabel } : l))
      );
      setEditingLink(null);
    } catch (err) {
      console.error("Label update failed:", err);
    }
  }; 
  return (
    <div className="parents">
        <div className="card card_container mt-2">
            <h4 className="heading_titles purpleColor adminh4">{section.title}</h4>
            <div className="card-body table-responsive">
                <table className="table tables_style">
                <thead>
                    <tr>
                    <th>#</th>
                    <th style={{minWidth:'120px'}}>Menu Name</th>
                    <th style={{minWidth:'100px'}}>URL</th>
                    <th>Visible / Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {links.map((link, idx) => (
                    <tr key={link.id}>
                        <td>{idx + 1}</td>
                        <td>{link.label}</td>
                        <td>{link.url}</td>
                        <td>
                        <div className="d-flex gap-3 justify-content-center align-items-center">
                            <span onClick={() => openEdit(link)} className="edit_menu">
                            <MdOutlineEditNote />
                            </span>
                            <div className="d-flex gap-2 purpleColor" style={{ width: "100px" }}>
                            <Switch
                                 checked={link.is_visible} 
                                 onChange={() => handleToggleConfirm(link.id, link.is_visible, link.label)}
                            />
                            <span style={{ fontSize: "13.5px", fontWeight: "500" }}>
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
            <Modal
                title="Edit Menu Label"
                open={!!editingLink}
                onOk={saveEdit}
                onCancel={() => setEditingLink(null)}
            >
                <Input value={editedLabel} onChange={(e) => setEditedLabel(e.target.value)} />
            </Modal>
        </div> 
    </div>
  );
}
