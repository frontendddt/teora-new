'use client';
import Image from "next/image";
import styles from "./slicky.module.css";
import { LinkCustom } from "@/components/common/Custom";
import React from "react";
import { FaSquareCheck } from "react-icons/fa6";
import { Buges } from "@/components/common/Custom";
import Link from "next/link";
const WhyMatterCard = ({ data, text, buttons, variant }) =>
{
    const lengths = data.length;
    return (

        <>
            <div className="row">
                <div className="col-md-5 col-12 text-primaryBeige">
                    <div className="sticky-top" style={{ top: '180px' }}>
                        {variant ? (
                            <Buges
                                label="HEALTH & GROWTH MANAGEMENT"
                                extraClass="accentRedBg text-primaryBeige"
                            />
                        ) : ''}
                        <h1>{text}</h1>
                        {buttons ?
                            <LinkCustom
                                label="Aquaculture Products"
                                label2="Why Teora ?"
                                href="/"
                                href2="/"
                                className="buttons-Beige"
                                className2="buttons-primary"
                            />
                            : ''
                        }
                    </div>
                </div>

                <div className="col-md-7 position-relative">
                    {
                        data.map((elements, index) => (
                            <div className={`sticky-top ${elements.class} ${elements.color} p-all sticky11 ${styles.widths_5} `} key={index}>
                                <div className="h-100">
                                    <div className="">
                                        <p className="mb-0 fw-bold"> {index + 1}/{lengths}</p>
                                    </div>
                                    {variant ? (
                                        <div className="industryCard">
                                            <span className="d-flex">
                                                {elements.induHeading && <h4>{elements.induHeading}</h4>}
                                                {elements.hetitle && <p>{elements.hetitle}</p>}
                                                {elements.img && (
                                                    <Image
                                                        src={elements.img}
                                                        width={110}
                                                        height={110}
                                                        alt="image"
                                                    />
                                                )}
                                            </span>
                                            {elements.billions && <h2 className="darkRedColor bilions">{elements.billions}</h2>}
                                            {elements.title && <h4 className="darkRedColor">{elements.title}</h4>}
                                            {elements.descrep && <p className={elements.color}>{elements.descrep}</p>}
                                            {elements.muted && <h5 className="mutedPurpleColor">{elements.muted}</h5>}
                                            {elements.slides4 && (
                                                <React.Fragment>
                                                    <p><strong>Next-gen health solutions—without needles,
                                                        residues, stress, or resistance.</strong></p>
                                                    <p className="mt-4 mb-3">We are Currently working on :</p>
                                                    {[
                                                        "African Swine Fever – reducing outbreaks that devastate pig farming",
                                                        "Ruminant Fever in Cattle – enhancing disease resistance naturally",
                                                        "Salmonella, Newcastle control in poultry farms via feed",
                                                        "Avian Immunity Boosters – supporting poultry health naturally."
                                                    ].map((text, index) => (
                                                        <p key={index} style={{ fontSize: 15, fontWeight: 600 }}>
                                                            <FaSquareCheck /> {text}
                                                        </p>
                                                    ))}

                                                    <LinkCustom
                                                        label="Contact Us For More Information"
                                                        href="/"
                                                        className="buttons-primary"
                                                    />
                                                </React.Fragment>
                                            )}
                                        </div>
                                    ) : (
                                        <React.Fragment>
                                            {
                                                elements.banner && elements.explore_results_btn ?
                                                    <div className="" style={{ height: '85%' }} >
                                                        <div className="d-flex justify-content-center h-100">
                                                            <img
                                                                src={elements.banner}
                                                                alt={elements.title}
                                                                style={{ width: '95%' }}
                                                            />
                                                        </div>

                                                        {elements.explore_results_btn ?
                                                            <div className={`explore_results mt-3 ${elements.none ? elements.none : ''}`}>
                                                                <Link className="buttons-primary " href="/">{elements.explore_results_btn} </Link>
                                                            </div> : ''
                                                        }
                                                    </div> :
                                                    <div className="p-5 remove_padding">
                                                        {
                                                            elements.heading ?
                                                                <h5 className="mb-5 gaurd_h5">
                                                                    {elements.heading}
                                                                </h5> :
                                                                <div className="d-flex align-items-center gap-3 mb-5">
                                                                    <span><img src="/icons/about-icon1.png" width="100" alt="BUILT TO FIGHT BACK &amp; PROTECT" /></span>
                                                                    <div className="m-0">
                                                                        <span className="rounded-pill buge-style accentRedBg text-primaryBeige pt-2 pb-2">GROWTH OPTIMISATION IN FISH</span>
                                                                        <h2 className="m-0">JUMBO SERIES</h2>
                                                                        <p className="m-0">GROW BIG. GROW FAST. STAY CLEAN.</p>
                                                                    </div>
                                                                </div>
                                                        }

                                                        <div className={`d-flex align-items-center ${styles.flexcolumn}`}>
                                                            <div>
                                                                <Image
                                                                    src={elements.img}
                                                                    alt="Teora solutions"
                                                                    width={130}
                                                                    height={130}
                                                                    className="w100"
                                                                    style={{ borderRadius: '50%' }}
                                                                />
                                                            </div>
                                                            <div style={{ padding: '10px 0 10px 25px' }}>
                                                                <p>{elements.title} {elements.titleBold ? <b>{elements.titleBold}</b> : ''}</p>
                                                                <p className="fewerlosses">{elements.bold}</p>
                                                            </div>
                                                        </div>
                                                        {elements.bold2 ?
                                                            <p className="h1500" >{elements.bold2}</p> : ''
                                                        }
                                                    </div>
                                            }
                                        </React.Fragment>
                                    )}

                                </div>


                            </div>
                        ))
                    }
                </div>
            </div >
        </>
    )
}

export default WhyMatterCard;