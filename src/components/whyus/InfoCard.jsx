"use client"
import React, { useRef } from 'react';
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";
import styles from "./whyUS.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';
const InfoCard = ({ classNameContainer, InfoCardData, imgClass, style, swiperClass, swiperStyle, controlClass }) =>
{
    const swiperRef = useRef(null);
    const { fadeDown } = useAnimationContext();
    return (

        <>
            <MotionWrapper className={`${classNameContainer} position-relative`} variant={fadeDown}>
                <Swiper
                    ref={swiperRef}
                    navigation={false}
                    modules={[Navigation]}
                    loop={true}
                    className="mySwiper"
                    spaceBetween={45}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },

                        992: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {InfoCardData.map((el, index) => (
                        <SwiperSlide key={index} className={swiperClass} style={swiperStyle ? swiperStyle : { height: "400px" }}>
                            <div className={`padding2rem borderRadius20 text-center h-100
                                         ${el.bgColor} ${el.color} ${styles.infoCard}`}
                            >
                                {el.image && (
                                    <div className="mb-4">
                                        <Image
                                            src={el.image}
                                            width={50} height={50}
                                            alt={el.title}
                                            className={imgClass ? imgClass : null}
                                            style={style}
                                        />
                                    </div>
                                )}
                                <h5 className="">{el.headings}</h5>
                                <p> {el.title} </p>
                                {el.bolds && <p><strong>{el.bolds}</strong></p>}
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>

                <button className={`left-0 arrows ${controlClass}`} type='button' onClick={() => swiperRef.current.swiper.slidePrev()} >
                    <IoIosArrowBack />
                </button>

                <button className={`right-0 arrows ${controlClass}`} onClick={() => swiperRef.current.swiper.slideNext()}>
                    <IoIosArrowForward />
                </button>
            </MotionWrapper>

        </>


    )
}
export default InfoCard;

