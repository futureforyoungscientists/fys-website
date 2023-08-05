import React, { useEffect, useState } from "react";
import { AboutUsPage } from "../screens/AboutUsPage/AboutUsPage";
import { AboutUsPageMobile } from "../screens/AboutUsPageMobile/AboutUsPageMobile";

export const AboutUsPageBreakpoint = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1200);
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isLargeScreen ? <AboutUsPage /> : <AboutUsPageMobile />;
};