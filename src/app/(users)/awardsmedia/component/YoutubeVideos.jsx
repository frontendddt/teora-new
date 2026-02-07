"use client"
import { useState } from "react";
import { ImageCustom } from "@/components/common/Custom";
import styles from "../award.module.css"; 
import Link from "next/link";
const activeVideo = [
    {   
        label: "video 1",
        activeUrl: "https://youtu.be/TcpkwKy0Ya4?t=2399",
        thumbnail:"/video1_thumb.webp"
    },
    {   
        label: "video 2",
        activeUrl: "https://www.youtube.com/watch?v=85TWfbSfbg0&t=6s",
        thumbnail:"/video2_thumb.webp"
    },
    {
        label: "video 3",
        activeUrl: "https://www.youtube.com/watch?v=t962Vn9cYsU",
        thumbnail:"/video3_thumb.webp"
    }
]

const YoutubeVideos = () =>{
      const [currentVideo, setCurrentVideo] = useState(activeVideo[0]);
    return(
        <div className="container">
             <div className="row">
                <div className="col-md-8">

                     <div className={`position-relative ${styles.youtube_desctop}`} >
                        <ImageCustom src="/image/desktop-youtub.webp" alt="youtube frame" /> 
                        <div
                            style={{
                                position: "absolute",
                                top: "45%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                width: "92%",
                                height: "70%",
                            }}
                        >
                             <Link
                                href={currentVideo.activeUrl}
                                target="_blank"
                                rel="noopener noreferrer">
                                <ImageCustom src={`/image/${currentVideo.thumbnail}`} alt="video thumbnail" />
                            </Link>
                        </div>
                    </div> 

                  </div>
                  <div className="col-md-4 d-flex align-items-end justify-content-center">
                       <div className="videos-links pb-0 pb-sm-4">
                            <div className="d-flex flex-row gap-3 flex-sm-column gap-sm-0 justify-content-center">
                                <ImageCustom
                                    src="/image/youtube.png"
                                    alt="Podcasts & Interviews"
                                    style={{height:60, width: 70}}
                                />
                                 {activeVideo.map((video, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        className={`text-primaryBeige ${styles.videoBtn} ${currentVideo.label === video.label ? styles.active : ""}`}
                                        onClick={() => setCurrentVideo(video)}>
                                        {video.label}
                                    </button>
                                ))}
                            </div>
                       </div>
                  </div>
             </div>
        </div>
    )
}
export default YoutubeVideos;