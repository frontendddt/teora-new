import TimerCardSwiper from "../about/subComponent/TimerCardSwiper";
import WhyMatterCard from "../home/slickyComponents/WhyMatterCard";
import { MissionCardSwiper } from "../about/subComponent/MissionCardSwiper";
import styles from "./whyUS.module.css";
import StickySections from "../common/StickySections";
import StackedCards from "../about/subComponent/StackedCards";
import Building from "./Building";
import aqualture from "../../../public/bgImage/swiper_team_whyUs.png";
import aqualture2 from "../../../public/bgImage/aqualture.webp";
import NoCompromise from "./NoCompromise";
import { ImageCustom } from "../common/Custom";
//TimerCardSwiper   why us sweeper data
const cardcontant = [
  {
    heading_before_break: "No Needles. No Cold Chains.",
    heading_after_break: "No Nonsense.No Stress",
    tableTrtd1: "Injections that stress animals. Cold storage nightmares. Labor-intensive",
    tableTrtd2: "Just sprinkle on feed. Roomtemperature stable. Works in any climate, no handling.",
    img: "/image/adoption_fish.png",
    alt: "Outbreaks End Before",
    imgTitle: "Easy adoption. Zero infrastructure upgrades. Happy animals.",
    listActive: "Stress-Free",
  },
  {
    heading_before_break: "AI-Powered. Disease Moves Fast. We ",
    heading_after_break: "Move Faster Fast. We Move Faster",
    tableTrtd1: " Expensive, slow-to-deploy vaccines— 3-5 years to develop new vaccines.By",
    tableTrtd2: "Fast production —AI + precision fermentation deliver custom biologics in 6-8 ",
    img: "/image/ai_power.png",
    alt: "Outbreaks End Before",
    imgTitle: "Stay ahead of emerging diseases. Protect next season. Keep production moving.",
    listActive: "Fast Response",
  },
  {
    heading_before_break: "Regulatory-Ready. No Antibiotics. No ",
    heading_after_break: "Chemicals. No Residues.Ban-Proof",
    tableTrtd1: "Banned substances. Antibiotic  overload. Residue in every harvest, Import rejections, recall and falling premiums.",
    tableTrtd2: "Zero-residue biologics meet EU, US, and Asian clean-food mandates, export-ready healthy clean stock from day one",
    img: "/image/antibiotics.png",
    alt: "Outbreaks End Before",
    imgTitle: "Clean approvals. Smooth exports. Command higher prices.Food people actuallytrust.",
    listActive: "Clean Science",
  },

  {
    heading_before_break: "Any Farm. Any Size. Any ",
    heading_after_break: "Season. Climate Stable",
    tableTrtd1: "High-tech solutions for high-budget farms or ignores small farms adds hidden costs.",
    tableTrtd2: "Modular powders and sprays dose by weight— Accessible for both smallholders and industrial-scale farms.",
    img: "/image/climate.png",
    alt: "Outbreaks End Before",
    imgTitle: "One solution across locations. Predictable costs, smooth expansion, confidence to seize newmarkets. ",
    listActive: "Built to Scale",
  },
  {
    heading_before_break: "ROIYou Can Plan On. More ",
    heading_after_break: "Growth, Less Feed. Low Cost",
    tableTrtd1: "Hidden fees, frequent re-dosing, High FCR, wasted feed, and slow harvests bleed margins.",
    tableTrtd2: "Transparent pricing, long shelf life, consistent field returns that outrun costs cycle after cycle.",
    img: "/image/quicker.png",
    alt: "Outbreaks End Before",
    imgTitle: "Lower cost per kilo, faster cash flow,quicker growth, & stronger ROI every cycle. ",
    listActive: "Smart ROI",
  },
  {
    heading_before_break: "Clean Inputs. Clear Water. Good ",
    heading_after_break: "For Earth. Great For Earnings",
    tableTrtd1: "Choose between profits OR planet, Chemical runoff creates dead zones and ",
    tableTrtd2: "Nature-sync biologics slash runoff , 40% lower emissions. 30% less feed waste. while boosting yield.",
    img: "/image/sustainability.png",
    alt: "Outbreaks End Before",
    imgTitle: "Hit sustainability targets, earn community goodwill, and safeguard your operating license. ",
    listActive: "Planet positive",
  }
]

