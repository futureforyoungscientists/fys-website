import React, { useEffect, useState } from "react";
import { NovaPage } from "../screens/NovaPage/NovaPage";
import { NovaPageMobile } from "../screens/NovaPageMobile/NovaPageMobile";

export const NovaBreakpoint = () => {
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

  return isLargeScreen ? <NovaPage /> : <NovaPageMobile />;
};