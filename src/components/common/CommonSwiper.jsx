"use client"
import { useState } from "react";
import React from "react";
import styles from "./css/CommonSwiper.module.css";
import SwiperCustom from "@/components/common/SwiperCustom";
import { useRef } from "react";
import SwiperControler from "@/components/common/SwiperControler";
import { ImageCustom } from "@/components/common/Custom";
import Image from "next/image";
import CircalSwiper from "./CircalSwiper";
import { LinkCustom } from "@/components/common/Custom";

const circalsData = [
    {
        img: "/icons/solaq-swip-icon2.webp",
        title: "MIX OUR BIOLOGICS WITH A NATURAL, FOOD-SAFE BINDER",
    },
    {
        img: "/icons/farm.png",
        title: "EVENLY SPRAY-COAT ONTO SHRIMP FEED PELLETS, MIX & DRY.",
    },
    {
        img: "/icons/solaq-swip-icon3.webp",
        title: "FEED YOUR SHRIMP BASED ON SHRIMP GUARD PROGRAM GUIDE",
    },
];


const CommonSwiper = ({ data = [], variant = "", heading = "" }) =>
{
    const swiperRef = useRef();
    const [currentSlide, setCurrentSlide] = useState(1);
    return (
        <div>
            <div className="container d-flex justify-content-between align-items-center flexwrap ">
                <div>
                    <h2 className="m-top-b h1500 h11536 moH1 text-primaryBeige">{heading}</h2>
                </div>
                <SwiperControler
                    swiperRef={swiperRef}
                    slideCounter={currentSlide}
                    className={`w100Mobile ${styles.countscroll}`}
                />

            </div>

            <SwiperCustom
                ref={swiperRef}
                data={data}
                slidesPerView={1.2}
                spaceBetween={40}
                loop={true}
                centeredSlides={true}
                className={styles.swiper_wrraper}
                breakpoints={{
                    0: { slidesPerView: 1.05, spaceBetween: 10 },
                    992: { slidesPerView: 1.2 }
                }}
                onSlideChange={(swiper) =>
                {
                    setCurrentSlide(swiper.realIndex + 1);
                }}
                renderSlide={(item, index) => (
                    <>
                        {(variant === "solaqSwiper" || variant === "aquaculture") && (
                            <div className={`slide_containe ${item.cardBg} position-relative`}>
                                <p className={variant === "aquaculture" ? 'text-end mb-0' : ''}><strong>0{data.length}/0{index + 1}</strong></p>
                                <div className="row">
                                    {variant === "solaqSwiper" && (
                                        <React.Fragment>
                                            <div className={`col-md-9 c0l-12`}>
                                                <div className={`${styles.slicky_p}`}>
                                                    <span className={`rounded-pill buge-style ${item.bugeBg} ${item.bugeColor}`} >{item.bugeLable}</span>
                                                    <h4 className={`pb-2 mt-2 pb-sm-4  ${item.textColor}`}>
                                                        {item.title}
                                                    </h4>
                                                    <p className={`fw-500 mb-0  ${item.textColor}`}>
                                                        {item.description}
                                                    </p>
                                                    <h5 className={`mt-2 mt-sm-3 ${item.textColor}`}>{item.footerTitle}</h5>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-12 d-flex justify-content-center align-items-center desctop_view">
                                                <ImageCustom
                                                    src={`/icons/${item.img}`}
                                                    alt={item.title}
                                                    className={styles.solaqswiper_img}
                                                    style={{ width: 230, height: 230 }}
                                                />
                                            </div>
                                        </React.Fragment>
                                    )}
                                    {variant === "aquaculture" && (
                                        <React.Fragment>
                                            <div className={item.slide2 || item.slide4 ? 'col-md-4' : 'col-md-8'}>
                                                {item.slide1 && (
                                                    <div className="d-flex flex-sm-nowrap flex-wrap">
                                                        <div className={styles.maxw}>
                                                            <Image
                                                                src={'/icons/proctive.png'}
                                                                width={155}
                                                                height={155}
                                                                alt="image"
                                                            />
                                                        </div>
                                                        <div className="p-2 p-lg-5 pt-0">
                                                            <span className="rounded-pill buge-style accentRedBg text-primaryBeige">PROACTIVE IMMUNE READINESS</span>
                                                            {item.discrep && <p className={`purpleColor ${styles.plist}`}>{item.discrep}</p>}
                                                        </div>
                                                    </div>
                                                )}
                                                {item.slide2 && <h4 className="purpleColor">{item.headings}</h4>}

                                                {item.slide4 && (
                                                    <div className="text-primaryBeige">
                                                        <Image
                                                            src="/icons/cadence.png"
                                                            width={130}
                                                            height={130}
                                                            alt="image"
                                                        />
                                                        <h6>INCLUSION & CADENCE</h6>
                                                        {[
                                                            {
                                                                title: <>ShrimpGuard<sup>TM</sup> Hatchery</>,
                                                                desc: "2% (20 g/kg feed), 5 consecutive days, monthly, Mixed into brood-stock feed.",
                                                            },
                                                            {
                                                                title: <>ShrimpGuard<sup>TM</sup> Grow-out</>,
                                                                desc: "1% (10 g/kg feed), 3 consecutive days, weekly, Top-dressed on regular feed.",
                                                            },
                                                        ].map((item, index) => (
                                                            <div key={index}>
                                                                <p className="refrange_headings text-center text-primaryBeige lightredBg mb-0">
                                                                    {item.title}
                                                                </p>
                                                                <p className="p14 mt-1" style={{ fontSize: 16 }}>{item.desc}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {item.slide5 && (
                                                    <div className="">
                                                        <h4 className="mb-2">HOW SHRIMPGUARD <sup>TM</sup>  WORKS ?</h4>
                                                        <div className="row">
                                                            {[
                                                                {
                                                                    title: "Sense & Prime",
                                                                    text: (
                                                                        <React.Fragment>
                                                                            Feed-delivered bioactive in ShrimpGuard <sup>TM</sup> nudge shrimp’s early
                                                                            immune sensors (TLRs/lectins), helping them detect pathogens faster—
                                                                            without using any live or inactivated pathogens.
                                                                        </React.Fragment>
                                                                    ),
                                                                },
                                                                {
                                                                    title: "Sense & Prime",
                                                                    text: (
                                                                        <React.Fragment>
                                                                            Activates key innate pathways—more immune cells on patrol, faster alarms,
                                                                            tighter control through natural antimicrobial response.
                                                                        </React.Fragment>
                                                                    ),
                                                                },
                                                                {
                                                                    title: "Act & Defend",
                                                                    text: (
                                                                        <React.Fragment>
                                                                            Primed shrimp show faster AMP release, phagocytosis, and melanisation,
                                                                            helping limit spread before symptoms appear.
                                                                        </React.Fragment>
                                                                    ),
                                                                },
                                                                {
                                                                    title: "Sustained Readiness",
                                                                    text: (
                                                                        <React.Fragment>
                                                                            Short feed programs reinforce immune alertness during high-risk periods,
                                                                            helping maintain health and consistent performance.
                                                                        </React.Fragment>
                                                                    ),
                                                                },
                                                            ].map((item, index) => (
                                                                <div className="col-md-6" key={index}>
                                                                    <p className="refrange_headings text-center text-primaryBeige purpleBg mb-2 mt-2">
                                                                        {item.title}
                                                                    </p>
                                                                    <p className="p14" style={{ fontSize: 17 }}>{item.text}</p>
                                                                </div>
                                                            ))}
                                                        </div>

                                                    </div>
                                                )}
                                            </div>

                                            <div className={item.slide2 || item.slide4 ? 'col-md-8' : 'col-md-4 d-flex align-items-end'}>
                                                {item.slide1 && <h4 className="purpleColor">{item.headings}</h4>}
                                                {item.slide2 && (
                                                    <div className="d-flex gap-2 gap-md-5">
                                                        {[
                                                            {
                                                                img: "/image/hatchery.webp",
                                                                text: `Feed-based immune priming for brood-
                                                                       stock and early life stages—supports
                                                                       readiness & maternal immune resilience.`,
                                                            },
                                                            {
                                                                img: "/image/grow-out.webp",
                                                                text: `Feed-based readiness and health
                                                                       support through stress and disease-risk
                                                                       windows in grow-out stages.`,
                                                            },
                                                        ].map((slide, index) => (
                                                            <div key={index} className={styles.slide2width}>
                                                                <ImageCustom
                                                                    src={slide.img}
                                                                    style={{ width: "100%", height: 230 }}
                                                                    alt={slide.text}
                                                                />
                                                                <p className="text-center mt-2 purpleColor p14">{slide.text}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                                {item.slide4 && (
                                                    <div className="text-primaryBeige">
                                                        <h4 className="mutedLavenderColor mt-2 mb-2 mb-md-5">How to use ShrimpGuard<sup>TM</sup></h4>
                                                        <CircalSwiper
                                                            data={circalsData}
                                                            width={150}
                                                            height={150}
                                                            w100="w-100"
                                                            extraClassul={`gap-0 gap-md-3 ${styles.aquacultureClass}`}
                                                        />
                                                    </div>
                                                )}
                                                {item.slide5 && (
                                                    <div className={`${styles.slide5img} none768`}>
                                                        <ImageCustom
                                                            src="/image/stockthe_future.png"
                                                            style={{
                                                                width: '100%',
                                                                height: '100%',
                                                            }}
                                                        />
                                                    </div>

                                                )}
                                            </div>
                                        </React.Fragment>
                                    )}
                                </div>
                            </div>
                        )}
                        {variant === "industries" && (
                            <div className={`slide_containe ${styles.industry} ${item.cardBg} overflow-hidden`}>

                                <div className="row h-100">
                                    <div className={`col-md-7 c0l-12`}>
                                        <div className={`d-flex flex-column justify-content-between ${styles.industrySwiper}`}>
                                            <div>
                                                <p className="mb-3">03/0{index + 1}</p>
                                                {item.slide3 && <h4 className="purpleColor">Protect And GrowYour Crops With Clean, Residue-Free Biotech That EnhancesYield—Naturally.</h4>}
                                            </div>
                                            {item.slide1 && (
                                                <div className="slide-one">
                                                    <h2 className="accentRedColor" style={{ fontSize: '80px !important' }}>40%</h2>
                                                    <h2 className="fw-500 purpleColor">of global crop is lost annually to  Pests and diseases.</h2>
                                                    <h3 className="accentRedColor">$220 Billion annual losses</h3>
                                                </div>
                                            )}
                                            {item.slide2 && (
                                                <div className="d-flex gap-3">
                                                    <Image src={"/icons/industry-slide-icon1.png"} width={100} height={100} alt="image" />
                                                    <div>
                                                        <h4>Spray-On Protection: Spray. Grow. Sustain.</h4>
                                                        <p>
                                                            Teora’s foliar-applied plant biologics boost immunity at the root
                                                            level, reduce chemical dependency, and restore soil health.
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                            {item.slide3 && (
                                                <div className="purpleColor">
                                                    <p>We are currently at research phase and working on</p>
                                                    <div className="d-flex gap-3">
                                                        <span>
                                                            <p className="shrimpGuard purpleBg lightblueColor text-center">Proactive Protective Shield</p>
                                                            <p className="p14">Foliar disease protection biologics (cacao, papaya, rice)</p>
                                                        </span>
                                                        <span>
                                                            <p className="shrimpGuard purpleBg lightblueColor text-center ">Proactive Protective Shield</p>
                                                            <p className="p14">Foliar disease protection biologics (cacao, papaya, rice)</p>
                                                        </span>
                                                    </div>
                                                </div>
                                            )}


                                        </div>
                                    </div>
                                    <div className="col-md-5 col-12 d-flex justify-content-end align-items-center desctop_view position-relative">
                                        <ImageCustom
                                            src={`/${item.image}`}
                                            alt={item.title}
                                            className={styles.solaqswiper_img_industry}
                                            borderRadius={30}
                                        />
                                        {item.imagLink && (
                                            <div style={{
                                                position: 'absolute',
                                                bottom: 25,
                                                right: 60
                                            }}>
                                                <LinkCustom
                                                    href={item.imagLink} label="Contact Us For More Information"
                                                    className="buttons-Beige"
                                                />
                                            </div>
                                        )}
                                    </div>

                                </div>

                            </div>
                        )}
                    </>
                )}
            />

        </div>
    )
}
export default CommonSwiper;