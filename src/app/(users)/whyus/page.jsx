 
import Banner from "@/components/whyus/Banner";
import WhyNotUs from "@/components/whyus/WhyNotUs";
import WhyusSlicky from "@/components/whyus/WhyusSlicky";
import CoreBenefitsSection from "@/components/whyus/CoreBenefitsSection";
import Aquaculture from "@/components/whyus/Aquaculture";
import CompanyComponents from "@/components/home/slickyComponents/CompanyComponents";
import OurBrochure from "@/components/home/OurBrochure";
import LeadershipSection from "@/components/home/LeadershipSection";
import BingMedia from "@/components/whyus/BingMedia";

const benefitData = [
  {
    title: 'STRONGER FARMS',
    description: 'Stronger farms means more profitable & resilient farmers and better food quality for all.',
    icon: '/icons/farm.png',
    bgColor: '',
  },
  {
    title: 'BETTER FEED & DISTRIBUTION',
    description: 'Better feed & distribution means sustainable, high-performance supply chains.',
    icon: '/icons/feed.png',
    bgColor: '',    
  },
  {
    title: 'SAFER FOOD & NUTRITION',
    description: 'Safer Food means Healthier consumers, lower antibiotic resistance risks and toxins.',
    icon: '/icons/food.png',
    bgColor: '',
  },
  {
    title: 'BETTER FEED & DISTRIBUTION',
    description: 'Smarter systems means a future-proof, environmentally conscious food industry.',
    icon: '/icons/system.png',
    bgColor: '',
  },
];


const Whyus = () =>{
    return(
        <section>
                <section className="purpleBg tectureBg animate-wrapper">
                        <Banner/>
                </section>

                <section className="corporateBg ">
                    <WhyNotUs/>
                </section>

                <section>
                    <WhyusSlicky/>
                </section>

                <section className="purpleBg position-relative">
                    <CoreBenefitsSection data={benefitData}/>
                </section>

                <section className="corporateBg animate-wrapper">
                        <Aquaculture/>
                </section>

                <section>
                    <CompanyComponents/>
                </section>

                <section className="corporateBg">

                    <section>
                        <div className="container  " >
                             <BingMedia/>
                        </div>
                    </section>

                    <OurBrochure
                        classname="purpleBg" 
                        color="text-primaryBeige" 
                        heading = "Smarter Farming Starts Here."
                        discriptions = "Discover how Teora’s breakthrough biotech is transforming disease management and growth across aquaculture, livestock,  crops, and beyond—Real science. Real results. Built for real farms."
                    />

                    <section className="section-space-2 pt-0 "> 
                        <LeadershipSection
                            heading_card1 = "Ready To Feed The Future? Join The Thousands Already Growing Cleaner, Faster, And Smarter."
                            descreption_card1 = "Whether you’re a farmer fighting WSSV, a feed mill seeking differentiation, a distributor wanting shelf-stable winners, or an investor hunting for the next big thing— Teora has your solution." 
                            buttonText_card1 = "Contact Our Team"
                            classname_card1 = "card1_font"

                            heading_card2 = " “We didn’t set out to revolutionize farming.We just got tired of watching it fail. So we built some thing better. Something that works. Something that lasts. Something that feeds the future without stealing from it.” "
                            descreption_card2 = "– Dr. Rishita Changede, Founder & CEO" 
                            buttonText_card2 = "Connect With Leadership"
                            classname_card2 = "card2_font"
                        />
                    </section>  
                </section>

        </section>
    )
}
export default Whyus;