// WhyMatterCard data
const slideCardData = [
  {
    img: "/icons/whyus_slicy_icon1.png",
    heading: "Smart Biotech for Fish, Shrimp & the Future of Aquaculture- Disease & Growth management",
    title: "Teora’s biotech platform packs precision science into everyday feed and delivers gutsmart biologics that prevent disease, speed up growth, and give farms a fighting chance without stressing the aqua animals—or the ecosystem. ",
    bold: "No cold chains. No antibiotics. No injections",
    class: "accentBlueBg",
    color: "purpleColor"
  },
  {
    img: "/image/therpic-fish.png",
    main_icon: "/icons/about-icon1.png",
    title: "Next-gen, feed-based prophylactic + therapeutic disease protection—no injections, no antibiotics, no drama. ",
    titleBold: "ShrimpGuard™| FishGuard™ ",
    bold2: "Up to 90% survival rates, 70% drop in antibiotic use, Via top-coated feed, no cold storage required, Validated in real- farms across Asia.",
    class: "purpleBg",
    color: "text-primaryBeige",
    series_title: "DISEASE MANAGEMENT- SHRIMPS & FISH",
    series: "GUARD SERIES",
    series_subTitle: "PREVENT. COMBAT. KEEP CALM. FARM ON."
  },
  {
    banner: "/image/servial.png",
    none: "d-none",
    explore_results_btn: "Explore Results",
    class: "mutedBeigeBg",
    color: "purpleColor"
  },
  {
    banner: '/image/srimpGard.png',
    explore_results_btn: "Explore Results",
    class: "lightBeigeBg",
    color: "purpleColor"
  },
  {
    img: "/image/accrelator-fish.png",
    main_icon: "/icons/about-icon2.png",
    bgcolorClass: 'accentLimebg',

    title: " A clean, natural growth accelerator that improves feed conversion, muscle development, and harvest speed—without chemicals or hormones.  FishJumbo™",
    bold2: "20% faster growth, 0.2–0.5 lower FCR, 30%less feedwastage, No hormones orGMOs, 100%biodegradable and export-compliant",
    class: "purpleBg",
    color: "text-primaryBeige",
    series_title: "GROWTH OPTIMISATION IN FISH",
    series: "JUMBO SERIES",
    series_subTitle: "GROW BIG. GROW FAST. STAY CLEAN."

  },
  {
    banner: '/image/wssv.png',
    explore_results_btn: "Explore Results",
    class: "midBeigeBg",
    color: "purpleColor"
  },


  {
    img: "/icons/neutralized.png",
    heading: "Real-World Results— Proven Where It Matters: In Your Ponds, Not Just Our Labs",
    title: "10+ pathogens neutralized | 5+ countries validated | >45x improved survival in outbreak farms | ~30% faster growth across species | 70% fewer toxic inputs",
    bold: "0 residues. Zero rejections. No run-offs",
    class: "lavenderBg",
    color: "purpleColor"
  },
  {
    img: "/icons/neutralized.png",
    heading: "What this means for Aquaculture Farmers ?",
    title: "Less stress → Healthier ponds | \nNo antibiotics, \nno residues → No rejections | Fewer mortalities → More harvests | Healthier stock → Better prices | Lower feed use = lower footprint | More growth, less input, Less waste  Save on labor, logistics and stress",
    bold: "Cleaner yields . Safer exports. No withdrawal period.",
    class: "lavenderBg",
    color: "purpleColor"
  },

]


