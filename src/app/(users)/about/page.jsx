import AboutBanner from "@/components/about/AboutBanner";
import MotivationSection from "@/components/about/MotivationSection";
import CountersSection from "@/components/home/CountersSection";
import BuiltTeoraSection from "@/components/about/BuiltTeoraSection";
import StickyAbout from "@/components/about/StickyAbout";
import MapOverlay from "@/components/about/MapOverlay";
import Agriculture from "@/components/about/Agriculture";
import CompanyComponents from "@/components/home/slickyComponents/CompanyComponents";
import OurBrochure from "@/components/home/OurBrochure";
import LeadershipSection from "@/components/home/LeadershipSection";
import BlogSection from "@/components/home/BlogSection";
const About = () =>
{
    const counterData = [
        {
            counter: 28.9,
            discriptions: "Of the world’s population experience food insecurity, &",
            strong: "864 million",
            notstr: "facing severe hunger"
        },
        {
            counter: '$2.9T',
            discriptions: "The environmental costs of food and agriculture, We need",
            strong: "sustainable solutions urgently"
        },
        {
            counter: 90,
            discriptions: "Of disease control relies on antibiotics, fuelling AMR &",
            strong: "Regulatory bans are tightening"
        },
        {
            counter: 70,
            discriptions: "Mortality in shrimp and fish farms due to diseases. Threatening",
            strong: "food security and farmer livelihoods"
        }
    ]

    return (
        <section className="purpleBg">
            <section className="tectureBg section-space" >
                <AboutBanner />
            </section>

            <section className="tectureBg">
                <MapOverlay />
            </section>

            <section className="tectureBg section-space animate-wrapper">
                <MotivationSection />
            </section>

            <section>
                <CountersSection counterData={counterData} className="accentRedBg" />
            </section>

            <section className="tectureBg">
                <BuiltTeoraSection />
            </section>

            <section>
                <StickyAbout />
            </section>

            <section >
                <Agriculture />
            </section>

            <section className="beigeCreamBg">
                <CompanyComponents />
            </section>
            <section className="corporateBg" >
                <OurBrochure
                    classname="purpleBg"
                    color="text-primaryBeige"
                    heading="Smarter Farming Starts Here."
                    discriptions="Discover how Teora’s breakthrough biotech is transforming disease management and growth across aquaculture, livestock,  crops, and beyond—Real science. Real results. Built for real farms."
                />
                <section className="section-space">
                    <LeadershipSection
                        heading_card1="Want To Grow Smarter, Cleaner, And More Profitably?"
                        descreption_card1="Let’s help you ditch the stress and scale clean. Reach out for trials, bulk orders, or product info— we’re ready when you are."
                        buttonText_card1="Contact Our Team"
                        classname_card1="card1_font"

                        heading_card2="Interested In Backing The Future Of Food?"
                        descreption_card2=" SOLAQ™ is scaling fast—and globally. If you’re ready to invest in biotech with purpose and proof, we’d love to talk."
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
export default About;