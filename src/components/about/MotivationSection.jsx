"use client"
import Styles from "./aboutStypes.module.css";
import { useAnimationContext } from '@/context/AnimationContext';
import { MotionWrapper } from "@/context/MotionWrapper";
import Image from "next/image";
const soaringData = [
    "Soaring Feed Costs, Yields Shrink, Margins Collapse, Safety Disappears",
    "Disease Wipes Out Stock In Days Before It Reaches Harvest.",
    "Antibiotics Being Banned, Leaving Few Alternatives.",
    "Consumers Demanding Safer, Antibiotic-Free Food.",
]


export default function MotivationSection()
{
    const { fadeLeft, fadeRight } = useAnimationContext();

    return (


        <div className="container container2 ">
            <div className="row ">

                <MotionWrapper className="col-lg-6" variant={fadeLeft} >
                    <span className="rounded-pill buge-style accentRedBg text-primaryBeige  pt-2 pb-2">OUR WHY’S MOTIVATION</span>
                    <h2 className="text-primaryBeige mt-4">
                        Farmers have always had tough battles—
                        <span className="mutedLavenderColor">
                            But Today, Climate Change, Disease Outbreaks, Rising Costs, And Food
                            Safety Regulations Are Making It
                            Harder Than Ever.
                        </span>
                    </h2>

                    <div className="row mt-4">
                        {soaringData.map((text, index) => (
                            <div
                                key={index}
                                className="col-md-6 col-6 d-flex align-items-center"
                            >
                                <div
                                    className={`borderRadius20 d-flex align-items-center ${Styles.soaringElements}`} >
                                    <h4>{text}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </MotionWrapper>

                <MotionWrapper className="col-lg-6" variant={fadeRight}>

                    <div className="row">
                        <div className="col-md-12 d-flex align-items-end">
                            <div className={Styles.imagewidths}>
                                <img
                                    src="/icons/alings.png"
                                    alt="Food waste due to diseases, poor"
                                />
                            </div>
                            <div style={{ width: '50%' }}>
                                <p className={`text-primaryBeige ${Styles.economy}`}>
                                    Food waste due to diseases, poor
                                    logistics, yields and premature
                                    harvesting costs the global economy
                                    $940 billion annually (UNEP, 2021)
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className={` position-relative ${Styles.circals}`}>
                        <div className={Styles.ritrangle}> </div>
                        <div className={`accentRedBg d-flex align-items-center justify-content-center text-primaryBeige ${Styles.dolarcircal}`}>
                            <div className="img-main">
                                <Image src="/icons/Dollar.png"
                                    alt="harvesting costs the global economy"
                                    width={70}
                                    height={55}
                                />
                                <h4 className={`${Styles.h4text} lightblueColor`} >$940 B</h4>
                            </div>
                        </div>
                        <div className={`accentLimebg position-relative m-auto ${Styles.manageCircal} purpleColor`}>
                            <div>
                                <h4> “And outdated disease management and growth methods are failing farmers, forcing them into inefficient, costly, and unsustainable cycles.”</h4>
                            </div>
                        </div>
                    </div>

                </MotionWrapper>
            </div>
        </div>

    );
}
