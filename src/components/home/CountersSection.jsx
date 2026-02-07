'use client';
import { useEffect, useState } from "react";
import Styles from "./home.module.css";

const AnimatedCounter = ({target}) =>{  
    const [count, setCount] = useState(0);
    const isNumeric = typeof target === "number"; 
    useEffect(() =>{
         if (!isNumeric) return; 
        let current = 0;
        const step = Math.ceil(target / 50); 
        const timer = setInterval(() =>{
            current += step;
            if(current >= target){
                current = target
                clearInterval(timer);
            }
            setCount(current);
        },100);
        return () => clearInterval(timer);
      
    }, [target]);
     return <h1> {isNumeric ? `${count}%` : target}</h1>;
}

const CountersSection = ({counterData = [], className=""}) =>{
      
    return(
        <div className={`counter-container ${className}`} 
        >
            <div className={`container-2  ${Styles.counterPadding}`}>
                    <div className="row padding_manage w-100">
                            {
                                counterData.map((ele, index) =>{
                                    return<div className="col-md-3 col-6 p0 borderchild" key={index}>
                                                <div className={`text-primaryBeige box_p border-r `}>
                                                        <AnimatedCounter target={ele.counter}/>
                                                        <p className="pfont"> 
                                                            {ele.discriptions}
                                                            <strong className={Styles.muteds}> {ele.strong} </strong>
                                                            {ele.notstr && ele.notstr}
                                                        </p> 
                                                </div>
                                            </div>
                                })
                            }
                          
                    </div>
            </div>
        </div>
    )
}

export default CountersSection;