// whyus missionCardSwiperData  data
const missionCardSwiperData = [
  {
    heading: "Sustainability",
    info: "Our biotech-driven solutions replace harmful chemicals, antibiotics, and wasteful farming practices with sustainable biologics.Thus, helping farmers build resilient, regenerative, future-proof food systems that nurture the land, protect waterways, and sustain ecosystems for future generations.",
    title: "Protecting Our Planet While Feeding The Future",
    image: '/slider/sustainability_whyUs.png'
  },
  {
    heading: "Food Security",
    info: "Growing population demands food systems that are resilient, high-yielding, and free from disease-driven losses. Teora is empowering farmers—big and small —with advanced biotech solutions that ensure stable production, lower risks, and greater profitability even in the face of climatic and global food challenges.",
    title: "Future Proofing Farming For A Growing World",
    image: '/slider/food_security_whyUs.png'
  },
  {
    heading: "Safety",
    info: "Teora’s vision for safety extends beyond human consumption—we are creating a world where food production protects not just people, —it extends to the entire ecosystem, including animals, aquatic life, crops, and the environment— ensuring a healthier, more ethical, and sustainable food production.",
    title: "Protecting People, Animals, And The Environment Equally. ",
    image: '/slider/security_whyus.png'
  },
  {
    heading: "CLEAN PROTEIN DEMAND",
    info: "By 2050, food demand will increase by 60%, yet traditional farming cannot keep up. Teora’s solutions optimize protein production while reducing land, water, and feed inputs—creating a low-carbon, highyield alternative for a growing population.",
    title: "TAddressing The Global Protein Challenge",
    image: '/slider/cleanProtein_whyus.png'
  },
  {
    heading: "Security",
    info: "Teora scaling beyond Aquaculture—With AI-powered design and rapid precision fermentation, we’re shaping a cleaner, scalable future for livestock, poultry, crops, & Pets",
    title: "Sustainability Recognition – Named A We Empower UN SDG Challenge Finalist And Recognised In Media",
    image: '/slider/aboutSlide6.png'
  }

]

//whyus stack card slider card slider content 
const stackCadrSlide = [
  {
    titleName: 'DIFFERENCES',
    image: '/icons/settings.png',
    hedings: "DESIGNED FOR REAL FARMS.",
    subHeading: "Any Farm Any Species. Any Season. Fast",
    bgClass: "mutedLavenderBg",
    listTitles: [
      {
        title: "Shelf-stable, easy to use",
        icons: 'FaRegSquareCheck'
      },
      {
        title: "Built in 6–8 months, not years",
        icons: 'FaRegSquareCheck'
      },
      {
        title: "Species & Disease-specific, not generic",
        icons: 'FaRegSquareCheck'
      },
      {
        title: " Works across aquaculture, livestock, crops, poultry and pet health. ",
        icons: 'FaRegSquareCheck'
      },

    ]
  },
  {
    titleName: 'SCALABLE',
    image: '/icons/smarter.png',
    hedings: "NOT JUST SAFER. SMARTER.",
    subHeading: "Lab-designed. Farm-tested. Globally ready. ",
    title: "Teora fits right into existing feed or spray routines—removes stress, complex handling and harmful inputs from farming. It boosts survival and growth without changing how you farm, whether you’re a smallholder or scaled up. ",
    bgClass: "mutedBeigeBg"
  },
  {
    titleName: 'CLEAN BIOLOGICS',
    image: '/icons/Needle.svg',
    hedings: "OUR BIOLOGICS ARE",
    // subHeading: "90% Survival. 30% Less Waste. More yield ", 
    bgClass: "accentBlueBg",
    listTitles: [
      {
        title: "Antibiotic-free  ",
        icons: 'FaRegSquareCheck'
      },
      {
        title: "Injection-free ",
        icons: 'FaRegSquareCheck'
      },
      {
        title: "Cold-chain free",
        icons: 'FaRegSquareCheck'
      },
      {
        title: " Hormone-free ",
        icons: 'FaRegSquareCheck'
      },
      {
        title: " Species-specific & scalable ",
        icons: 'FaRegSquareCheck'
      },

    ]
  },
  {
    image: '/icons/whyrush.png',
    hedings: "STARTS AT THE MOLECULAR LEVEL",
    subHeading: "Our smart biologics do what vaccines, chemicals, and supplements can’t.",
    bgClass: "accentLimebg",
    listTitles: [
      {
        title: "Prevent disease before it starts ",
        icons: 'FaRegSquareCheck'
      },
      {
        title: "Treat outbreaks fast—without antibiotics ",
        icons: 'FaRegSquareCheck'
      },
      {
        title: " Boost growth and feed efficiency naturally",
        icons: 'FaRegSquareCheck'
      },
      {
        title: "Cut costs, waste, and complexity—across ",
        icons: 'FaRegSquareCheck'
      },

    ]
  },

  {
    titleName: 'THE PROCESS',
    hedings: "HOW IT WORKS",
    rowImage: "/image/process_image.png",
    subHeading: "Less Emissions. More Ecosystem.",
    title: "By improving feed efficiency and disease resilience, we reduce waste, boosts yields while shrinking carbon emissions , conserving resources, and restoring balance.",
    bgClass: "purpleBg",
    colors: "text-primaryBeige"
  },

  {
    image: '/icons/slicky-home-1.svg',
    hedings: "MEET SOLAQ™",
    subHeading: "The Science That Thinks Like a Farmer ",
    title: "An AI-powered biotech platform that maps disease patterns, designs species-specific biologics, and delivers them through feed in fish and animals and foliar spray in crops— no injections, no chemicals, no cold-chain",
    bgClass: "lightPinkBg"
  },

]

