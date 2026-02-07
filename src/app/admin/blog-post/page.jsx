
 'use client';
import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
const MyEditor = dynamic(
  () => import('@/component_admin/MyEditor'),
  { ssr: false }
);

import { MdOutlineEditNote } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Switch } from 'antd';
import Swal from 'sweetalert2';

const initialFormState = {
    blog_title: "",
    short_description: "",
    slug: "",
    banner: null,
    description: "",
    meta_title: "",
    meta_description: "",
};

const BlogPost = () => {
    const [blogs, setBlogs] = useState([]);
    const [editBlog, setEditBlog] = useState(null);
    const [formData, setFormData] = useState(initialFormState);
    const fetchBlogs = async () => {
        try {
            const res = await fetch('/api/blogs');
            const data = await res.json();
            setBlogs(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);
    const formFields = [
        { label: 'Blog Title', name: 'blog_title', type: 'text', required: true },
        { label: 'Short Description', name: 'short_description', type: 'text', required: true },
        { label: 'Slug', name: 'slug', type: 'text', required: true }, 
        { label: 'Meta Title', name: 'meta_title', type: 'text', required: true },
        { label: 'Meta Description', name: 'meta_description', type: 'text', required: true },
    ];
    const handleChange = (e) => {
        const { name, type, value, files } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value
        }));
    };
    const resetForm = () => {
        setFormData(initialFormState);
        setEditBlog(null);
    };
    const handleSubmit = async (e) => {
    e.preventDefault();

    const confirm = await Swal.fire({
        title: editBlog ? 'Update this blog?' : 'Create new blog?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: editBlog ? 'Update' : 'Create'
    });

    if (!confirm.isConfirmed) return;

    try {
        if (editBlog) {
            const res = await fetch(`/api/blogs?id=${editBlog.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    is_active: 1
                })
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error);
            Swal.fire('Updated!', data.message, 'success');

        } else {
            const form = new FormData();

            Object.entries(formData).forEach(([key, value]) => {
                if (value !== null) form.append(key, value);
            });

            const res = await fetch('/api/blogs', {
                method: 'POST',
                body: form
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error);
            Swal.fire('Created!', data.message, 'success');
        }

        resetForm();
        fetchBlogs();

    } catch (err) {
        console.error(err);
        Swal.fire('Error!', err.message || 'Something went wrong', 'error');
    }
};

    const handleEdit = (blog) => {
        setEditBlog(blog);
        setFormData({
            blog_title: blog.blog_title,
            short_description: blog.short_description,
            slug: blog.slug,
            banner: blog.banner,
            description: blog.description,
            meta_title: blog.meta_title,
            meta_description: blog.meta_description,
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: 'Delete blog?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete'
        });

        if (!confirm.isConfirmed) return;

        try {
            await fetch(`/api/blogs?id=${id}`, { method: 'DELETE' });
            Swal.fire('Deleted!', 'Blog removed', 'success');
            fetchBlogs();
        } catch {
            Swal.fire('Error!', 'Delete failed', 'error');
        }
    };
    const toggleActive = async (blog) => {
        try {
            await fetch(`/api/blogs?id=${blog.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...blog, is_active: blog.is_active === 1 ? 0 : 1 })
            });
            fetchBlogs();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section>
            <h4 className="heading_titles purpleColor adminh4">Blog Post</h4>
            <div className="card card_container">
                <form onSubmit={handleSubmit}>
                    <div className="row">

                        {formFields.map((field) => (
                            <div className="col-md-4" key={field.name}>
                                <div className="formcontrol">
                                    <label>
                                        {field.label}
                                        {field.required && <span className="darkRedColor"> *</span>} 
                                    </label>
                                    <input
                                        type={field.type}
                                        name={field.name} 
                                        onChange={handleChange}
                                        className="form-input"
                                        value={formData[field.name] || ""} 
                                        placeholder={field.label}
                                        required={field.required}
                                    />
                                </div>
                            </div>
                        ))}
                         <div className="col-md-4">
                            <div className="formcontrol">
                                <label>
                                    Upload Banner
                                   <span className="darkRedColor"> *</span> 
                                </label>
                                <input
                                    type="file"
                                    name="banner"
                                    onChange={handleChange}
                                    accept=".jpg,.jpeg,.png,.webp" 
                                    className="form-input" 
                                    required={!editBlog}
                                />
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="formcontrol">
                                <label>Description <span className="darkRedColor">*</span></label> 

                                 <MyEditor
                                    editorData={formData.description}
                                    setEditorData={(data) =>
                                        setFormData(prev => ({ ...prev, description: data }))
                                    }
                                />
                            </div>
                        </div>

                        <div className="col-12 d-flex justify-content-end mt-3">
                            <button className="submit_button_admin ms-3">
                                {editBlog ? 'Update Blog' : 'Create Blog'}
                            </button>
                            <button type="button" className="clear_button_admin ms-3" onClick={resetForm}>
                                Clear
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="card card_container mt-3">
                <h4 className="heading_titles purpleColor adminh4">Blog Posts</h4>

                <div className="card-body table-responsive">
                    <table className="table tables_style">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Blog Title</th>
                                <th>Slug</th>
                                <th>Action</th>
                                <th>Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog, index) => (
                                <tr key={blog.id}>
                                    <td>{index + 1}</td>
                                    <td>{blog.blog_title.slice(0, 20)} {blog.blog_title.length > 20 ? '...' : ''}</td>
                                    <td> 
                                         {blog.slug.slice(0, 15)} {blog.slug.length > 15 ? '...' : ''}
                                    </td>
                                    <td>
                                        <div className="d-flex gap-3 justify-content-center">
                                            <span className="edit_menu" onClick={() => handleEdit(blog)}>
                                                <MdOutlineEditNote />
                                            </span>
                                            <span className="delete_menu" onClick={() => handleDelete(blog.id)}>
                                                <RiDeleteBin6Line />
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <Switch
                                            checked={blog.is_active === 1}
                                            onChange={() => toggleActive(blog)}
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
};

export default BlogPost;
