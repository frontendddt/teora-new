"use client"
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";
import Styles from "../about/aboutStypes.module.css";
import Link from "next/link";
import InfoCard from "./InfoCard";
import { ImageCustom } from "../common/Custom";
const InfoCardData = [
    {
        image: "/icons/framers2.png",
        headings: "FOR THE CHANGE YOU’LL SEE NEXT SEASON.",
        title: "Every gram of SOLAQ™ feed or foliar spray is designed to give you a visible win—higher survival, cleaner harvests, stronger profits —without extra operational hassle or hidden trade-offs.",
        bgColor: 'accentLimebg',
        color: 'purpleColor'
    },

    {
        image: "/icons/survial.png",
        headings: "FOR SURVIVAL WITHOUT STRESS",
        title: "Disease wipes out 70% of your stock overnight. Our feed-based biologics took fish survival from 2% to 90% in aquaculture.—no injections, no downtime, just clean food that cures & prevents.",
        bgColor: 'accentRedBg',
        color: 'text-primaryBeige'
    },
    {
        image: "/icons/growth.png",
        headings: "FOR GROWTH THAT PAYS, NOT DRAINS OR GUILTS",
        title: "Our Smart biologics boost digestion so every bag of feed turns into weight gain—20 % faster cycles, lowers feed waste by 30%, leaner FCR, healthier margins, No synthetic hormones.",
        bgColor: 'accentBlueBg',
        color: 'purpleColor'
    },

    {
        image: "/icons/futureReady.png",
        headings: "FOR NOT JUST NOW BUT FUTURE READY",
        title: "Ban-proof, residue-free, climate & export-ready. Our antibiotic-free approach keeps you ahead of rising regulations and premium buyers who demand clean labels and safer supply chains.",
        bgColor: 'mutedLavenderBg',
        color: 'purpleColor'
    },
    {
        image: "/icons/framBuild.png",
        headings: "FOR FARMS BUILT TO SCALE AND GROW",
        title: "Teora’s shelf-stable powder, Topcoat, mix, or spray fits right into existing feed or spray cycles. It’s made to scale from smallholders to industrial farms without changing how you farm.",
        bgColor: 'midPurpleBg',
        color: 'text-primaryBeige'
    },

    {
        image: "/icons/science.png",
        headings: "SCIENCE THAT SPEAKS FARMER & DELIVERS",
        title: "AI-powered pathogen profiling sounds fancy, but here’s what matters: custom disease solutions in 3-6 months, not 3 years. Real results in real ponds, proven by farmers like you. ",
        bgColor: 'midBeigeBg',
        color: 'purpleColor'
    },
    {
        image: "/icons/margind.png",
        headings: "GOOD FOR MARGINS, GREAT FOR EARTH",
        title: "Cut antibiotic spend by 70 %, slash mortalities, and maximise feed conversion while raising your profits, reducing runoff & carbon footprint Turns out, what’s good for the planet is good for your pocket and your reputation. ",
        bgColor: 'midLimeBg',
        color: 'purpleColor'
    },
    {
        image: "/icons/srienge.png",
        headings: "NEEDLES DON’T BELONG IN FARMING",
        title: "Injections stress animals, cost time, and can’t scale. Teora delivers immunity and growth through feed—no cold chains, no stress, just clean solutions that fit into real farm routines.",
        bgColor: 'darkredBg',
        color: 'text-primaryBeige'
    },

    {
        image: "/icons/globle.png",
        headings: "GLOBAL COMPLIANCE. FIELD-PROVEN",
        title: "Teora aligns with EU, US, and Asia’s clean food mandates while adapting to local realities.Our Aquaculture products have delivered results across farms— with real-world data to back it.",
        bgColor: 'mutedBeigeBg',
        color: 'purpleColor'
    },
]


const Banner = () =>
{
    const { fadeLeft, fadeRight, fadeDown } = useAnimationContext();
    return (

        <>
            <div className="section-space">
                <div className="container container2">
                    <div className="col-12">
                        <div className='w-100'>
                            <div className={`${Styles.aboutheadings}`} style={{ maxWidth: '1200px' }}>
                                <div style={{ padding: '3rem 0 0 2rem' }}>
                                    <h1 className="text-primaryBeige mb-0 f-600" >
                                        We Built Teora To Ensure A Resilient,
                                        Safe, And Nutritious Farmed Food For A
                                        Growing World —
                                        <span className="mutedLavenderColor fw-400">
                                            one that prioritises people,
                                            planet, and farm prosperity in equal measure.
                                        </span>
                                    </h1>
                                    <div className={`d-flex gap-2 ${Styles.aboutbannerBtn}`}>
                                        <Link className="buttons-Beige" href="/about">About Teora</Link>
                                        <Link className="buttons-primary border1px" href="/solutions">Our Solutions</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={`row`}>
                        <MotionWrapper className="col-md-4 d-flex align-items-center justify-content-center"
                            variant={fadeLeft}
                        >
                            <ImageCustom
                                src="/image/slickybg.png"
                                alt="And because the old ways o"
                                className={`mb-3 mb-sm-0 ${Styles.whyusBannerImage}`}
                                style={{ width: '90%', height: 460 }}
                            />
                        </MotionWrapper>
                        <MotionWrapper className="col-md-8"
                            variant={fadeRight}>
                            <div className={`d-flex align-items-center text-primaryBeige p-24 ${Styles.borderelements}`}>
                                <img
                                    src="/icons/border.png"
                                    width="100"
                                    alt="border" />
                                <div className='' style={{ paddingLeft: '1rem' }}>
                                    <h6 className='p-24 text-primaryBeige fw-300 mb-2'>
                                        And because the old ways of growing food are failing—farmers,
                                        ecosystems, and the 10.3 billion people we need to feed.
                                    </h6>
                                    <h6 className='p-24 text-primaryBeige fw-300 mutedLavenderColor  mb-2'>
                                        <i>
                                            Teora isn’t here to complicate farming. We’re here to simplify
                                            success—with biology that works as hard as farmers do.
                                        </i>
                                    </h6>
                                    <h6 className='p-24 text-primaryBeige fw-300'>
                                        Teora is building a future where farming isn’t forced to choose
                                        between growth and guilt. Where science is built for real-world
                                        pressure, and solutions don’t harm the planet to feed it.
                                    </h6>
                                    <h5 className="accentLimeColor mt-3 h4industry">Built For Real Farms. Backed By Science. Scaling For Impact.</h5>
                                </div>
                            </div>
                        </MotionWrapper>
                    </div>
                </div>
            </div>
            <MotionWrapper
                className="section-space-2"
                variant={fadeDown}
            >
                <InfoCard classNameContainer="container" InfoCardData={InfoCardData} />
            </MotionWrapper>

        </>



    )
}

export default Banner;