"use client";
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";
import { swiperAboutData, timerAboutData, stackCardAboutData, visionsliderAboutData } from "@/data/aboutData";
import StickySections from "../common/StickySections";
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/autoplay';
import StackedCards from "./subComponent/StackedCards";
import WhatWereBuildingSlider from "./subComponent/WhatWereBuildingSlider";
import TimerCardSwiper from "./subComponent/TimerCardSwiper";
import { OurTeam } from "./subComponent/OurTeam";
import { MissionCardSwiper } from "./subComponent/MissionCardSwiper";
import Innovation from "./subComponent/Innovation";
import agriculture from "../../../public/image/agriculture_bg1.png";
import securityText from "../../../public/bgImage/securityText.png";

const StickyAbout = () =>
{
    const { fadeDown } = useAnimationContext();
    return (
        <section className="sticky_container" >
            <StickySections zIndex={1} bgImage={agriculture.src}>
                <WhatWereBuildingSlider swiperData={swiperAboutData} />
            </StickySections>
            <StickySections zIndex={2} extraClass="midPurpleBg missionCardSwiper_space">
                <TimerCardSwiper
                    cardcontant={timerAboutData}
                    heading={
                        <span>
                            Powered By Our Proprietary SOLAQ™ Platform, <br />We Use Breakthrough Biotechnology To
                        </span>
                    }
                />
            </StickySections>

            <StickySections zIndex={3} extraClass="deepPurple" bgImage={securityText.src}
                style={{
                    backgroundPosition: 'top',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    backgroundSize: 'auto',
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 d-flex align-items-end">
                            <div>
                                <span className="rounded-pill buge-style"> - OUR CORE FOCUS </span>
                                <h2 className="text-primaryBeige mt-2 slickyH2">
                                    MAKING FOOD SAFER <br className="none576" />
                                    FOR CONSUMERS, <br className="none576" />
                                    MORE SUSTAINABLE  <br className="none576" />
                                    FOR THE PLANET, AND  <br className="none576" />
                                    MORE PROFITABLE  <br className="none576" />
                                    FOR PRODUCERS.
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-5 ">
                            <Innovation />
                            <div className="mt-4">
                                <Link
                                    className="hoverButonsAbord" href="/aword"
                                >Awards & Recognition</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </StickySections>

            <StickySections zIndex={4} extraClass="midPurpleBg none992">
                <div className="animate-wrapper" style={{ width: '100%', height: '100%', minHeight: '100vh' }}>
                    <div className="container" >
                        <StackedCards
                            stackCadrSlide={stackCardAboutData}
                            heading={"ON A MISSION TO BUILD THE FUTURE  OF SAFE, SUSTAINABLE FARMING"}
                        />
                    </div>
                </div>
            </StickySections>
            <StickySections zIndex={5} extraClass="mutedLavenderBg missionCardSwiper_space">
                <MissionCardSwiper
                    missionCardSwiperData={visionsliderAboutData}
                    heading=" …From a bold vision to revolutionising food security."
                />
            </StickySections>
            <StickySections zIndex={6} extraClass="deepPurple h-fitcontent">
                <MotionWrapper
                    className="position-relative "
                    variant={fadeDown}
                >
                    <OurTeam />
                </MotionWrapper>
            </StickySections>

        </section>
    )
}
export default StickyAbout;