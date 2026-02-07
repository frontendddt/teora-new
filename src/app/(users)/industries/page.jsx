import React from "react";
import styles from "./industry.module.css";
import { ImageCustom } from "@/components/common/Custom";
import { LinkCustom } from "@/components/common/Custom";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import StickySections from "@/components/common/StickySections";
import CommonSwiper from "@/components/common/CommonSwiper";
import StackedCards from "@/components/about/subComponent/StackedCards";
import WhyMatterCard from "@/components/home/slickyComponents/WhyMatterCard";
import BenefitsSwiper from "../solaq/component/BenefitsSwiper";
import CompanyComponents from "@/components/home/slickyComponents/CompanyComponents";
import OurBrochure from "@/components/home/OurBrochure";
import LeadershipSection from "@/components/home/LeadershipSection";
import BlogSection from "@/components/home/BlogSection";
import { Buges } from "@/components/common/Custom";
const industriesdata = [
    {
        slide1: true,
        cardBg: "corporateBg",
        bugeLable: "PROACTIVE IMMUNE READINESS",
        bugeBg: "accentRedBg",
        bugeColor: "text-primaryBeige",
        textColor: "purpleColor",
        image: "image/industry-slide-img1.webp"
    },
    {
        slide2: true,
        cardBg: "midLimeBg",
        image: "image/industry-slide-img2.webp"
    },
    {
        slide3: true,
        cardBg: "yellowbg",
        image: "image/industry-slide-img3.webp",
        imagLink: "/"
    },

]

const stackCadrSlide = [
    {
        titleName: 'DIFFERENCES',
        image: '/icons/settings.png',
        hedings: "DESIGNED FOR REAL FARMS.",
        subHeading: "Any Farm Any Species. Any Season. Fast",
        bgClass: "mutedLavenderBg",
        listTitles: [
            {
                title: "Shelf-stable, easy to use",
                icons: 'FaRegSquareCheck'
            },
            {
                title: "Built in 6–8 months, not years",
                icons: 'FaRegSquareCheck'
            },
            {
                title: "Species & Disease-specific, not generic",
                icons: 'FaRegSquareCheck'
            },
            {
                title: " Works across aquaculture, livestock, crops, poultry and pet health. ",
                icons: 'FaRegSquareCheck'
            },

        ]
    },

    {
        image: '/icons/industry-slide-icon2.png',
        hedings: "",
        subHeading: "",
        bgClass: "corporateBg",
        titleName: "UNDER DEVELOPMENT",
        listTitles: [
            {
                title: "Gut-health and immunity- enhancing solutions",
                icons: 'FaRegSquareCheck'
            },
            {
                title: "Precision-formulated, residue- free, and easy to administer",
                icons: 'FaRegSquareCheck'
            },
            {
                title: "Preventive care without long- term side effects",
                icons: 'FaRegSquareCheck'
            },
        ]
    },

    {
        image: '/icons/industry-slide-icon3.png',
        hedings: "BECAUSE PETSDESERVE CLEANSCIENCE TOO.",
        subHeading: "Zero Antibiotic. Feed Based. Natural ",
        title: "With the rise in chronic illnesses and antibiotic overuse in companion animals, Teora is developing safe, science-led biologics for pet wellness.",
        bgClass: "lightPinkBg"
    },

]

