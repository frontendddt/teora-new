
"use client"
import styles from "./home.module.css";
import { ImageCustom } from "../common/Custom";
import { motion } from "framer-motion";
import { useAnimationContext } from '@/context/AnimationContext';

const OurBrochure = ({ classname, color, heading, discriptions }) =>
{

    const { fadeRight, fadeLeft } = useAnimationContext();

    return (
        <>
            <section className="section-space padding_manage">
                <div className="container d-flex justify-content-center">
                    <div
                        className={`${classname} p-2`}
                        style={{
                            position: 'relative'
                            , width: '80px', height: '80px',
                            borderRadius: '12px', bottom: '-20px'
                        }}
                    >
                        <div className="position-relative h-100 " style={{ borderRadius: '12px' }} >
                            <img
                                src="/icons/scan.png"
                                width={65}
                                alt="useful reads—from"
                            />
                        </div>
                    </div>
                </div>
                <div className={`container border_radius_round p_smarter ${color} ${classname}`}>

                    <div className="row animate-wrapper">
                        <motion.div className="col-md-6 "
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <ImageCustom
                                src={"/image/brochure_card.png"}
                                alt="useful reads from"
                                className={styles.brochureImage}
                            />
                        </motion.div>

                        <motion.div className={`col-md-6 interested d-flex align-items-center ${color}`}
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <div className="mt-2 mt-sm-0">
                                <span className="rounded-pill buge-style accentBlueBg p-2">OUR BROCHURE</span>
                                <h3 className="groupBolds mt-3 smarter" style={{ maxWidth: '400px' }} >
                                    {heading}
                                </h3>
                                <p>
                                    {discriptions}
                                </p>
                                <button className="buttons-primary mt-3" type="button">Download Now</button>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

        </>
    )
}
export default OurBrochure;