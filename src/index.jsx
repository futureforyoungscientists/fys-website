import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ReactDOMClient from "react-dom/client";
import { MainPage } from "./screens/MainPage";
import { AboutUsPage } from "./screens/AboutUsPage/AboutUsPage";
import { BlogPage } from "./screens/BlogPage/BlogPage";

import 'bootstrap/dist/css/bootstrap.css'
import { NovaPage } from "./screens/NovaPage/NovaPage";
import { NebulaPage } from "./screens/NebulaPage/NebulaPage";
import {MainPageMobile} from "./screens/MainPageMobile/MainPageMobile"

const router = createBrowserRouter([
{
    path: "/",
    element: <MainPage/>,
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
},
{
    path: "/mainpagemobile",
    element: <MainPageMobile/>
}
]);

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<RouterProvider router={router}/>);
