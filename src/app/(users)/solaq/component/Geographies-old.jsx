"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import DiseaseCard from "./DiseaseCard-old";
import { LinkCustom } from "@/components/common/Custom";

gsap.registerPlugin(ScrollTrigger);
const Geographies = () =>
{
  const containerRef = useRef(null);

  useEffect(() =>
  {
    const container = containerRef.current;

    gsap.set(container, {
      display: "flex",
      flexDirection: "row",
    });

    const totalScrollWidth = container.scrollWidth;
    const viewportWidth = window.innerWidth;
    const startX = viewportWidth * 0.8;

    gsap.set(container, {
      x: startX,
    });

    gsap.to(container, {
      x: -(totalScrollWidth - viewportWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${totalScrollWidth}`,
      },
    });

    return () =>
    {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);


  return (
    <section className="corporateBg position-relative" >
      <div className="" style={{ overflow: "hidden" }}>
        <div ref={containerRef} className="container z-2">
          <DiseaseCard />
        </div>
      </div>

      <div className="purpleColor"
        style={{
          position: 'absolute',
          left: '5%',
          top: 350
        }}
      >
        <h2>SOLAQ<sup>TM</sup> Impact</h2>
        <h5>
          Proven in Aquaculture Across <br />
          Species, Trials, and Geographies
        </h5>
        <LinkCustom
          label="Request Trial Results"
          href=""
          className="buttons-primary"
        />
      </div>
    </section>
  );
};
export default Geographies;
