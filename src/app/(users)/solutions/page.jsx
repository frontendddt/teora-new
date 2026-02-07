  import SolutionsBanner from "@/components/solutions/SolutionsBanner";
  import ImpactCards from "@/components/solutions/ImpactCards";
  import ScienceEmpower from "@/components/solutions/ScienceEmpower";
  import IndustrySlider from "@/components/home/IndustrySlider"; 
  import CountersSection from "@/components/home/CountersSection";
  import SolutionSlicky from "@/components/solutions/SolutionSlicky";
  import Agriculture from "@/components/about/Agriculture";
  import CompanyComponents from "@/components/home/slickyComponents/CompanyComponents";
  import OurBrochure from "@/components/home/OurBrochure";
  import LeadershipSection from "@/components/home/LeadershipSection";
  import BlogSection from "@/components/home/BlogSection";
   const industrySliderData = [
    {
            image: "/icons/word-icon.png", 
            title: 'UNSAFE FOOD (600M PEOPLE SICK ANNUALLY)', 
            widths:120,
            heights:120,
    },
    {
            image: "/icons/emissions.png", 
            title: 'ENVIRONMENTAL TOLL ($2.9T HIDDEN COSTS) ', 
            widths:120,
            heights:120,
    },
    {
            image: "/icons/impact.png", 
            title: 'WASTED FEED & ENERGY (60%+ FEED INEFFICIENCY)  ', 
            widths:120,
            heights:120,
    }, 
     {
            image: "/icons/freshwater.png", 
            title: 'X 70%', 
            widths:120,
            heights:120,
    },
     {
            image: "/icons/antibiotics.png", 
            title: 'X 80%-90%', 
            widths:120,
            heights:120,
    },
     {
            image: "/icons/farmedfish.png", 
            title: 'X <8%', 
            widths:120,
            heights:120,
    },
     {
            image: "/icons/aquaculture.png", 
            title: 'X DEAD ZONES', 
            widths:120,
            heights:120,
    },
     {
            image: "/icons/current.png", 
            title: 'X CURRENT', 
            widths:120,
            heights:120,
    },
  ]

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

  const Solutions = () =>{
    return(
      <> 
        <section className="purpleBg tectureBg">
            <SolutionsBanner/>
            
            <div className="section-space-2 pt-0">
                <div className="container container2"> 
                  <ImpactCards/>
                </div>
            </div>
        </section>

        <section className="corporateBg section-space-2">
            <ScienceEmpower/>
           <IndustrySlider data={industrySliderData} text="The Result" className="soalq" solaqClass="soloqIndustry"/>
        </section>

        <section className="corporateBg section-space-2">
           <CountersSection counterData={counterData} className="accentRedBg" />
        </section>

        <section className="corporateBg">
            <SolutionSlicky/>
        </section>

        <section className="">
            <Agriculture/> 
        </section>

        <section>
              <CompanyComponents/>
        </section>

        <section className="corporateBg">
              <OurBrochure 
                  classname="midBeigeBg" 
                  color="purpleColor"
                  heading = "Smarter Farming Starts With Teora."
                  discriptions = "Discover how Teora’s breakthrough biotech is transforming disease management and growth across aquaculture, livestock,  crops, and beyond—Real science. Real results. Built for real farms."
              />

              <section className="section-space"> 
                  <LeadershipSection
                      heading_card1 = "Want To Grow Smarter, Cleaner, And More Profitably?"
                      descreption_card1 = "Let’s help you ditch the stress and scale clean. Reach out for trials, bulk orders, or product info— we’re ready when you are." 
                      buttonText_card1 = "Connect To Team"
                      classname_card1 = "card1_font"

                      heading_card2 = "Interested In Backing The Future Of Food?"
                      descreption_card2 = "Teora Powered by SOLAQ™ is scaling fast—and globally. If you’re ready to invest in biotech with purpose and proof, we’d love to talk." 
                      buttonText_card2 = "Connect With Leadership"
                      classname_card2 = "card2_font"
                  />
              </section> 

              <section>
                  <BlogSection/>
              </section>

          </section> 

      </>

    )
}
export default Solutions;