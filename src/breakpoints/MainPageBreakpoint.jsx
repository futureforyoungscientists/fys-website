import React, { useEffect, useState } from "react";
import { MainPageMobile } from "../screens/MainPageMobile/MainPageMobile";
import { MainPageDesktop } from "../screens/MainPageDesktop/MainPageDesktop";

export const MainPageBreakpoint = () => {
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

  return isLargeScreen ? <MainPageDesktop /> : <MainPageMobile />;
};
