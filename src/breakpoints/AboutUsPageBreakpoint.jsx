import {React, useRef} from "react";
import { AboutUsPage } from "../screens/AboutUsPage/AboutUsPage";
import { AboutUsPageMobile } from "../screens/AboutUsPageMobile/AboutUsPageMobile";

export const AboutUsPageBreakpoint = () => {
    const width = useRef([window.innerWidth, window.innerHeight]).current[0];

    if (width > 1200) {
        return (<AboutUsPage/>);
    } 
    return (<AboutUsPageMobile/>);
};