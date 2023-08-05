import React, { useEffect, useState } from "react";
import { BlogPage } from "../screens/BlogPage/BlogPage";
import { BlogPageMobile } from "../screens/BlogPageMobile/BlogPageMobile";

export const BlogPageBreakpoint = () => {
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

  return isLargeScreen ? <BlogPage /> : <BlogPageMobile />;
};
