import {React, useRef} from "react";
import { MainPageMobile } from "../screens/MainPageMobile/MainPageMobile";
import { MainPageDesktop } from "../screens/MainPageDesktop/MainPageDesktop";

export const MainPageBreakpoint = () => {
    const width = useRef([window.innerWidth, window.innerHeight]).current[0];

    if (width.current[0] > 1200) {
        return (<MainPageDesktop/>);
    } 
    return (<MainPageMobile/>);
};