import { ImageCustom } from "@/components/common/Custom";
import styles from "../award.module.css";
import { LinkCustom } from "@/components/common/Custom";
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";

const PodcastsInterviews = () =>{
       const { fadeLeft, fadeRight } = useAnimationContext();
    return(
        <div className="container container2">
             <div className="row">
                 <MotionWrapper className="col-md-6" variant={fadeLeft}>
                     <div className={`productions text-primaryBeige ${styles.wid_s}`} >
                           <h2 className="mb-3 mb-sm-5">Podcasts & Interviews</h2>
                            <ImageCustom
                                src="/image/award-unlocking.webp"
                                alt="Podcasts & Interviews"
                                className={`${styles.wid_s_img1}`} 
                            />
                         <div className={styles.wid_s2}>
                                <div className="mb-3 mb-sm-5"> 
                                    <h5>
                                        Teora - Unlocking Nature’s Factory |
                                        Teora’s Innovative Approach To
                                        Aquaculture
                                    </h5>
                                    <p className="lavenderColor">
                                        These podcasts provide insights into Teora’s
                                        mission, its technology, and how it is
                                        revolutionizing sustainable food production
                                        through biotech advancements.
                                    </p> 
                              </div> 
                            <div className="">
                                <ImageCustom
                                    src="/image/Moneyfm.webp"
                                    alt="Podcasts & Interviews" 
                                     className={`${styles.wid_s_img2}`} 
                                />
                                   <h5>Moneyfm 89.3 </h5>
                                    <p className="lavenderColor">
                                        “Industry Insight: Revolutionising Food Security
                                        with Cutting-Edge Technology”
                                        Dr. Rishita discusses Singapore’s food vulnerability
                                        and Teora’s path to 30by30.
                                    </p>
                                      <LinkCustom
                                        label="Listen To The Podcast"
                                        href="https://www.moneyfm893.sg/guest/dr-rishita-changede-teora/"
                                        className="buttons-Beige" 
                                        target="_blank"
                                    />
                            </div>
                         </div>

                     </div>
                 </MotionWrapper>
                 <MotionWrapper className="col-md-6" variant={fadeRight}>
                      <div className={`productions text-primaryBeige ${styles.wid_s}`} >
                          
                        <div className="d-flex justify-content-center">
                            <ImageCustom
                                src="/image/award-media-phone.webp"
                                alt="Podcasts & Interviews"
                                style={{height:500, maxWidth:250}}
                            />
                        </div>

                         <div className={styles.wid_s2}>
                                <div className="mb-3 mb-sm-5"> 
                                    <h5>  Moneyfm 89.3 </h5>
                                    <p className="lavenderColor">
                                        In this exclusive interview, Dr. Rishita
                                        Changede discusses Teora’s vision, the
                                        impact of biotechnology in aquaculture, and
                                        how the company is pioneering a sustainable
                                        approach to global food production.
                                    </p> 
                                </div> 
                                 <div className={`corporateBg mb-3 mb-sm-5 ${styles.w_100}`} style={{padding:'2rem', borderRadius:20, height: 200, width:'70%' }}>
                                    <ImageCustom
                                        src="/image/award_productions.webp"
                                        alt="Podcasts & Interviews" 
                                    />
                                 </div>
                                  <div className={`d-flex justify-content-end ${styles.w_100}`}>
                                        <ImageCustom
                                            src="/image/business.webp"
                                            alt="Podcasts & Interviews"
                                            style={{height:300, maxWidth:300}}
                                      />
                                  </div>
                             
                         </div>

                     </div>
                 </MotionWrapper> 

             </div>
        </div>
    )
}
export default PodcastsInterviews;