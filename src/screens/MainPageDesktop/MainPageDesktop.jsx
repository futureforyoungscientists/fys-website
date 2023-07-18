import React from "react";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css'
import "./style.css";

import { CompactMenu } from "../../components/CompactMenu/CompactMenu";
import { SocialMediaMenu } from "../../components/SocialMediaMenu/SocialMediaMenu";
import { RevealFromLeft } from "../../components/animations/RevealFromLeft";
import { RevealFromRight } from "../../components/animations/RevealFromRight";
import { HashLink } from "react-router-hash-link";

export const MainPageDesktop = () => {
  return (
    <div className="main-page">
      <div className="div">
        <div className="overlap">
          <div className="our-classes">
            <div className="overlap-group">
              <RevealFromRight><div className="text-wrapper">our classes</div></RevealFromRight>
              <p className="lorem-ipsum-dolor">
                <RevealFromLeft><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</div></RevealFromLeft>
                <br /> <br/>
                <RevealFromLeft><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</div></RevealFromLeft>
                <br /> <br/>
                <RevealFromLeft><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</div></RevealFromLeft>
                <br /><br/>
                <RevealFromLeft><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</div></RevealFromLeft>
                
              </p>
            </div>
          </div>
          <div className="welcome-section">
            <div className="overlap-2">
              <RevealFromRight><div className="text-wrapper-2">welcome</div></RevealFromRight>
              <RevealFromRight>
              <p className="welcome-message">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              </RevealFromRight>
            </div>
          </div>
          <RevealFromLeft><img className="translucent-logo" alt="Translucent logo" src="/img/translucent-logo-1.svg" /></RevealFromLeft>
        </div>
        <div id="top" className="header-section">
        <RevealFromRight>
          <div className="selection-group">
            <div className="text-wrapper-3">please select your educators</div>
            <div className="text-wrapper-4"><Link to="/nova">team nova.</Link></div>
            <div className="text-wrapper-5"><Link to="/nebula">team nebula.</Link></div>
          </div>
        </RevealFromRight>
          
          <RevealFromLeft><CompactMenu/></RevealFromLeft>
          <div className="title">
            <RevealFromLeft>
            <h1 className="future-for-young">
              Future for
              <br />
              Young Scientists
            </h1>
            </RevealFromLeft>
            <RevealFromLeft><div className="text-wrapper-9">advancing the future</div></RevealFromLeft>
          </div>
        </div>
        <div className="parent-testimonials">
          <div className="overlap-3">
            <RevealFromLeft><div className="text-wrapper-10">parent testimonials</div></RevealFromLeft>
            <RevealFromRight><div><p className="text-wrapper-11">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p></div></RevealFromRight>
            <RevealFromRight><div><p className="text-wrapper-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p></div></RevealFromRight>
            <RevealFromRight><div><p className="text-wrapper-13">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p></div></RevealFromRight>
            <RevealFromRight><div><p className="text-wrapper-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p></div></RevealFromRight>
          </div>
        </div>
        <div id="socials" className="socials">
          <div className="overlap-4">
            <RevealFromLeft><div className="text-wrapper-15">follow our journey</div></RevealFromLeft>
            <RevealFromRight><div className="text-wrapper-16">reach us at futureforyoungscientists@gmail.com</div></RevealFromRight>
            <RevealFromLeft><SocialMediaMenu/></RevealFromLeft>
            <RevealFromLeft><div className="text-wrapper-17"><HashLink smooth to="/#top">return to home</HashLink></div></RevealFromLeft>
          </div>
        </div>
      </div>
    </div>
  );
};
