"use client"
import React from "react";
import { useRef } from "react";
import styles from "./solaq.module.css"
import SwiperCustom from "../common/SwiperCustom";
import { ButtomCustom } from "../common/Custom";
import HeaderInfo from "../common/Custom";
import { MdArrowBackIosNew, MdArrowForwardIos  } from "react-icons/md";
import { LinkCustom } from "../common/Custom";
import { ImageCustom } from "../common/Custom";
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";

const data = [
  { 
    title: "DISEASE PRESSURE",
    img:"icons/aquaculture.png",
    bg: "accentLimebg",
    color:"purpleColor",
    discreption:(
        <React.Fragment>
            Even with improved practices,
            outbreaks remain one of the
            biggest biological risks. 
            <span className="gap_p_tb"> 
                Mortality in intensive systems
                can reach <strong>20–70%,</strong> costing
                farmers time, feed, confidence,
                and income.
            </span>
            <span className="gap_p_tb">
                <strong>$500B in production value </strong>
                every year lost to diseases.
            </span>
        </React.Fragment>
    )
},
{ 
    title: "CHEMICAL DEPENDENCE", 
    img:"icons/aquaculture.png",
    bg: "accentRedBg",
    color:"text-primaryBeige",
    discreption:(
        <React.Fragment>
             Animal farming consumes
            <strong>  73% of the world’s antibiotics </strong>
            and Antimicrobial resistance is projected to
            <strong>kill 10 million people</strong>
             annually by 2050.
            <span className="gap_p_tb"> 
                As residue rules tighten and AMR
                risks grow, producers need tools
                that strengthen health without
                adding chemical pressure or
                regulatory risk.
            </span> 
        </React.Fragment>
    )
    
},

  {
     title: "EFFICIENCY GAPS",
     img:"icons/aquaculture.png",
     bg: "mutedBeigeBg",
     color:"purpleColor",
     discreption:(
        <React.Fragment>
            Feed alone consumes up to
            <strong>
                70% of farm operating costs.
            </strong> 
            
            <span className="gap_p_tb"> 
                But stress, slow growth,
                premature harvests, and climate-
                driven disruptions quietly reduce
                farm performance long before
                animals reach full potential.
            </span> 
            <span className="gap_p_tb">
                Climate shocks add another
                <strong>$123 billion in annual losses;</strong>
                unsafe food another <strong> $110 billion.</strong>
            </span>
        </React.Fragment>
    )
  },
  { 
    title: "CHEMICAL DEPENDENCE", 
    img:"icons/aquaculture.png",
    bg: "accentRedBg",
    color:"text-primaryBeige",
    discreption:(
        <React.Fragment>
            Animal farming consumes
            <strong>
                73% of the world’s antibiotics
            </strong>
            and Antimicrobial resistance is projected to
            <strong>kill 10 million people</strong>
             annually by 2050.
            <span className="gap_p_tb"> 
                As residue rules tighten and AMR
                risks grow, producers need tools
                that strengthen health without
                adding chemical pressure or
                regulatory risk.
            </span> 
        </React.Fragment>
    )
    
},
];

const ImpactCardSwiper = () =>{
 const { fadeLeft, fadeDown } = useAnimationContext();
 const swiperRef = useRef(null);
    return(
        <div className="row">
            <MotionWrapper className="col-md-4 d-flex align-items-center " variant={fadeLeft}>
                <div className="container container2 d-flex align-items-center flex-column">
                     <HeaderInfo
                        title={
                            <React.Fragment>
                                Three Gaps <br className="none576"/>
                                Still Hold <br className="none576"/>
                                Farms Back
                            </React.Fragment>
                        }
                    />
                    <div className="d-flex gap-4 align-items-center">
                        <LinkCustom
                            label="Explore Our Why"
                            href="/whyus"
                            className="buttons-primary"
                        />
                        <ButtomCustom
                            wrapperClass = "d-flex gap-3"
                            btn1={{
                                label:<MdArrowBackIosNew/>,
                                className:"btnStyles text-primaryBeige",
                                onClick: () => swiperRef.current?.slidePrev(),
                            }}
                            btn2={{
                                label:<MdArrowForwardIos/>,
                                className:"btnStyles text-primaryBeige",
                                onClick: () => swiperRef.current?.slideNext(),
                            }} 
                        /> 
                    </div>
                </div>
            </MotionWrapper>
            <MotionWrapper className="col-md-8 position-relative" variant={fadeDown} >
                <SwiperCustom
                    ref={swiperRef}
                    data={data}
                    slidesPerView={2.5}
                    spaceBetween={40} 
                    centeredSlides = {false}
                    className={styles.swiper_wrraper}
                     breakpoints={{
                        0: {
                          slidesPerView: 1.1, 
                          spaceBetween: 10
                        },
                        768: {
                          slidesPerView: 2, 
                          spaceBetween: 15
                        },
                        992: {
                           slidesPerView: 2.5,
                        }
                    }}
                    renderSlide={(item) =>(
                        <div className={`${item.bg} ${item.color} h-100 border_radius_round2 ${styles.swiperCard}`}>
                              <ImageCustom
                                 className="mb-2"
                                 src={`/${item.img}`}
                                 alt={item.title}
                                 style={{width:"70px", height:"70px"}}
                              />               
                              <h5 className="mb-1 mb-md-3">{item.title}</h5>
                              <p className={styles.cardDiscreptions}>{item.discreption}</p>
                        </div>
                    )}
                     
                />
                 <div className={`purpleBg ${styles.indexwrapper}`}></div>        
            </MotionWrapper>
        </div>
    )
}
export default ImpactCardSwiper;