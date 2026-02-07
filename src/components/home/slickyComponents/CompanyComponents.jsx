"use client"
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";
const CompanyComponents = ({ disableAnimation = false }) =>
{
    const { fadeDown } = useAnimationContext();
    const contents = (
        <div
            className="supported_slider_card beigeCreamBg border_radius_round2 sliderCardHeight d-flex justify-content-center align-items-center"
            style={{ padding: '0 0 1.5rem 0' }}
        >
            <div className="container purpleColor p-4 corporateBg border_radius_round2 position-relative" style={{ height: '300px' }}>
                <div className="row">
                    <div className="col-md-4 col-12">
                        <div className='' style={{ padding: '0 1.5rem' }}>
                            <h2>Supported By The Best</h2>
                            <p>
                                For investors who want real impact with global reach—Teora delivers both. Backing
                                Teora is backing the future of food.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-8 col-12">
                        <img src="/image/allLogos.png" className="company_logogs" alt="company logos" style={{ width: '100%', height: '100%', marginTop: '-64px' }} />
                    </div>
                </div>
            </div>
        </div>
    )
    return disableAnimation ? contents : (
        <MotionWrapper variant={fadeDown}>
            {contents}
        </MotionWrapper>
    )
}

export default CompanyComponents;