const WhyusSlicky = () =>
{
  return (
    <>
      <div className="sticky_container">
        <StickySections zIndex={1} extraClass="midPurpleBg">
          <TimerCardSwiper
            cardcontant={cardcontant}
            heading="Teora Is Not Ignoring This. We’re Solving It— Starting With Aquaculture. One Platform. Zero Drama. Real Results."
            varient="whyusTimerDesign"
          />
        </StickySections>

        <StickySections zIndex={2} extraClass="none992 accentRedBg">
          <div className="container">
            <StackedCards
              stackCadrSlide={stackCadrSlide}
              heading={"THE SCIENCE BEHIND THE MAGIC"}
            />
          </div>
        </StickySections>

        <div className="sticky-top section-space-2 sticky_section deepPurple"
          style={{
            backgroundImage: `url(${aqualture.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            zIndex: '4'
          }}
        >
          <div className="container">
            <Building />
          </div>
        </div>

        <div className="sticky-top section-space-2 lavenderBg sticky_section" style={{ zIndex: '5' }}>
          <MissionCardSwiper
            missionCardSwiperData={missionCardSwiperData}
            heading="Built to help solve global challenges in food industry"
          />
        </div>

        <div className="sticky-top section-space-2 purpleBg tectureBg sticky_section" style={{ zIndex: '6' }}>
          <div className="container animate-wrapper">
            <NoCompromise />
          </div>
        </div>

        <div className="sticky-top indexpage lavenderBg section-space-2 sticky_section "
          style={{
            backgroundImage: `url(${aqualture2.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            zIndex: '7'
          }}>
          <div className="container">
            <WhyMatterCard
              data={slideCardData}
              text="FIELD PROVEN IN AQUACULTURE"
              buttons={"buttons"}
            />
          </div>
        </div>

        <div className={`sticky-top section-space-2 sticky_section beigeCreamBg ${styles.autoheight}`} style={{ zIndex: '8' }}>
          <div className="container">
            <h2 className="h1500 revolutionising purpleColor"> HOW DO WE SOLVE LOW VACCINE COVERAGE IN FISH & SHRIMP FARMS ?</h2>
            <div className={styles.vaccine}>
              <ImageCustom
                src="/image/coverage.png"
                alt="HOW DO WE SOLVE LOW VACCINE"
              />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
export default WhyusSlicky;