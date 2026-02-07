"use client"
import styles from "./aquaculture.module.css";
import React from "react";
import Link from "next/link";
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";
import
{
    benefitsAquaculturedata,
    CommonAquaculturedata,
    infoWhyShrimpAquacultureData,
    InfoCardfutureAquacultureData,
    stackCardAquacultureData,
    timerAquacultureData,
    footerAquacultureData
} from "@/data/aquacultureData";
import { SectionInfo, LinkCustom, Paragraphs, ImageCustom } from "@/components/common/Custom";
import ProtectingGrid from "./component/ProtectingGrid";
import InfoCard from "@/components/whyus/InfoCard";
import HealthManagment from "./component/HealthManagment";
import BenefitsSwiper from "../solaq/component/BenefitsSwiper";

import AquacultureDisease from "./component/AquacultureDisease";
import StickySections from "@/components/common/StickySections";
import CommonSwiper from "@/components/common/CommonSwiper";
import AwardCard from "@/components/common/AwardCard";
import BlogSection from "@/components/home/BlogSection";
import Accordion from "@/components/common/Accordion";
import TimerCardSwiper from "@/components/about/subComponent/TimerCardSwiper";
import StackedCards from "@/components/about/subComponent/StackedCards";
import { FaArrowRightLong } from "react-icons/fa6";
import { Buges } from "@/components/common/Custom";
import { CiCircleCheck } from "react-icons/ci";

import aquaculturte_bg1 from "../../../../public/bgImage/aquaculturte-bg1.webp";
import aquaculturte_bg2 from "../../../../public/bgImage/aquaculturte-bg2.webp";
import aquaculturte_bg3 from "../../../../public/bgImage/aquaculturte-bg3.webp";
import protecting from "../../../../public/image/protecting.webp";

