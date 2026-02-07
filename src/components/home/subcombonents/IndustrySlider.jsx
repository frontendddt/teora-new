
"use client";
import Styles from "../home.module.css";
import SwiperCustom from "@/components/common/SwiperCustom"; 
import { LinkCustom } from "@/components/common/Custom";
import { motion } from 'framer-motion';
import { MdArrowBackIosNew, MdArrowForwardIos  } from "react-icons/md";
import { useRef } from "react";
const IndustySlider = ({fadeRight, fadeLeft}) =>{
const swiperRef = useRef();
const industryImage = [
    {image: '/image/industryImg-1.png'},{image: '/image/industryImg-2.png'},{image: '/image/industryImg-3.png'},{image: '/image/industryImg-4.png'},{image: '/image/industryImg-5.png'},
]  
    return(
        <>     
            <div className="container padding_manage">
                    <div className="row reverce_column animate-wrapper">
                            <motion.div className="col-md-5 col-12"
                                variants={fadeLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}  
                            >
                                <SwiperCustom
                                    ref={swiperRef}
                                    slidesPerView={1}
                                    data={industryImage}
                                    loop={true} 
                                    renderSlide={((elements, index) =>(
                                        <div className="position-relative" key={index}>
                                                <img
                                                    src={elements.image}
                                                    alt="industry image 1"   
                                                    style={{width:'100%', height:'100%'}}
                                                /> 
                                        </div>
                                    ))}
                                />
                               
                            </motion.div>
                            <motion.div className="col-md-7 col-12 d-flex justify-content-center align-items-center "
                                    variants={fadeRight}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                            >
                                    <div className={`pleft position-relative ${Styles.industries}`}> 
                                         <div className="d-flex gap-2 fs-5 nextPrevControl"> 
                                            <button className="btnStyles" 
                                                 onClick={() => swiperRef.current.slidePrev()}
                                            >
                                                <MdArrowBackIosNew/>
                                            </button> 
                                            <button className="btnStyles" 
                                                 onClick={() => swiperRef.current.slideNext()}
                                            >
                                                <MdArrowForwardIos/>
                                            </button>
                                         </div>
                                          <h2 className="m-top-b purpleColor h2font">INDUSTRIES WE ARE IMPACTING</h2>
                                          <p className="m-top-b purpleColor ">Backed by proprietary AI-driven bioinformatics, precision fermentation,
                                            and advanced oral feed based or foliar spray based delivery, our solutions
                                            are proven in aquaculture and primed to scale into livestock, poultry,
                                            companion animals and agriculture— <strong>unlocking a $193 billion market</strong></p>

                                         <div className="marginBottom PaddinginTop">
                                             <LinkCustom href="/whyus" label="Why us" className="buttons-primary" p0="p-0" /> 
                                         </div>
                                    </div>
                            </motion.div>
                    </div>
            </div>
        </>
    )
}
export default IndustySlider;