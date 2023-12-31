import React from "react";
import "./style.css";
import { RevealFromRight } from "../../components/animations/RevealFromRight";
import { RevealFromLeft } from "../../components/animations/RevealFromLeft";
import { CompactMenu } from "../../components/CompactMenu/CompactMenu";
import { NovaCalendar } from "../../components/NovaCalendar";

export const NovaPageMobile = () => {
  return (
    <div className="nova-mobile">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="header-section">
            <div className="overlap-group">
              
             <RevealFromLeft><CompactMenu /></RevealFromLeft>
              {/* <div className="content-centering-container"> */}
                <RevealFromRight><div className="text-wrapper-3">team nova</div></RevealFromRight>
                <RevealFromLeft>
                  <p className="p">
                  <b>To register for classes, please click <a href="https://docs.google.com/forms/d/e/1FAIpQLSd6VNziG3jx3IBjadWNmKJ3TbFVUoG_yIoLj9nUade5cZZpyw/viewform?usp=sf_link" target="_blank">here</a>.</b>
                  <br/><br/>
                    We are a group of four students from Hicksville High School
                    who are all deeply passionate about STEM, and participate in
                    a variety of STEM-related activities including Science
                    Olympiad and Robotics. Our goal is to teach children from
                    communities like ours where they may not have the money or
                    available programs to learn science through hands-on
                    experiments. We strive to achieve this goal by keeping our
                    classes completely free, utilizing only common household
                    items in our experiments, and outreaching to children from
                    countries all around the world. We hope that through our
                    online classes, children from around the world and from all
                    backgrounds will get to experience science in a unique way!
                    <br /> <br />
                    Our classes are currently being held from July 9th to August
                    13th. On the calendar below, you can find the date and time
                    of each class, as well the name of each experiment and a
                    materials list. The materials list for each experiment can
                    be accessed by clicking on the date and then clicking the
                    name of the experiment. You will be directed to a PDF
                    containing the materials for the experiment along with
                    relevant information and links about the experiment as well.
                </p>
                </RevealFromLeft>
              {/* </div> */}
            </div>
          </div>
          <div className="header-bg"></div>
          
          {/* <div className="content-centering-container"> */}
          <RevealFromRight>
            <div className="calendar-wrapper">
              <NovaCalendar />
            </div>
          </RevealFromRight>
            <RevealFromLeft>
              <h1 className="h-1">calendar</h1>
            </RevealFromLeft>
            <RevealFromLeft>
              <b>
                <h1 className="h-2">click each event for more info</h1>
              </b>
            </RevealFromLeft>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};
