
'use client';
import { useEffect, useState } from 'react';
import { Switch, Modal, message } from 'antd';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import Link from 'next/link';
export default function TeoraHub() {
  const [documents, setDocuments] = useState([]);
  const [label, setLabel] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLabel, setNewLabel] = useState('');
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(true); 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [docsRes, labelRes] = await Promise.all([
        fetch('/api/teora/documents'),
        fetch('/api/teora/settings'),
      ]);
      const [docs, labelData] = await Promise.all([
        docsRes.json(),
        labelRes.json(),
      ]);
      setDocuments(docs);
      setLabel(labelData.label_text);
      setNewLabel(labelData.label_text); 
      setVisible(labelData.is_visible); 
    } catch (err) {
      message.error('Failed to fetch data.');
    }
  };

  const handleUpload = async (e) => {
     e.preventDefault(); 

     if (!file) return Swal.fire('No file', 'Please select a file to upload.', 'warning'); 
     
     if (file.type !== 'application/pdf') {
        return Swal.fire('Invalid file', 'Only PDF files are allowed.', 'error');
     }
    const confirm = await Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to upload this document?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, upload it!',
        cancelButtonText: 'Cancel',
        customClass: {
            title: 'swal-title-md',
            htmlContainer:'swal-body-md'
        }
    });
    if(!confirm.isConfirmed) return; 
    const formData = new FormData();
    formData.append('file', file);

    setIsLoading(true);
    const res = await fetch('/api/teora/documents', {
      method: 'POST',
      body: formData,
    });

    setIsLoading(false);
    if (res.ok) {
        Swal.fire({
            icon: 'success',
            title: 'Uploaded!',
            text: 'Your document has been uploaded.',
            customClass: {
                 title: 'swal-title-md',
                 htmlContainer:'swal-body-md'
            },
        });
      setFile(null);
      fetchData();
    } else {
       Swal.fire({
            icon: 'error',
            title: 'Upload Failed',
            text: 'Something went wrong.',
            customClass: {
              title: 'swal-title-md',
              htmlContainer:'swal-body-md'
            },
        });
    }
  };

  const handleDelete = async (id) => {
     const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'This will permanently delete the document.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel',
        customClass: {
            title: 'swal-title-md',
            htmlContainer:'swal-body-md'
        }
    });

    if(result.isConfirmed){
        const res = await fetch(`/api/teora/documents?id=${id}`, {
            method: 'DELETE',
        });
        if (res.ok) {
            await fetchData();
            Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: 'The document has been removed.',
                customClass: {
                    title: 'swal-title-md',
                    htmlContainer:'swal-body-md'
                },
            });
        } else {
           Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to delete document.',
                customClass: {
                  title: 'swal-title-md',
                  htmlContainer:'swal-body-md'
                },
            });
        }
    }
    
  };

  const handleSetActive = async (id) => {
    const res = await fetch('/api/teora/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'active', id }),
    });
    if (res.ok) {
      fetchData();
    } else {
      message.error('Failed to set active document');
    }
  };

  const handleUpdateLabel = async () => {

      if (!newLabel.trim()) {
        return Swal.fire({
            icon: 'warning',
            title: 'Empty Label',
            text: 'Please enter a label before submitting.',
            customClass: {
                title: 'swal-title-md',
                htmlContainer:'swal-body-md'
            },
        });
    }

    const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'This will update the Teora Hub label.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, update it!',
            cancelButtonText: 'Cancel',
            customClass: {
                 title: 'swal-title-md',
                 htmlContainer:'swal-body-md'
          },
    });

    if (!result.isConfirmed) return;

    const res = await fetch('/api/teora/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'label', label: newLabel }),
    });

    if (res.ok) {
     Swal.fire({
            icon: 'success',
            title: 'Label Updated!',
            text: 'Teora Hub label has been successfully updated.',
            customClass: {
                title: 'swal-title-md',
                htmlContainer:'swal-body-md'
            },
        });
      setLabel(newLabel);
      setIsModalOpen(false);
    } else {
          Swal.fire({
            icon: 'error',
            title: 'Update Failed',
            text: 'Failed to update the label.',
            customClass: {
                title: 'swal-title-md',
                htmlContainer:'swal-body-md'
            },
        });
    }
  };

  return (
    <section>
      <h4 className="heading_titles adminh4 purpleColor mb-3">Teora Hub Documents</h4>
      <div className="card card_container">
        <div className="row">
          <div className="col-md-6 col-12">
            <form onSubmit={handleUpload}>
              <div className="formcontrol">
                <label className="w-100 fw-bold mb-2">PDF Upload</label>
                <input
                  type="file"
                  className="form-input"
                  accept="application/pdf"
                  onChange={(e) => setFile(e.target.files[0])}
                  required 
                />
              </div>
              <button
                type="submit"
                className="submit_button_admin"
                disabled={isLoading}
              >
                {isLoading ? 'Uploading...' : 'Submit'}
              </button>
            </form>
          </div>

          <div className="col-md-6 col-12">
            <div className="d-flex justify-content-end align-items-center gap-3 ">
              <button
                type="button"
                className="teora-hub-btn"
                onClick={() => setIsModalOpen(true)}
              >
                Change {newLabel} Text
              </button> 
               <div className="d-flex gap-2 purpleColor" style={{ width: "110px" }}>
                    <Switch
                        checked={visible}
                        onChange={async (checked) => {
                            const result = await Swal.fire({
                                title: `Are you sure?`,
                                text: `This will ${checked ? 'show' : 'hide'} the ${label} button in the UI.`,
                                icon: 'question',
                                showCancelButton: true,
                                confirmButtonText: 'Yes, do it',
                                cancelButtonText: 'Cancel',
                                customClass: {
                                    title: 'swal-title-md',
                                    htmlContainer:'swal-body-md'
                                },
                            });

                            if (!result.isConfirmed) return;

                            setVisible(checked);

                            const res = await fetch('/api/teora/settings', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    type: 'visibility',
                                    visible: checked,
                                }),
                            });

                            if (res.ok) {
                                Swal.fire({
                                    icon: 'success',
                                    title: checked ? 'Button Visible' : 'Button Hidden',
                                    text: `The ${label} button is now ${checked ? 'visible' : 'hidden'}.`,
                                    customClass: {
                                      title: 'swal-title-md',
                                      htmlContainer:'swal-body-md'
                                    },
                                });
                            } else {
                              Swal.fire({
                                    icon: 'error',
                                    title: 'Update Failed',
                                    text: 'Could not update visibility.',
                                    customClass: {
                                      title: 'swal-title-md',
                                      htmlContainer:'swal-body-md'
                                    },
                                });
                            }
                        }}
                        /> 
                        <span style={{ fontSize: "14px", fontWeight: "500" }}>
                                {visible ? 'Hide' : 'Show'}
                        </span>
                </div>

            </div>
          </div>
        </div>
      </div>
      <div className="card card_container mt-3">
        <h4 className="heading_titles purpleColor adminh4">PDF List</h4>
        <div className="card-body table-responsive">
          <table className="table tables_style">
            <thead>
              <tr>
                <th>#</th>
                <th style={{ minWidth: '120px' }}>URL</th>
                <th style={{ minWidth: '150px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {documents.length === 0 ? (
                <tr>
                  <td colSpan={3} className="text-center">
                    No documents found.
                  </td>
                </tr>
              ) : (
                documents.map((doc, index) => (
                  <tr key={doc.id}>
                    <td>{index + 1}</td>
                    <td>
                      <Link href={doc.file_url} target="_blank">
                        {doc.file_name}
                      </Link>
                    </td>
                    <td>
                      <div className="d-flex gap-2 justify-content-center">
                        <span
                          className="delete_menu"
                          onClick={() => handleDelete(doc.id)}
                          style={{ cursor: 'pointer' }}
                        >
                          <RiDeleteBin6Line />
                        </span>

                          <Switch
                                checked={!!doc.is_active}
                                onChange={async () => {
                                    if (!doc.is_active) {
                                        const result = await Swal.fire({
                                            title: 'Are you sure?',
                                            text: "Do you want to make this the active document?",
                                            icon: 'warning',
                                            showCancelButton: true,
                                            confirmButtonText: 'Yes, activate it!',
                                            cancelButtonText: 'Cancel',
                                            customClass: {
                                                title: 'swal-title-md',
                                                htmlContainer:'swal-body-md'
                                            }
                                        });

                                        if (result.isConfirmed) {
                                            await handleSetActive(doc.id);
                                            Swal.fire({
                                                icon: 'success',
                                                title: 'Activated!',
                                                text: 'The document has been set as active.',
                                                customClass: {
                                                    title: 'swal-title-md',
                                                    htmlContainer:'swal-body-md'
                                                },
                                            });
                                        }
                                    }
                                }}
                            />

                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        title={`Update ${newLabel} Label`}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleUpdateLabel}
        okText="Change"
      >
        <div className="formcontrol">
          <input
            type="text"
            placeholder="Teora Hub title"
            className="form-input w-100"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
          />
        </div>
      </Modal>
    </section>
  );
}

