
'use client'
import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Styles from "./footer.module.css";
import { GoArrowRight } from "react-icons/go";
import { FaLinkedin, FaSquareInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { TbBrandYoutube } from "react-icons/tb";
import { HiArrowsUpDown } from "react-icons/hi2";
import { TfiCommentAlt } from "react-icons/tfi";
import { SlArrowUp } from "react-icons/sl";
import { animateScroll as scroll } from 'react-scroll';

const Footer = () =>
{
    const [footerLinks, setFooterLinks] = useState([]);

    const scrollToTop = () =>
    {
        scroll.scrollToTop({ duration: 300, smooth: "easeInOutQuad" });
    };

    useEffect(() =>
    {
        const fetchFooterLinks = async () =>
        {
            try
            {
                const res = await fetch('/api/footer');
                if (!res.ok)
                {
                    const text = await res.text();
                    throw new Error(`Error ${res.status}: ${text}`);
                }
                const data = await res.json();
                setFooterLinks(data);
            } catch (error)
            {
                console.error('Failed to fetch footer links:', error);
            }
        };

        fetchFooterLinks();
    }, []);

    return (
        <footer className={`${Styles.footer_bg} tectureBg`}>
            <div className="container padding_manage">
                <section className="d-flex flex-wrap justify-content-between align-items-center flexwrapFooter">
                    <span>
                        <Image src="/logo/footer-logo.png" alt="footer logo" width={160} height={180} />
                    </span>
                    <span>
                        <Link href="/" className={Styles.footer_info_heading}>Info@Teoralife.com</Link>
                    </span>
                </section>
                <hr className={Styles.hr} />

                <section>
                    <div className="row">
                        {footerLinks.map((footerNav, index) => (
                            <div className="col-md-3 col-6" key={index}>
                                <div className={`${Styles.footer_elements}`}>
                                    <h6 className={`m-0 ${Styles.footer_info_heading} ${Styles.footer_heading}`}>
                                        {footerNav.f_heading}
                                    </h6>
                                    <ul className="p-0 list-unstyled">
                                        {footerNav.list.map((item, idx) => (
                                            <li className={`${Styles.footer_link}`} key={idx}>
                                                <Link href={item.link}>{item.linkName}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                        <div className="col-md-3 col-6">
                            <div className={`${Styles.footer_elements}`}>
                                <h6 className={`m-0 ${Styles.footer_info_heading} ${Styles.footer_heading}`}>Subscribe News letter</h6>
                                <ul className="p-0 list-unstyled">
                                    <li className={`${Styles.footer_link}`}>
                                        <p>Get the latest news, field wins, and no-fluff insights—straight to your inbox.</p>
                                    </li>
                                </ul>
                                <button className={`w-100 d-flex justify-content-between align-items-center mt-4 ${Styles.footer_email_btn}`}>
                                    <span>Email Address</span>
                                    <GoArrowRight className={Styles.icons} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={`row ${Styles.footerSocial}`}>
                        <div className="col-lg-9">
                            <li className={`m-0 d-flex align-items-center ${Styles.footer_link}`}>
                                <p className={`m-0 ${Styles.copyright}`}>Copyright @Teora Life Pte Ltd.</p>
                            </li>
                        </div>
                        <div className="col-lg-3">
                            <ul className="p-0 d-flex gap-2 m-0 list-unstyled">
                                <li className={Styles.social_link}><Link href="#"><FaLinkedin /></Link></li>
                                <li className={Styles.social_link}><Link href="#"><FaSquareInstagram /></Link></li>
                                <li className={Styles.social_link}><Link href="#"><FaFacebook /></Link></li>
                                <li className={Styles.social_link}><Link href="#"><TbBrandYoutube /></Link></li>
                                <li className={Styles.social_link}><Link href="#"><FaXTwitter /></Link></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="footerToptobootm d-flex justify-content-between align-items-center">
                    <button type="button" onClick={scrollToTop} className="bottom_to_top">
                        <HiArrowsUpDown />
                    </button>
                    <button type="button" className="frequently_asked d-flex align-items-center gap-4">
                        <span>Frequently Asked Questions</span>
                        <span><SlArrowUp /></span>
                    </button>
                    <button type="button" className="chatButton">
                        <TfiCommentAlt />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
