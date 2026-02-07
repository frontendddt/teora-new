// "use client"
// import styles from "../FeatureGrid.module.css";
// import { ImageCustom } from "@/components/common/Custom";
// import { TbCircleDotFilled } from "react-icons/tb";
// export default function FeatureGrid() {
//   return (
//      <div className="container">

//            <div className={`${styles.gridContainer}`}>
//               <div className={`purpleBg text-primaryBeige  ${styles.featureBox1} ${styles.paddingCard} ${styles.fontManage}`}>
//                     <h5>
//                         We Combined The Best Of
//                         Nature With Frontier
//                         Biotechnology, Including
//                         Nobel Prize–Winning
//                         Advances—To Build SOLAQ.
//                     </h5>
//                     <p className="pt-3 " style={{color:"#B3AFA9"}}>
//                         SOLAQTM integrates AI, molecular
//                         design, clean fermentation, and
//                         advanced encapsulation in a
//                         unified biotech engine that can
//                         generate health and growth
//                         solutions for multiple pathogens,
//                         species and farm systems from
//                         one core technology stack. 
//                     </p>
//               </div>
//               <div className={`purpleColor ${styles.featureBox2} ${styles.paddingCard}`}>
//                   <h5>
//                       All Delivered Through
//                       The Simplest Tool
//                       Farms Already Trust
//                       Every Day — <span className="mutedPurpleColor">Feed.</span>
//                   </h5>
//               </div>
//               <div className={`${styles.featureBox3} ${styles.fontManage}` }>
//                     <div className={`position-relative  ${styles.paddingCard}`}>
//                       <div className={`purpleColor text-center ${styles.card_p}`}>
//                           <h5>Clean By Design— For Animals, <br/>
//                               Farmers, Consumers, And The Planet
//                           </h5>
//                           <p >Every SOLAQ<sup>TM</sup> biologic follows the same principles</p>
//                       </div> 
//                       <div
//                          style={{position:"absolute", top:15, left:15}}>
//                            <ImageCustom
//                                 src="/icons/fe-1.webp"
//                                 alt="one core technology stack."
//                                 style={{width:50, height:50}}
//                             />
//                       </div> 
//                         <div
//                            style={{position:"absolute", top:15, right:15}}>
//                            <ImageCustom
//                                 src="/icons/el--2.webp"
//                                 alt="one core technology stack."
//                                 style={{width:50, height:50}}
//                             />
//                       </div>   
//                   </div>
//                     <div className={`purpleColor ${styles.subox}`}>
//                             <div className={`${styles.sub_1}`}>
//                                 <p>No Whole pathogens</p>
//                             </div>
//                             <div className={`${styles.sub_2}`}>
//                                 <p>No Antibotics</p>
//                             </div>
//                             <div className={`${styles.sub_3}`}>
//                                 <p>No Hormones</p>
//                             </div>
//                             <div className={`${styles.sub_4}`}>
//                                 <p>No Cold Chain</p>
//                             </div>
//                             <div className={`${styles.sub_5}`}>
//                                 <p>Oral feed based administration</p>
//                             </div>
//                             <div className={`${styles.sub_6}`}>
//                                 <p>Microbiome-friendly</p>
//                             </div>
//                             <div className={`${styles.sub_7}`}>
//                                 <p>Biodegradable</p>
//                             </div>
//                             <div className={`${styles.sub_8}`}>
//                                 <p>Residue Safe</p>
//                             </div>
//                             <div className={`${styles.sub_9}`}>
//                                 <p>Climate friendly</p>
//                             </div>
//                             <div className={`${styles.sub_10}`}>
//                                 <p>Proven safe</p>
//                             </div>
//                             <div className={`${styles.sub_11}`}>
//                                 <p>Room temperature stable</p>
//                             </div>
//                       </div>
//               </div>
//               <div className={styles.featureBox4}>
//                    <div className="d-flex gap-3">
//                        <div style={{width:150, height:50}}>
//                             <ImageCustom
//                                src="/icons/man-1.webp" 
//                                alt="lkhsdf"
//                            />
//                        </div>
//                        <div className={`  ${styles.fontManage}`}>
//                           <h5>
//                             Clean Biology In. Clean Food
//                             Out. Higher Margins And A
//                             Cleaner Planet In Between.
//                           </h5>
//                        </div>
//                    </div>
//               </div>
//               <div className={`purpleColor position-relative ${styles.featureBox5}  ${styles.fontManage} ${styles.paddingCard}`}>
//                   <div>
//                       <h5>Built For Speed And Scale</h5>
//                       <p>
//                         A modular design allows Teora to develop and
//                         deploy new biologics in months, not years, helping
//                         producers stay ahead of evolving disease
//                         pressures, climate shocks, and market demands.
//                       </p>
//                   </div>
//                     <div
//                      style={{
//                        width:70,
//                        height:70,
//                        position:'absolute',
//                        top:-15,
//                        right:15
//                      }}
//                    >
//                         <ImageCustom
//                             src="/icons/share.webp" 
//                             alt="earths "
//                         />
//                    </div>
//               </div>
//               <div className={`purpleColor ${styles.featureBox6} ${styles.paddingCard} ${styles.fontManage}`}>
//                      <h5>Flexible Across Farming</h5>
//                      <p className="mt-3">
//                         SOLAQ<sup>TM</sup> adapts seamlessly across
//                         species (shrimp, fish, poultry, livestock),
//                         stages (hatchery to harvest), and 
//                         production intensities — 
//                        <strong>making high- performance biology accessible to farms of every size.</strong>
//                    </p>
//               </div>
//               <div className={`purpleBg text-primaryBeige position-relative ${styles.featureBox7} ${styles.paddingCard}`}>
//                    <div className={` ${styles.fontManage}`}>
//                        <h5>
//                           Designed For Real-<br/>
//                           World Impact
//                        </h5>
//                        <p>SOLAQTM enables farms to:</p>
//                        <ul className="p-0" style={{color:"#B3AFA9"}}>
//                            <li className="d-flex gap-3 mb-2">
//                               <TbCircleDotFilled style={{width: 15}}/>
//                               <span>Strengthen animal resilience</span>
//                            </li>
//                             <li className="d-flex gap-3 mb-2">
//                               <TbCircleDotFilled style={{width: 15}}/>
//                               <span>Reduce preventable loss</span>
//                            </li> 
//                               <li className="d-flex gap-3 mb-2">
//                               <TbCircleDotFilled style={{width: 15}}/>
//                               <span>Harvest consistently</span>
//                            </li>

