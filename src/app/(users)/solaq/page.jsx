"use client"
import React from "react";
import styles from "./solaq.module.css";
import { commonSolaqData, sliderWorkSolaqData, timerSolaqcardData, benefitsSolaqData } from "@/data/solaqData";
import StickySections from "@/components/common/StickySections";
import HeaderInfo from "@/components/common/Custom";
import { ImageCustom } from "@/components/common/Custom";
import { LinkCustom } from "@/components/common/Custom";
import ImpactCardSwiper from "@/components/solaq/ImpactCardSwiper";
import { Paragraphs } from "@/components/common/Custom";
import CircalSwiper from "@/components/common/CircalSwiper";
import TimerCardSwiper from "@/components/about/subComponent/TimerCardSwiper";
import Accordion from "@/components/common/Accordion";
import CommonSwiper from "@/components/common/CommonSwiper";
import { MissionCardSwiper } from "@/components/about/subComponent/MissionCardSwiper";
import FeatureGrid from "./component/FeatureGrid";
import BenefitsSwiper from "./component/BenefitsSwiper";
import BuiltFor from "./component/BuiltFor";
import OurBrochure from "@/components/home/OurBrochure";
import LeadershipSection from "@/components/home/LeadershipSection";
import Geographies from "./component/Geographies-old";
import DiseaseCard from "@/components/common/diseaseCard/DiseaseCard";
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";

const list = [
    "The world must produce 50–70% more food and 60% more protein by 2050.",
    "Aquaculture, livestock, and poultry now anchor a 16T agri-food system that shapes the cost, quality, and safety of food everywhere.",
    "Disease, inefficiency, and climate volatility continue to erode what farms already work hard to grow.",
];

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

const circalsData = [
    {
        img: "/icons/blogics.webp",
        title: "MIX OUR BIOLOGICS WITH A NATURAL, FOOD-SAFE BINDER",
    },
    {
        img: "/icons/animal-feed.webp",
        title: "MIX OUR BIOLOGICS WITH A NATURAL, FOOD-SAFE BINDER",
    },
    {
        img: "/icons/species.webp",
        title: "MIX OUR BIOLOGICS WITH A NATURAL, FOOD-SAFE BINDER",
    },
];