const diseaseCardData = [
    {
        id: 1,
        showImage: false,
        disease: "DISEASE & GROWTH MANAGEMENT",
        headings: "Shrimp&Fish Trials",
        linkLable: "Request Trial Results",
        hrefs: "",
        rightContent: (
            <div className={`d-flex gap-4 align-items-center justify-content-end ${styles.slideText}`} style={{ maxWidth: 900 }}>
                <ImageCustom
                    src="/icons/red-arrow.webp"
                    alt="arrow"
                    style={{ width: 70, height: 130 }}
                />
                <div>
                    <h5 className="mutedLavenderColor">
                        10+ Independent Trials Across 5 Countries
                    </h5>
                    <p className="text-primaryBeige mb-0">
                        SOLAQ<sup>TM</sup> biologics have been validated across multiple shrimp
                        and fish species, in commercial ponds and lab-controlled studies,
                        spanning India, Vietnam, Indonesia, Thailand and Singapore, with no
                        negative impact on Feed Intake, Growth, or Behaviour and zero residue
                        concerns.
                    </p>
                </div>
            </div>
        ),
    },
    {
        id: 2,
        showImage: true,
        disease: "DISEASE & HEALTH MANAGEMENT",
        headings: "Shrimp Trial Outcomes",
        linkLable: "Request Trial Results",
        hrefs: "",
        bullets: [
            {
                iconsImage: "Group_9551.webp",
                title: "Upto 45X Higher i.e. >85% Survival",
                desc: "Across lethal viral & bacterial pressure vs 0-30% untreated control.",
            },
            {
                iconsImage: "Group_9553.webp",
                title: ">90% Pathogen Load Reduction",
                desc: "Consistent immune-gene up-regulation, Faster immune response.",
            },
            {
                iconsImage: "Group_9558.webp",
                title: "43.8% Higher Biomass At Harvest.",
                desc: "Driven by improved survival + stronger daily growth.",
            },
            {
                iconsImage: "Group_9560.webp",
                title: "55% Faster ADG & 131% Higher ABW",
                desc: "Higher Biomass, Fast Growth & Premium market size.",
            },
            {
                iconsImage: "Group_9565.webp",
                title: "Normal Harvest Cycles Restored",
                desc: "Emergency 60-day recovered to full 115-121 day harvests.",
            },
        ],
    },
    {
        id: 3,
        showImage: true,
        disease: "DISEASE MANAGEMENT",
        headings: "FishTrial Outcomes",
        linkLable: "Explore Products",
        hrefs: "",
        bullets: [
            {
                iconsImage: "Group_9571.webp",
                title: "Upto 45X Higher i.e. >80% Survival",
                desc: "Across lethal viral & bacterial pressure vs 10-30% untreated control.",
            },
            {
                iconsImage: "Group_9553.webp",
                title: "80–100% Pathogen Reduction",
                desc: "Across SDDV, Streptococcus Iniae, and other pathogens.",
            },
            {
                iconsImage: "Group_9558.webp",
                title: "0.2–0.5 Improvement In FCR",
                desc: "Fish maintain feed efficiency, &  health even during outbreak pressure.",
            },
            {
                iconsImage: "Group_9572.webp",
                title: "2–4× Higher Neutralising Antibody Levels ",
                desc: "Significantly enhanced protection against viral & bacterial loads with visible behavioural recovery.",
            },
            {
                iconsImage: "Group_9575.webp",
                title: "No Negative Impact On ADG Or Final Weight Across Trials.",
                desc: " ",
            },
        ],
    },
    {
        id: 4,
        showImage: true,
        disease: "GROWTH MANAGEMENT",
        headings: "FishTrial Outcomes",
        linkLable: "Explore Products",
        hrefs: "",
        bullets: [
            {
                iconsImage: "Group_9585.webp",
                title: "Up To 55% Faster Daily Growth (ADG)",
                desc: "Fish gained weight significantly faster across  multiple species trials.",
            },
            {
                iconsImage: "Group_9553.webp",
                title: "12–32% Higher Final Body Weight",
                desc: "Fish reached market size earlier, leading to more profitable harvest cycles.",
            },
            {
                iconsImage: "Group_9558.webp",
                title: "0.2–0.5 Improvement In FCR",
                desc: "Improved feed efficiency reduced feed required per kilogram of harvest biomass.",
            },
            {
                iconsImage: "Group_9572.webp",
                title: "22–44% Higher Harvest Biomass",
                desc: "Trials showed higher harvest output driven by better health and faster growth.",
            },
            {
                iconsImage: "Group_9575.webp",
                title: "Steady Feeding & Stress-Resilient Performance",
                desc: "Fish maintained healthy appetite and condition throughout production cycles.",
            },
        ],
    },

];


