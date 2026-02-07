"use client";
import Link from 'next/link';
import Image from 'next/image';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { HiArrowNarrowRight } from "react-icons/hi";
import { useState } from 'react';
import SwiperCustom from '@/components/common/SwiperCustom';
import styles from './slicky.module.css';
import React, { useRef } from "react";
 
  const slides = [
    {
      className: "slide_containe deepPurple",
      jsx: (
        <React.Fragment>
          <div className="row">
            <div className="col-md-9 c0l-12">
              <p>01/05</p>
              <div className={styles.slicky_p}>
                <h5 className="pb-4">
                  Using “NOBEL PRIZE WINNING technologies” SOLAQ<sup>TM</sup> our
                  BIOTECH PLATFORM Designs Desease & Growth mangement solutions for
                  sustainable Farming.
                </h5>

                <img
                  src="/icons/slicky-home-1.svg" 
                  alt="solutions for sustainable Farming"
                  className="mobile_view imgWidth"
                />

                <p className="fw-300 mb-0">
                  We took the best advances in human pharmaceuticals , stripped out
                  the chemicals, needles, and stress—and built a platform that
                  empowers farmers, simplifies disease control, and brings clean
                  growth of farmed species within everyone’s reach without being
                  harsh on our planet !
                </p>
              </div>
            </div>

            <div className="col-md-3 col-12 desctop_view">
              <img
                src="/icons/slicky-home-1.svg"
                alt="solutions for sustainable Farming"
                className="img-w"
              />
            </div>

            <p  className={`lavender-color ${styles.slicky_p} pt-0 ${styles.infocard}`} >
              ONE PLATFORM, MULTIPLE SPECIES. PROVEN IN THE FIELD. DESIGNED BY
              SCIENTISTS. POWERED BY AI
            </p>
          </div>
        </React.Fragment>
      ),
    },

    {
      className: "slide_containe accentLimebg pt-4",
      jsx: (
        <React.Fragment>
            <div className='purpleColor'> 
                  <div className="row rowReverce">
                      <span><p>02/05</p></span>
                      <div className={`col-md-9 col-8 d-flex flex-column justify-content-between`}>
                          
                          <div className='super‑powers'>
                              <p className='mt-3' style={{fontSize:'22px'}}>
                                    What SOLAQ™ Delivers : One platform, three super‑powers
                              </p> 
                          </div>
                      
                          <div className="row">
                                {[
                                    {
                                      img: "/icons/group1.png",
                                      alt: "Prevent Disease",
                                      title: "Prophylactic- Stop outbreaks",
                                      text: (
                                        <React.Fragment>
                                          Prevent Disease Before It Even Starts.
                                          <span className={styles.zerpfonts}> Higher survival . Regulation‑ready</span>
                                        </React.Fragment>
                                      ),
                                    },
                                    {
                                      img: "/icons/group2.png",
                                      alt: "Prevent Disease Before",
                                      title: "Therapeutic- Fight Back Fast",
                                      text: (
                                        <React.Fragment>
                                          Treats active outbreaks, stress-free.
                                          <span className={styles.zerpfonts}> Zero injections, zero handling</span>
                                        </React.Fragment>
                                      ),
                                    },
                                    {
                                      img: "/icons/group3.png",
                                      alt: "Cuts feed-to-growth",
                                      title: "Grow Bigger-Boosts Metabolism",
                                      text: (
                                        <React.Fragment>
                                          Cuts feed-to-growth time.
                                          <span className={styles.zerpfonts}> Tougher immunity. Stronger stock</span>
                                        </React.Fragment>
                                      ),
                                    },
                                  ].map((item, i) => (
                                    <div className="col-md-4 col-12" key={i}>
                                      <div className="d-flex justify-content-center logoslider mb-3">
                                        <Image src={item.img} width={70} height={55} alt={item.alt} />
                                      </div>
                                      <div className={`purpleBg text-center text-primaryBeige ${styles.fontCard}`}>
                                        {item.title}
                                      </div>
                                      <p className="p_fonts-w mb-0 mt-2">{item.text}</p>
                                    </div>
                                  ))}
                              
                          </div>
                      </div>

                      <div className="col-md-3 col-4 ">
                          <div className='padding_500' style={{padding:'0 0px 0 15px'}}>
                                <img
                                      src="/icons/slicky-home-1.svg"
                                      alt='solutions for sustainable Farming'
                                      height={120}
                                      className='width_img'
                                    />
                                    <h6 className='h6why mt-3'><strong>What you get?</strong></h6>
                                    <h6 className='h6bold'>
                                      A room-temperature stable
                                      powder that turns ordinary farm
                                      feed and foliar sprays into disease
                                      shields and growth boosters. 
                                    </h6>
                                    <p className='mb-0 mt-3 d-flex justify-content-end'>
                                        <Link href="/" className='purpleColor fw-medium Explore-more'>Explore more <HiArrowNarrowRight/></Link> 
                                    </p>
                          </div>
                      </div>

                      
                  </div>
              </div>
        </React.Fragment>
      ),
    },

    {
      className: "slide_containe mutedLavenderBg pt-4",
      jsx: (
        <React.Fragment>
              <div className='purpleColor'> 
                <span><p>03/05</p></span>
                  <div className="row ">
                      <div className={`col-md-12 col-8 d-flex flex-column justify-content-between`}>
                          
                          <div className='super‑powers'>
                              <h4 className='mt-3 ' style={{fontSize:'22px'}}>
                                    How Solaq™ Works : Smart. Precise. Fast. From Lab To Field In Months, Not Years. 
                              </h4> 
                          </div>
                      
                          <div className="row mt-4">
                              {[
                                {
                                  title: "AI-driven bioinformatics",
                                  text: (<React.Fragment>AI maps the pathogen, immune triggers & growth inefficiencies like a GPS. No <strong>guesswork.</strong></React.Fragment>),
                                },
                                {
                                  title: "Synthetic biology",
                                  text: (<React.Fragment>Custom-designs subunit peptides, RNA) designs the fix. <strong>100% Natural.</strong></React.Fragment>),
                                },
                                {
                                  title: "Precision fermentation",
                                  text: (<React.Fragment>Precision fermentation scales it —farm-ready in 6–8 months, not 3+ years. <strong>Fast turnaround.</strong></React.Fragment>),
                                },
                                {
                                  title: "Targeted encapsulation",
                                  text: (<React.Fragment>Each biologic is locked and delivered directly to gut or root. <strong>Stable on the shelf. Stress-free for animals</strong> </React.Fragment> ),
                                },
                              ].map((item, index) => (
                                <div className="col-md-3 col-12" key={index}>
                                    <div className={`purpleBg text-center text-primaryBeige ${styles.fontCard}`}>{item.title}</div>
                                    <p className="p_fonts-w mb-0 mt-2"> {item.text} </p>
                                </div>
                              ))}
                              
                          </div>
                      </div> 
                      <div className='col-md-12 col-4'>
                            <ul className='p-0 mt-3 m-0 list-unstyled d-flex justify-content-between flexwraap'>
                                {[
                                    { src: "/icons/solaq_icon6.svg", pt: false },
                                    { src: "/icons/solaq_icon7.svg", pt: true },
                                    { src: "/icons/solaq_icon5.svg", pt: false },
                                    { src: "/icons/solaq_icon4.svg", pt: true },
                                    { src: "/icons/solaq_icon6.svg", pt: false },
                                    { src: "/icons/solaq_icon2.svg", pt: true },
                                    { src: "/icons/solaq_icon1.svg", pt: false },
                                    { src: "/icons/premetions.png", pt: true },
                                ].map((item, index) =>(
                                    <li className={`${item.pt ? 'pt-3' : ''}`} key={index}>
                                        <Image
                                          src={item.src}
                                          width={90}
                                          height={90}
                                          alt="image"
                                        />
                                    </li>  
                                ))}  
                            </ul>
                              <p className='mb-0 mt-3 d-flex justify-content-end'>
                                    <Link href="/" className='purpleColor fw-medium Explore-more'>How it Works ?<HiArrowNarrowRight/></Link> 
                              </p> 
                      </div>
                  </div>
              </div>
        </React.Fragment>
      ),
    },

    {
      className: "slide_containe lavenderBg pt-4",
      jsx: (
        <React.Fragment>
              <div className='purpleColor'> 

                  <span><p>04/05</p></span> 
                  <div className="row "> 
                            <div className='mb-3 super‑powers'>
                              <h4 className='mt-3' style={{fontSize:'22px'}}>
                                  SOLAQ™ Is Built For Farmers & Global Food Security At Scale
                              </h4> 
                          </div>
                          {[
                              {
                                src: "/image/slicky4-icon1.svg",
                                alt: "Every biologic is designed",
                                text: `Every biologic is designed by AI to boost resilience and performance without the baggage of old methods.`,
                              },
                              {
                                src: "/image/slicky4-icon2.svg",
                                alt: "Forget 3-year vaccine",
                                text: `Forget 3-year vaccine development cycles, SOLAQ™ delivers scalable toxin-free biologics in 6–8 months.`,
                              },
                              {
                                src: "/image/slicky4-icon3.png",
                                alt: "Smarter feed that delivers",
                                text: `Smarter feed that delivers Better yields, faster harvests, protects stock, and leaves zero residues behind.`,
                              },
                              {
                                src: "/image/slicky-4-icon4.png",
                                alt: "hatcheries to high-density",
                                text: `From hatcheries to high-density barns, SOLAQ™ fits in. Climate stable. No infrastructure. No extra labour.`,
                              },
                            ].map((item, index) =>(
                              <div className="col-md-3 col-12 farmers_flex" key={index}>
                                    <div className=' mb-3'>
                                        <Image
                                          src={item.src}
                                          width={110}
                                          height={110}
                                          alt={item.alt}
                                      />
                                    </div> 
                                    <p className='mt-2'>{item.text}</p> 
                              </div>
                            ))
                          } 
                        <p className='mb-0 mt-3 d-flex justify-content-end'>
                            <Link href="/" className='purpleColor fw-medium'>Explore more <HiArrowNarrowRight/></Link> 
                        </p> 
                  </div>
              </div>
        </React.Fragment>
      ),
    },

    {
      className: "slide_containe accentBlueBg pt-4",
      jsx: (
        <React.Fragment>
            <div className='purpleColor'>  
                        <span><p>05/05</p></span>  
                          <div className="row"> 
                              <div className="col-md-8 col-12">
                                  <div className='mb-3 super‑powers'>
                                    <h4 className='mt-3' style={{fontSize:'22px'}}>
                                        Scientifically Validated & Market-Ready,<br></br>
                                        Proven In Aquaculture—Scaling To Other Industries
                                    </h4> 
                                  </div>

                                  <div className='scientifically d-flex justify-content-between pt-4'>
                                      <div className='d-flex gap-3'>
                                        <div className='position-relative'  style={{width:'120px', height:'100%'}}>
                                            <Image
                                                src="/image/fish.png"
                                                fill
                                                alt='Aquaculture—Scaling To'
                                                className='img_hhe'
                                              />
                                        </div>
                                          <div className='pwaight'>
                                              <p> Up to 90%survival vs. 30% <br className='br_none'></br>untreated with FishGuard <sup>TM</sup></p>
                                              <p> Up to 90%survival vs. 2% <br className='br_none'></br>untreated with ShrimpGuardTM</p>
                                              <p> 10%faster growth and 0.2– <br className='br_none'></br> 0.5 improvement in FCRwith <br className='br_none'></br>FishJumbo <sup>TM</sup></p>
                                          </div>
                                      </div>
                                      
                                    <div className={` clearance_elements`}>
                                          <div className='clearance mb-3'>
                                              Rapid viral clearance- in 10 days
                                          </div>
                                          <div className='clearance mb-3'>
                                              70% reduction in antibiotic use
                                          </div>
                                          <div className='clearance mb-3'>
                                              Upto 45x improved survival
                                          </div>
                                          <div className='clearance mb-3'>
                                              30% Reduction in feed costs
                                          </div> 
                                    </div> 
                                  </div> 
                              </div>

                              <div className="col-md-4 col-12"> 
                                    <div className='d-flex justify-content-end flex_img_width'>
                                        <img
                                          src="/image/slq.png"
                                          style={{width:'80%', height:'80%'}}
                                          alt='apid viral clear' 
                                          className=''
                                        />  
                                    </div>       
                                    
                                    <p className='mb-0 mt-3 d-flex justify-content-end'>
                                        <Link href="/" className='purpleColor fw-medium'>Aquaculture solutions <HiArrowNarrowRight/></Link> 
                                    </p>
                              </div> 
                          </div>  
            </div>
        </React.Fragment>
      ),
    },
  ];

