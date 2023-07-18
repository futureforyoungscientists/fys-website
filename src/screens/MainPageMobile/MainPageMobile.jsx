import React from "react";
import "./style.css";
import { CompactMenu } from "../../components/CompactMenu/CompactMenu";
import { SocialMediaMenu } from "../../components/SocialMediaMenu/SocialMediaMenu";
import {RevealFromLeft} from "../../components/animations/RevealFromLeft"
import { RevealFromRight } from "../../components/animations/RevealFromRight";

import { Link } from "react-router-dom";



export const MainPageMobile = () => {
  return (
    <div className="main-page-mobile">
      <div className="div">
        <div id="socials" className="socials">
          <RevealFromLeft><SocialMediaMenu/></RevealFromLeft>
        </div>
      
        <div className="welcome-section">
          <div className="overlap">
            <RevealFromRight>
            <p className="lorem-ipsum-dolor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniat laborum.
            </p>
            </RevealFromRight>
            <RevealFromRight>
            <div className="text-wrapper-3">welcome</div>
            </RevealFromRight>
          </div>
        </div>
        <div className="our-classes">
          <div className="overlap-2">
            <RevealFromLeft><p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p></RevealFromLeft>
            <RevealFromLeft><div className="text-wrapper-4">our classes</div></RevealFromLeft>
          </div>
        </div>
        <div id="top" className="header-section">
          <RevealFromLeft><CompactMenu/></RevealFromLeft>
          <RevealFromRight>
            <div className="selection-group">
              <div className="text-wrapper-8">please select your educators</div>
              <Link to="/nova"><div className="text-wrapper-9">team nova</div></Link>
              <Link to="/nebula"><div className="text-wrapper-10">team nebula</div></Link>
            </div>
          </RevealFromRight>
          <div className="title">
            <RevealFromLeft>
              <h1 className="future-for-young">
              Future <br />
              for
              <br />
              Young <br />
              Scientists
            </h1>
            </RevealFromLeft>
            <RevealFromLeft><div className="text-wrapper-11">advancing the future</div></RevealFromLeft>
          </div>
        </div>
        <div className="overlap-3">
          <div className="parent-testimonials">
            <div className="overlap-4">
              <RevealFromRight><div className="parent-testimonials-2">
                parent
                <br />
                testimonials
              </div></RevealFromRight>
              <RevealFromRight>
              <p className="text-wrapper-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              </RevealFromRight>
              <RevealFromRight>
              <p className="text-wrapper-13">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              </RevealFromRight>
              <RevealFromRight>
              <p className="text-wrapper-14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              </RevealFromRight>
              <RevealFromRight>
              <p className="text-wrapper-15">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              </RevealFromRight>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
