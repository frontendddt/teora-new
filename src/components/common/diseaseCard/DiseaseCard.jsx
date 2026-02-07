"use client"
import { useEffect, useRef } from "react";
import styles from "./diseaseCard.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LinkCustom } from "@/components/common/Custom";
import { ImageCustom } from "@/components/common/Custom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


const DiseaseCard = ({ data = [], variant = "" }) =>
{
    const containerRef = useRef(null);

    useEffect(() =>
    {
        const container = containerRef.current;

        gsap.set(container, {
            display: "flex",
            flexDirection: "row",
        });

        const totalScrollWidth = container.scrollWidth;
        const viewportWidth = window.innerWidth;
        const startX = viewportWidth * 0.8;

        gsap.set(container, {
            x: startX,
        });

        gsap.to(container, {
            x: -(totalScrollWidth - viewportWidth),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                start: "top top",
                end: () => `+=${totalScrollWidth}`,
            },
        });

        return () =>
        {
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <section className="corporateBg position-relative" >
            <div className="" style={{ overflow: "hidden" }}>
                <div ref={containerRef} className="container z-2">
                    {data.map((slide, index) => (
                        <div
                            key={index}
                            className={`d-flex align-items-center ${styles.swipcard_w}`}>
                            <div className={`purpleBg d-flex flex-column justify-content-between ${styles.scrollingCard}`}>
                                <div>
                                    <p className="mutedLavenderColor"><strong>{slide.disease}</strong> </p>
                                    <h2 className="mutedLavenderColor mb-0 mb-sm-2">{slide.headings}</h2>
                                    {slide.linkLable && (
                                        <LinkCustom
                                            className="text-primaryBeige"
                                            p0="p-0"
                                            label={
                                                <span>
                                                    {slide.linkLable} <HiOutlineArrowNarrowRight />
                                                </span>
                                            }
                                            href="" />
                                    )}
                                </div>

                                <div className="row">
                                    {slide.showImage && (
                                        <div className="col-md-5">
                                            <ImageCustom
                                                src="/image/shrimp-mouse1.webp"
                                                alt="shrimp image"
                                                className={styles.stickSwiper_img}
                                            />
                                        </div>
                                    )}

                                    <div className={slide.showImage ? "col-md-7" : "col-12 d-flex justify-content-end"}>
                                        {slide.rightContent}

                                        {slide.bullets && (
                                            <ul className="p-0">
                                                {slide.bullets.map((item, i) => (
                                                    <li key={i} >
                                                        <div className="d-flex align-content-center gap-2 mb-1 mb-sm-3">
                                                            <div style={{ width: 35, height: 35 }}>
                                                                <ImageCustom
                                                                    src={`/icons/${item.iconsImage}`}
                                                                    alt={item.title}
                                                                    style={{ width: 35, height: 35 }}
                                                                />
                                                            </div>

                                                            <span className={styles.icontext}>
                                                                {item.title && (
                                                                    <h5 className="mutedLavenderColor">{item.title}</h5>
                                                                )}
                                                                {item.desc && (
                                                                    <span className="text-primaryBeige" >
                                                                        {item.desc}
                                                                    </span>
                                                                )}
                                                            </span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>


                        </div>
                    ))}
                </div>
            </div>

            <div className="purpleColor"
                style={{
                    position: 'absolute',
                    left: '5%',
                    top: 350
                }}
            >
                <h2>SOLAQ<sup>TM</sup> Impact</h2>
                <h5>
                    Proven in Aquaculture Across <br />
                    Species, Trials, and Geographies
                </h5>
                <LinkCustom
                    label="Request Trial Results"
                    href=""
                    className="buttons-primary"
                />
            </div>
        </section>
    )
}
export default DiseaseCard;