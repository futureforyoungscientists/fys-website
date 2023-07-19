import React from "react";
import "./style.css";
import { CompactMenu } from "../../components/CompactMenu/CompactMenu";
import {NovaCalendar} from "../../components/NovaCalendar"

export const NovaPageMobile = () => {
  return (
    <div className="nova-mobile">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="header-section">
            <div className="overlap-group">
              
              <CompactMenu/>
              <div className="text-wrapper-3">team nova</div>
              <p className="p">
                Our classes are held Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum.runt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="header-bg" />
          {/* <img className="profile-pic" alt="Profile pic" src="/img/profile-pic-1.png" /> */}
          <div className="profile-pic"><NovaCalendar/></div>
          <h1 className="h-1">calendar</h1>
        </div>
      </div>
    </div>
  );
};
