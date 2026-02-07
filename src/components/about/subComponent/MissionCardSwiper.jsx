'use client'
import { useState } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";

export const MissionCardSwiper = ({
    missionCardSwiperData, heading, 
    styleHeading, controllerClass, 
    slickyHederClass, headingColor
}) => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const getSlideClass = (slideIndex) => {
        const total = missionCardSwiperData.length;
        const prev = (activeIndex - 1 + total) % total;
        const next = (activeIndex + 1) % total;

        if (slideIndex === activeIndex) return 'active-slide';
        if (slideIndex === prev) return 'prev-slide';
        if (slideIndex === next) return 'next-slide';
        return '';
    };
   const { fadeLeft } = useAnimationContext();
    return (
        <div>
            <style jsx>{` 
                .swiperContaiiners {
                    transition: transform 0.5s ease, filter 0.5s ease;
                }

                .active-slide {
                    transform: scale(1.1);
                    z-index: 2;
                }

                .prev-slide {
                    filter: grayscale(100%);
                    opacity: 0.7;
                    z-index: 1;
                }

                .next-slide {
                    opacity: 0.9;
                    z-index: 1;
                }
               
                @media (max-width: 768px){
                    .container-fluid{
                        width: 100% !important;
                    }
                }
                @media (max-width: 576px){
                    .p_elements{
                        font-size:15.5px!important;
                        font-weight:400!important;
                        line-height:22px!important;
                        padding: 0 5px !important;
                    }    
                    .h6_elements{
                        font-size:14px!important; 
                        line-height:18px!important;
                        padding: 0 5px !important;
                    }
                }
            `}</style>
 
            <div className="container animate-wrapper"  style={{...styleHeading}} >
                <div className={`d-flex justify-content-between align-items-center flex-wrap flex-sm-nowrap ${headingColor ? headingColor : 'purpleColor'}`}>
                    <MotionWrapper style={{ maxWidth: '800px' }} variant={fadeLeft}>
                     
                        <h2 className={`${slickyHederClass}`}>
                           {heading}
                        </h2>
                    </MotionWrapper>
                    <div className='w-100-576 mb-2 mb-sm-0  d-flex justify-content-end justify-content-sm-start'>
                        <div className={`countscroll borderColor ${controllerClass}`}>
                            <div
                                className='d-flex justify-content-center align-items-center'
                                style={{ cursor: "pointer" }}
                                onClick={() => swiperInstance.slidePrev()}
                            >
                                <MdArrowBackIos size={24} />
                            </div>

                            <div className="d-flex justify-content-center align-items-center values_border borderColor">
                                <span>{String(activeIndex + 1).padStart(2, '0')}</span>
                            </div>

                            <div
                                className='d-flex justify-content-center align-items-center'
                                style={{ cursor: "pointer" }}
                                onClick={() => swiperInstance.slideNext()}
                            >
                                <MdArrowForwardIos size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`container-fluid`} style={{ width: '94%' }}>
                 <div className="text-center purpleColor"
                    style={{maxWidth:'480px', margin:'0 auto'}}
                 >
                    
                    {missionCardSwiperData?.[activeIndex]?.heading && (
                        <h4 className="h2si">
                            {missionCardSwiperData[activeIndex].heading}
                        </h4>
                    )} 
                    {missionCardSwiperData?.[activeIndex]?.phase &&( 
                        <h4 className='text-primaryBeige mb-2'>Phase 1 Discovery & Design</h4>  
                    )} 
                    {missionCardSwiperData?.[activeIndex]?.workProcess &&( 
                        <h3 className='midPurpleColor'>Phase 1 Discovery & Design</h3>  
                    )} 
                    {missionCardSwiperData?.[activeIndex]?.info && (
                        <p className={`paragraph_elements p_elements els2 ${headingColor ? headingColor : ''}`}>
                            <strong>{missionCardSwiperData[activeIndex].info}</strong>
                        </p>
                    )} 
                    
                </div>
                <div className='d-flex'> 
                    <Swiper
                        className="aboutSweeper"
                        spaceBetween={30}
                        slidesPerView={3}
                        centeredSlides={true}
                        loop={true}
                        onSwiper={setSwiperInstance}
                        onSlideChange={(swiper) => {
                            setActiveIndex(swiper.realIndex);
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.2,
                                spaceBetween: 5,
                            },
                            576: {
                                slidesPerView: 1.2,
                                centeredSlides: true,
                            },
                            768: {
                                slidesPerView: 1.5,  
                                centeredSlides: true,
                            },
                            992: {
                                slidesPerView: 3,  
                                centeredSlides: true,
                            },
                        }}

                    >
                        {missionCardSwiperData.map((slides, index) => (
                            <SwiperSlide key={index}>
                                <div className={`swiperContaiiners ${getSlideClass(index)}`}>   
                                    <div className='aboutimages d-flex align-items-center h-100'>
                                    
                                         <img src={slides.image} className='w-100 threSwiperImg' alt="swiper image" />
                                    
                                    </div>

                                    
                                    {activeIndex === index && slides.title?.trim() && (
                                        <h6
                                            className={`text-center h6_elements mt-1 ${headingColor ? headingColor : "purpleColor"}`}>
                                            {slides.title}
                                        </h6>
                                    )}

                                    {activeIndex === index &&
                                        slides.linksLabel?.trim() && (
                                            <div className="d-flex justify-content-center ">
                                            {slides.links && (
                                                <Link
                                                href={slides.links}
                                                target="_blank"
                                                className={`fw-bold mt-2 ${
                                                    headingColor ? headingColor : "purpleColor"
                                                }`}
                                                >
                                                {slides.linksLabel}
                                                </Link>
                                            )}

                                            {slides.linksLabel2?.trim() && slides.links2 && (
                                                <Link
                                                href={slides.links2}
                                                target="_blank"
                                                className={`fw-bold mt-2 ${
                                                    headingColor ? headingColor : "purpleColor"
                                                }`}
                                                >
                                                <span style={{padding:"0 7px"}}>|</span>
                                                {`${slides.linksLabel2}`}
                                                </Link>
                                            )}
                                            </div>
                                        )} 
                                   
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>


        </div>
    );
};
