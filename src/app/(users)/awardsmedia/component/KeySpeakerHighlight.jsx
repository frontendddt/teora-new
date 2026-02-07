"use client"
import styles from "../award.module.css";
import { ImageCustom } from "@/components/common/Custom";
import { Paragraphs } from "@/components/common/Custom";
import { LinkCustom } from "@/components/common/Custom";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";
import YoutubeSection from "./YoutubeSection";

const KeySpeakerHighlight = () =>{
      const { fadeLeft, fadeRight, fadeDown } = useAnimationContext();
    return(
        <>
        <section className="animate-wrapper"> 
                <MotionWrapper className={`${styles.bottompmargin} ${styles.spaceto_phone} `} variant={fadeRight}>
                      <div className={`d-flex justify-content-end `}>
                         <div className={styles.conver_row}>
                             <div className={`corporateBg d-flex align-items-center gap-3 pt-3 pb-3 ${styles.conver_row1}`}>
                                    <div className="d-flex ">
                                        <ImageCustom 
                                                src="/image/golob-img.webp" 
                                                alt="l Prioritization —"
                                                className={styles.award_iconimage}
                                            /> 
                                        <ImageCustom 
                                                src="/image/golob-img2.webp" 
                                                alt="l Prioritization —"
                                                className={styles.award_iconimage}
                                            /> 
                                    </div> 
                                    <span className={`inlin-block ${styles.awrdh4}`}>
                                        <h4 className="purpleColor fw-500">
                                            UN/FAO Global Prioritization — Teora
                                            in the International Conversation, 2025
                                        </h4>
                                    </span>
                            </div>
                            <div className={`${styles.p_left_right} ${styles.bottompmargin} ${styles.p_right}`}>
                                <Paragraphs
                                    className={`text-primaryBeige pt-3`}
                                    discretion="Selected as one of two MSMEs invited to address the UN/FAO High-
                                            Level APAC Meeting, recognizing Teora’s oral biologics platform as a
                                            key solution for AMR-safe aquaculture and food security."
                                />
                            </div>
                         </div>
                    </div>   
                </MotionWrapper>

                 <MotionWrapper className={`${styles.bottompmargin} ${styles.spaceto_phone}`} variant={fadeLeft}>
                      <div className={`d-flex justify-content-start `}>
                         <div className={`position-relative ${styles.conver_row}`}>
                             <div className={`corporateBg pt-3 pb-3 ${styles.conver_row1_right}`}> 
                                    <div className={`${styles.p_left_right} inlin-block ${styles.awrdh4} ${styles.p_left}`}>  
                                        <h4 className="fw-500">
                                           <Link className="purpleColor"
                                                 href="https://agrifoodinnovation.com/attend#Who%20Will%20You%20Meet?" target="_blank"
                                           >
                                                 Key Speaker <br/>
                                                2025 summit.
                                           </Link>
                                        </h4>
                                        <Link href="https://agrifoodinnovation.com/attend#Who%20Will%20You%20Meet?" target="_blank"
                                         className="purpleColor fw-500"
                                        >View Link <HiArrowNarrowRight/></Link>
                                    </div>
                            </div>
                           
                            <Link href="https://agrifoodinnovation.com/attend#Who%20Will%20You%20Meet?" target="_blank">
                                <ImageCustom
                                    src="/image/speaker_phone.webp"
                                    alt="phone" 
                                    className={styles.phone} 
                                />
                            </Link>
                       
                          
                            <div className={`${styles.p_left_right} ${styles.descreption} ${styles.p_left}`}>
                                    <ImageCustom 
                                        src="/image/speaker-img.webp"
                                        alt="company texts" 
                                        className={`mt-2 mt-sm-4 mb-0 mb-sm-4  ${styles.award_iconimage2}`} 
                                    />
                                    <Paragraphs
                                        className={`text-primaryBeige pt-3`}
                                        discretion="Dr. Rishita spoke on Scaling Aquaculture, sharing insights on disease
                                                    management innovation and sustainable productivity — reﬂecting
                                                    Teora’s proﬁle and inﬂuence within the APAC agri-food ecosystem."
                                    />
                            </div>
                            
                         </div>
                    </div>   
                </MotionWrapper>

                <MotionWrapper className={`${styles.bottompmargin} ${styles.spaceto_phone}`} variant={fadeRight}>
                      <div className={`d-flex justify-content-end `}>
                         <div className={styles.conver_row}>
                             <div className={`corporateBg d-flex align-items-center gap-3  pt-3 pb-3 ${styles.conver_row1}`}>
                                    <div className="">
                                        <ImageCustom 
                                                src="/image/aqua-award.webp" 
                                                alt="l Prioritization —"
                                                className={styles.award_iconimage2}
                                            />  
                                    </div> 
                                    <span className={`inlin-block ${styles.awrdh4}`}>
                                        <h4 className="purpleColor fw-500">
                                            <Link
                                              href="https://aquaasiapac.com/2025/07/07/disease-mitigationin-marine-fish-and-tilapia/"
                                              target="_blank"
                                              className="purpleColor"
                                            >
                                                 UN/FAO Global Prioritization — Teora
                                                in the International Conversation, 2025
                                            </Link>
                                        </h4>  
                                         <LinkCustom
                                            p0="p-0"
                                            href="https://aquaasiapac.com/2025/07/07/disease-mitigationin-marine-fish-and-tilapia/"
                                            target="_blank"
                                            label={
                                                <span className="d-inline-flex align-items-center gap-1 purpleColor">
                                                View Link <HiArrowNarrowRight />
                                                </span>
                                            }
                                         /> 
                                    </span>
                            </div>
                            <div className={`   ${styles.p_left_right} ${styles.bottompmargin} ${styles.p_right}`}>
                                <Paragraphs
                                    className={`text-primaryBeige pt-3`}
                                    discretion="Dr. Rishita Changede spoke on oral biotech prevention for ﬁsh diseases
                                                and the SOLAQ platform in industry panels, reinforcing Teora’s
                                                positioning as an innovator in aquaculture health."
                                />
                            </div>
                         </div>
                    </div>   
                </MotionWrapper>
        </section>
        <section className="section-space">
                <div className="container container2">
                    <div className="row">
                         <MotionWrapper className="col-md-5" variant={fadeDown}>
                            <div className={styles.mediaMobile} style={{maxWidth:400, height:750}}>
                                    <ImageCustom
                                        src="/image/phone-column.webp"
                                        alt="phone" 
                                    />
                                    <div className="d-flex justify-content-center">
                                        <LinkCustom
                                            label="Read The News"
                                            target="_blank"
                                            href="https://www.businesstimes.com.sg/singapore/smes/safer-way-save-farmed-fish"
                                            className="buttons-Beige"
                                        />
                                    </div>
                                
                            </div> 
                         </MotionWrapper>
                         <MotionWrapper className="col-md-7" variant={fadeDown}>
                            <div className="">
                                 <ImageCustom
                                    src="/image/desctop-award.webp"
                                    alt="descktop"
                                    style={{height:500}}
                                    className={styles.descktop}
                                />
                                <h3 className="text-primaryBeige mt-3">100 Emerging Women Leaders</h3>
                                <p className="text-primaryBeige">
                                    Your Story recognises Dr. Rishita Changede as one of the 100
                                    Emerging Women Leaders for her pioneering work in biotech-
                                    driven solutions for sustainable aquaculture and agriculture.
                                </p> 
                                <LinkCustom
                                    label="Read Full Story"
                                    target="_blank"
                                    href="https://yourstory.com/herstory"
                                    className="buttons-Beige"
                                />
                            </div>
                         </MotionWrapper>
                    </div>
                </div> 
        </section>
        <section className="animate-wrapper">
            <YoutubeSection/>
        </section>
    </>
    )
}

export default KeySpeakerHighlight;