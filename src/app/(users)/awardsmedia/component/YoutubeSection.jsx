"use client";
import { useState } from "react";
import styles from "../award.module.css";
import { ImageCustom } from "@/components/common/Custom";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";
const videos = [
  {
    id: 1,
    title: "Her Scientific Work Has Been Published And Cited Many Times Online.",
    subtitle: "- Google Scholar",
    thumb: "/image/thumb1.webp",
    link: "https://youtube.com/video1",
  },
  {
    id: 2,
    title: "Co-Authored A Paper In Acs Nano, Jan 2025",
    subtitle:
      "Immobile Integrin Signaling Transit and Relay Nodes Organize Mechanosignaling...",
    thumb: "/image/thumb2.webp",
    link: "https://youtube.com/video2",
  },
  {
    id: 3,
    title: "Co-Authored Paper Titled",
    subtitle:
      "Intrinsic self-organization of integrin nanoclusters... Nov 2023",
    thumb: "/image/thumb3.webp",
    link: "https://youtube.com/video3",
  },
];

const YoutubeSection = () => {
  const [activeVideo, setActiveVideo] = useState(videos[0]);
const { fadeLeft, fadeDown } = useAnimationContext();

  return (
    <div className="container">
      <div className="row">
      
        <MotionWrapper className="col-lg-7 col-md-6" variant={fadeLeft}>
        
          <div className={`position-relative ${styles.youtubes}`}>
            <ImageCustom src="/image/mobile-img.webp" alt="youtube frame" /> 
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "78%",
                height: "90%",
              }}
            >
              <Link href={activeVideo.link} target="_blank">
                <ImageCustom src={activeVideo.thumb} alt="video thumbnail" />
              </Link>
            </div>
          </div>

          <h3 className="text-primaryBeige p-all">
            TiE Bangalore “Founder’s Frequency”: Interview with Dr. Rishita Changede
          </h3>
        </MotionWrapper>

       
        <div className="col-lg-5 col-md-6">
          <h2 className="mt-4 mb-4 text-primaryBeige">Publications</h2>

          {videos.map((item, index) => (
            <MotionWrapper  key={index} variant={fadeDown}>
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveVideo(item)}
                className={`mb-3 ${activeVideo ? 'mutedPurpleBg' : ''} ${styles.aboutCardBox}`}
              >
                <div className="d-flex">
                  <div>
                    <h6 className={`text-start ${styles.aboutCardtext}`}>
                      {item.title}
                    </h6>
                    <div className={`text-start ${styles.asiaOne}`}>
                      {item.subtitle}
                    </div>
                  </div>

                  <div
                    style={{ width: "150px" }}
                    className="d-flex justify-content-end align-items-end"
                  >
                    <span className="round_arrow hovers d-flex justify-content-center align-items-center">
                      <FaLongArrowAltRight className={styles.arrows} />
                    </span>
                  </div>
                </div>
              </button>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YoutubeSection;