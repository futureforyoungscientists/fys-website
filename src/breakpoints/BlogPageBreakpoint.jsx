import {React, useRef} from "react";
import { BlogPage } from "../screens/BlogPage/BlogPage";
import { BlogPageMobile } from "../screens/BlogPageMobile/BlogPageMobile";

export const BlogPageBreakpoint = () => {
    const width = useRef([window.innerWidth, window.innerHeight]).current[0];

    if (width > 1200) {
        return (<BlogPage/>);
    } 
    return (<BlogPageMobile/>);
};