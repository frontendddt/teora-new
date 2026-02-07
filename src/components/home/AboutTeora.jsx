

'use client';

import { motion } from 'framer-motion';
import Styles from "./aboutTeora.module.css";
import Link from "next/link";
import IndustrySlider from "./subcombonents/IndustrySlider";
import group_icons from "../../assets/homeAssets/icon_groups.png";
import Image from "next/image";
import { useEffect, useState } from 'react';
import share from "../../assets/homeAssets/share2.png";
import sharebox from "../../assets/homeAssets/sharelogo.png"
import flowers from "../../assets/icons/flowers.jpg";
import { useAnimationContext } from '@/context/AnimationContext';

const AboutTeora = () =>
{
    const { animationVariants, fadeRight, fadeLeft, ref1, ref2, inView2 } = useAnimationContext();

    const [videoUrl, setVideoUrl] = useState('');
    useEffect(() =>
    {
        const fetchVideo = async () =>
        {
            const res = await fetch('/api/teora/video');
            const data = await res.json();
            setVideoUrl(data.video_url || '');
        };
        fetchVideo();
    }, []);

    return (
        <>
            <section className="">

                <section className="section-space animate-wrapper">
                    <div className="container container2">
                        <div className="container-2 m-auto ">
                            <div className="row ">
                                <motion.div className="col-md-7"
                                    variants={fadeLeft}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                >
                                    <div className={Styles.aboutrowcontainer}>
                                        <div className={` rounded-pill buge-style buge_mini`}>
                                            DISEASE MANAGEMENT & GROWTH ENHANCEMENT SOLUTIONS - FARMING
                                        </div>

                                        <h2 className="purpleColor m-top-b" >
                                            Introducing <span className='capatilize'>Solaq™— </span> A  Smart, Scalable & Sustainable
                                            Biotech Solution, Designed
                                            For Every Farm, Everywhere.
                                        </h2>

                                        <p className="purpleColor m-top-b">
                                            A platform that helps prevent and cure diseases, boost natural growth in farmed
                                            species of animals & plants by reducing stress, loss due to diseases or pest ,
                                            and toxic inputs with animal feed and foliar plant spray-integrated biologics that
                                            work across <strong>every farm, every season, and almost every species.</strong>
                                        </p>

                                        <div className="buttons d-flex gap-2 marginBottom">
                                            <Link href="/" className="buttons-primary " >
                                                About Teora
                                            </Link>

                                            <Link href="/" className="buttons-Beige" >
                                                Show me the Science
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div className="col-md-5 d-flex justify-content-end "
                                    variants={fadeRight}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                >
                                    <div className="d-flex align-items-center youtubVideos" style={{ width: '90%' }}>
                                        {
                                            videoUrl ? (
                                                <iframe
                                                    className="w-100"
                                                    height={220}
                                                    src={videoUrl}
                                                    title="YouTube video player"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    style={{ borderRadius: '10px' }}
                                                ></iframe>
                                            ) : (
                                                <p className='text-center mb-0 w-100' style={{ fontSize: '14px' }}>Loading video...</p>
                                            )
                                        }
                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </div>

                </section>

                <section className="section-space topPadding_remove">
                    <IndustrySlider fadeRight={fadeRight} fadeLeft={fadeLeft} />
                </section>

                <section>
                    <div className="position-relative" >
                        <img
                            src="/bgImage/teora_multi.webp"
                            style={{
                                width: '100%',
                            }}
                            className='trillion_image desctop_view'
                            alt="industry img"
                        />
                        <img
                            src="/bgImage/industry_mobileBanner.png"
                            style={{
                                width: '100%',
                            }}
                            className='trillion_image mobile_view'
                            alt="industry img"
                        />
                        <div className={`container  ${Styles.critical}`}>
                            <div className="row ">

                                <div className="col-md-5 col-12 position-relative">

                                    <div className={`d-flex justify-content-around ${Styles.trilionCard}`}>

                                        <motion.div
                                            ref={ref1}
                                            initial="hidden"
                                            animate={inView2 ? 'visible' : 'hidden'}
                                            variants={animationVariants}
                                            transition={{ duration: 0.8, ease: 'easeOut' }}
                                            className="primaryBeige position-relative"
                                        >
                                            <div className={` ${Styles.stat_card} d-flex align-items-end`} style={{ background: '#362952' }}>
                                                <div>
                                                    <h2>$ 10 Trillion</h2>
                                                    <p className="">
                                                        The food sector is valued at over <b style={{ fontWeight: '600', fontSize: '17px' }}>$10 trillion,</b> supporting over a billion livelihoods worldwide and directly affecting global
                                                    </p>
                                                </div>
                                            </div>
                                            <Image
                                                src={flowers}
                                                className={` ${Styles.shareImage} ${Styles.shareImage2} imageScale`}
                                                width={100}
                                                height={100}
                                                alt="share"
                                            />
                                        </motion.div>

                                        <motion.div
                                            ref={ref2}
                                            initial="hidden"
                                            animate={inView2 ? 'visible' : 'hidden'}
                                            variants={animationVariants}
                                            transition={{ duration: 0.8, ease: 'easeOut' }}
                                            className="position-relative primaryBeige"
                                        >
                                            <div className={` ${Styles.stat_card} d-flex align-items-end`} style={{ background: '#7f7590' }}>
                                                <div>
                                                    <h2>$ 12.37 Trillion</h2>
                                                    <p>
                                                        The market is growing at a <b style={{ fontWeight: '600', fontSize: '17px' }}>CAGR of 6.7%</b>, with an expected valuation of $12.37 trillion by 2029 (Market Data Forecast, 2022)
                                                    </p>
                                                </div>
                                            </div>
                                            <Image
                                                src={share}
                                                className={`${Styles.shareImage} imageScale`}
                                                height={110}
                                                alt="share"
                                                style={{ right: '0' }}
                                            />
                                        </motion.div>


                                    </div>

                                </div>

                                <div className="col-md-7 col-12 animate-wrapper">
                                    <motion.div className="padings"
                                        variants={fadeRight}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.2 }}>
                                        <h1 className="text-primaryBeige pt-5 foodIndustry" >The Food industry is the Most Critical on Earth— And it’s Failing Us.</h1>
                                        <div className="d-flex justify-content-center">
                                            <div className="d-flex gap-3 wid100" style={{ width: '60%', paddingTop: '3rem' }}>
                                                <Image
                                                    src={sharebox}
                                                    width={90}
                                                    height={130}
                                                    alt="share"
                                                />
                                                <p className='text-primaryBeige '
                                                    style={{ fontSize: '27px' }}
                                                >By 2050, The World Will Need <span style={{ color: '#B8DD5E' }}> 60-70%</span> More Food To Feed <span className='lightblueColor' >10.3 Billion</span> People</p>

                                            </div>

                                        </div>

                                    </motion.div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                <section className="section-space mt-md-5 mt-4" >
                    <div className="container padding_manage">
                        <div className="row animate-wrapper">
                            <motion.div className={`col-md-6 position-relative pt-2 ${Styles.positionCol6}`}
                                variants={fadeLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }} >
                                <div className={` ${Styles.cardC01}`} style={{ width: '90%' }}>
                                    <div className={`card-container midPurpleBg borderRadius20 p-all text-primaryBeige  ${Styles.millionCard}`} >
                                        <div className="d-flex align-items-end  ">
                                            <h1> $940 billion  </h1>
                                            <p className='' style={{ paddingLeft: '5px' }}> (reported)</p>
                                        </div>
                                        <p className="f-500" style={{ padding: '0 45px 0 0', fontSize: '20px' }}>
                                            Food waste due to diseases, poor logistics, yields and premature harvesting costs the global economy $940 billion annually (UNEP, 2021)
                                        </p>
                                    </div>

                                    <div className={`corporateBg ${Styles.circal_ox}`}>
                                        <Image
                                            src={group_icons}
                                            style={{ width: '100%', height: '100%' }}
                                            alt="Food waste due to diseases"
                                        />
                                    </div>
                                </div>

                            </motion.div>

                            <motion.div className={`col-md-6 h-100 position-relative  ${Styles.borderCard}`}
                                variants={fadeRight}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <div className="p-all p-all-remove h-100 purpleColor">
                                    <h4 className={` ${Styles.removeLeft}`} style={{ paddingLeft: '4rem' }}>
                                        Despite Its Scale,Our Global Food
                                        Systems Are Stressed, Over-medicated, Underperforming And
                                        Struggling To Meet Future Food
                                        Demands Sustainably.
                                    </h4>
                                </div>
                                <img src="/icons/border.png"
                                    alt="border image"
                                    className={`${Styles.aboutBorderS}`}
                                    width={70}
                                />
                            </motion.div>

                        </div>
                    </div>
                </section>

            </section>

        </>
    )
}

export default AboutTeora;