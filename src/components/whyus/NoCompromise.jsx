"use client"
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";
 
const NoCompromise =() =>{
    const { fadeLeft, fadeRight } = useAnimationContext();

    return(
         <div className="row">
            <MotionWrapper 
                className="col-md-6"
                variant={fadeLeft}
                >
                    <div className="paddingRight">
                        <span className="rounded-pill buge-style accentBlueBg purpleColor pt-2 pb-2">NO COMPROMISE</span>
                        <div className="text-primaryBeige">
                            <h3 className="m-top-b h3slicky">
                                While Others Sell You Disease 
                                Prevention Or Disease Cure Or Growth
                                Enhancement, We Deliver It All In One
                                Feed-Top Or Foliar Spray Solution For
                                Aquaculture, Agriculture, Livestock And
                                Companion Animals. 
                            </h3>
                            <p>
                                Because why choose between healthy farmed animals or plants
                                and profitably farmed animals or plants when you can have both? 
                            </p> 
                        </div>
                        <button className="connectBtn mt-2 mt-sm-4 mb-2 mb-sm-0" type="button">Download Brochure</button>
                    </div>
            </MotionWrapper>

            <MotionWrapper 
              className="col-md-6 d-flex justify-content-end"
              variant={fadeRight}
              >
                <img
                    src="/image/compromisImg.png"
                    alt="compromisImg"
                    className="w60-576"
                />
            </MotionWrapper>
        </div>
    )
}

export default NoCompromise;