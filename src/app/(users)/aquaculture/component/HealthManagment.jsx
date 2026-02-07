

import styles from "../aquaculture.module.css";
import React from "react";
import Link from "next/link";

import { MotionWrapper } from "@/context/MotionWrapper";
import { useAnimationContext } from "@/context/AnimationContext";
import { ImageCustom } from "@/components/common/Custom";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Buges } from "@/components/common/Custom";
const HealthManagment = () =>
{
    const { fadeLeft, fadeRight, fadeDown } = useAnimationContext();
    return (
        <section className={`corporateBg`} >
            <div className="position-relative">
                <div className="purpleBg tectureBg section-space-2">
                    <MotionWrapper className="container" variant={fadeDown}>
                        <h4 className="text-primaryBeige text-center">
                            Shrimp Health Isn’t About Choosing Between Prevention And <br className="none768" />
                            Intervention—It’s About Having Both, Precisely Timed. Our Biologics <br className="none992" />
                            Support Farms In Two Moments That Matter Most: Before Risk Rises <br className="none768" />
                            And When Pathogen Pressure Begins. All Through Feed.
                        </h4>

                        <div className="section-space d-flex justify-content-center">
                            <div>
                                {[
                                    { text: "Proactive Readiness", className: "accentRedBg text-primaryBeige" },
                                    { text: "Continuous Protection", className: "accentLimebg purpleColor" },
                                    { text: "Early Detection", className: "mutedPurpleBg text-primaryBeige" },
                                    { text: "Rapid Response", className: "yellowbg purpleColor" },
                                    { text: "Stabilized Outcomes", className: "accentBlueBg purpleColor" }
                                ].map((item, index, arr) => (
                                    <span key={index}>
                                        <Buges label={item.text} extraClass={item.className} />
                                        {index !== arr.length - 1 && (
                                            <Image
                                                src="/icons/dot-arrow.png"
                                                width={46}
                                                height={46}
                                                alt="image"
                                                style={{ marginRight: "2px" }}
                                            />
                                        )}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </MotionWrapper>
                </div>
                <div className={`purpleBg tectureBg position-relative ${styles.angled_section}`}>  </div>
                <div style={{ position: 'absolute', right: "22%", bottom: "-80px", zIndex: "1099" }}>
                    <ImageCustom
                        src="/icons/feed-icon.png"
                        alt=" More Resilient Protein Production"
                        className={styles.growing}
                        style={{ width: "300px", height: "275px" }}
                    />
                </div>
            </div>
            <div className="container">
                <Buges label=" OUR SOLUTIONS" extraClass="accentRedBg text-primaryBeige" />
                <h2 className="purpleColor">
                    The First Complete Feed-Based <br className="none768" />
                    Health Management System
                </h2>
                <div className="row animate-wrapper section-space">
                    {[
                        {
                            icon: "/icons/aqua-guard.png",
                            badge: "PROACTIVE PROTECTIVE SHIELD",
                            badgeClass: "text-primaryBeige accentRedBg",
                            title: <React.Fragment>Shrimp Guard<sup>TM</sup></React.Fragment>,
                            desc: "Pathogen-speciﬁc biologic that rapidly reduces pathogen load, improves immunity and health at early detection.",
                            f_title: "Use It To Stay Ready Before Disease Strikes",
                            linkText: "Know More"
                        },
                        {
                            icon: "/icons/aqua-trident.png",
                            badge: "ACTIVE TARGETED INTERVENTION",
                            badgeClass: "yellowbg purpleColor",
                            title: "Shrimp Trident",
                            desc: "Broad-spectrum immune-boosting biologic that continuously primes and sustains immune readiness and improves health.",
                            f_title: "Deploy It To Respond Fast On Early Detection",
                            linkText: "Know More"
                        }
                    ].map((item, index) => (
                        <MotionWrapper
                            key={index}
                            className="col-md-6 mb-3"
                            variant={index === 0 ? fadeLeft : fadeRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}

                        >
                            <div className="card_container h-100 padding2rem borderRadius35 purpleBg text-primaryBeige">
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
                                        <Buges label={item.badge} extraClass={item.badgeClass} />
                                        <h2 className="m-0">{item.title}</h2>
                                    </div>
                                </div>

                                <div className="text_container mt-5 mt-5Mobile">
                                    <p>{item.desc}</p>
                                    <h5 className="mutedPurpleColor">{item.f_title}</h5>
                                </div>

                                <div className="mt-3 mt-5Mobile">
                                    <Link className="text-primaryBeige" href="/">
                                        {item.linkText} <FaLongArrowAltRight />
                                    </Link>
                                </div>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default HealthManagment;