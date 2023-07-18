import {React, useRef} from "react";
import { MainPageMobile } from "../screens/MainPageMobile/MainPageMobile";
import { MainPageDesktop } from "../screens/MainPageDesktop/MainPageDesktop";

export const MainPageBreakpoint = () => {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    if (windowSize.current[0] > 1200) {
        return (<MainPageDesktop/>);
    } 
    return (<MainPageMobile/>);
};