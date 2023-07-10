import React, {useEffect, useRef} from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
    children: JSX.Element;
    
}

export const Hover = ({children}: Props) => {
    // const rand_duration = Math.random()*0.2 + 0.4;
    // const ref = useRef(null);
    // const isInView = useInView(ref, {once:true});
    
    // const mainControls = useAnimation();

    // useEffect(() =>{
    //     if (isInView) {
    //         mainControls.start("visible");

    //     }
    // }, [isInView]);


    return (
        <div style={{position:"relative", overflow:"visible"}}>
            <motion.a
  whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}}
/>


        </div>
    )
}