import React, { useEffect, useState } from "react";
import { NebulaPage } from "../screens/NebulaPage/NebulaPage";
import { NebulaPageMobile } from "../screens/NebulaPageMobile/NebulaPageMobile";

export const NebulaBreakpoint = () => {
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

  return isLargeScreen ? <NebulaPage /> : <NebulaPageMobile />;
};