"use client";
import { LinkCustom } from "@/components/common/Custom";
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";
import { FaRegCircleCheck } from "react-icons/fa6";

const focusData = [
  {
    badge: "CURRENT FOCUS AREAS",
    title: "Aquaculture",
    iconColor: "#B2D3D3",
    items: [
      "Shrimp health, resilience & early-signal support",
      "Fish immune readiness & pathogen-specific biologics",
      "Natural growth acceleration programs (multi-species)",
    ],
  },
  {
    badge: "IN FUTURE RESEARCH",
    title: "Upcoming Categories",
    iconColor: "#8EAB49",
    items: [
      "Poultry health & gut resilience",
      "Livestock early-stage immunity boosters",
      "Companion animal biologics for gut & immune wellness",
      "Crop-associated biologics (soil & root microbiome support)",
    ],
  },
];

const BuiltFor = () => {
  const { fadeLeft, fadeRight } = useAnimationContext();

  return (
    <div className="row">
      <MotionWrapper className="col-lg-6" variant={fadeLeft}>
        <div style={{ maxWidth: 450 }}>
          <h2 className="purpleColor">
            SOLAQ : BUILT FOR TODAY, EXPANDING FOR TOMORROW
          </h2>

          <p className="purpleColor">
            SOLAQ<sup>TM</sup>  is not just a technology — it’s an
             expanding ecosystem of biologics designed to
            support resilience, protect performance, and
            enable cleaner growth across species.
            <br />
            <br className="none768" />
            One platform. Multiple biologics. A growing pipeline built for global
            food and farm needs.
            <br />
            <strong>Sustainable. Scalable. Future-Ready.</strong>
          </p>

          <LinkCustom
            label="Our Vision"
            href=""
            className="buttons-primary"
            label2="Product Pipeline"
            href2="/"
            className2="buttons-Beige"
          />
        </div>
      </MotionWrapper>

      <MotionWrapper className="col-lg-6" variant={fadeRight}>
        {focusData.map(({ badge, title, iconColor, items }) => (
          <div
            key={title}
            className="card1 p-all purpleBg text-primaryBeige border_radius_round2 mb-4">
            <span className="rounded-pill buge-style accentRedBg pt-2 pb-2 text-primaryBeige">
              {badge}
            </span> 
            <h2 className="m-0">{title}</h2> 
            <ul className="mt-2 p-0 mb-0">
              {items.map((text) => (
                 <li key={text} className="d-flex gap-2 mt-1">
                    <FaRegCircleCheck
                      style={{ fontSize: 28, color: iconColor }}
                    />
                    <p className="mutedLavenderColor mb-0">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </MotionWrapper>
    </div>
  );
};

export default BuiltFor;
