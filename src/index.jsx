import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ReactDOMClient from "react-dom/client";

import { MainPageBreakpoint } from "./breakpoints/MainPageBreakpoint";
import { AboutUsPageBreakpoint } from "./breakpoints/AboutUsPageBreakpoint";
import { BlogPageBreakpoint } from "./breakpoints/BlogPageBreakpoint";
import { NovaBreakpoint } from "./breakpoints/NovaBreakpoints";
import { NebulaBreakpoint } from "./breakpoints/NebulaBreakpoint";

const router = createBrowserRouter([
{
    path: "/",
    element: <MainPageBreakpoint/>,
},
{
    path: "/aboutUs",
    element: <AboutUsPageBreakpoint/>,
},
{
    path: "/blog",
    element: <BlogPageBreakpoint/>
},
{
    path: "/nova",
    element: <NovaBreakpoint/>
},
{
    path: "/nebula",
    element: <NebulaBreakpoint/>
}
]);

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<RouterProvider router={router}/>);
