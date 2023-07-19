import React from "react";
import "./style.css";
import { CompactMenu } from "../../components/CompactMenu/CompactMenu";
import { RevealFromLeft } from "../../components/animations/RevealFromLeft";
import { RevealFromRight } from "../../components/animations/RevealFromRight";

export const BlogPageMobile = () => {
  return (
    <div className="blog-page-mobile">
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
              <RevealFromLeft><CompactMenu/></RevealFromLeft>
              <RevealFromRight><h1 className="h-1">blog</h1></RevealFromRight>
              {/* <p className="p">
                Here on our blog page, you can see a summary of each of our classes and the fun experiments that were
                carried out! It gets updated after every class so stay tuned!
              </p> */}
              <RevealFromLeft>
              <p className="p">
                Here on our blog page, you can see a summary of each of our classes and the fun experiments that were
                carried out! It will get updated soon, so stay up to date on our socials!
              </p>
              </RevealFromLeft>
            </div>
          </div>
          {/* <div className="blogs">
            <div className="sample-person">
              <div className="text-wrapper-3">Tester Singh</div>
              <img className="profile-pic" alt="Profile pic" src="/img/profile-pic-1.png" />
              <p className="lorem-ipsum-dolor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="sample-person-2">
              <div className="text-wrapper-3">Tester Singh</div>
              <img className="profile-pic" alt="Profile pic" src="/img/profile-pic-1.png" />
              <p className="lorem-ipsum-dolor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="sample-person-3">
              <div className="text-wrapper-3">Tester Singh</div>
              <img className="profile-pic" alt="Profile pic" src="/img/profile-pic-1.png" />
              <p className="lorem-ipsum-dolor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="sample-person-4">
              <div className="text-wrapper-3">Tester Singh</div>
              <img className="profile-pic" alt="Profile pic" src="/img/profile-pic-1.png" />
              <p className="lorem-ipsum-dolor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
