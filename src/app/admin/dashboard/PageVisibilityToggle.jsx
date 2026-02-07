'use client';

import { Switch } from 'antd';
import Swal from 'sweetalert2';
import { useState } from 'react';

export default function PageVisibilityToggle({ slug, isVisible }) {
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState(!!isVisible);
    
  const handleToggleVisibility = async () => { 
    
    const result = await Swal.fire({
      title: `Are you sure you want to ${checked ? 'hide' : 'show'} this page?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, do it!',
      cancelButtonText: 'Cancel',
      customClass: {
        title: 'swal-title-md',
        customClass: {
                title: 'swal-title-md',  
                htmlContainer:'swal-body-md'
            },
      },
    }); 
    
    if (!result.isConfirmed) return;

    try {
      setLoading(true);
      const response = await fetch(`/api/pages/${slug}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.NEXT_PUBLIC_ADMIN_API_KEY,
        },
          body: JSON.stringify({ is_visible: checked ? 0 : 1 }),
      });

      if (!response.ok) throw new Error('Failed to toggle visibility');
         const data = await response.json(); 
         if (typeof data.is_visible !== 'undefined') {
          setChecked(!!data.is_visible);
         
        } else { 
          setChecked(prev => !prev);
        }

      console.log(data, 'response')
      Swal.fire({
        icon: 'success',
        title: `Page is now ${checked ? 'hidden' : 'visible'}`,
        timer: 1500,
        showConfirmButton: false,
        customClass: {
          title: 'swal-title-md',
        },
      });
 
      
    } catch (err) {
      console.error('Toggle failed:', err);
      Swal.fire({
        icon: 'error',
        title: 'Toggle failed',
        text: 'Please try again.',
      });
    }finally{
      setLoading(false);
    }
  };

  return (
      <div className='d-flex gap-2 justify-content-center align-items-center' style={{width:'100px'}}>
          <span>
               <Switch 
                  checked={checked}
                  loading={loading} 
                   onChange={handleToggleVisibility}
              />
          </span>
          <span style={{ fontSize: "14px", fontWeight: "500" }}>
                {checked ? "Show" : "Hide"}
           </span>
      </div>
  );
}
