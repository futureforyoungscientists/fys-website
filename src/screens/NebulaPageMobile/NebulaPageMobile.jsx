import React from "react";
import { CompactMenu } from "../../components/CompactMenu/CompactMenu";
import "./style.css";

export const NebulaPageMobile = () => {
  return (
    <div className="nebula-mobile">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="header-section">
            <div className="overlap-group">
              {/* <div className="compact-menu">
                <div className="text-wrapper">about us.</div>
                <div className="div">blog.</div>
                <div className="text-wrapper-2">socials.</div>
                <img className="FYS-logo" alt="Fys logo" src="/img/fys-logo-6-1.png" />
              </div> */}
              <CompactMenu/>
              <div className="text-wrapper-3">team nebula</div>
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
          <img className="profile-pic" alt="Profile pic" src="/img/profile-pic-1.png" />
          <h1 className="h-1">calendar</h1>
        </div>
      </div>
    </div>
  );
};
