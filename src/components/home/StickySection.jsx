'use client';
import Styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";
import StickySections from "../common/StickySections";
import SolaqSlider from "./slickyComponents/SolaqSlider";
import { motion } from 'framer-motion';
import FeatureHighlights from "./slickyComponents/FeatureHighlights";
import BestRecorgnition from "./slickyComponents/BestRecorgnition";
import { useAnimationContext } from '@/context/AnimationContext';
import WhyMatterCard from "./slickyComponents/WhyMatterCard";
import React from "react";
import teoraBG from "../../../public/bgImage/teoraBG.webp";
import bgimg from "../../../public/bgImage/bg-img.jpg";
const slideCardData = [
    {
        img: "/icons/farmer.jpg",
        heading: " Because Every Farmer Deserves A Fair Shot At Profitability And Growing Better Harvests.",
        title: "Teora solutions help farmers lose less and grow more—cutting feed waste, curbing disease, and speeding up harvest cycles.",
        bold: "Fewer losses. Faster turns. Better margins.",
        class: "accentLimebg",
        color: "purpleColor"
    },
    {
        img: "/icons/food.jpg",
        heading: " Because Food Shouldn’t Come At The Cost Of Planet Or Ecosystems",
        title: "By eliminating chemical runoff and antibiotic overuse, SOLAQ™ helps farms shrink their footprint—not just expand their yield.",
        bold: "Clean ponds. Healthier soils. Fewer emissions.",
        class: "purpleBg",
        color: "text-primaryBeige"
    },
    {
        img: "/icons/prevetion.jpg",
        heading: "Because Disease Prevention Shouldn’t Mean Choosing Between Safety And Survival.",
        title: "No more toxic trade-offs. SOLAQ™ protects livestock, crops, and aquatic systems without needles, cold chains, or antibiotic overload.",
        bold: "Just science that works—with zero stress",
        class: "accentBlueBg",
        color: "purpleColor"
    },
    {
        img: "/icons/foodchain.jpg",
        heading: "Because The Food Chain Is Only As Strong As Its Weakest Link.",
        title: "SOLAQ™ helps feed mills meet regulatory demands, lets distributors offer cleaner food, and enables brands to promise safety and sustainability. ",
        bold: "From production to plate—it keeps the whole chain moving forward.",
        class: "accentRedBg",
        color: "text-primaryBeige"
    },
    {
        img: "/icons/termcircal.jpg",
        heading: "Because 600 Million People Shouldn’t Get Sick From hat They Eat.",
        title: "SOLAQ™ biologics remove the residues, contaminants, and AMR risks that chemical farming leaves behind.",
        bold: "Cleaner food. Safer exports. Healthier futures.",
        class: "mutedLavenderBg",
        color: "purpleColor"

    },
    {
        img: "/icons/aurnmorny.jpg",
        heading: "Because Strong Communities Start With Resilient Farms & Happy People.",
        title: "SOLAQ™ empowers local producers with easy-to-adopt solutions—Promoting better farming, supporting livelihoods, not just yields.",
        bold: "When farms thrive, jobs grow, incomes stabilise, and rural economies rise.",
        class: "midBeigeBg",
        color: "purpleColor"
    },

]