const slideCardData = [
    {
        img: "/icons/stock.webp",
        induHeading: <React.Fragment>
            Livestock disease<br />
            claims a staggering
        </React.Fragment>,
        billions: "$358Billion",
        title: <React.Fragment>
            Worth Of Animal<br />
            Production EachYear
        </React.Fragment>,
        descrep: "Equal to what 1.6 billion people consume annually.",
        class: "yellowbg",
        color: "purpleColor"
    },
    {
        img: "/icons/stock.webp",
        induHeading: <React.Fragment>
            Global egg production <br />
            was reduced by
        </React.Fragment>,
        billions: "$3Million Tons",
        title: <React.Fragment>
            By Disease, A Loss Of $5.6 <br />
            Billion.(2018)
        </React.Fragment>,
        descrep: "Equal to what 1.6 billion people consume annually.",
        class: "accentBlueBg",
        color: "purpleColor"
    },
    {
        img: "/aboutAssets/icons/about-icon4.png",
        hetitle: "Designed for seamless integration into bird, cattle, pig, and other ruminant feed.Smart Immunity.Zero Hormones.Zero Needles.",
        descrep: "In a world where livestock and poultry production are pushed to the brink by disease and hormone overuse SOLAQ is building needle- free, antibiotic - free, Hormone - free natural health and growth management solutions for the toughest challenges on the farm — All delivered through feed.",
        muted: "Clean science = cleanermeat, healthier animals & birds, higher margins and regulatory-ready farms.",
        class: "purpleBg",
        color: "text-primaryBeige"
    },
    {
        slides4: true,
        class: "mutedLavenderBg",
        color: "purpleColor"
    },


]

const benefitsSwiperdata = [
    {
        description: ' Feed-delivered biologics with zero injection, zero handling stress, and no special labour. seamless integration into daily routines-from hatchery to harvest.',
        title: '',
        icon: 'solaq-swip-icon1.webp',
        bgColor: '',
    },

    {
        description: 'Advanced encapsulation keeps biologics stable in hot, humid, cold, remote, or high-density environments-Low waste. Easy transport. No refrigeration.',
        title: '',
        icon: 'solaq-swip-icon2.webp',
        bgColor: '',
    },

    {
        description: 'Simple feed integration + room-temp stability reduce operational costs while enabling better survival, steadier growth, and predictable harvest cycles.',
        title: '',
        icon: 'solaq-swip-icon3.webp',
        bgColor: '',
    },

    {
        description: 'Antibiotic-free, hormone-free, and whole-pathogen-free biologics - leave on residues, means safer stocks & metting global export standards.',
        title: '',
        icon: 'solaq-swip-icon4.webp',
        bgColor: '',
    },

    {
        description: 'AI-guided design makes it possible to develop new biologics for emerging pathogens in 3-6 months, helping farms stay ahead of evolving pressures.',
        title: '',
        icon: 'solaq-swip-icon5.webp',
        bgColor: '',
    },

    {
        description: 'Targets only relevant pathways without disturbing beneficial gut microbes - supporting healthier digestion and stress resilience.',
        title: '',
        icon: 'solaq-swip-icon6.webp',
        bgColor: '',
    },

    {
        description: 'Clean fermentation + encapsulation mean no toxic residues, no soil or water runoff, and no biohazard waste.- Biodegradable & aligned with global sustainability needs.',
        title: '',
        icon: 'solaq-swip-icon7.webp',
        bgColor: '',
    },

    {
        description: 'One Platform that supports: Immune readiness, Early-stage biological reinforcement, Natural growth optimisation. All through a single, feed-based delivery system.',
        title: '',
        icon: 'solaq-swip-icon8.webp',
        bgColor: '',
    },

    {
        description: 'One Platform. Capable of producing infinite biologics - across species, pathogens, farm needs & geographies. no reinvention required.',
        title: '',
        icon: 'solaq-swip-icon9.webp',
        bgColor: '',
    },

    {
        description: <>From nursery to grow-out, ponds to RAS, and smallholders to large integrators - SOLAQ <sup>TM</sup> adapts to every environment without infrastructure change.</>,
        title: '',
        icon: 'solaq-swip-icon10.webp',
        bgColor: '',
    },

]

