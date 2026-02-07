
'use client';
import { useState } from 'react';
import Swal from 'sweetalert2';

const Videos = () =>{
  const [videoUrl, setVideoUrl] = useState(''); 
 
    const convertToEmbedUrl = (url) => {
    try {
      const urlObj = new URL(url);
      const videoId = urlObj.searchParams.get('v'); 
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      } 
      
      if (url.includes('youtube.com/embed/')) {
        return url;
      }

      return null;
    } catch (e) {
      return null;
    }
  }; 
    const handleSubmit = async (e) => {
      e.preventDefault(); 
      const embedUrl = convertToEmbedUrl(videoUrl);

      if (!embedUrl) {
         return Swal.fire({
              icon: 'error',
              title: 'Invalid YouTube URL',
              text: 'Please enter a valid YouTube link.',
              customClass: {
                  title: 'swal-title-md',  
                  htmlContainer:'swal-body-md'
              },
            });
      }
       const result = await Swal.fire({
          title: 'Are you sure?',
          text: 'This will update the video on the home page.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, update it!',
          cancelButtonText: 'Cancel',
          reverseButtons: true,
          customClass: {
                title: 'swal-title-md',  
                htmlContainer:'swal-body-md'
            },
        });

        if (!result.isConfirmed) {
          return;  
        }

      try {
        const res = await fetch('/api/teora/video', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            video_url: embedUrl,
            admin_key: process.env.NEXT_PUBLIC_ADMIN_API_KEY,
          }),
        });

        const data = await res.json();

        if (res.ok) {
           Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Video URL updated successfully!',
              customClass: {
                title: 'swal-title-md',  
                htmlContainer:'swal-body-md'
               },
            });
        } else {
             Swal.fire({
                icon: 'error',
                title: 'Update Failed',
                text: data.error || 'Failed to update video URL',
                customClass: {
                  title: 'swal-title-md',  
                  htmlContainer:'swal-body-md'
                },
              });
        }
      } catch (error) {
           Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while updating the video.',
                customClass: {
                    title: 'swal-title-md',  
                    htmlContainer:'swal-body-md'
                },
              });
      }
    };

    return(
        <section>
             <h4 className="heading_titles adminh4 purpleColor mb-3">Update URL</h4>
             <div className="card card_container">
                <form onSubmit={handleSubmit}>
                  <div className="col-12">      
                      <div className="">
                                <div className="formcontrol">
                                  <label className="w-100 fw-bold mb-2">URL</label>
                                  <input
                                      type="text"
                                      className="form-input"  
                                      value={videoUrl}
                                      onChange={(e) => setVideoUrl(e.target.value)}
                                      placeholder="https://www.youtube.com/embed/..."
                                      required 
                                  />
                              </div>
                              <button
                                  type="submit"
                                  className="submit_button_admin" >
                                  Update Video
                              </button> 
                      </div>
                        
                    </div>
                </form> 
             </div>
        </section>
    )
}
export default Videos;