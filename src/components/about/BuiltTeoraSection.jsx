'use client';

import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";
import styles from "./aboutStypes.module.css";
import Link from "next/link";

const impowersData = [
  {
    image: '/icons/impower.png',
    heading: 'EMPOWER',
    titles: 'Empower Farmers Empower People \nEmpower Community'
  },
  {
    image: '/icons/Safeguard.png',
    heading: 'SAFEGUARD',
    titles: 'Safeguard Farms Safeguard Food Safeguard Health'
  },
  {
    image: '/icons/preserve.png',
    heading: 'PRESERVE',
    titles: 'Preserve Resources Preserve Planet Preserve Ecosystems'
  },
  {
    image: '/icons/Enhance.png',
    heading: 'ENHANCE',
    titles: 'Enhance Quality Enhance Growth Enhance Wellbeing'
  }
]

const BuiltTeoraSection = () =>
{

  const { fadeRight, fadeLeft } = useAnimationContext();

  return (
    <>
      <div className={`section-space-2 animate-wrapper ${styles.purpleBg}`}>
        <div className="container container2">
          <div className="row ">
            <MotionWrapper className="col-lg-6 col-md-6 position-relative" variant={fadeLeft}>
              <div className={`${styles.imageWrapper}`}>
                <img
                  src="/image/dr-rishita.png"
                  alt="Dr. Rishita Changede"
                  className="img-fluid rounded shadow"
                  width={260}
                ></img>
                <blockquote className={`mt-4 text-primaryBeige paragraph_elements ${styles.quoteText}`}>
                  “Innovation means nothing if it can’t be used on a real farm, by a real farmer, under real pressure.”
                  <footer className="mt-2 md-mt-3">— Dr. Rishita Changede, Founder & CEO</footer>
                </blockquote>
              </div>
            </MotionWrapper>
            <MotionWrapper className="col-lg-6 col-md-6 text-primaryBeige" variant={fadeRight}>
              <div className={` ${styles.teora_p} h-100 d-flex flex-column justify-content-between `}>
                <h1 className="h1500">
                  And that’s why we built{" "}
                  <span className={`accentLimeColor ${styles.greenHighlight}`}>TEORA.</span>
                </h1>
                <p className="paragraph_elements text-primaryBeige">
                  A smarter, safer and more profitable way to grow and protect farmed food. Our next-gen biologics address the toughest challenges
                  in farming—disease management, enhancing growth,
                  and boosting yields—without compromising the profitability of farmers, or the wellbeing of our Planet, ecosystems and the people.
                </p>
                <p className="paragraph_elements mutedLavenderColor mt-0 md-mt-3">
                  Because If We Don’t Change How We Farm—We Might Just Farm Ourselves Out of Existence.
                </p>
                <div>
                  <Link className="buttons-Beige mt-4" href="/solutions">Discover Solutions</Link>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </div>

      <div className="section-space-2">
        <div className="container pt-0">
          <div className="row">
            {
              impowersData.map((items, index) => (
                <div className="col-lg-3 col-md-6 col-sm-6 accentBlueColor text-center" key={index}>
                  <div className={`${styles.enhance}`}>
                    <div className="image_container">
                      <img
                        src={items.image}
                        alt={items.heading}
                      />
                    </div>
                    <h5 className="mt-4 mb-3">{items.heading}</h5>
                    <h6 style={{ fontSize: '17px' }}><blockquote>{items.titles}</blockquote></h6>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </>
  );
};

export default BuiltTeoraSection;
