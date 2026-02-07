import styles from "../solaq.module.css";
import { ImageCustom } from "@/components/common/Custom";
import { LinkCustom } from "@/components/common/Custom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const slides = [
   {
      id: 1,
      showImage: false,
      disease: "DISEASE & GROWTH MANAGEMENT",
      headings: "Shrimp&Fish Trials",
      linkLable: "Request Trial Results",
      hrefs: "",
      rightContent: (
         <div className={`d-flex gap-4 align-items-center justify-content-end ${styles.slideText}`} style={{ maxWidth: 900 }}>
            <ImageCustom
               src="/icons/red-arrow.webp"
               alt="arrow"
               style={{ width: 70, height: 130 }}
            />
            <div>
               <h5 className="mutedLavenderColor">
                  10+ Independent Trials Across 5 Countries
               </h5>
               <p className="text-primaryBeige mb-0">
                  SOLAQ<sup>TM</sup> biologics have been validated across multiple shrimp
                  and fish species, in commercial ponds and lab-controlled studies,
                  spanning India, Vietnam, Indonesia, Thailand and Singapore, with no
                  negative impact on Feed Intake, Growth, or Behaviour and zero residue
                  concerns.
               </p>
            </div>
         </div>
      ),
   },
   {
      id: 2,
      showImage: true,
      disease: "DISEASE & HEALTH MANAGEMENT",
      headings: "Shrimp Trial Outcomes",
      linkLable: "Request Trial Results",
      hrefs: "",
      bullets: [
         {
            iconsImage: "Group_9551.webp",
            title: "Upto 45X Higher i.e. >85% Survival",
            desc: "Across lethal viral & bacterial pressure vs 0-30% untreated control.",
         },
         {
            iconsImage: "Group_9553.webp",
            title: ">90% Pathogen Load Reduction",
            desc: "Consistent immune-gene up-regulation, Faster immune response.",
         },
         {
            iconsImage: "Group_9558.webp",
            title: "43.8% Higher Biomass At Harvest.",
            desc: "Driven by improved survival + stronger daily growth.",
         },
         {
            iconsImage: "Group_9560.webp",
            title: "55% Faster ADG & 131% Higher ABW",
            desc: "Higher Biomass, Fast Growth & Premium market size.",
         },
         {
            iconsImage: "Group_9565.webp",
            title: "Normal Harvest Cycles Restored",
            desc: "Emergency 60-day recovered to full 115-121 day harvests.",
         },
      ],
   },
   {
      id: 3,
      showImage: true,
      disease: "DISEASE MANAGEMENT",
      headings: "FishTrial Outcomes",
      linkLable: "Explore Products",
      hrefs: "",
      bullets: [
         {
            iconsImage: "Group_9571.webp",
            title: "Upto 45X Higher i.e. >80% Survival",
            desc: "Across lethal viral & bacterial pressure vs 10-30% untreated control.",
         },
         {
            iconsImage: "Group_9553.webp",
            title: "80–100% Pathogen Reduction",
            desc: "Across SDDV, Streptococcus Iniae, and other pathogens.",
         },
         {
            iconsImage: "Group_9558.webp",
            title: "0.2–0.5 Improvement In FCR",
            desc: "Fish maintain feed efficiency, &  health even during outbreak pressure.",
         },
         {
            iconsImage: "Group_9572.webp",
            title: "2–4× Higher Neutralising Antibody Levels ",
            desc: "Significantly enhanced protection against viral & bacterial loads with visible behavioural recovery.",
         },
         {
            iconsImage: "Group_9575.webp",
            title: "No Negative Impact On ADG Or Final Weight Across Trials.",
            desc: " ",
         },
      ],
   },
   {
      id: 4,
      showImage: true,
      disease: "GROWTH MANAGEMENT",
      headings: "FishTrial Outcomes",
      linkLable: "Explore Products",
      hrefs: "",
      bullets: [
         {
            iconsImage: "Group_9585.webp",
            title: "Up To 55% Faster Daily Growth (ADG)",
            desc: "Fish gained weight significantly faster across  multiple species trials.",
         },
         {
            iconsImage: "Group_9553.webp",
            title: "12–32% Higher Final Body Weight",
            desc: "Fish reached market size earlier, leading to more profitable harvest cycles.",
         },
         {
            iconsImage: "Group_9558.webp",
            title: "0.2–0.5 Improvement In FCR",
            desc: "Improved feed efficiency reduced feed required per kilogram of harvest biomass.",
         },
         {
            iconsImage: "Group_9572.webp",
            title: "22–44% Higher Harvest Biomass",
            desc: "Trials showed higher harvest output driven by better health and faster growth.",
         },
         {
            iconsImage: "Group_9575.webp",
            title: "Steady Feeding & Stress-Resilient Performance",
            desc: "Fish maintained healthy appetite and condition throughout production cycles.",
         },
      ],
   },

];


const DiseaseCard = () =>
{
   return (
      <>
         {slides.map((slide, index) => (
            <div
               key={index}
               className={`d-flex align-items-center ${styles.swipcard_w}`}
            >
               <div className={`purpleBg d-flex flex-column justify-content-between ${styles.scrollingCard}`}>
                  <div>
                     <p className="mutedLavenderColor"><strong>{slide.disease}</strong> </p>
                     <h2 className="mutedLavenderColor mb-0 mb-sm-2">{slide.headings}</h2>
                     {slide.linkLable && (
                        <LinkCustom
                           className="text-primaryBeige"
                           p0="p-0"
                           label={
                              <span>
                                 {slide.linkLable} <HiOutlineArrowNarrowRight />
                              </span>
                           }
                           href="" />
                     )}
                  </div>

                  <div className="row">
                     {slide.showImage && (
                        <div className="col-md-5">
                           <ImageCustom
                              src="/image/shrimp-mouse1.webp"
                              alt="shrimp image"
                              className={styles.stickSwiper_img}
                           />
                        </div>
                     )}

                     <div className={slide.showImage ? "col-md-7" : "col-12 d-flex justify-content-end"}>
                        {slide.rightContent}

                        {slide.bullets && (
                           <ul className="p-0">
                              {slide.bullets.map((item, i) => (
                                 <li key={i} >
                                    <div className="d-flex align-content-center gap-2 mb-1 mb-sm-3">
                                       <div style={{ width: 35, height: 35 }}>
                                          <ImageCustom
                                             src={`/icons/${item.iconsImage}`}
                                             alt={item.title}
                                             style={{ width: 35, height: 35 }}
                                          />
                                       </div>

                                       <span className={styles.icontext}>
                                          {item.title && (
                                             <h5 className="mutedLavenderColor">{item.title}</h5>
                                          )}
                                          {item.desc && (
                                             <span className="text-primaryBeige" >
                                                {item.desc}
                                             </span>
                                          )}
                                       </span>
                                    </div>
                                 </li>
                              ))}
                           </ul>
                        )}
                     </div>
                  </div>
               </div>

            </div>
         ))}
      </>
   )
}
export default DiseaseCard;