const SolaqSlider = () => {
  
 const swiperRef = useRef(null); 
 const [currentSlide, setCurrentSlide] = useState(0); 

  return (  

    <div className="slider-container w-100 " >

       <div className="container d-flex justify-content-between align-items-center flexwrap "> 
        <div className=''>
              <span className="rounded-pill buge-style buge_mini" >POWERED BY BIOTECH. BACKED BY SCIENCE. SUSTAINED BY NATURE.</span>
              <h1 className="m-top-b h1500 h11536 moH1">THAT’S WHY WE BUILT SOLAQ<sup>TM</sup></h1> 
        </div>
        <div className='d-flex justify-content-end  w100Mobile'>
               <div className={`${styles.countscroll}`}>
                  <div 
                    className='d-flex justify-content-center align-items-center'
                      onClick={() => swiperRef.current.slidePrev()}
                      style={{ cursor: "pointer" }}
                  > <MdArrowBackIos size={24} /></div>

                  <div className={`d-flex justify-content-center align-items-center ${styles.values}`}><span> {String(currentSlide + 1).padStart(2, "0")}</span></div>
                  <div 
                      className='d-flex justify-content-center align-items-center'
                      onClick={() => swiperRef.current.slideNext()}
                    style={{ cursor: "pointer" }}
                  ><MdArrowForwardIos size={24} /></div>
            </div>
        </div>
     </div>
      <SwiperCustom
        className="d-nxone"
        ref={swiperRef}
        data={slides}
        slidesPerView={1.2} 
        centeredSlides={true}
        spaceBetween={15}
        loop
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        breakpoints={{ 
              centeredSlides:true,
              0: { slidesPerView:1.03}, 
              767:{slidesPerView:1.2}
          }}
        renderSlide={(slide) => (
          <div className={slide.className}>
            {slide.jsx}
          </div>
        )} 
      />  
    </div>
  );
};

export default SolaqSlider; 
