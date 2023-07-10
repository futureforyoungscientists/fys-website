import React from "react";
import "./style.css";
import { CompactMenu } from "../../components/CompactMenu";
import { NovaCalendar } from "../../components/NovaCalendar";
import { RevealFromLeft } from "../../components/animations/RevealFromLeft";
import { RevealFromRight } from "../../components/animations/RevealFromRight";

export const NovaPage = () => {
  return (
    <div className="nova">
      <div className="div">
        <div className="nova-top">
          <div className="overlap-group">
            <RevealFromLeft><CompactMenu/></RevealFromLeft>
            <RevealFromRight><h1 className="h-1">team nova</h1></RevealFromRight>
            <RevealFromLeft><p className="p">
              Our classes are held Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.runt mollit anim id est laborum.
            </p></RevealFromLeft>
          </div>
        </div>
        <div className="overlap">
          <RevealFromRight><div className="text-wrapper-4">calendar</div></RevealFromRight>
          <RevealFromLeft><div className="calendar-wrapper"><NovaCalendar/></div></RevealFromLeft>
        </div>
        
      </div>
    </div>
  );
};
