
'use client';
import { useState } from 'react';
import Image from 'next/image';
import SwiperCustom from '../common/SwiperCustom';
import { useRef } from "react";
import styles from './home.module.css';
import { MdArrowBackIosNew, MdArrowForwardIos  } from "react-icons/md";

const IndustrySlider = ({data, text, className, solaqClass, homeRow, aquaculture}) => {
 const swiperRef = useRef();
 const [activeIndex, setActiveIndex] = useState(0);
 
  return (
        
            <div className="container">
                <div className={` d-flex position-relative ${styles.rowcontainer} ${solaqClass}`}>

                    <div className={`${styles.left_arrow} `}>
                        <div className={`d-flex gap-2 justify-content-between align-items-center w-100 padding_manage controlerText ${className}`}>
                                <div className={`purpleColor ${styles.infoh1}`} >
                                     <p className={`mb-0`}>{text}</p>
                                </div>
                                 <div className="d-flex gap-2 fs-5 "> 
                                    <button className="btnStyles purpleColor"
                                        onClick={() => swiperRef.current.slidePrev()}
                                    >
                                        <MdArrowBackIosNew/>
                                    </button> 
                                    <button className="btnStyles purpleColor"
                                          onClick={() => swiperRef.current.slideNext()}
                                    >
                                        <MdArrowForwardIos/>
                                    </button>
                                  </div> 
                        </div>
                    </div>  

                    <div className={`${styles.right_slider} right_slider2 leftpadding_manage `}>
                           <div className={styles.sliderWrapper}>
                                 <SwiperCustom
                                    ref={swiperRef}
                                    data={data}
                                    slidesPerView={3}
                                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                                    breakpoints={{  
                                        0: { slidesPerView:1.2, spaceBetween:15 },
                                        567: { slidesPerView:2},
                                        992: { slidesPerView:3}, 
                                    }}
                                    renderSlide={((items, index) =>(
                                          <div className={`d-flex justify-content-center slicky_container pt-3 p-1 p-sm-3`}  key={index}>
                                                <div className={`slickys purpleColor ${solaqClass}`} > 
                                                
                                                    <div className='d-flex justify-content-center'>
                                                        {aquaculture ?(
                                                            <div className={`d-flex justify-content-center align-items-center ${items.bg} ${items.color} ${activeIndex === index ? styles.activeSlide : ""} `}
                                                                 style={{width:85, height:85, borderRadius:'50%', fontWeight:'bolder', fontSize:'28px'}}>0{index+1}</div>
                                                        ): 
                                                            <Image
                                                                src={items.image}
                                                                width={items.widths}
                                                                height={items.heights}
                                                                alt={items.title}
                                                                className={`mb-3 mobileSize_img ${activeIndex === index ? styles.activeSlide : ""}`} 
                                                            />
                                                        }
                                                    </div>
                                                      <h4 className={`text-center mt-2 h4industry`}>{items.title}</h4> 
                                                      <p className='text-center industry_p'>
                                                          {items.text} <span><strong>{items.bold}</strong></span>
                                                      </p>
                                                </div>
                                            </div>
                                    ))}
                                 />  
                           </div>   
                           <div className={`${styles.rowWhite} ${homeRow} rowWhites`}></div>
                    </div> 

               </div>
            </div>
        
  );
};

export default IndustrySlider;
