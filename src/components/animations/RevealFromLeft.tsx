import React, {useEffect, useRef} from "react";
import { motion, useInView, useAnimation, delay } from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export const RevealFromLeft = ({children, width}: Props) => {
    const rand_duration = Math.random()*0.2 + 0.4;
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});

    

    
    const mainControls = useAnimation();

    useEffect(() =>{
        if (isInView) {
            mainControls.start("visible");

        }
    }, [isInView]);


    return (
        <div ref={ref} style={{position:"relative", width, overflow:"visible"}}>
            <motion.div variants={{hidden: {opacity:0, x:-75}, visible: {opacity:1, x:0}}} initial="hidden" animate={mainControls}
            transition={{duration:rand_duration, delay:0.05}}>
                
            {children}</motion.div>

        </div>
    )
}