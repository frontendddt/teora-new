

"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, forwardRef, useImperativeHandle } from "react";

const SwiperCustom = forwardRef(({
    data=[],
    spaceBetween,
    slidesPerView,
    loop,
    centeredSlides,
    breakpoints = {}, 
    renderSlide,
    className,
    onSlideChange,
}, ref) =>{ 

    const swiperRef = useRef(null);
    useImperativeHandle(ref, () => ({
        slideNext: () => swiperRef.current?.slideNext(),
        slidePrev: () => swiperRef.current?.slidePrev(),
    }));

    const defaultBreakpoints = {
        0: { slidesPerView: 1 }, 
        768: { slidesPerView: 2 }, 
        1024: { slidesPerView: 3 },
    };

    return(
        <Swiper 
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={onSlideChange}  
            spaceBetween={spaceBetween ?? 50}
            slidesPerView={slidesPerView ?? 3} 
            loop={loop ?? true}
            centeredSlides={centeredSlides || false}    
            freeMode={true}  
            breakpoints={breakpoints || defaultBreakpoints}
        >
            {data.map((item, index) => (
                <SwiperSlide key={index} className={className}>   
                    {renderSlide ? renderSlide(item, index) : null}
                </SwiperSlide>
            ))}
        </Swiper>
    )
});

export default SwiperCustom;
