import React from "react";
import "./style.css";
import { CompactMenu } from "../../components/CompactMenu/CompactMenu";
import { RevealFromLeft } from "../../components/animations/RevealFromLeft";
import { RevealFromRight } from "../../components/animations/RevealFromRight";

export const BlogPage = () => {
  return (
    <div className="blog-page">
      <div className="div">
        <div className="blog-top">
          <div className="overlap-group">
            <RevealFromLeft><CompactMenu/></RevealFromLeft>
            <RevealFromRight><h1 className="h-1">blog</h1></RevealFromRight>
            <RevealFromLeft><p className="p">
                Here on our blog page, you can see a summary of each of our classes and the fun experiments that were
                carried out! It will get updated soon, so stay up to date on our socials!
            </p></RevealFromLeft>
          </div>
        </div>
        {/* <div className="overlap">
          <div className="sample-blog">
            <RevealFromRight><img className="profile-pic" alt="Profile pic" src="/img/profile-pic-1.png" /></RevealFromRight>
            <RevealFromLeft><div className="text-wrapper-4">June 29th, 2023</div></RevealFromLeft>
            <RevealFromLeft><p className="lorem-ipsum-dolor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p></RevealFromLeft>
          </div>
          <div className="sample-blog-2">
            <RevealFromRight><img className="profile-pic" alt="Profile pic" src="/img/profile-pic-1.png" /></RevealFromRight>
            <RevealFromLeft><div className="text-wrapper-4">June 29th, 2023</div></RevealFromLeft>
            <RevealFromLeft><p className="lorem-ipsum-dolor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p></RevealFromLeft>
          </div>
        </div> */}
      </div>
    </div>
  );
};
