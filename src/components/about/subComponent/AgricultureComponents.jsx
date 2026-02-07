"use client"
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";
 
import Image from "next/image";
import { LinkCustom } from "@/components/common/Custom";
const AgricultureComponents = () =>{
       const { fadeLeft, fadeRight } = useAnimationContext();
      
        const cards = [
        {
            imgSrc: "/icons/about-icon1.png",
            alt: "BUILT TO FIGHT BACK & PROTECT",
            badgeText: "DISEASE MANAGEMENT- SHRIMPS & FISH",
            badgeBg: "accentRedBg",
            badgColor:"text-primaryBeige",
            title: "GUARD SERIES",
            description: "BUILT TO FIGHT BACK & PROTECT"
        },
        {
            imgSrc: "/icons/about-icon2.png",
            alt: "BUILT TO GROW MORE SMARTLY",
            badgeText: "GROWTH OPTIMISATION IN FISH",
            badgeBg: "accentLimebg",
            badgColor:"purpleColor",
            title: "JUMBO SERIES",
            description: "BUILT TO GROW MORE SMARTLY"
        }
    ];
    return(
        <>
            <div className="container">
                    <div className="row">
                            <MotionWrapper className="col-md-6"
                                    variant={fadeLeft}
                            >
                                    <div className="paddingRight">  
                                            <h2 className="purpleColor m-top-b" >
                                                    From Aquaculture to Agriculture—We’re Just Warming Up.
                                            </h2>

                                            <p className="purpleColor m-top-b" style={{padding:'0 1.5rem 0 0'}}>
                                                    Our oral and sprayable biologics are already improving
                                                    survival, accelerating growth, and reducing waste across
                                                    aquaculture.Next stop: livestock, poultry, crop disease
                                                    management, and companion health.
                                            </p>

                                            <div className="buttons d-flex gap-2 mb-2 mb-sm-0"> 
                                                    <LinkCustom href="/solutions" label="Aquaculture Solutions" p0="p-0" className="buttons-primary" />
                                            </div>
                                    </div>
                            </MotionWrapper>
                            <MotionWrapper className="col-md-6" variant={fadeRight}> 
                                         {cards.map((card, index) => (
                                                <div
                                                    key={index}
                                                    className="card1 p_smarter purpleBg text-primaryBeige border_radius_round2 d-flex justify-content-around mb-4">
                                                    <Image
                                                        src={card.imgSrc}
                                                        width={95}
                                                        height={95}
                                                        alt={card.alt}
                                                        className="responsiveImage"
                                                          />
                                                   <div className="m-0">
                                                        <span className={`rounded-pill buge-style ${card.badgeBg} ${card.badgColor} pt-2 pb-2 buge8`}>
                                                            {card.badgeText}
                                                        </span>
                                                        <h2 className="m-0">{card.title}</h2>
                                                        <p className="m-0">{card.description}</p>
                                                   </div>
                                                </div>
                                        ))}
                            </MotionWrapper>
                    </div>  
            </div>
        </>
    )
}

export default AgricultureComponents;