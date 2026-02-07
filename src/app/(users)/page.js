

import '@/styles/globals.css';
import { industrySliderData } from '@/data/homeData';
import { counterData } from '@/data/homeData';
import Carousel from "@/components/home/Carousel";
import AboutTeora from "@/components/home/AboutTeora";
import CountersSection from "@/components/home/CountersSection";
import CurrentSolution from "@/components/home/CurrentSolution";
import StickySection from "@/components/home/StickySection";
import IndustrySlider from "@/components/home/IndustrySlider";
import OurBrochure from "@/components/home/OurBrochure";
import LeadershipSection from '@/components/home/LeadershipSection';
import BlogSection from '@/components/home/BlogSection';


export default function Home()
{
  return (
    <>
      <Carousel />
      <section className="corporateBg">
        <AboutTeora />
      </section>

      <section className="corporateBg section-space ">
        <IndustrySlider data={industrySliderData} text="State of the Industry" className="homeheading" homeRow="homerow" />
      </section>

      <section >
        <CountersSection counterData={counterData} className="purpleBg tectureBg" />
      </section>

      <section className="corporateBg">
        <CurrentSolution />
      </section>

      <section>
        <StickySection />
      </section>

      <section className="corporateBg">
        <OurBrochure
          classname="midBeigeBg"
          color="purpleColor"
          heading="Smarter Farming Starts With Teora."
          discriptions="Discover how Teora’s breakthrough biotech is transforming disease management and growth across aquaculture, livestock,  crops, and beyond—Real science. Real results. Built for real farms."
        />

        <section className="section-space">
          <LeadershipSection
            heading_card1="Want To Grow Smarter, Cleaner, And More Profitably?"
            descreption_card1="Let’s help you ditch the stress and scale clean. Reach out for trials, bulk orders, or product info— we’re ready when you are."
            buttonText_card1="Connect Our Team"
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



    </>
  );
}