//                             <li className="d-flex gap-3 mb-2">
//                               <TbCircleDotFilled style={{width: 15}}/>
//                               <span>Produce cleaner, safer, export-ready protein</span>
//                            </li>

//                             <li className="d-flex gap-3 ">
//                               <TbCircleDotFilled style={{width: 15}}/>
//                               <span>Improve profitability . No added burden</span>
//                            </li> 
//                        </ul>
//                        <p>
//                           <strong>
//                              Biology that works for the farm, the food
//                              system, and the future.
//                           </strong>
//                        </p>
//                    </div>
//                    <div
//                      style={{
//                        width:100,
//                        height:100,
//                        position:'absolute',
//                        top:-15,
//                        right:25
//                      }}
//                    >
//                         <ImageCustom
//                             src="/icons/erth.webp" 
//                             alt="earths "
//                         />
//                    </div>
//               </div>
//             </div>

//      </div>
//   );
// }

"use client";
import styles from "../FeatureGrid.module.css";
import { ImageCustom } from "@/components/common/Custom";
import { TbCircleDotFilled } from "react-icons/tb";

/* data */
const subBoxes = [
  ["sub_1", "No Whole pathogens"],
  ["sub_2", "No Antibotics"],
  ["sub_3", "No Hormones"],
  ["sub_4", "No Cold Chain"],
  ["sub_5", "Oral feed based administration"],
  ["sub_6", "Microbiome-friendly"],
  ["sub_7", "Biodegradable"],
  ["sub_8", "Residue Safe"],
  ["sub_9", "Climate friendly"],
  ["sub_10", "Proven safe"],
  ["sub_11", "Room temperature stable"],
];

