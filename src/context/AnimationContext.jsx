'use client';
import { createContext, useContext } from "react";
import { useInView } from 'react-intersection-observer';

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) =>
{
    const animationVariants = {
        hidden: { opacity: 0, y: 70 },
        visible: { opacity: 1, y: 0 },
    };
    const fadeRight = {

        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };
    const fadeLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };
    const fadeDown = {
        hidden: { opacity: 0, y: -90 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };
    const [ref1, inView1] = useInView({ triggerOnce: false });
    const [ref2, inView2] = useInView({ triggerOnce: false });

    return (
        <AnimationContext.Provider
            value={{
                animationVariants,
                fadeRight,
                ref1,
                inView1,
                ref2,
                inView2,
                fadeLeft,
                fadeDown
            }}
        >
            {children}
        </AnimationContext.Provider>
    );

};


export const useAnimationContext = () => useContext(AnimationContext)