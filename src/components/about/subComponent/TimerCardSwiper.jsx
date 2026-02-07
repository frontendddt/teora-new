
"use client";
import Styles from "../stickyAbout.module.css";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { LinkCustom } from "@/components/common/Custom";
import { ImageCustom } from "@/components/common/Custom";
import Image from "next/image";
import { Autoplay } from 'swiper/modules';
import { MdArrowOutward } from "react-icons/md";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";
import { Buges } from "@/components/common/Custom";
import { IoIosWarning } from "react-icons/io";
const TimerCardSwiper = ({ cardcontant, heading, varient = "default", headingstyle, resume, timeSwiperHeading, explore = true }) =>
{
    const { fadeLeft, fadeRight } = useAnimationContext();
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() =>
    {
        const observer = new IntersectionObserver(
            ([entry]) =>
            {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current)
        {
            observer.observe(sectionRef.current);
        }

        return () =>
        {
            if (sectionRef.current)
            {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    useEffect(() =>
    {
        if (!isVisible) return;
        const interval = setInterval(() =>
        {
            setProgress(prev => (prev >= 100 ? 100 : prev + 1));
        }, 35);

        return () => clearInterval(interval);
    }, [isVisible]);
    useEffect(() =>
    {
        if (progress >= 100 && isVisible)
        {
            swiperRef.current?.slideNext();
            setProgress(0);
        }
    }, [progress, isVisible]);


    const handleNavClick = (index) =>
    {
        swiperRef.current?.slideToLoop(index);
    };

    const onSlideChange = (swiper) =>
    {
        setActiveIndex(swiper.realIndex);
        setProgress(0);
    };


    const renderCardContent = (slide, index) =>
    {
        if (varient === "whyusTimerDesign")
        {
            return (
                <div className="card_table_container whyUstimerSweeperCard_height d-flex flex-column justify-content-between">
                    <div className={`purpleColor ${Styles.whyustimerSliper}`}>
                        <div className="p-all pb-1 h3lineHeights paddingAll15">
                            <h3 className="text-center fw-400 ">{slide.heading_before_break} <br className="none576" /> {slide.heading_after_break}</h3>
                        </div>

                        <table className={`purpleColor ${Styles.table_borders}`}>
                            <thead>
                                <tr>
                                    <th>OTHERS</th>
                                    <th>TEORA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> {slide.tableTrtd1}</td>
                                    <td> {slide.tableTrtd2}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="adoption_sections">
                        <ImageCustom
                            className="text-primaryBeige"
                            src={slide.img}
                            alt={`${slide.alt}`}
                            title="YOUR WIN"
                            discretion={slide.imgTitle}
                        />
                    </div>

                </div>
            )
        }
        if (varient === "awardsmedia")
        {
            return (
                <div className={`awardsmedia_section d-flex purpleColor 
                                    ${slide.heading ? 'flex-column flex-column-reverse' : ''}
                                    ${index <= 1 ? '' : Styles.paddingManage}
                                    `}
                    style={index <= 1 ? {} : { padding: '2rem' }}
                >
                    <ImageCustom
                        src={slide.img}
                        alt={slide.title}
                    />
                    <div className={` ${slide.heading ? Styles.padd_2rem : Styles.padd_2_5rem}`} >
                        {slide.heading && <h4>{slide.heading}</h4>}
                        {slide.title && <p>{slide.title}</p>}
                        <div className="d-flex justify-content-end">
                            <strong className="d-flex align-items-center gap-1">
                                <Link className="purpleColor" target="_blank" href={slide.readMore_link}>Read </Link> <FaArrowRightLong />
                            </strong>
                        </div>
                    </div>
                </div>
            )
        }

        if (varient === "aquacultureTimerDesign")
        {
            return (
                <div className={` ${slide.cardBg} ${Styles.aquaculture_height}`}>
                    {(slide.slide1 || slide.slide3) && (
                        <React.Fragment>
                            <div className="padding2rem purpleColor">
                                <h4 className="mb-3">{slide.heading}</h4>
                                {slide.description && <p className="p14">{slide.description}</p>}
                                {slide.slide3 && (
                                    <React.Fragment>
                                        <Buges extraClass="accentRedBg text-primaryBeige d-inline-block w-100 mb-2" label="PCR-confirmed infection is detected in yours or neighbouring farm" />
                                        <Buges extraClass="yellowbg purpleColor d-inline-block w-100 mb-2" label="Pathogen specific clinical signs or symptoms begin to appear" />
                                        <Buges extraClass="accentBlueBg purpleColor d-inline-block w-100 mb-2" label="Early Disease signs are seen but is not yet spread." />
                                    </React.Fragment>
                                )}
                            </div>
                            <ImageCustom
                                src={slide.img}
                                alt="slider imag 1"
                                style={{ height: 300, }}
                            />
                        </React.Fragment>
                    )}
                    {slide.slide2 && (
                        <div className="padding2rem purpleColor">
                            <h4 className="mb-3">{slide.heading}</h4>
                            <Buges extraClass="accentRedBg text-primaryBeige" label="WITHOUT EARLY INTERVENTION" />
                            <ul className="list-unstyled purpleColor mt-4">
                                {[
                                    "Shrimp immune systems are too slow to control fast-replicating pathogens especially in high density environments.",
                                    "Mortality rises sharply within days",
                                    "Entire ponds can be lost in 3–10 days depending on pathogen virulence."
                                ].map((text, index) => (
                                    <li key={index}>
                                        <div className="d-flex gap-3">
                                            <div
                                                className="accentRedBg d-flex justify-content-center align-items-center"
                                                style={{
                                                    height: 25,
                                                    padding: "4px 4px",
                                                    borderRadius: "50%",
                                                    color: "#fcc150"
                                                }}
                                            >
                                                <IoIosWarning />
                                            </div>
                                            <p className="p14 mb-2 mb-sm-0">{text}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div style={{ borderLeft: '3px solid red', paddingLeft: '1rem' }}>
                                <h5>Even minor delays in action <br />
                                    lead to massive survival<br />
                                    losses and pond collapse.</h5>
                            </div>

                        </div>
                    )}
                    {slide.slide4 && (
                        <React.Fragment>
                            <div className="padding2rem">
                                <h4 className="mb-1 mb-sm-3 purpleColor">{slide.heading}</h4>
                            </div>

                            <div className={`table-responsive ${Styles.tablesBr}`}>
                                <table className="table text-center align-middle mb-0">
                                    <thead>
                                        <tr>
                                            {["Hatchery and Nursery", "Grow-Out stages"].map((title, index) => (
                                                <th key={index} className={index === 0 ? "border-end" : ""}>
                                                    {title}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            {[
                                                {
                                                    text: "Pathogen specific early stage intervention to protect juvenile shrimp during vulnerable development phases.",
                                                    img: "/image/shrimp-mouse1.webp"
                                                },
                                                {
                                                    text:
                                                        "Early stage intervention & extended protection in grow-out ponds, critical to preventing losses due to outbreaks.",
                                                    img: "/image/shrimp-mouse1.webp"
                                                }
                                            ].map((item, index) => (
                                                <td key={index} className={index === 0 ? "border-end" : ""}>
                                                    <p className="mb-3 p14">{item.text}</p>
                                                    <Image
                                                        src={item.img}
                                                        alt=""
                                                        width={250}
                                                        height={250}
                                                        className="img-fluid rounded"
                                                    />
                                                </td>
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </React.Fragment>
                    )}
                    {slide.slide5 && (
                        <div className={`purpleColor ${Styles.tablesBr}`}>
                            <h4 className="text-center p-2 p-sm-4">How Shrimptrident Works?</h4>
                            <table className={`table text-center align-middle mb-0`}>
                                <tbody>
                                    {[
                                        {
                                            content: "Detect & Confirm",
                                            strong: true,
                                            center: true,
                                        },
                                        { content: "Pathogen signs are detected early on-farm—via qPCR, clinical cues, or a drop in feeding. ShrimpTrident is timed for this window—before clinical spread escalates", },
                                        {
                                            content: "Target. Activate. Intervene. Stabilise",
                                            strong: true,
                                        },
                                        {
                                            content: "Depending on the pathogen, ShrimpTrident activates one of two biological mechanisms",
                                        },
                                    ].map((row, index) => (
                                        <tr key={index}>
                                            <td
                                                colSpan={2}
                                                className={row.center ? "text-center" : ""}
                                            >
                                                {row.strong ? <strong>{row.content}</strong> : row.content}
                                            </td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <th>RNAi</th>
                                        <th>Multi Peptide</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            Feed-delivered, ShrimpTrident biologic
                                            triggers the shrimp’s innate gene-
                                            silencing machinery (Dicer, RISC
                                            complex) to degrade viral RNA,
                                            slowing viral replication while pushing
                                            down pond viral loads.
                                        </td>
                                        <td>
                                            Peptides modulate immune effectors,
                                            disrupt bacterial virulence factors or
                                            critical pathways, blocking disease
                                            progression while supporting
                                            epithelial & gut integrity.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="refrange_headings text-center text-primaryBeige purpleBg mb-2">Shrimp hold performance longer—even under pathogen pressure.</p>
                        </div>
                    )}
                    {slide.slide6 && (
                        <div className="padding2rem">
                            <ul className="list-unstyled text-primaryBeige">
                                {[
                                    {
                                        text: "Pathogen-speciﬁc response—ensuring precise, effective immune support.",
                                        img: "/icons/aqua-group-icon1.png",
                                    },
                                    {
                                        text: "Rapid impact, faster recovery & Proven to reduce pathogen load.",
                                        img: "/icons/aqua-group-icon2.png",
                                    },
                                    {
                                        text: "Protects yield, reduces mortality, helps maintain harvest quality, size, and productivity.",
                                        img: "/icons/aqua-group-icon3.png",
                                    },
                                    {
                                        text: "Administered at ﬁrst signs of infection to limit spread, reduce mortality & safeguard harvest potential at risk",
                                        img: "/icons/aqua-group-icon4.png",
                                    },
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="d-flex align-items-center gap-3 mb-2 mb-sm-3"
                                    >
                                        <Image
                                            src={item.img}
                                            width={85}
                                            height={85}
                                            alt="icon"
                                        />
                                        <p className="p14">
                                            <strong>{item.text}</strong>
                                        </p>
                                    </li>
                                ))}
                            </ul>


                        </div>
                    )}

                </div>
            )
        }
        return (
            <div className="cardslider purpleColor max-heightsSwip d-flex flex-column justify-content-between">
                <div className={` ${Styles.card_content} ${timeSwiperHeading || ""}`}
                    style={slide.readMore_link ? { padding: "10px 15px 5px 15px !important" } : {}} >
                    <h4 className="f-600" style={{ display: 'inline-block', maxWidth: '300px', ...headingstyle }}>
                        {slide.heading}
                    </h4>
                    {slide.title && <p className="mb-0 mt-0">{slide.title}</p>}
                </div>
                <div className="align-items-end">
                    <ImageCustom
                        src={slide.img}
                        alt={slide.heading}
                        className="cardImage_heights"
                    />
                </div>
            </div>
        )
    }

    return (
        <>
            <div ref={sectionRef} className={`animate-wrapper ${Styles.proprietarySection}`}>
                <div className={`mb-1 md-mb-4  ${resume ? 'd-flex justify-content-between align-items-center flex-wrap ' : ''}`}>
                    <h2 className={`text-primaryBeige  ${Styles.margin_bottom} ${varient === "whyusTimerDesign" ? 'aquaHeadings150' : ''}`} >
                        {heading}
                    </h2>
                    {resume?.show && (
                        <LinkCustom
                            href={resume.href}
                            label={resume.label}
                            className="buttons-Beige" />
                    )}
                </div>

                <div className="row">
                    <MotionWrapper className="col-md-6 d-flex flex-column justify-content-between"
                        variant={fadeLeft}
                    >
                        <div>
                            <div className={Styles.progress}>
                                <div
                                    className={Styles['progress-bar']}
                                    style={{ width: `${progress}%`, transition: 'width 0.35s linear' }}
                                ></div>
                            </div>
                            <div className={Styles['progress-label']}>
                                {String(activeIndex + 1).padStart(2, '0')}/{String(cardcontant.length).padStart(2, '0')}
                            </div>

                            <ul className={`list-unstyled activelistCard ${Styles.navList}`}>
                                {cardcontant.map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleNavClick(index)}
                                        //  onClick={() => swiperRef.current.slideToLoop(index)}
                                        className={` ${Styles.navItem} ${index === activeIndex ? 'active' : ''}`} style={{ cursor: 'pointer' }}>
                                        <div className="d-flex gap-0 gap-md-4 align-items-center mb-md-3 mb-1 text-primaryBeige">
                                            <div className="h-100" style={{ width: '50px' }}>
                                                {index === activeIndex &&
                                                    <span className={Styles.activeIconst}>
                                                        <div className={`${Styles.activeArraw}`}>
                                                            <MdArrowOutward className="purpleColor" />
                                                        </div>
                                                    </span>}
                                            </div>
                                            <div className={`${Styles.activeText}`}>
                                                <h4>{item.listActive}</h4>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {!resume && explore && (
                            <div className="buttons d-flex gap-2 none576" style={{ marginLeft: '2rem' }}>
                                <Link className="buttons-primary " href="/">Explore Platform</Link>
                            </div>
                        )}
                    </MotionWrapper>

                    <MotionWrapper className="col-md-6"
                        variant={fadeRight}>
                        <div className={`corporateBg ${Styles.border_radiusEl} border_radiusEl`}>
                            <Swiper
                                modules={[Autoplay]}
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                onSlideChange={onSlideChange}
                                slidesPerView={1}
                                loop={true}
                                speed={800}
                                autoplay={{ delay: 4000, disableOnInteraction: false }}
                                grabCursor={true}
                            >
                                {cardcontant.map((slide, index) => (
                                    <SwiperSlide key={index}>
                                        {renderCardContent(slide, index)}
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </MotionWrapper>

                </div>
            </div>
        </>
    )
}

export default TimerCardSwiper;