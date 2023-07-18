import {React, useRef} from "react";
import { NovaPage } from "../screens/NovaPage/NovaPage";
import { NovaPageMobile } from "../screens/NovaPageMobile/NovaPageMobile";

export const NovaBreakpoint = () => {
    const width = useRef([window.innerWidth, window.innerHeight]).current[0];

    if (width > 1200) {
        return (<NovaPage/>);
    } 
    return (<NovaPageMobile/>);
};