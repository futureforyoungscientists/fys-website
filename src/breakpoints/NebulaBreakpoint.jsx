import {React, useRef} from "react";
import { NebulaPage } from "../screens/NebulaPage/NebulaPage";
import { NebulaPageMobile } from "../screens/NebulaPageMobile/NebulaPageMobile";

export const NebulaBreakpoint = () => {
    const width = useRef([window.innerWidth, window.innerHeight]).current[0];

    if (width > 1200) {
        return (<NebulaPage/>);
    } 
    return (<NebulaPageMobile/>);
};