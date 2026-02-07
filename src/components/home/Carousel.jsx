'use client';
// import { CarouselData } from '@/data/carouselData';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
 import Styles from "./carousel.module.css"; 

import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import { useAnimationContext } from '@/context/AnimationContext'; 
    const staticSlides = [
        {
            id: 1,
            counter: '01/04',
            heading: `We’re Building A Future Where Every Farm—Small Or Large, Can Protect What Matters And Grow What’s Needed Through Clean, Easy, Powerful Science.`,
            subheading: 'Stronger Yields, Sustainable Planet Healthier Ecosystems, And Resilient Communities.',
            subheadingSpan: 'Cleaner Harvests,', 
            images: [],
            bannerImg: '/slider/Animal-Illustartor.webp',
        },
        {
            id: 2,
            counter: '02/04',
            heading: `Injected Fish. Antibiotic-Fed Animals. High Amr’s. Sprayed Crops. Sick Soils. Dying Oceans. Toxic Waters. Stressed-Out Farmers. Polluted Plates.`,
            subheading:'Human Health. Farmers. Planet !',
            subheadingSpan:'Compromised',
            images: [
            '/slider/Group.png',
            '/slider/Group2.png',
            '/slider/Group3.png',
            '/slider/Group4.png',
            ],
        },
        {
            id: 3,
            counter: '03/04',
            heading: `This Is The Cost Of How We Grow Food Today And We’re Expected To Feed 10 Billion Like This?`,
            subheading:'We Could Grow Food Without Harming Everything Else.',
            subheadingSpan:'What if', 
            images: ['/slider/Group5.png'],
        },
        {
            id: 4,
            counter: '04/04',
            heading: `At Teora, We Envision A World Where — Disease Doesn’t Destroy Harvests Or Drain Profits. Growth Doesn’t Rely On Chemicals, Antibiotics Or Shortcuts.`,
            subheading:'Comes At The Cost Of Health, Planet, Or Profitability.',
            subheadingSpan:'And Farming no longer',
            images: ['/slider/group6.png'],
            imgClass: 'sliderImg4',
        },
    ]; 
 const Carousel = () =>{ 
    const {fadeLeft} = useAnimationContext();
    const [carouselData, setCarouselData] = useState(staticSlides);
 
    const lineVariants = {
            hidden: {
                scaleY: 0,
                opacity: 0,
                transformOrigin: "top",
            },
            visible: {
                scaleY: 1,
                opacity: 1,
                transition: {
                duration: 0.8, 
                ease: "easeInOut",
                },
            },
        };

    
 useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const res = await fetch('/api/banner');
        const json = await res.json(); 

        if (json.success && Array.isArray(json.data)) {
          const updatedSlides = carouselData.map((slide) => {
            const updated = json.data.find((s) => s.slider_number === slide.id); 
                if (updated) {
                    return {
                    ...slide,
                    heading: updated.heading || slide.heading,
                    bannerImg:
                        slide.id === 1
                        ? updated.images?.[0] || slide.bannerImg
                        : slide.bannerImg,
                    };
                }

            return slide;
          });
          setCarouselData(updatedSlides);
        }
      } catch (err) {
        console.error("Failed to fetch banners:", err);
      }
    };

    fetchSliderData();
  }, []);

    return(
        <> 
            <section className={`tectureBg ${Styles.bannerContaner}`}>
                    <div id="carouselExampleFade" className={`carousel slide ${Styles.sliders}`} > 

                             <div className="carousel-inner w-100 h-100">
                                    {carouselData.map((slide, index) => (
                                        <div
                                          key={slide.id}
                                          className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                          style={{ width: '100%', height: '100%' }}
                                        >
                                        <div className="h-100 position-relative"> 
                                            <div className="container position-relative">
                                                 <p className={`${Styles.banner_counter}`}>
                                                    <strong>
                                                      <i>{slide.counter}</i>
                                                    </strong>
                                                </p>
                                            </div> 
                                            <div className={`z-1 ${Styles.bannerHeaderContant}`} style={slide.id === 4 ? { maxWidth: 1100 } : {}}>
                                                <h2 className="text-primaryBeige">{slide.heading}</h2>
                                            </div> 
                                            <div className={`container z-1 ${Styles.slider_img_container}`}>
                                                <div className={Styles.bannerFooterContant}> 
                                                    {slide.id === 1 && (
                                                    <div className="d-flex justify-content-center">
                                                        <motion.span
                                                            className="linsAnim"
                                                            variants={lineVariants}
                                                            initial="hidden"
                                                            whileInView="visible"
                                                            viewport={{ once: false, amount: 0.2 }}
                                                        ></motion.span>
                                                    </div>
                                                    )} 
                                                    {slide.id === 1 ? (
                                                    <motion.h3
                                                        className="healthier h3mobile"
                                                        variants={fadeLeft}
                                                        initial="hidden"
                                                        whileInView="visible"
                                                        viewport={{ once: false, amount: 0.2 }}
                                                    >
                                                     <span className={` ${Styles.cleanTex}`}>{slide.subheadingSpan}</span> {slide.subheading}
                                                    </motion.h3>
                                                    ) : (
                                                    <h3 className="h3mobile"> <span className={` ${Styles.cleanTex}`}>{slide.subheadingSpan}</span> {slide.subheading}</h3>
                                                    )} 
                                                    {slide.id === 1 && (
                                                    <div className="d-flex justify-content-center">
                                                        <motion.span
                                                          className="linsAnim"
                                                          variants={lineVariants}
                                                          initial="hidden"
                                                          whileInView="visible"
                                                          viewport={{ once: false, amount: 0.2 }}
                                                        ></motion.span>
                                                    </div>
                                                    )}
                                                </div> 
                                                <div className="row">
                                                    {slide.images.map((imgSrc, imgIndex) => (
                                                    <div
                                                        key={imgIndex}
                                                        className={slide.id === 3 || slide.id === 4 ? 'col-12 d-flex' : 'col-md-3 col-6 mb-2'}
                                                    >
                                                        <img
                                                            src={imgSrc}
                                                            alt="Slider Image"
                                                            className={slide.id === 4 ? `m-auto ${Styles[slide.imgClass]}` : ''}
                                                            style={{
                                                            maxWidth: slide.id === 4 ? '80%' : '100%',
                                                            height: '100%',
                                                            borderRadius: '20px',
                                                          }}
                                                          height={slide.id === 4 ? 410 : undefined}
                                                        />
                                                    </div>
                                                    ))}
                                                </div>
                                            </div> 
                                            {slide.bannerImg && (
                                             <img src={slide.bannerImg} alt="banner img" className={Styles.bannerImg} />
                                            )}
                                        </div>
                                        </div>
                                    ))}
                                    </div>
                            

                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" style={{opacity:1}}>
                                <span className={Styles.prevButton}>
                                    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                                        <IoIosArrowBack/>
                                    </div>
                                </span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                             
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" style={{opacity:1}}>
                                 <span className={Styles.prevButton}>
                                    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                                        <IoIosArrowForward />
                                    </div>
                                </span>
                                <span className="visually-hidden">Next</span>
                            </button> 
                    </div>
            </section>
        
        </>
    )
 }

export default Carousel;

 
