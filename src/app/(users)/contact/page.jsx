"use client"
import styles from "./contact.module.css";
import Link from "next/link";
import HeaderInfo from "@/components/common/Custom";
import { Paragraphs } from "@/components/common/Custom";
import { ImageCustom } from "@/components/common/Custom";
import RequestGrid from "./component/RequestGrid";
import AwardCard from "@/components/common/AwardCard";
import ContactForm from "./component/ContactForm";
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";

import mapbg from "../../../../public/bgImage/mapbg.webp";

// contact card 
const awardCardData = [
    {
        img: "Contact_img1.webp",
        title: "Ready To Try Award- Winning Protection On Your Farm?",
        bg: "accentLimebg",
        textColor: "purpleColor",
    },
    {
        img: "Contact_img2.webp",
        title: "Interested In Distribution Or Collaboration?",
        bg: "accentRedBg",
        textColor: "text-primaryBeige",
    },
    {
        img: "Contact_img3.webp",
        title: "Looking For The Investor Deck Or Press Kit?",
        bg: "accentBlueBg",
        textColor: "purpleColor",
    },
]


const Contact = () =>
{
    const { fadeLeft, fadeRight, fadeDown } = useAnimationContext();
    return (
        <>
            <section className="purpleBg tectureBg animate-wrapper section-space-2">
                <div className="container ">
                    <div className="row">
                        <MotionWrapper className="col-md-6" variant={fadeLeft}>
                            <div className="box_p">
                                <HeaderInfo
                                    title={<span> Let’s Build What <br /> Comes Next  </span>} />
                            </div>
                        </MotionWrapper>
                        <MotionWrapper className="col-md-6" variant={fadeRight}>
                            <div className="box_p">
                                <Paragraphs
                                    className="text-primaryBeige paragraph_elements "
                                    discretion={<span>
                                        Whether you’re a farmer, partner, researcher, or <br className="none576" />
                                        investor—reach out. We’ll route your message to the <br className="none576" />
                                        right team and respond thoughtfully.
                                    </span>}
                                />
                            </div>
                        </MotionWrapper>

                    </div>
                </div>

            </section>
            <section className="purpleBg tectureBg animate-wrapper">
                <AwardCard cardData={awardCardData} />
                <MotionWrapper className="pt-5" variant={fadeDown}>
                    <RequestGrid />
                </MotionWrapper>
            </section>

            <section className="purpleBg tectureBg section-space-2 animate-wrapper"
            >
                <div className="container "
                    style={{
                        backgroundImage: `url(${mapbg})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}>
                    <HeaderInfo className="text-end" title="Our Locations" />
                    <div className="row">
                        <MotionWrapper className="col-md-6" variant={fadeLeft}>
                            <div className={`${styles.contact_location}`}>
                                <div style={{ width: '120px', height: "150px" }}>
                                    <ImageCustom
                                        src="/icons/map.webp"
                                        alt="locations"
                                        className={styles.locationImaage}
                                    />
                                </div>
                                <div className={styles.contectText_container}>
                                    <h3 className="text-primaryBeige">
                                        Singapore (HQ)<br />
                                        8 Cleantech Loop <br />
                                        Building 3, BlockE, <br />
                                        #05-72  <br />
                                        Singapore 637145
                                    </h3>
                                </div>
                            </div>
                            <div className={`d-flex flex-wrap gap-3 align-items-center  ${styles.marginclass}`}>
                                <ImageCustom
                                    src="/icons/envlap.webp"
                                    style={{ width: '70px', height: "50px" }}
                                    alt="locations"
                                    className={`${styles.iconsWidth}`}
                                />
                                <span>
                                    <Link
                                        href="/"
                                        className={`yellowbg purpleColor ${styles.buglink}`}
                                    >HELLO@TEORA.LIFE</Link>
                                </span>
                            </div>

                        </MotionWrapper>
                        <MotionWrapper className="col-md-6" variant={fadeRight}>
                            <div className={`${styles.contact_location} ${styles.contact_location2} ${styles.marginclass}`}>
                                <div style={{ width: '120px', height: "150px" }}>
                                    <ImageCustom
                                        src="/icons/map.webp"
                                        alt="locations image"
                                        className={styles.locationImaage}
                                    />
                                </div>

                                <div className={styles.contectText_container}>
                                    <h3 className="text-primaryBeige">
                                        India Operations <br />
                                        No. 905, Nti Layout, 2Nd <br />
                                        Phase, Rajeev Gandhi <br />
                                        Nagar<br className="none768" />
                                        Bangalore – 560092
                                    </h3>
                                </div>
                            </div>
                            <div className={`d-flex flex-wrap gap-3 align-items-center  ${styles.marginclass2}`}>
                                <ImageCustom
                                    src="/icons/social-img.webp"
                                    style={{ width: '90px', height: "90px" }}
                                    alt="locations"

                                />
                                <span>
                                    <Link
                                        href="/"
                                        className={styles.teoratext}
                                    >@Teora.life</Link>
                                </span>
                            </div>
                        </MotionWrapper>
                    </div>
                </div>
            </section>

            <section className="purpleBg tectureBg section-space pt-0">
                <MotionWrapper className="container" variant={fadeDown}>
                    <h4 className="text-primaryBeige mb-3" style={{ color: '#fcc150 !important' }}>Contact Form</h4>
                    <ContactForm />
                </MotionWrapper>
            </section>

            <section className="purpleBg">
                <MotionWrapper variant={fadeDown}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.1069615693373!2d77.10899437643016!3d28.716349280267753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01f9f5ef8ff1%3A0x57345a618ab5b2e7!2sRajiv%20Gandhi%20Cancer%20Institute%20%26%20Research%20Centre%2C%20Rohini%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1765956592996!5m2!1sen!2sin"
                        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ width: '100%', height: '650px' }}></iframe>
                </MotionWrapper>
            </section>

        </>
    )
}
export default Contact;