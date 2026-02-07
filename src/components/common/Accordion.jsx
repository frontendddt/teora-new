"use client";
import { useState, useRef } from "react";
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";

const items = [
  {
    title: "Accordion Item #1",
    content:
      "This is the first item’s accordion body. It is shown by default."
  },
  {
    title: "Accordion Item #2",
    content:
      "This is the second item’s accordion body."
  },
  {
    title: "Accordion Item #3",
    content:
      "This is the third item’s accordion body."
  }
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef([]);
   const { fadeDown } = useAnimationContext();
  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <MotionWrapper className="accordion" variant={fadeDown}>
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${!isOpen ? "collapsed" : ""}`}
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
              >
                {item.title}
              </button>
            </h2> 
            <div
              className="accordion-collapse"
              style={{
                maxHeight: isOpen
                  ? `${contentRefs.current[index]?.scrollHeight}px`
                  : "0px",
                overflow: "hidden",
                transition: "max-height 0.4s ease"
              }}
            >
              <div
                className="accordion-body"
                ref={(el) => (contentRefs.current[index] = el)}
              >
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </MotionWrapper>
  );
}
