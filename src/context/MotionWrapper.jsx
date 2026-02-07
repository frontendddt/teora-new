"use client"
import { motion } from "framer-motion";

export const MotionWrapper = ({ children, className, variant }) =>
{
    return (
        <motion.div
            className={className}
            variants={variant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
        >
            {children}
        </motion.div>
    )
}

