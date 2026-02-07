"use client"
import { useEffect, useRef } from "react";
import styles from "../aquaculture.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LinkCustom } from "@/components/common/Custom";
import { ImageCustom } from "@/components/common/Custom";
gsap.registerPlugin(ScrollTrigger);


const data = [
    {
        headings: "Precision Design",
        image: "solaq-work1.webp",
        descriptionsHeading: "Bioinformatics & Synthetic Biology",
        descriptions: "Our bioinformatics engine scans host and pathogen genomes to  identify molecular “switches” that control immunity and growth— enabling fast, precise design of peptide, protein, or RNA-based biologics using advanced synthetic biology."
    },
    {
        headings: " ",
        image: "slack-2.webp",
        descriptionsHeading: " ",
        descriptions: "This Allows Targeting Only Intended Pathway, Immune Activation, Replication Interference, Or Growth Optimisation With High Specificity While Protecting The Microbiome."
    },
    {
        headings: "Sustainable Manufacturing",
        image: "slack-3.webp",
        descriptionsHeading: "Precision Fermentation",
        descriptions: "We use Precision Fermentation where food-grade microbes act as “tiny factories” to brew our biologics.It is 100% natural, renewable with zero toxic byproducts."
    },
    {
        headings: "Farm-ready stability",
        image: "slack-4.webp",
        descriptionsHeading: "Microencapsulation & Delivery",
        descriptions: "Each biologic is micro-coated to survive transport, storage, and digestion—spray- coated onto regular feed with a natural binder for consistent dosing, no texture change, and targeted release.Shelf - stable.No cold chain.For farmers, it means immediate adoption, no workflow change, and stress - free delivery."
    },
]

const AquacultureDisease = () =>
{
    const containerRef = useRef(null);

    useEffect(() =>
    {
        const container = containerRef.current;
        if (!container || data.length === 0) return;

        const ctx = gsap.context(() =>
        {
            gsap.set(container, {
                display: "flex",
                flexDirection: "row",
            });

            const totalScrollWidth = container.scrollWidth;
            const viewportWidth = window.innerWidth;
            const startX = viewportWidth * 0.4;

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
        }, container);
        return () => ctx.revert();
    }, [data]);

    return (
        <section className="corporateBg position-relative">
            <div style={{ overflowX: "hidden" }}>
                <div ref={containerRef} className="container z-2">
                    {data.map((slide, index) => (
                        <div
                            key={index}
                            className={`d-flex align-items-center ${styles.swipcard_w}`}>

                            <div className={`purpleBg ${styles.scrollingCard}`}>
                                <div className="row h-100">
                                    <div className="col-12 h-auto">
                                        <p className="text-end text-white mb-0"><em>0{data.length}/0{index + 1}</em></p>
                                        {slide.headings ? <h2 className="mutedLavenderColor mb-0">{slide.headings}</h2> : ''}
                                    </div>
                                    <div className="col-md-5">
                                        <ImageCustom
                                            src={`/image/${slide.image}`}
                                            alt={slide.headings || "image"}
                                            className={styles.slackimage}
                                        />
                                    </div>
                                    <div className="col-md-7 d-flex align-items-end">
                                        <div className="text-primaryBeige">
                                            <h5 className="mutedPurpleColor">{slide.descriptionsHeading}</h5>
                                            <p>{slide.descriptions}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="purpleColor"
                style={{
                    position: "absolute",
                    left: "5%",
                    top: 350,
                }}
            >
                <h2>
                    Powered by SOLAQ
                </h2>
                <h5>
                    A biology-ﬁrst approach to shrimp  <br />
                    protection and health management

                </h5>
                <LinkCustom label="The Science" href="" className="buttons-primary" />
            </div>
        </section>
    );
};

export default AquacultureDisease;