const Industries = () =>
{
    return (
        <section className="corporateBg">
            <section className="purpleColor">
                <ImageCustom
                    src="/image/animal.webp"
                    alt="industries"
                    className={styles.industryBanner}
                />
                <div className="container container2">
                    <div className="maxwidth768 text-center section-space-2 pt-3">
                        <h2>
                            Beyond Aquaculture: Transforming
                            Every Corner Of The Food Chain
                        </h2>
                        <p>
                            From rice fields to chicken coops, cattle barns to pet bowls—Teora’s SOLAQ<sup>TM</sup> biotech
                            platform is scaling smart science into every corner of food and animal health. <strong>No injections. No antibiotics. No toxic trade-offs.</strong>
                            Just precision-designed biologics that
                            prevent disease, accelerate growth, and eliminate harmful residues.
                        </p>
                        <div className="d-flex justify-content-center">
                            <LinkCustom
                                label="Watch Video"
                                label2="How SOLAQ works"
                                href=""
                                href2="/solaq"
                                className2="buttons-Beige"
                                className="buttons-primary"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="corporateBg">
                <StickySections zIndex={1} extraClass="corporateBg" bgImage={"/bgImage/industry-bg1.webp"}>
                    <CommonSwiper
                        variant="industries"
                        data={industriesdata}
                        heading="SOLUTIONS FOR AGRICULTURE"
                    />
                </StickySections>
                <div className={`section-space-2 sticky_section bgthis indexpage z-2 `} >
                    <div className="container container2">
                        <WhyMatterCard data={slideCardData} variant="industries" text="SOLUTIONS FOR LIVESTOCK & POULTRY" />
                    </div>
                </div>

                <StickySections zIndex={3} extraClass="none992" bgImage={"/bgimage/industry-bg3.webp"}>
                    <div className="container container2">
                        <StackedCards
                            stackCadrSlide={stackCadrSlide}
                            heading={<React.Fragment>SOLUTIONS FOR <br />COMPANION HEALTH</React.Fragment>}
                        />
                    </div>
                </StickySections>
            </section>

            <section className="purpleBg section-space-2 animate-wrapper">
                <BenefitsSwiper data={benefitsSwiperdata} />
            </section>
            <section className="corporateBg section-space-2 animate-wrapper">
                <div className="container container2">
                    <div className="row">
                        {[
                            {
                                badge: "SHRIMP HEALTH & GROWTH MANAGEMENT",
                                title: "Solutions For Shrimp Aquaculture",
                            },
                            {
                                badge: "FISH HEALTH & GROWTH MANAGEMENT",
                                title: "Solutions For Shrimp Aquaculture",
                            },
                        ].map((item, index) => (
                            <div className="col-md-6 mt-3" key={index}>
                                <div className="aquaculture-card purpleBg card_padding borderRadius20 h-100 text-primaryBeige">
                                    <Buges
                                        extraClass="accentBlueBg"
                                        label={item.badge}
                                    />
                                    <h2 className="mt-3 mb-4">
                                        {item.title}
                                    </h2>
                                    <div className="d-flex justify-content-end">
                                        <Link href="/aquaculture" className="text-primaryBeige">
                                            Explore Products <FaArrowRightLong />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="beigeCreamBg">
                <CompanyComponents />
            </section>
            <section className="corporateBg">
                <OurBrochure
                    classname="purpleBg"
                    color="text-primaryBeige"
                    heading="Smarter Farming Starts With Teora."
                    discriptions="Discover how Teora’s breakthrough biotech is transforming disease management and growth across aquaculture, livestock,  crops, and beyond—Real science. Real results. Built for real farms."
                />

                <section className="section-space">
                    <LeadershipSection
                        heading_card1="Want To Partner Or Pilot A New Product?"
                        descreption_card1="We co-develop with feed mills, nutritionists, agri-companies, and distribution partners to launch smarter, cleaner farming tools—faster."
                        buttonText_card1="Co-Develop New Biologics"
                        classname_card1="card1_font"
                        heading_card2="Interested In Backing The Future Of Food?"
                        descreption_card2="Teora Powered by SOLAQ™ is scaling fast—and globally. If you’re ready to invest in biotech with purpose and proof, we’d love to talk."
                        buttonText_card2="Connect With Leadership"
                        classname_card2="card2_font"
                    />
                </section>

                <section>
                    <BlogSection />
                </section>

            </section>

        </section>
    )
}

export default Industries;