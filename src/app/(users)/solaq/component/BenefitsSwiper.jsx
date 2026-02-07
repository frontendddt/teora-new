"use client"
import styles from "../solaq.module.css";
import { ImageCustom } from "@/components/common/Custom";
import SwiperCustom from "@/components/common/SwiperCustom";
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { useState, useRef } from "react";
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";


const BenefitsSwiper = ({ data }) =>
{
    const swiperRef = useRef();
    const [currentSlide, setCurrentSlide] = useState(1);
    const { fadeDown } = useAnimationContext();
    return (
        <div className="position-relative">
            <MotionWrapper className="row" variant={fadeDown}>
                <div className="col-md-3 d-flex justify-content-center align-items-center mt-5">
                    <div className=' d-flex justify-content-end w100Mobile'>
                        <div className={`${styles.countscroll}`}>
                            <div
                                className='d-flex justify-content-center align-items-center text-primaryBeige'
                                onClick={() => swiperRef.current?.slidePrev()}
                                style={{ cursor: "pointer" }}
                            > <MdArrowBackIos size={24} /></div>

                            <div className={`d-flex justify-content-center align-items-center  ${styles.values}`}><span className="text-primaryBeige">{String(currentSlide).padStart(2, "0")}</span></div>
                            <div
                                className='d-flex justify-content-center align-items-center text-primaryBeige'
                                onClick={() => swiperRef.current?.slideNext()}
                                style={{ cursor: "pointer" }}
                            ><MdArrowForwardIos size={24} /></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="col-md-3 col-sm-6"> </div>
                    <SwiperCustom
                        ref={swiperRef}
                        data={data}
                        slidesPerView={3.5}
                        spaceBetween={40}
                        loop={true}
                        centeredSlides={false}
                        breakpoints={{
                            0: { slidesPerView: 1.3 },
                            568: { slidesPerView: 1.5 },
                            768: { slidesPerView: 2.3 },
                            992: { slidesPerView: 3.5 },
                        }}
                        className={styles.swiper_wrraper}
                        onSlideChange={(swiper) =>
                        {
                            setCurrentSlide(swiper.realIndex + 1);
                        }}
                        renderSlide={(item, index) => (
                            <div className="padding_container" key={index}>
                                <div className={`m-auto ${styles.circalAria}`}>
                                    <ImageCustom
                                        src={`/icons/${item.icon}`}
                                        alt={item.description}
                                        className={styles.swipimg}
                                    />
                                </div>
                                <p className="text-primaryBeige text-center p-2 fw-300">
                                    {item.description}
                                </p>
                            </div>
                        )}
                    />
                </div>
                <div className={`rowsborders darkpurpolBg ${styles.rowfixed}`}> </div>
            </MotionWrapper>
        </div>
    )
}
export default BenefitsSwiper;