const Solaq = () =>
{
    const { fadeLeft, fadeRight, fadeDown } = useAnimationContext();
    return (
        <>
            <section className="purpleBg tectureBg animate-wrapper">
                <div className="container container2">
                    <div className="section-space-2 position-relative pb_0_767">
                        <MotionWrapper style={{ maxWidth: '850px', position: "relative", }} variant={fadeLeft}>
                            <HeaderInfo
                                className="position-relative z-2"
                                title={<React.Fragment>
                                    Accelerating Global Animal Health <br className="none768" />
                                    And Performance With Smarter <br className="none768" />
                                    And Cleaner Biologics— Powered <br className="none768" />
                                    By Bioscience, Guided By Nature.
                                </React.Fragment>}
                                discretion={
                                    <React.Fragment>
                                        SOLAQ™ is Teora’s biotech engine that designs clean, feed- <br />
                                        integrated biologics for animal health and growth—scalable, animal, <br />
                                        planet & consumer safe, and built for real farming.
                                    </React.Fragment>
                                }
                            />
                        </MotionWrapper>
                        <LinkCustom
                            href="/"
                            label="Watch Video"
                            className="buttons-Beige position-relative z-2"
                            label2="How SOLAQ works"
                            href2="/"
                            className2="buttons-primary border1px position-relative z-2" />

                        <div className={styles.desctopImage}>
                            <ImageCustom
                                src="/image/dakstop.png"
                                alt="desctop"
                                style={{
                                    width: "60%", height: "800px",
                                }} />
                        </div>
                    </div>
                    <div className="section-space-2">
                        <div className="row">
                            <MotionWrapper className="col-md-5 d-flex justify-content-center" variant={fadeLeft}>
                                <ImageCustom
                                    src="/image/producing.png"
                                    alt="production image"
                                    className={styles.solaqbillionImage}
                                />
                            </MotionWrapper>
                            <MotionWrapper className="col-md-7 d-flex justify-content-center" variant={fadeRight}>
                                <div className="section-space-2 pb-0" style={{ maxWidth: '500px' }}>
                                    <h4 className="text-primaryBeige mb-3">
                                        The World Is Producing More Food
                                        Than Ever — But Pressure On The
                                        System Has Never Been Higher.
                                    </h4>
                                    <p className="mutedLavenderColor">
                                        Animal farming sits at the centre of global nutrition, supplying
                                        the protein that billions rely on. Yet the next 25 years will
                                        demand far more from the same land, water, and animals.
                                    </p>
                                    <ul className="m-0 p-0">
                                        {list.map((text, i) => (
                                            <li key={i} className="d-flex gap-3 align-items-center mb-2">
                                                <div>
                                                    <ImageCustom
                                                        src="/icons/plus.png"
                                                        alt="gh ghg"
                                                        style={{ width: "40px", height: "40px" }}
                                                    />
                                                </div>
                                                <p className="midPurpleColor mb-0" style={{ fontSize: "15.5px", }}>{text}</p>
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="text-primaryBeige mt-3">
                                        <strong>
                                            The challenge ahead isn’t “more production.” It’s “smarter protection.”
                                        </strong>
                                        The fastest gains come from reducing
                                        preventable losses — not squeezing animals, farmers, or
                                        ecosystems harder.
                                    </p>
                                </div>
                            </MotionWrapper>
                        </div>
                    </div>
                </div>
            </section>
            <section className="purpleBg tectureBg animate-wrapper">
                <div className="mutedPurpleBg section-space-2 border_radius_round">
                    <ImpactCardSwiper />
                </div>
            </section>
            <section className={`position-relative corporateBg`} >
                <div className="purpleBg tectureBg section-space-2">
                    <MotionWrapper className="container d-flex align-items-end justify-content-center" style={{ height: "250px" }} variant={fadeDown}>
                        <h4 className="text-primaryBeige text-center">
                            The Way Forward Is Simple, Protect What Farms Already <br className="none768" />
                            Grow — Sustainably, Safely, And Biologically.That Is The <br className="none768" />
                            Fastest Path To Stronger Animals, Steadier Harvests, And A <br className="none768" />
                            More Resilient Protein Production For The Growing World.
                        </h4>
                    </MotionWrapper>
                </div>
                <div className={`purpleBg tectureBg position-relative ${styles.angled_section}`}></div>
                <div style={{ position: 'absolute', right: "22%", bottom: "-80px", zIndex: "1099" }}>
                    <ImageCustom
                        src="/icons/slicky-home-1.svg"
                        alt=" More Resilient Protein Production"
                        className={styles.growing}
                        style={{ width: "300px", height: "300px" }}
                    />
                </div>
            </section>

            <section className="corporateBg section-space-2 animate-wrapper">
                <div className="container container2">
                    <div className="row">
                        <MotionWrapper className="col-md-6" variant={fadeLeft}>
                            <HeaderInfo
                                h2color="purpleColor"
                                buge="SOLAQ : PRECISION BIOLOGY, SIMPLIFIED."
                                title={
                                    <span>
                                        The Scalable <br className="none768" />
                                        Biotech Platform <br className="none768" />
                                        Built for Modern <br className="none768" />
                                        Animal Farming
                                    </span>
                                }
                            />
                            <LinkCustom
                                href="/"
                                className="buttons-primary"
                                label="How SOLAQ Works ?"
                            />
                        </MotionWrapper>
                        <MotionWrapper className="col-md-6 purpleColor" variant={fadeRight}>
                            <Paragraphs
                                className="purpleColor fw-500 m-0 "
                                discretion={
                                    <React.Fragment>
                                        Producers today face rising biological pressure, denser <br className="none768" />
                                        farming environments, stricter residue expectations, <br className="none768" />
                                        and the constant demand for higher efficiency — all  <br className="none768" />
                                        without adding complexity or cost.
                                    </React.Fragment>
                                }
                            />
                            <div className="pt-2 pb-2">
                                <strong className="" style={{ fontSize: "18.5px" }}>
                                    SOLAQ<sup>TM</sup> was built for this reality.
                                </strong>
                            </div>
                            <Paragraphs
                                className="purpleColor fw-500 m-0"
                                discretion={
                                    <React.Fragment>
                                        It is Teora’s scalable biotech platform that harnesses
                                        nature’s molecular intelligence to design and deliver
                                        clean, non-invasive feed-based oral biologics for health
                                        and growth across aquaculture, livestock, and poultry.
                                    </React.Fragment>
                                }
                            />
                            <div className="pt-2 pb-2">
                                <strong style={{ fontSize: "18.5px" }}>
                                    Powered by science, guided by nature, and built for <br />
                                    scalable, Operational Simplicity
                                </strong>
                            </div>

                        </MotionWrapper>
                    </div>
                </div>

            </section>
            <section className="corporateBg">
                <MotionWrapper variant={fadeDown}>
                    <ImageCustom
                        src="/image/animal.webp"
                        alt="animal image"
                        className={styles.animalImage}
                    />
                </MotionWrapper>
            </section>

            <section className="section-space-2 pt-0 corporateBg">
                <MotionWrapper variant={fadeDown}>
                    <FeatureGrid />
                </MotionWrapper>
            </section>

            <section className="purpleBg tectureBg">
                <div className={`position-relative  ${styles.indexingPaddings}`}>
                    <CircalSwiper data={circalsData} />
                    <MotionWrapper className="container section-space-2" variant={fadeDown}>
                        <HeaderInfo
                            className="text-center"
                            title="How It Fits IntoYour Farm Program"
                            discretion={
                                <span>
                                    Teora’s team supports implementation, dosing schedules, adjustments for <br />
                                    stress windows, and result tracking.
                                </span>
                            }
                        />
                        <div className="d-flex justify-content-center">
                            <LinkCustom
                                href="/"
                                label="Discover Solutions"
                                className="buttons-Beige" />
                        </div>
                    </MotionWrapper>

                </div>
            </section>
            <section className="sticky_container deepPurple">
                <StickySections zIndex={1} bgImage="/bgimage/soluq-bg.jpeg">
                    <CommonSwiper
                        variant="solaqSwiper"
                        data={commonSolaqData}
                        heading=<span>ONCE DEPLOYED, SOLAQ <br /> POWERED BIOLOGICS DELIVER</span>
                    />
                </StickySections>

                <StickySections zIndex={2} extraClass="deepPurple">
                    <MissionCardSwiper
                        missionCardSwiperData={sliderWorkSolaqData}
                        heading="How SOLAQ Works"
                        headingColor={`${styles.titleColor} ${styles.sizes}`}
                        controllerClass={styles.controllerStyle}
                    />
                </StickySections>

                <StickySections zIndex={3} extraClass="midPurpleBg missionCardSwiper_space">
                    <TimerCardSwiper
                        cardcontant={timerSolaqcardData}
                        heading={<span>Built Different: The Technology <br className="none576" /> That Powers SOLAQ</span>}
                        headingstyle={{ maxWidth: "auto" }}
                        headingStyle={{ padding: "4rem" }}
                        resume={{
                            show: true,
                            label: "SOLAQ For Aquaculture",
                            href: "",
                        }}
                        timeSwiperHeading="timer_swiper_padding"
                    />
                </StickySections>

                <StickySections zIndex={4} bgImage="/bgimage/text-bg.jpeg" extraClass="deepPurple d-flex align-items-center">
                    <MotionWrapper className="container" variant={fadeLeft}>
                        <div style={{ maxWidth: "500px" }} >
                            <h2 className="text-primaryBeige">
                                Fast. Precise Built For Your Farm.
                            </h2>
                            <h5 className="mutedLavenderColor">
                                SOLAQ<sup>TM</sup> develops targeted biologics in just 3–6
                                months, fast enough to stay ahead of evolving
                                pathogens and real-world farm pressures—while also
                                creating custom, farm-specific solutions matched to
                                your species, pathogens, and environment, delivering
                                stronger immunity, steadier performance, and cleaner,
                                growth exactly where your farm needs it most.
                            </h5>
                            <LinkCustom
                                label="Need Custom Solutions ?"
                                href=""
                                className="buttons-Beige"
                            />
                        </div>
                    </MotionWrapper>
                </StickySections>

                <StickySections zIndex={5} bgImage="/bgimage/solaq_powerBg.jpeg">
                    <div className="container container2 d-flex justify-content-center animate-wrapper">
                        <div className="row">
                            <MotionWrapper className="col-md-3 d-flex justify-content-end" variant={fadeLeft}>
                                <ImageCustom
                                    src="/icons/icon-sq.webp"
                                    alt="squ icons"
                                    style={{ width: 150, height: 150 }}
                                />
                            </MotionWrapper>
                            <MotionWrapper className="col-md-9" variant={fadeRight}>
                                <h2 className="text-primaryBeige">
                                    SOLAQ Powered Biologics Are
                                    Already Delivering Stronger Survival,
                                    Steadier Harvests, And Cleaner
                                    Production Across Shrimp And Fish
                                    Farms—Validated Through Third-
                                    Party Rcts And Real-Pond Trials.
                                </h2>
                                <LinkCustom
                                    className="buttons-Beige"
                                    label="Aquaculture Products"
                                    href=""
                                    label2="Watch Video"
                                    href2=""
                                    className2="buttons-primary border1px"
                                />
                            </MotionWrapper>
                        </div>
                    </div>
                </StickySections>

            </section>

            <DiseaseCard variant="solaqDiseaseCard" data={diseaseCardData} />

            <section className="purpleBg section-space-2 animate-wrapper">
                <BenefitsSwiper data={benefitsSolaqData} />
            </section>

            <section className="section-space-2 corporateBg animate-wrapper">
                <div className="container container2">
                    <BuiltFor />
                </div>
            </section>

            <section className="corporateBg  ">
                <div className="container">
                    <h2 className="text-center purpleColor pb-5">FAQ</h2>
                    <Accordion />
                </div>

                <OurBrochure
                    classname="purpleBg"
                    color="text-primaryBeige"
                    heading="Smarter Farming Starts Here."
                    discriptions="Discover how Teora’s breakthrough biotech is transforming disease management and growth across aquaculture, livestock,  crops, and beyond—Real science. Real results. Built for real farms."
                />

                <section className="section-space-2 pt-0 ">
                    <LeadershipSection
                        heading_card1="Want To Grow Smarter, Cleaner, And More Profitably?"
                        descreption_card1="At Teora we believe the future of farming isn’t just about producing more—it’s about protecting and producing better. Join us in creating a world where sustainable abundance isn’t just possible, it’s profitable."
                        buttonText_card1="Connect To Team"
                        classname_card1="card1_font"
                        width100="w-100"
                        heading_card2="Getting Started Is Simple"
                        descreption_card2={
                            <React.Fragment>
                                <strong className="mutedPurpleColor">Connect : </strong> Reach out to our team for a consultation <br />
                                <strong className="mutedPurpleColor">Customise : </strong> We’ll identify the right solutions for your operation <br />
                                <strong className="mutedPurpleColor">Implement : </strong> Easy feed integration with full support <br />
                                <strong className="mutedPurpleColor">Thrive : </strong> Watch your farm reach new levels of success
                            </React.Fragment>
                        }
                        buttonText_card2="Connect For Customised Solutions For Your Farm Challenges"
                        classname_card2="card2_font"
                    />
                </section>
            </section>
        </>
    )
}
export default Solaq;