const impactList = [
  "Strengthen animal resilience",
  "Reduce preventable loss",
  "Harvest consistently",
  "Produce cleaner, safer, export-ready protein",
  "Improve profitability . No added burden",
];

export default function FeatureGrid()
{
  return (
    <div className="container">
      <div className={styles.gridContainer}>
        <div className={`purpleBg text-primaryBeige ${styles.featureBox1} ${styles.paddingCard} ${styles.fontManage}`}>
          <h5>
            We Combined The Best Of Nature With Frontier Biotechnology,
            Including Nobel Prize–Winning Advances—To Build SOLAQ.
          </h5>
          <p className="pt-3" style={{ color: "#B3AFA9" }}>
            SOLAQTM integrates AI, molecular design, clean fermentation,
            and advanced encapsulation in a unified biotech engine.
          </p>
        </div>
        <div className={`purpleColor ${styles.featureBox2} ${styles.paddingCard}`}>
          <h5>
            All Delivered Through The Simplest Tool Farms Already Trust —
            <span className="mutedPurpleColor"> Feed.</span>
          </h5>
        </div>
        <div className={`${styles.featureBox3} ${styles.fontManage}`}>
          <div className={`position-relative ${styles.paddingCard}`}>
            <div className={`purpleColor text-center ${styles.card_p}`}>
              <h5>Clean By Design— For Animals, Farmers, Consumers, And The Planet</h5>
              <p>Every SOLAQ<sup>TM</sup> biologic follows the same principles</p>
            </div>

            {["fe-1.webp", "el--2.webp"].map((img, i) => (
              <div key={i} style={{ position: "absolute", top: 15, [i ? "right" : "left"]: 15 }}>
                <ImageCustom src={`/icons/${img}`} alt="icon" style={{ width: 50, height: 50 }} />
              </div>
            ))}
          </div>

          <div className={`purpleColor ${styles.subox}`}>
            {subBoxes.map(([cls, text]) => (
              <div key={cls} className={styles[cls]}>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.featureBox4}>
          <div className="d-flex gap-3">
            <div style={{ width: 150 }}>
              <ImageCustom src="/icons/man-1.webp" alt="man" />
            </div>
            <div className={styles.fontManage}>
              <h5>Clean Biology In. Clean Food Out. Higher Margins And A Cleaner Planet.</h5>
            </div>
          </div>
        </div>
        <div className={`purpleColor position-relative ${styles.featureBox5} ${styles.paddingCard} ${styles.fontManage}`}>
          <h5>Built For Speed And Scale</h5>
          <p>A modular design allows Teora to develop and deploy new biologics in months.</p>

          <div style={{ width: 70, position: "absolute", top: -15, right: 15 }}>
            <ImageCustom src="/icons/share.webp" alt="share" />
          </div>
        </div>

        <div className={`purpleColor ${styles.featureBox6} ${styles.paddingCard} ${styles.fontManage}`}>
          <h5>Flexible Across Farming</h5>
          <p className="mt-3">
            SOLAQ<sup>TM</sup> adapts seamlessly across species and stages —
            <strong> making high-performance biology accessible to all farms.</strong>
          </p>
        </div>

        <div className={`purpleBg text-primaryBeige position-relative ${styles.featureBox7} ${styles.paddingCard}`}>
          <div className={styles.fontManage}>
            <h5>Designed For Real-World Impact</h5>
            <p>SOLAQTM enables farms to:</p>

            <ul className="p-0" style={{ color: "#B3AFA9" }}>
              {impactList.map((text, i) => (
                <li key={i} className="d-flex gap-3 mb-2">
                  <TbCircleDotFilled style={{ width: 15 }} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <p>
              <strong>Biology that works for the farm, the food system, and the future.</strong>
            </p>
          </div>

          <div style={{ width: 100, position: "absolute", top: -15, right: 25 }}>
            <ImageCustom src="/icons/erth.webp" alt="earth" />
          </div>
        </div>

      </div>
    </div>
  );
}
