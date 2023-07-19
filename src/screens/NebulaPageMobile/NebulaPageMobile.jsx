import React from "react";
import { CompactMenu } from "../../components/CompactMenu/CompactMenu";
import "./style.css";

import { NebulaCalendar } from "../../components/NebulaCalendar";

import { RevealFromRight } from "../../components/animations/RevealFromRight";
import { RevealFromLeft } from "../../components/animations/RevealFromLeft";

export const NebulaPageMobile = () => {
  return (
    <div className="nebula-mobile">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="header-section">
            <div className="overlap-group">
              
              <RevealFromLeft><CompactMenu/></RevealFromLeft>
              <RevealFromRight><div className="text-wrapper-3">team nebula</div></RevealFromRight>
              <RevealFromLeft>
              <p className="p">
                Our classes are held Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum.runt mollit anim id est laborum.
              </p>
              </RevealFromLeft>
            </div>
          </div>
          <div className="header-bg" />
          <RevealFromRight><div className="profile-pic"><NebulaCalendar/></div></RevealFromRight>
          
          <RevealFromLeft><h1 className="h-1">calendar</h1></RevealFromLeft>
        </div>
      </div>
    </div>
  );
};
