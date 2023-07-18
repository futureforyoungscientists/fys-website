import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ReactDOMClient from "react-dom/client";

import { AboutUsPage } from "./screens/AboutUsPage/AboutUsPage";
import { BlogPage } from "./screens/BlogPage/BlogPage";

import { NovaPage } from "./screens/NovaPage/NovaPage";
import { NebulaPage } from "./screens/NebulaPage/NebulaPage";

import { MainPageBreakpoint } from "./breakpoints/MainPageBreakpoint";

const router = createBrowserRouter([
{
    path: "/",
    element: <MainPageBreakpoint/>,
},
{
    path: "/aboutUs",
    element: <AboutUsPage/>,
},
{
    path: "/blog",
    element: <BlogPage/>
},
{
    path: "/nova",
    element: <NovaPage/>
},
{
    path: "/nebula",
    element: <NebulaPage/>
}
]);

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<RouterProvider router={router}/>);
