
'use client';
import dynamic from 'next/dynamic';
const MyEditor = dynamic(
  () => import('@/component_admin/MyEditor'),
  { ssr: false }
);

import { MdOutlineEditNote } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from 'react';
import { Switch } from 'antd';
import Swal from 'sweetalert2';

const JobPost = () =>
{

  const [jobs, setJobs] = useState([]);
  const [jobEdit, setJobEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [address, setAddress] = useState('');
  const [shift, setShift] = useState('');
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');
  const [description, setDescription] = useState('');
  const generateSlug = (text) =>
  {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
  };
  useEffect(() =>
  {
    if (!jobEdit)
    {
      setSlug(generateSlug(title));
    }
  }, [title]);
  const fetchJobs = async () =>
  {
    const res = await fetch('/api/jobs');
    const data = await res.json();
    setJobs(data);
  };

  useEffect(() =>
  {
    fetchJobs();
  }, []);
  const clearForm = () =>
  {
    setTitle('');
    setSlug('');
    setAddress('');
    setShift('');
    setMinSalary('');
    setMaxSalary('');
    setDescription('');
    setJobEdit(false);
    setEditId(null);
  };
  const handleSubmit = async (e) =>
  {
    e.preventDefault();

    if (!title || !slug || !address || !shift || !minSalary || !maxSalary)
    {
      Swal.fire('Error', 'All fields are required', 'error');
      return;
    }

    const payload = {
      title,
      slug,
      address,
      shift,
      min_salary: minSalary,
      max_salary: maxSalary,
      description,
    };

    if (jobEdit) payload.id = editId;

    const confirm = await Swal.fire({
      title: jobEdit ? 'Update Job?' : 'Create Job?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: jobEdit ? 'Update' : 'Create',
    });

    if (!confirm.isConfirmed) return;

    await fetch('/api/jobs', {
      method: jobEdit ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    Swal.fire(
      'Success',
      jobEdit ? 'Job Updated Successfully' : 'Job Created Successfully',
      'success'
    );

    clearForm();
    fetchJobs();
  };

  const handleEdit = (job) =>
  {
    setJobEdit(true);
    setEditId(job.id);
    setTitle(job.title);
    setSlug(job.slug);
    setAddress(job.address);
    setShift(job.shift);
    setMinSalary(job.min_salary);
    setMaxSalary(job.max_salary);
    setDescription(job.description);
  };
  const deleteJob = async (id) =>
  {
    const confirm = await Swal.fire({
      title: 'Delete Job?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      customClass: {
        title: 'swal-title-md',
        htmlContainer: 'swal-body-md'
      },
    });

    if (!confirm.isConfirmed) return;

    await fetch('/api/jobs', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });

    Swal.fire('Deleted', 'Job deleted successfully', 'success');
    fetchJobs();
  };
  const toggleJob = async (job) =>
  {
    const confirm = await Swal.fire({
      title: job.is_active ? 'Disable Job?' : 'Enable Job?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: job.is_active ? 'Disable' : 'Enable',
      customClass: {
        title: 'swal-title-md',
        htmlContainer: 'swal-body-md'
      },
    });

    if (!confirm.isConfirmed) return;

    await fetch('/api/jobs', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...job,
        is_active: job.is_active ? 0 : 1,
      }),
    });

    fetchJobs();
  };

  return (
    <section>

      <h4 className="heading_titles purpleColor adminh4">Job Post</h4>
      <div className="card card_container">
        <form onSubmit={handleSubmit}>
          <div className="row">

            <div className="col-md-4">
              <div className="formcontrol">
                <label>Job Title <span className="darkRedColor">*</span></label>
                <input
                  className="form-input"
                  placeholder='Job Title'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="formcontrol">
                <label>Slug <span className="darkRedColor">*</span></label>
                <input
                  className="form-input"
                  placeholder='Slug'
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="formcontrol">
                <label>Job Address <span className="darkRedColor">*</span></label>
                <input
                  className="form-input"
                  placeholder='Job Address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="formcontrol">
                <label>Job Shift <span className="darkRedColor">*</span></label>
                <select value={shift} onChange={(e) => setShift(e.target.value)} required>
                  <option value="" disabled>Select Shift</option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="night-shift">Night Shift</option>
                </select>
              </div>
            </div>

            <div className="col-md-4">
              <div className="formcontrol">
                <label>Min Salary <span className="darkRedColor">*</span></label>
                <input
                  type="number"
                  className="form-input"
                  placeholder='Min Salary'
                  value={minSalary}
                  onChange={(e) => setMinSalary(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="formcontrol">
                <label>Max Salary <span className="darkRedColor">*</span></label>
                <input
                  type="number"
                  className="form-input"
                  placeholder='Max Salary'
                  value={maxSalary}
                  onChange={(e) => setMaxSalary(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="formcontrol">
                <label className="purpleColor mb-2">
                  Description <span className="darkRedColor">*</span>
                </label>

                <MyEditor
                  editorData={description}
                  setEditorData={setDescription}
                />

              </div>
            </div>

            <div className="col-12 d-flex justify-content-end mt-3 align-items-center">
              <button type="submit" className="submit_button_admin ms-3">
                {jobEdit ? 'Update Job' : 'Create Job'}
              </button>

              <button
                type="button"
                className="clear_button_admin ms-3"
                onClick={clearForm}
              >
                Clear
              </button>

              {jobEdit && (
                <button
                  type="button"
                  className="clear_button_admin ms-3"
                  onClick={clearForm}
                >
                  Cancel Edit
                </button>
              )}
            </div>

          </div>
        </form>
      </div>
      <div className="card card_container mt-3">
        <h4 className="heading_titles purpleColor adminh4">Job Posts</h4>

        <div className="card-body table-responsive">
          <table className="table tables_style">
            <thead>
              <tr>
                <th>#</th>
                <th>Job Title</th>
                <th>Slug</th>
                <th>Job Address</th>
                <th>Salary Range</th>
                <th>Action</th>
                <th>Disable Job</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={job.id}>
                  <td>{index + 1}</td>
                  <td>{job.title}</td>
                  <td>{job.slug}</td>
                  <td>{job.address}</td>
                  <td>{job.min_salary} to {job.max_salary}</td>
                  <td>
                    <div className="d-flex gap-3 justify-content-center align-items-center">
                      <span className="edit_menu" onClick={() => handleEdit(job)}>
                        <MdOutlineEditNote />
                      </span>
                      <span className="delete_menu" onClick={() => deleteJob(job.id)}>
                        <RiDeleteBin6Line />
                      </span>
                    </div>
                  </td>
                  <td>
                    <Switch
                      checked={job.is_active === 1}
                      onChange={() => toggleJob(job)}
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

export default JobPost;
