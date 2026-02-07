import { useState, useEffect, useRef, React } from "react";
import Styles from "../stickyAbout.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import SwiperControler from "@/components/common/SwiperControler";

const WhatWereBuildingSlider = ({ swiperData }) =>
{

    const [slideCounter, setSlideCounter] = useState(1);
    const swiperRef = useRef(null);
    useEffect(() =>
    {
        if (swiperRef.current)
        {
            setSlideCounter(swiperRef.current.realIndex + 1);
        }

    }, []);

    return (
        <>
            <div className={`slider-container`}>
                <div className="container">
                    <span className="rounded-pill buge-style buge8" >DISEASE + GROWTH MANAGEMENT IN AQUACULTURE & AGRICULTURE </span>
                </div>
                <div className="container d-flex justify-content-between align-items-center">
                    <div>
                        <h2 className="mt-1 h1500 text-primaryBeige"> WHAT WE’RE BUILDING </h2>
                    </div>
                    <SwiperControler
                        swiperRef={swiperRef}
                        slideCounter={slideCounter}
                    />
                </div>

                <div className="swiper-container swiperAbout">
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        spaceBetween={30}
                        slidesPerView={1.2}
                        centeredSlides={true}
                        loop={true}
                        initialSlide={0}
                        onSlideChange={(swiper) =>
                        {
                            setSlideCounter(swiper.realIndex + 1);
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            768: {
                                spaceBetween: 30
                            },
                            992: {
                                spaceBetween: 30
                            },

                        }}
                    >

                        <SwiperSlide>
                            <div className={`corporateBg borderRadius35 sliderHeight`}>
                                <div className="row h-100">
                                    <div className="col-md-9">
                                        <div className="swiper_content h-100 d-flex flex-column justify-content-between">

                                            <div className="col-12 purpleColor">
                                                <p><strong>01/05</strong></p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h5 className=" purpleColor mb-0"> Smart Biologics for Aquaculture</h5>
                                                    <img
                                                        src="/aboutAssets/icons/about-icon5.png"
                                                        alt="Smart Biologics for Aquaculture"
                                                        className="about_slickyimg"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <div className="row">
                                                    {[
                                                        {
                                                            icon1: "/icons/about-icon1.png",
                                                            icon2: "/icons/redgrowFish.png",
                                                            title: <>ShrimpGuard <sup>TM</sup> & FishGuard </>,
                                                            description: <span>
                                                                Designed for disease-prone ponds, proven across Asia. Protect against deadly viruses like WSSV, IMNV, SDDV, Vibrio etc. Just mix it in feed—no needles, no cold chain, no waste.
                                                                <strong> Up to 90% survival. Zero stress</strong>
                                                            </span>,
                                                        },
                                                        {
                                                            icon1: "/icons/about-icon2.png",
                                                            icon2: "/icons/growthfish.png",
                                                            title: "Fish Jumbo",
                                                            description:
                                                                <span>
                                                                    Growth-Boosting Nutrition for Fish. Bigger yields, shorter cycles—without hormones or chemicals. Increases .
                                                                    <strong> growth —up to 30% faster, with better FCR naturally. </strong>
                                                                    Works for Sea-bass, Pangasius, tilapia, trout & more.
                                                                </span>,
                                                        },
                                                    ].map((item, index) => (
                                                        <div className="col-md-6" key={index}>
                                                            <div className="d-flex">
                                                                <div className="fitwidth">
                                                                    <Image
                                                                        src={item.icon1}
                                                                        alt="Explore more"
                                                                        width={85}
                                                                        height={85}
                                                                        className="mb-3 swiper_imageIcon"
                                                                    />
                                                                    <Image
                                                                        src={item.icon2}
                                                                        alt="Growth-Boosting biologcs"
                                                                        width={85}
                                                                        height={85}
                                                                        className="mb-3 swiper_imageIcon"
                                                                    />
                                                                </div>

                                                                <div className={`w-100 purpleColor ${Styles.slideOne}`}>
                                                                    <p className="shrimpGuard text-primaryBeige text-center purpleBg lightblueColor">
                                                                        {item.title} <sup>TM</sup>
                                                                    </p>
                                                                    <p className="aboutslicky_info">
                                                                        {item.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>


                                                <div className="col-12 d-flex justify-content-end">
                                                    <Link className="linksElements" href="#"> Explore more <FaArrowRightLong className="arrawKey" /></Link>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-md-3">
                                        <div className={`position-relative ${Styles.slickyimage}`}>
                                            <Image
                                                src="/aboutAssets/about-slide1.png"
                                                alt="Rapid viral clearance"
                                                fill
                                                className="p-0 m-0"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                        {
                            swiperData.map((elements, index) => (
                                <SwiperSlide key={index}>
                                    <div className={`borderRadius35 sliderHeight ${elements.bgColor}`} >
                                        <div className="row h-100">

                                            <div className="col-md-9">
                                                <div className="swiper_content d-flex flex-column justify-content-between h-100">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="col-8 purpleColor">
                                                            <p className={` ${elements.color}`}><strong>0{index + 2}/0{swiperData.length + 2}</strong></p>
                                                            <h5 className={`  ${elements.color}`}> {elements.titles}</h5>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="row">

                                                            <div className="col-md-7">
                                                                <div className="d-flex">

                                                                    <div className={`w-100 ${elements.color}`}>
                                                                        <div className="d-flex align-items-center">
                                                                            <Image
                                                                                src={elements.miniicon}
                                                                                width={70}
                                                                                height={70}
                                                                                className="swiper_imageIcon"
                                                                                alt={elements.alt}
                                                                            />
                                                                            <div className={`shrimpGuard w-100 ${Styles.shrimpGuard1} ${elements.rowBg} ${elements.rowColor}`} style={{ height: '40px' }}>{elements.subtitle}</div>
                                                                        </div>
                                                                        <p className="aboutslicky_info p-2">
                                                                            {elements.text}
                                                                            <strong style={{ fontSize: '16px' }}>{elements.bold}</strong>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-5 d-flex justify-content-center">
                                                                <Image
                                                                    src={elements.img} alt={elements.alt}
                                                                    width={160}
                                                                    height={130}
                                                                    className="mb-1 md-mb-3 about_slickyimg" />
                                                            </div>

                                                        </div>

                                                        <div className="col-12 d-flex justify-content-end">
                                                            <Link className={`linksElements`} href="#"> {elements.linkName} <FaArrowRightLong className="arrawKey" /></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-3 p-0">
                                                <div className={`position-relative ${Styles.slickyimage}`}>
                                                    <Image
                                                        src={elements.mainimg}
                                                        alt={elements.bold}
                                                        fill
                                                        className="p-0 m-0"
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }


                        <SwiperSlide >
                            <div className={`borderRadius35 sliderHeight purpleBg`} >
                                <div className="row h-100">

                                    <div className="col-md-8">
                                        <div className="swiper_content d-flex flex-column justify-content-between h-100">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="col-8 text-primaryBeige">
                                                    <p><strong>05/05</strong></p>
                                                    <h5 className="text-primaryBeige"> <strong>SOLAQ™ The Platform Behind Every Product</strong> </h5>
                                                </div>
                                            </div>
                                            <div className={`w-100 text-primaryBeige`}>
                                                <p className="aboutslicky_info p-2" >
                                                    From pond to field to bowl—Teora fits every farm, everywhere, SOLAQ<sup>TM</sup> powers every
                                                    Teora product— AI-designed, naturally brewed, smartly delivered. Fast turnaround. Shelf-stable. Zero infrastructure.
                                                </p>

                                                <h5 className="fw-300">
                                                    NO ANTIBIOTICS. NO COLD CHAINS. JUST SMART, FAST, FARMER-READY BIOTECH
                                                </h5>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-md-4 h-100 p-0">
                                        <div className="h-100 d-flex align-items-center justify-content-center flex-column">
                                            <img
                                                src="/aboutAssets/platform.png"
                                                alt="NO ANTIBIOTICS. NO COLD CHAINS. JUST SMART, FAST, FARMER-READY BIOTECH."
                                            />
                                            <div className="col-12 d-flex justify-content-center mt-3">
                                                <Link className={`text-primaryBeige`} href="#"> Explore The Science <FaArrowRightLong className="arrawKey" /></Link>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

            </div>
        </>
    )
}
export default WhatWereBuildingSlider;