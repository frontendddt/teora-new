"use client"
import styles from "./award.module.css";
import { industryAwardData, timercardAwardData, footerCardAwardData } from "@/data/awardMediaData";
import StickySections from "@/components/common/StickySections";
import HeaderInfo from "@/components/common/Custom";
import { Paragraphs } from "@/components/common/Custom";
import { LinkCustom } from "@/components/common/Custom";
import { ImageCustom } from "@/components/common/Custom";
import KeySpeakerHighlight from "./component/KeySpeakerHighlight";
import { MissionCardSwiper } from "@/components/about/subComponent/MissionCardSwiper";
import TimerCardSwiper from "@/components/about/subComponent/TimerCardSwiper";
import BlogSection from "@/components/home/BlogSection";
import AwardCard from "@/components/common/AwardCard";
import PodcastsInterviews from "./component/PodcastsInterviews";
import YoutubeVideos from "./component/YoutubeVideos";
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";

const Award = () =>
{
    const { fadeLeft, fadeRight, fadeDown } = useAnimationContext();
    return (
        <>
            <section className="purpleBg tectureBg section-space-2 animate-wrapper">
                <div className="container container2">
                    <div className="row">
                        <MotionWrapper className="col-md-6" variant={fadeLeft}>
                            <HeaderInfo
                                title={<span>Where Breakthrough <br /> Science Meets Recognition</span>}
                            />
                        </MotionWrapper>
                        <MotionWrapper className="col-md-6" variant={fadeRight}>
                            <Paragraphs
                                className="beigeCreamcolor"
                                discretion="Selected Speaker by UN/FAO. Backed by $1M in global prize funding. Trusted by farmers across APAC. Our work in sustainable aquaculture is turning heads—from lab benches to real farms."
                            />
                            <div className={styles.customlink}>
                                <LinkCustom
                                    className="buttons-Beige"
                                    className2="buttons-primary border1px"
                                    label="See Aqua Products"
                                    label2="Awards & recognition"
                                    href=""
                                    href2=""
                                />
                                <LinkCustom
                                    className=" buttons-primary border1px"
                                    className2="buttons-Beige"
                                    label="In Media"
                                    label2="Podcasts"
                                    href=""
                                    href2=""
                                />
                            </div>
                        </MotionWrapper>
                    </div>
                    <MotionWrapper className="section-space" variant={fadeDown}>
                        <ImageCustom
                            src="/image/companys.webp"
                            alt="Selected Speaker by UN/FAO. Ba"
                            className={styles.companys}
                        />
                    </MotionWrapper>
                </div>
                <KeySpeakerHighlight />
            </section>

            <section className="sticky_container purpleBg ">
                <StickySections extraClass="mutedLavenderBg" zIndex={1}>
                    <MissionCardSwiper
                        missionCardSwiperData={industryAwardData}
                        heading="Prestigious Global Awards & Industry Recognition"
                    />
                </StickySections>
                <StickySections zIndex={2} extraClass="purpleBg">
                    <TimerCardSwiper
                        cardcontant={timercardAwardData}
                        varient="awardsmedia"
                        heading="Work Worth Being In Media"
                        headingstyle={{ maxWidth: "auto" }}
                        headingStyle={{ padding: "4rem" }}
                        resume={{
                            show: true,
                            label: "See Archive",
                            href: "",
                        }}
                        timeSwiperHeading="timer_swiper_padding"
                    />
                </StickySections>

            </section>
            <section className="section-space-2 deepPurple animate-wrapper">
                <PodcastsInterviews />
                <section className="section-space">
                    <YoutubeVideos />
                </section>
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
                                src="/image/animal.webp"
                                alt="Selected Speaker by UN/FAO. Ba"
                                style={{ height: 320 }}
                            />
                        </MotionWrapper>
                    </div>
                </div>

                <section className="section-space-2 pb-0">
                    <AwardCard cardData={footerCardAwardData} />
                </section>

                <section className="section-space">
                    <BlogSection />
                </section>
            </section>
        </>
    )
}
export default Award;
