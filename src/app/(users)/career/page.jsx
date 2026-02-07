"use client"
import styles from "./career.module.css";
import { infoCardCareerData, timercardCareerData, swipergalleryData } from "@/data/careerData";
import HeaderInfo from "@/components/common/Custom";
import { Paragraphs } from "@/components/common/Custom";
import { LinkCustom } from "@/components/common/Custom";
import { ImageCustom } from "@/components/common/Custom";
import { MotionWrapper } from "@/context/MotionWrapper";
import InfoCard from "@/components/whyus/InfoCard";
import { useAnimationContext } from "@/context/AnimationContext";
import TimerCardSwiper from "@/components/about/subComponent/TimerCardSwiper";
import { OurTeam } from "@/components/about/subComponent/OurTeam";
import { SectionInfo } from "@/components/common/Custom";
import { MissionCardSwiper } from "@/components/about/subComponent/MissionCardSwiper";
import CareerSection from "./component/CareerSection";

import bg_text from "../../../../public/image/career-text.webp";

const Career = () =>
{
    const { fadeLeft, fadeRight, fadeDown } = useAnimationContext();
    return (
        <>
            <section className="purpleBg tectureBg animate-wrapper">
                <div className="container container2">
                    <div className="career_header section-space-2">
                        <MotionWrapper variant={fadeLeft}>
                            <HeaderInfo
                                buge="CAREERS AT TEORA"
                                title={
                                    <span>
                                        Together, We Build the Future— Yours.<br />
                                        Ours. And the systems that feed the world.
                                    </span>
                                }
                            />
                        </MotionWrapper>
                        <div className="row section-space">
                            <MotionWrapper className="col-md-6" variant={fadeLeft}>
                                <Paragraphs
                                    className={`text-primaryBeige ${styles.career_header_title}`}
                                    discretion={
                                        <span>
                                            At Teora, we bring together scientists, field experts,
                                            innovators, and problem-solvers united by one belief:<br />
                                            <strong className="mutedLavenderColor">nature holds the intelligence needed to build
                                                stronger, more resilient farms.</strong>
                                        </span>
                                    }
                                />
                            </MotionWrapper>
                            <MotionWrapper className="col-md-6" variant={fadeRight}>
                                <Paragraphs
                                    className={`text-primaryBeige ${styles.career_header_title}`}
                                    discretion={
                                        <span>
                                            Whether you’re an experienced researcher or just
                                            starting out, we’re looking for curious minds ready to
                                            challenge beliefs, learn fast, and turn biology into real-
                                            world impact—
                                            <strong className="mutedLavenderColor">safely and in harmony with the planet.</strong>
                                        </span>
                                    }
                                />
                                <p>

                                </p>
                            </MotionWrapper>
                        </div>

                        <LinkCustom
                            label="Watch Video"
                            label2="Open Positions"
                            href="/"
                            href2="/"
                            className="buttons-Beige"
                            className2="buttons-primary border1px"
                        />

                    </div>
                </div>
            </section>
            <section className="purpleBg ">
                <video
                    src="/bgImage/career-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    className={styles.videoElements}
                />
            </section>

            <section className="corporateBg section-space">
                <CareerSection />
            </section>

            <section className="purpleBg tectureBg section-space-2">
                <div className="container d-flex flex-wrap justify-content-between gap-2 mb-4">
                    <span>
                        <HeaderInfo
                            title={
                                <span>
                                    What It’s Like to <br />
                                    Work at Teora
                                </span>
                            }
                        />
                    </span>
                    <LinkCustom
                        href="/"
                        label="More About Teora"
                        className="buttons-Beige"
                    />
                </div>
                <MotionWrapper variant={fadeDown}>
                    <InfoCard
                        classNameContainer="container"
                        className={styles.swiperClass}
                        InfoCardData={infoCardCareerData}
                        swiperClass={styles.swiperClass}
                        style={{ width: '90px' }}
                    />
                </MotionWrapper>
            </section>


            <section className="sticky_container purpleBg">
                <div className="sticky-top z-2 section-space-2 midPurpleBg missionCardSwiper_space sticky_section">
                    <TimerCardSwiper
                        cardcontant={timercardCareerData}
                        heading="Teams You Could Join"
                        headingstyle={{ maxWidth: "auto" }}
                        headingStyle={{ padding: "4rem" }}
                        resume={{
                            show: true,
                            label: "DROP YOUR RESUME",
                            href: "",
                        }}
                    />
                </div>
                <div className="sticky-top section-space-2 z-2 deepPurple sticky_section d-flex align-items-center "
                    style={{
                        backgroundImage: `url(${bg_text})`,
                        width: '100%',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="container">
                        <span className="rounded-pill buge-style ">WHAT WE STAND FOR</span>
                        <h3 className="text-primaryBeige mt-2">
                            WE’RE BUILDING <br />
                            SOMETHING THAT <br />
                            MATTERS. THESE AREN’T <br />
                            JUST POSTER WORDS— <br />
                            THEY’RE HOW WE MAKE <br />
                            DECISIONS EVERY DAY.
                        </h3>
                        <LinkCustom
                            label="Awards & Recognition"
                            href=""
                            className="buttons-Beige"
                        />
                    </div>
                </div>

                <div className="sticky-top z-3 section-space-2 midPurpleBg sticky_section">
                    <MissionCardSwiper
                        styleHeading={{ marginBottom: "6rem" }}
                        missionCardSwiperData={swipergalleryData}
                        heading="GALLERY"
                        controllerClass={styles.controllers}
                        slickyHederClass="text-primaryBeige"
                    />
                </div>
                <div className="sticky-top z-4 section-space-2 deepPurple sticky_section">
                    <MotionWrapper
                        className="position-relative "
                        variant={fadeDown}
                    >
                        <OurTeam />
                    </MotionWrapper>
                </div>
            </section>

            <section className="corporateBg section-space-2 animate-wrapper">
                <div className="container ">
                    <div className="row">
                        <MotionWrapper className="col-md-6 col-sm-7" variant={fadeLeft}>
                            <SectionInfo
                                titleClass="purpleColor"
                                discreptionClass="purpleColor "
                                title="WE’RE BUILDING THE FUTURE OF FARMING. THOUGHTFULLY. RESPONSIBLY."
                                discreption="We don’t have a job board (yet). But if you think you’d be a fit, we want to hear from you. Send us your resume and a few lines about why Teora excites you and we would get right back to see where your skills fit."
                            />
                            <LinkCustom
                                label="Send Your Resume"
                                className="buttons-primary"
                                href="/"
                            />
                        </MotionWrapper>

                        <MotionWrapper className="col-md-6 col-sm-5" variant={fadeRight}>
                            <div className={styles.imgfooter}>
                                <ImageCustom
                                    src="/image/career-footer-img.webp"
                                    alt="resume upload"
                                />
                            </div>
                        </MotionWrapper>

                    </div>
                </div>
            </section>

        </>
    )
}
export default Career;