const Aquaculture = () =>
{
    const { fadeLeft, fadeRight } = useAnimationContext();
    return (
        <>
            <section className="section-space pb-0 purpleBg tectureBg animate-wrapper">
                <div className="container container2">
                    <div className="banner-padd">
                        <div className="row">
                            <MotionWrapper className="col-md-7" variant={fadeLeft} >
                                <span className="rounded-pill buge-style buge8">SOLUTIONS FOR SHRIMP AQUACULTURE</span>
                                <SectionInfo
                                    discreptionClass="mutedLavenderColor fw-500"
                                    infoWrrape="text-primaryBeige mt-3"
                                    title="Accelerating Shrimp Health And Performance Sustainably, Safely, And Biologically"
                                    discreption=" Natural, oral biologics built for shrimp biology. They prime immune readiness, support health through stress windows,  and respond fast when pathogens strike—all through feed. No  injections. No antibiotics. No residues. Just smarter  protection and stronger performance."
                                />
                                <div className="d-flex gap-4">
                                    {[
                                        { value: ">85%", label: "Survival Rate" },
                                        { value: "Zero", label: "Residues" },
                                        { value: "10+", label: "Validated Trials" },
                                    ].map((item, index) => (
                                        <span key={index}>
                                            <h4 className="accentLimeColor">{item.value}</h4>
                                            <p className="mutedLavenderColor">{item.label}</p>
                                        </span>
                                    ))}
                                </div>

                                <LinkCustom
                                    href=""
                                    href2=""
                                    label="Explore Products"
                                    label2="Request Trial Report"
                                    className="buttons-Beige"
                                    className2="buttons-primary border1px"
                                />
                            </MotionWrapper>
                            <MotionWrapper className="col-md-5" variant={fadeRight}>
                                <ImageCustom
                                    src="/image/sustainably.jpg"
                                    alt="Validated Trials image"
                                    className={styles.aquacultureBanner}
                                />
                            </MotionWrapper>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-space-2 corporateBg animate-wrapper">
                <div className="container container2">
                    <div className="row">
                        <MotionWrapper className="col-md-5" variant={fadeLeft}>
                            <ImageCustom
                                src="/image/framing.png"
                                alt="card image"
                                className={`m-auto ${styles.infoimg}`}
                            />
                        </MotionWrapper>
                        <MotionWrapper className="col-md-7 d-flex align-items-center"
                            variant={fadeRight}>
                            <div className={`d-flex align-items-center text-primaryBeige p-24 `}>
                                <img
                                    src="/icons/border.png"
                                    width="85px"
                                    alt="border" />
                                <div className='purpleColor' style={{ paddingLeft: '1rem' }}>
                                    <h4>
                                        Shrimp Farming Industry Doesn’t Have A
                                        Production Gap. It Has A Protection Gap.
                                    </h4>
                                    <p className="m-top-b p14">
                                        Across farming, a massive share of what we grow is
                                        lost to disease, ineﬃciency, and late action. In shrimp,
                                        that loss is ampliﬁed—because Pathogens move fast.
                                        The immune system has no memory. The window to
                                        respond is short. Even strong farms can lose a full
                                        crop in days when outbreaks hit.
                                    </p>
                                    <p className="p14">
                                        <strong className="">
                                            The question isn’t<span className="mutedPurpleColor"> “how do we grow more shrimp?” </span>
                                            <br className="none768" />It’s <span className="mutedPurpleColor"> “how do we lose less shrimp?” </span>
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </MotionWrapper>
                    </div>
                    <div className="imuted">
                        <div className="section-space text-center purpleColor"><h4>Why Shrimp Farms Stay Exposed To Disease Outbreaks ?</h4></div>
                        <InfoCard classNameContainer="container" InfoCardData={infoWhyShrimpAquacultureData} controlClass="border-change" />
                    </div>
                </div>
            </section>
            <section>
                <section className={`deepPurple section-space  ${styles.protecting_shrimp}`}
                    style={{
                        backgroundImage: `url(${protecting.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="container container2">
                        <h3 className="mutedPurpleColor text-center">Protecting shrimp requires solutions designed <br className="dnone768" />
                            from the ground up for their biology.</h3>

                    </div>
                </section>
                <section className="corporateBg section-space-2 pt-3">
                    <div className="container container2">
                        <ProtectingGrid />
                        <h2 className="purpleColor ">Inspired by Bees. Built for Shrimp.</h2>
                        <LinkCustom
                            label="Check Out The Bee Story"
                            href="/"
                            p0="p-0"
                            className="buttons-primary"
                        />
                    </div>
                </section>
            </section>
            <HealthManagment />
            <section className="purpleBg section-space-2 animate-wrapper">
                <BenefitsSwiper data={benefitsAquaculturedata} />
            </section>

            <section>
                <AquacultureDisease data={diseaseCardData} />
            </section>

            <section className="corporateBg">
                <StickySections extraClass="" bgImage={aquaculturte_bg1.src} zIndex={1} >
                    <CommonSwiper
                        variant="aquaculture"
                        data={CommonAquaculturedata}
                        heading=<span>SHRIMPGUARD <sup>TM</sup></span>
                    />
                </StickySections>

                <StickySections bgImage={aquaculturte_bg2.src} zIndex={2}>
                    <TimerCardSwiper
                        cardcontant={timerAquacultureData}
                        heading="SHRIMPTRIDENT"
                        varient="aquacultureTimerDesign"
                        explore={false}
                    />
                </StickySections>

                <StickySections extraClass="yellowbg none992" zIndex={3}>
                    <div className="container">
                        <StackedCards
                            stackCadrSlide={stackCardAquacultureData}
                            heading="SHRIMPTRIDENT VARIANTS"
                            learnmore={false}
                            variant="aquacultureCard"
                        />
                    </div>
                </StickySections>

                <StickySections zIndex={4} bgImage={aquaculturte_bg3.src}>
                    <div className="container">
                        <h2 className="text-center text-primaryBeige">
                            This isn’t just about saving shrimp—it’s about <br className="none768" />
                            saving livelihoods, securing farming <br className="none768" />
                            systems, and building a sustainable future.
                        </h2>
                        <div className="section-space">
                            <InfoCard InfoCardData={InfoCardfutureAquacultureData} />
                        </div>
                    </div>
                </StickySections>
            </section>

            <section className="corporateBg section-space  ">
                <div className="container container2 animate-wrapper">
                    <div className="row">
                        <MotionWrapper className="col-md-5" variant={fadeLeft}>
                            <h2 className="purpleColor">The World Is Watching This Shift In Farming.</h2>
                            <Paragraphs
                                discretion="From UN and FAO conversations to global
                                                innovation platforms, Teora’s work is part of a
                                                larger movement toward cleaner, smarter 
                                                ways to grow food."
                            />
                            <LinkCustom
                                label="For Aquaculture"
                                label2="Why Teora ?"
                                href="/aquaculture"
                                href2="/whyus"
                                className="buttons-primary"
                                className2="buttons-Beige"
                            />
                        </MotionWrapper>
                        <MotionWrapper className="col-md-7" variant={fadeRight}>
                            <ImageCustom
                                src="/image/animal-farming.jpg"
                                alt="Selected Speaker by UN/FAO. Ba"
                                style={{ height: 340 }}
                            />
                        </MotionWrapper>
                    </div>
                    <div className="section-space pb-0">
                        <div className="row">
                            {[
                                {
                                    badge: "SHRIMP HEALTH & GROWTH MANAGEMENT",
                                    title: "Solutions For Shrimp Aquaculture",
                                    bgclass: "accentBlueBg",
                                    exploreText: "Explore Products",
                                    href: "",
                                },
                                {
                                    badge: "FISH HEALTH & GROWTH MANAGEMENT",
                                    title: "",
                                    bgclass: "accentLimebg",
                                    exploreText: "Explore More",
                                    href: "",
                                    list: [
                                        "Poultry health & gut resilience",
                                        "Livestock early-stage immunity boosters",
                                        "Companion animal biologics for gut & immune wellness",
                                        "Crop-associated biologics (soil & root microbiome support)"
                                    ]
                                },
                            ].map((item, index) => (
                                <div className="col-md-6 mt-3" key={index}>
                                    <div className="aquaculture-card purpleBg card_padding borderRadius20 h-100 text-primaryBeige">
                                        <Buges
                                            extraClass={item.bgclass}
                                            label={item.badge}
                                        />
                                        {item.title ? <h2 className="mt-3 mb-4"> {item.title} </h2> : ''}
                                        {item.list ? (
                                            <ul className="list-unstyled p-0 mt-4">
                                                {item.list.map((list, index) => (
                                                    <li className="mt-1" style={{ fontSize: 14 }} key={index}><CiCircleCheck style={{ fontSize: 25, color: "#b8dd5e", marginRight: 10 }} />
                                                        {list}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : ''}
                                        <div className="d-flex justify-content-end">
                                            <Link href="/aquaculture" className="text-primaryBeige">
                                                {item.exploreText} <FaArrowRightLong />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <section className="section-space-2 pb-0">
                    <AwardCard cardData={footerAquacultureData} />
                </section>
                <section className="section-space pb-0">
                    <div className="container container2">
                        <h2 className="text-center purpleColor pb-5">FAQ</h2>
                        <Accordion />
                    </div>
                </section>
                <section className="section-space">
                    <BlogSection />
                </section>
            </section>
        </>

    )
}

export default Aquaculture;