const StickySection = () =>
{
    const { fadeRight, fadeLeft } = useAnimationContext();

    return (
        <div className={`${Styles.sticky_container}`}>
            <StickySections zIndex={1} extraClass={`purpleBg tectureBg ${Styles.sticky_section}`}>
                <div className="container padding_manage">
                    <div className="row animate-wrapper">
                        <motion.div className="col-md-6 "
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <img
                                src="/image/slickybg.png"
                                style={{ width: '80%' }}
                                alt="slick image"
                                className="imageheights"
                            />
                        </motion.div>
                        <motion.div className={`col-md-6 d-flex justify-content-center align-items-center flexdirections`}
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}

                        >
                            <div className="box_p text-primaryBeige" style={{ padding: '0 6rem' }}>
                                <h2 className=""  >
                                    Today's solutions aren't just inefficient
                                    - It's Unaffordable.
                                    Unsustainable.
                                    Unscalable.
                                </h2>
                                <p className={`mt-4 ${Styles.production_info}`}>
                                    The Next Evolution of Food Production Isn’t Just about Producing More—
                                    <strong>It’s about Producing it
                                        <span className={Styles.smart}> Smarter,</span>
                                        <span className={Styles.Safer}> Safer, </span>
                                        <span className={Styles.sustainably}>Sustainably</span>
                                    </strong>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </StickySections>
            <StickySections zIndex={2} extraClass={`mobile_space-2 text-primaryBeige ${Styles.sticky_section}`}
                bgImage={teoraBG}
                style={{
                    backgroundPosition: 'center',
                    backgroundColor: '#3a28564f',
                    backgroundBlendMode: 'overlay',
                    height: '100%',
                    width: '100%',
                }}
            >
                <SolaqSlider />
            </StickySections>
            <StickySections zIndex={3} extraClass={`bgthis indexpage ${Styles.sticky_section}`}
                bgImage={bgimg} style={{ backgroundAttachment: 'fixed', }}>
                <div className="container">
                    <WhyMatterCard data={slideCardData} text="WHY IT MATTERS?" />
                </div>
            </StickySections>

            <StickySections zIndex={4} extraClass={`accentBlueBg ${Styles.sticky_section}`}>
                <div className="animate-wrapper">
                    <div className="container purpleColor">
                        <span className="rounded-pill text-primaryBeige buge-style purpleBg buge_mini" >DISEASE MANAGEMENT | GROWTH ENHANCERS FOR FISH & SHRIMPS.</span>
                        <h1 className="m-top-b h1500 h11536">SOLUTIONS FOR AQUACULTURE</h1>
                    </div>

                    <div className="container-fluid wmd100" style={{ width: '90%' }}>
                        <div className="row animate-wrapper">
                            {[
                                {
                                    icon: "/icons/about-icon1.png",
                                    badge: "DISEASE MANAGEMENT- SHRIMPS & FISH",
                                    badgeClass: "text-primaryBeige accentRedBg",
                                    title: "GUARD SERIES",
                                    subtitle: "BUILT TO FIGHT BACK & PROTECT",
                                    desc: (
                                        <React.Fragment>
                                            <p>
                                                Guard Series delivers both prophylactic (preventive) and
                                                therapeutic (Combat-ready) vaccine-like protection —no
                                                needles, no cold chains, no chemical chaos, no antibiotics
                                            </p>
                                            <p>
                                                <strong>ShrimpGuard<sup>TM</sup></strong> For Shrimp: Targets WSSV & IMNV
                                            </p>
                                            <p>
                                                <strong>FishGuard<sup>TM</sup></strong> For Fish: Tackles SDDV, Vibrio & many more.
                                            </p>
                                        </React.Fragment>
                                    ),
                                    linkText: "Explore Guard Series"
                                },
                                {
                                    icon: "/icons/about-icon2.png",
                                    badge: "GROWTH OPTIMISATION IN FISH",
                                    badgeClass: "darkLimeBG",
                                    title: "JUMBO SERIES",
                                    subtitle: "BUILT TO GROW MORE SMARTLY",
                                    desc: (
                                        <React.Fragment>
                                            <p>
                                                Jumbo Series promotes growth and delivers faster
                                                harvests and higher yields—Clean, residue-free, ROI-smart
                                                no hormones or chemicals.
                                            </p>
                                            <p>
                                                <strong>FishJumbo<sup>TM</sup></strong> For Shrimp: Targets WSSV & IMNV
                                            </p>
                                            <p>
                                                <strong>ShrimpGuard</strong> For Fish: Tackles SDDV, NNV, Streptococcus etc
                                            </p>
                                        </React.Fragment>
                                    ),
                                    linkText: "Explore Jumbo Series"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="col-md-6 mb-3"
                                    variants={index === 0 ? fadeLeft : fadeRight}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                >
                                    <div className="card_container h-100 round_padding corporateBg purpleColor">
                                        <div className="d-flex gap-3">
                                            <div>
                                                <Image
                                                    src={item.icon}
                                                    alt="group icon"
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                            <div className="info">
                                                <span className={`rounded-pill buge-style buge_mini ${item.badgeClass}`}>
                                                    {item.badge}
                                                </span>
                                                <h2 className="m-0">{item.title}</h2>
                                                <span className="groupBolds">{item.subtitle}</span>
                                            </div>
                                        </div>

                                        <div className="text_container mt-5 mt-5Mobile">
                                            {item.desc}
                                        </div>

                                        <div className="mt-5 mt-5Mobile">
                                            <Link className="buttons-primary" href="/">
                                                {item.linkText}
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </StickySections>
            <StickySections zIndex={5} extraClass={`deepPurple sticky_radius h-fitcontent ${Styles.sticky_section}`}>
                <div className="container">
                    <div className="row padding_manage">
                        <FeatureHighlights />
                    </div>
                </div>
            </StickySections>
            <StickySections zIndex={6} extraClass={`mutedLavenderBg sticky_radius toplast ${Styles.sticky_section}`}>
                <BestRecorgnition />
            </StickySections>
        </div>
    )
}
export default StickySection;