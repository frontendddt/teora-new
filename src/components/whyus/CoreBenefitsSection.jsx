
"use client"
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";
 
import styles from "./whyUS.module.css";

// const benefitData = [
//   {
//     title: 'STRONGER FARMS',
//     description: 'Stronger farms means more profitable & resilient farmers and better food quality for all.',
//     icon: '/icons/farm.png',
//     bgColor: '',
//   },
//   {
//     title: 'BETTER FEED & DISTRIBUTION',
//     description: 'Better feed & distribution means sustainable, high-performance supply chains.',
//     icon: '/icons/feed.png',
//     bgColor: '',    
//   },
//   {
//     title: 'SAFER FOOD & NUTRITION',
//     description: 'Safer Food means Healthier consumers, lower antibiotic resistance risks and toxins.',
//     icon: '/icons/food.png',
//     bgColor: '',
//   },
//   {
//     title: 'BETTER FEED & DISTRIBUTION',
//     description: 'Smarter systems means a future-proof, environmentally conscious food industry.',
//     icon: '/icons/system.png',
//     bgColor: '',
//   },
// ];

const CoreBenefitsSection = ({data}) =>{
    const { fadeDown } = useAnimationContext();
    return(
        <>
          <MotionWrapper className="position-relative section-space"
            variant={fadeDown}
          >
            <div className="container">
                <div className="row">
                   {data.map((el, index) =>(
                         <div className="col-md-3 col-sm-6" key={`el${index}`}>
                            <div className="padding_container">
                                 <div className={`m-auto ${styles.circalAria}`}>
                                     <img
                                        src={el.icon}
                                        alt={el.title} 
                                     /> 
                                 </div> 
                                 <p className="text-primaryBeige text-center p-2 fw-300">
                                    {el.description}
                                 </p> 
                            </div>
                        </div> 
                   ))}
                       
                </div>
            </div> 
            <div className="rowsborders darkpurpolBg none768"> </div>
        </MotionWrapper> 
        </>
    )
}

export default CoreBenefitsSection;