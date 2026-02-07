
import IndustrySlider from "../home/IndustrySlider";
import AgricultureComponents from "./subComponent/AgricultureComponents";

const data = [
        {
                image: "/slider/one.png",
                title: '90% SURVIVAL',
                text: 'In shrimp farms with ShrimpGuard™',
                bg: "purpleBg",
                color: "text-primaryBeige",
        },
        {
                image: "/slider/two.png",
                title: '20–30% GROWTH',
                text: 'Boost with FishJumbo™',
                bg: "accentRedBg",
                color: "text-primaryBeige",

        },
        {
                image: "/slider/three.png",
                title: '70% REDUCTION',
                text: 'In antibiotic use for disease cure.',
                bg: "accentLimebg",
                color: "purpleColor",
        },
        {
                image: "/slider/four.png",
                title: '10X',
                text: 'faster time-to-market than traditional solution',
                bg: "accentBlueBg",
                color: "purpleColor",
        },
        {
                image: "/slider/five.png",
                title: '30%',
                text: 'Improvement in feed efficiency',
                bg: "midBeigeBg",
                color: "purpleColor",
        },
        {
                image: "/slider/six.png",
                title: ' GLOBAL',
                text: 'Recognition: Liveability Challenge, Global Shrimp Summit, UN SDG finalist',
                bg: "mutedLavenderBg",
                color: "purpleColor",
        },
]

const Agriculture = () =>
{

        return (
                <>
                        <div className="container-fluide corporateBg section-space-2 animate-wrapper" style={{ position: 'relative', zIndex: '9999' }}>

                                <AgricultureComponents />

                                <section className="aboutIndustrice section-space-2">
                                        <IndustrySlider data={data} aquaculture={true} text="THE IMPACT SO FAR IN AQUACULTURE" className="aboutheading" />
                                </section>

                        </div>

                </>
        )
}

export default Agriculture