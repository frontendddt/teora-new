'use client';
import { motion } from "framer-motion";
import { bubbleData } from "@/data/aboutData";
import styles from "./aboutStypes.module.css";
import Image from "next/image";

const MapOverlay = () =>
{

    const bubbleVariants = {
        hidden: { opacity: 0, scale: 0.6, y: 30 },
        visible: (index) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.2,
            },
        }),
    };

    return (
        <>
            <div className={` ${styles.mapContainer}`}>
                <div className="container position-relative  pt-3 pb-3" style={{ height: '100%' }}>
                    <ul className="m-0 p-0 list-unstyled">
                        {
                            bubbleData.map((bubble, index) =>
                            {

                                return <li className={` 
                                ${styles.mapContent} 
                                ${styles[bubble.bubbleClass]} 
                                mb-5 `}
                                    key={index}   >
                                    <motion.div
                                        custom={index}
                                        variants={bubbleVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.2 }}
                                        className={`d-flex align-items-center ${styles.bubble} ${bubble.bgclass} ${bubble.colorClass} 
                                        `} >
                                        <p> {bubble.text} </p>
                                    </motion.div>
                                    <div className="d-flex justify-content-center pt-4">
                                        <Image
                                            src={bubble.icon}
                                            width={70}
                                            height={60}
                                            alt="icons"
                                        />
                                    </div>
                                </li>
                            })
                        }

                    </ul>
                </div>
            </div>
        </>
    )
}

export default MapOverlay;