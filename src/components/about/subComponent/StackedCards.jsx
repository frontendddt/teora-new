

'use client';
import React, { useState } from 'react';
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";
import Image from 'next/image';
import styles from './StackedCards.module.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';
import { FaRegSquareCheck } from "react-icons/fa6";

const StackedCards = ({ stackCadrSlide, heading, learnmore = true, variant }) =>
{

  const { fadeDown } = useAnimationContext();

  const generateInitialLefts = (length) =>
  {
    const step = 3;
    const base = 61;
    const positions = [];

    for (let i = 0; i < length - 1; i++)
    {
      positions.push(`${base - i * step}%`);
    }
    positions.push("0%");
    return positions;
  };

  const initialLefts = generateInitialLefts(stackCadrSlide.length);

  const [positions, setPositions] = useState(initialLefts.slice());
  const [movedCount, setMovedCount] = useState(0);
  const [zIndexes, setZIndexes] = useState(
    Array.from({ length: stackCadrSlide.length }, (_, i) => i + 1)
  );
  const moveTargetBase = 40;
  const moveGap = 40;

  const handleMoveLeft = () =>
  {
    if (movedCount >= stackCadrSlide.length - 1) return;
    const newPositions = [...positions];
    const newZIndexes = [...zIndexes];
    const index = stackCadrSlide.length - 2 - movedCount;
    newPositions[index] = moveTargetBase + movedCount * moveGap;
    newZIndexes[index] = Math.max(...zIndexes) + 1;
    setPositions(newPositions);
    setZIndexes(newZIndexes);
    setMovedCount(movedCount + 1);
  };

  const handleMoveRight = () =>
  {
    if (movedCount <= 0) return;
    const index = stackCadrSlide.length - 2 - (movedCount - 1);
    const newPositions = [...positions];
    const newZIndexes = [...zIndexes];
    newPositions[index] = initialLefts[index];
    newZIndexes[index] = Math.max(...zIndexes) + 1;
    setPositions(newPositions);
    setZIndexes(newZIndexes);
    setMovedCount(movedCount - 1);
  };

  return (
    <div className='stack-card-container'>
      <div className={`d-flex justify-content-between align-items-center ${styles.flexwrap}`}>
        <div>
          <h2 className="text-primaryBeige mb-0">{heading} </h2>
        </div>

        <div>
          <div className={`countscroll text-primaryBeige`}>
            <div
              onClick={handleMoveLeft} disabled={movedCount >= stackCadrSlide.length}
              className='d-flex justify-content-center align-items-center'
              style={{ cursor: "pointer" }}
            ><MdArrowBackIos size={24} />
            </div>

            <div className={`d-flex justify-content-center align-items-center values_border `}>
              <span>{movedCount + 1}</span>
            </div>

            <div
              onClick={handleMoveRight} disabled={movedCount <= 0}
              className='d-flex justify-content-center align-items-center'
              style={{ cursor: "pointer" }}
            ><MdArrowForwardIos size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        <MotionWrapper
          className="position-relative w-100 "
          variant={fadeDown}
        >
          {stackCadrSlide.map((label, i) => (
            <div className={`${styles.card} w-100 ${label.colors ? 'text-primaryBeige' : 'purpleColor'} ${styles.cardSlide} ${label.bgClass}`}
              key={i}
              style={{
                left: positions[i],
                zIndex: zIndexes[i],
              }} >
              {
                variant === "aquacultureCard" ? (
                  <React.Fragment>
                    {i === 3 && (
                      <React.Fragment>
                        <Image
                          src={label.image}
                          alt="icons"
                          width={140}
                          height={140}
                        />
                        <h3>{label.hedings}</h3>
                        <p>{label.title}</p>
                      </React.Fragment>
                    )}

                    {i === 2 && (
                      <React.Fragment>
                        <span className='d-flex gap-5'>
                          <p>{label.title}</p>
                          <h5>IMNV</h5>
                        </span>
                        <div className='d-flex justify-content-end'>
                          <Image
                            src={label.image}
                            alt="icons"
                            width={160}
                            height={180}
                          ></Image>
                        </div>
                      </React.Fragment>
                    )}

                    {i === 1 && (
                      <React.Fragment>
                        <h5>{label.hedings}</h5>
                        <Image
                          src={label.image}
                          className='mt-4 m-auto'
                          alt="icons"
                          width={220}
                          height={200}
                        />
                        <div>
                          <Image
                            src={"/icons/outcomicon2.png"}
                            className='mt-4'
                            alt="icons"
                            width={150}
                            height={120}
                          />
                        </div>
                      </React.Fragment>
                    )}
                    {i === 0 && (
                      <React.Fragment>
                        {[
                          { type: "title", text: "PRODUCTS", className: "text-end" },
                          { type: "heading", text: "ShrimpTridentTM SPOT" },
                          {
                            type: "text",
                            text: "Targeted intervention for White Spot Syndrome Virus. Early window critical.",
                          },
                          { type: "heading", text: "ShrimpTridentTM VIB" },
                          {
                            type: "text",
                            text: "Peptide blend blocks virulence factors in Vibrio. For running mortality and white feces.",
                          },
                          { type: "heading", text: "ShrimpTridentTM EH" },
                          {
                            type: "text",
                            text: "Suppresses microsporidian replication. Prevents hepatopancreatic damage and growth suppression.",
                          },
                        ].map((item, idx) => (
                          <p key={idx} className={item.className || ""}>
                            {item.type === "title" ? <strong>{item.text}</strong> : null}
                            {item.type === "heading" ? <b>{item.text}</b> : null}
                            {item.type === "text" ? item.text : null}
                          </p>
                        ))}
                      </React.Fragment>

                    )}


                  </React.Fragment>
                ) : (
                  <div className=''>
                    {
                      label.titleName ? <p className='text-end mb-0'><strong>{label.titleName}</strong></p>
                        :
                        <div className="col-12 d-flex justify-content-end">
                          {
                            learnmore ? <Link className="linksElements" href="/"> Learn More  <FaArrowRight /></Link> : ''
                          }
                        </div>
                    }
                    <img
                      src={label.image}
                      width={110}
                      alt={label.subHeading}
                      className={` ${label.rowImage ? 'd-none' : ''}`}
                    />
                    <h3 className={`fw600 mb-0 mt-3 ${label.listTitles ? 'h5list' : ''} `}> {label.hedings}</h3>
                    <div className=''>
                      {
                        label.rowImage ?
                          <div className='d-flex gap-3 mt-2'>
                            <img
                              src={label.rowImage}
                              width={55}
                              alt={label.subHeading}
                            />
                            <div>
                              {[
                                {
                                  strong: "AI-driven pathogen profiling",
                                  detail: "identifies threats & inefficiencies",
                                },
                                {
                                  strong: "Synthetic biology creates targeted",
                                  detail: "solutions and boosts response",
                                },
                                {
                                  strong: "Precision fermentation naturally",
                                  detail: "scales production sustainably",
                                },
                                {
                                  strong: "Advanced encapsulation locks",
                                  detail: "biologics ensures precision delivery.",
                                },
                                {
                                  strong: "Feed or foliar spray integration",
                                  detail: "makes adoption effortless",
                                },
                              ].map((item, index) => (
                                <div key={index}>
                                  <p className="pb-0 mb-0">
                                    <strong>{item.strong}</strong>
                                  </p>
                                  <p className="pb-0 mb-1">{item.detail}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          : ''
                      }
                      <div className={` ${label.rowImage ? 'd-none' : ''}`}>
                        <h5 className={`mt-1 mb-1 `}><b>{label.subHeading}</b></h5>
                        {label.listTitles ?
                          label.listTitles.map((list, index) => (
                            <div className='mb-1 d-flex gap-2 align-items-center' key={index} >
                              <div style={{ fontSize: '23px', marginRight: '5px' }}><FaRegSquareCheck /></div>
                              <div> {list.title}</div>
                            </div>
                          ))
                          :
                          <p className=''>{label.title}</p>
                        }
                      </div>
                    </div>

                  </div>
                )}

            </div>
          ))}
        </MotionWrapper>
      </div>
    </div>

  );
};

export default StackedCards;
