"use client"
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";
 import { motion } from "framer-motion";
import IndustrySlider from "../home/IndustrySlider";

//IndustrySlider data
const data = [
    {
            image: "/icons/billion.png", 
            title: 'X $940 BILLION',
            text: 'in global economic losses tied to food waste, early harvests, and failed production cycles.',
            widths:120,
            heights:120,
    },
    {
            image: "/icons/stock.png", 
            title: 'X 70%',
            text: 'of aquaculture stock is lost to disease annually—wiping out farms and family incomes.',
            widths:120,
            heights:120,
    },
    {
            image: "/icons/costs.png", 
            title: 'X 60%',
            text: 'of all farm costs go to feed—and  most of it gets wasted due to poor conversion and disease loss..',
            widths:120,
            heights:120,
    }, 
     {
            image: "/icons/freshwater.png", 
            title: 'X 70%',
            text: 'of freshwater and half of habitable  and is used for farming, while 90% of wild fish stocks are overfished Deforestation & biodiversity loss.',
            widths:120,
            heights:120,
    },
     {
            image: "/icons/antibiotics.png", 
            title: 'X 80%-90%',
            text: 'of all antibiotics are used in farming, fuelling resistant bacteria and stricter export bans.',
            widths:120,
            heights:120,
    },
     {
            image: "/icons/farmedfish.png", 
            title: 'X <8%',
            text: 'of farmed fish ever receive vaccines. For shrimp, there’s barely a viable vaccine model at all.',
            widths:120,
            heights:120,
    },
     {
            image: "/icons/aquaculture.png", 
            title: 'X DEAD ZONES',
            text: 'Aquaculture waste contributes to oxygen depletion in water bodies leading to marine dead zones that harm marine biodiversity.',
            widths:120,
            heights:120,
    },
     {
            image: "/icons/current.png", 
            title: 'X CURRENT',
            text: 'are expensive, labor-intensive, and  impractical especially for species  where injections, immersions or genetic tweaks don’t work.',
            widths:120,
            heights:120,
    },
]

const cardData = [
    {
        cardHeading:"Built By A Biologist",
        cardTitle: "Dr. Rishita Changede imagined a better food system—and built the  science- Solaq to back it. With a PhD in synthetic biology and an Executive MBA, she bridges science with scalable business."
    },
    {
        cardHeading:"Aligning With UN (SDG)",
        cardTitle: "Teora is committed to SDG 2 (Zero Hunger), SDG 12 (Responsible Consumption & Production), and SDG 14 (Life Below Water) by promoting responsible farming practices that benefit farmers, consumers and the environment."
    },
    {
        cardHeading:"Powered By",
        cardTitle: "Teora’s feed-integrated, AI-designed biotech platform redefines how disease is prevented, growth is triggered, and yields are protected. Its a science that does what farming needs next."
    },
    {
        cardHeading:"Global Change Leader",
        cardTitle: "UN SDG Finalist. Global Shrimp Summit Innovator. Winner of The Liveability Challenge. Backed by Hatch, SkyDeck, and over $500K in funding—Teora is leading change."
    },
]
const WhyNotUs = () =>{

     const { fadeLeft, fadeRight, animationVariants, ref1, inView1 } = useAnimationContext();

    return(
        <>
            <div className="section-space-2">
                <div className="container container2 animate-wrapper">
                    <div className="row">
                            <MotionWrapper className="col-lg-5" variant={fadeLeft}> 
                                    <div className="paddingRight">
                                           <div className={`rounded-pill buge-style accentRedBg text-primaryBeige pt-2 pb-2 w-75`}>
                                               WHY US ? WHY NOT US !
                                            </div> 
                                            <h2 className="purpleColor m-top-b " >  {/*fw-300 hhFontsSize */}
                                                Science That Actually Works In The Real World
                                            </h2> 
                                            <p className="purpleColor psize">
                                                We’re not just another biotech company making promises in PowerPoints. 
                                                <b>We’re the team that took fish survival from <span className="num-percentage">2% to 90%</span> in aquaculture.</b>
                                                We are scientists who wear boots to farm trials and still win 
                                                <b><a href="/" className="purpleColor"><span className="num-percentage"> global innovation awards.</span></a></b>
                                                <br></br>  
                                            </p>
                                            <p className="purpleColor psize mb-4 mb-lg-0">
                                                <b>Bottom line?</b> We didn’t fix what’s broken in farming,
                                                    we created what’s missing—without breaking
                                                    farmers, ecosystems, or food safety standards. 
                                            </p>
                                    </div> 
                            </MotionWrapper>
                            <MotionWrapper className="col-lg-7" variant={fadeRight}>
                                <div className="row">
                                    {cardData.map((el, index) =>(
                                        <div className="col-md-6 mb-4" key={`index${index}`}>
                                            <div className="hoverCard borderRadius20 p-3 p-sm-4  h-100">
                                                <p className="h4industry">{el.cardHeading}</p>
                                                <p className="mb-0 fw-400" >
                                                    {el.cardTitle}
                                                </p>
                                            </div>
                                        </div>
                                    ))} 

                                </div>
                            </MotionWrapper>
                    </div>
                </div>
            </div>

            <motion.div className="whyusRows animate-wrapper"
                ref={ref1}
                initial="hidden"
                animate={inView1 ? 'visible' : 'hidden'}
                variants={animationVariants}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <IndustrySlider data={data} text="What We’re Up Against ?" className="whyusHeadins"/>
            </motion.div>
        
        </>
    )
}
export default WhyNotUs;