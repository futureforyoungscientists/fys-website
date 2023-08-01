import React from "react";
import "./style.css";
import { CompactMenu } from "../../components/CompactMenu/CompactMenu";
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
              We are a group of four students from Hicksville High School who are all deeply passionate about STEM, 
              and participate in a variety of STEM-related activities including Science Olympiad and Robotics. Our 
              goal is to teach children from communities like ours where they may not have the money or available 
              programs to learn science through hands-on experiments. We strive to achieve this goal by keeping our 
              classes completely free, utilizing only common household items in our experiments, and outreaching to 
              children from countries all around the world. We hope that through our online classes, children from 
              around the world and from all backgrounds will get to experience science in a unique and engaging way!
              <br/> <br/>
              Our classes are currently being held from July 9th to August 13th. On the calendar below, you can find 
              the date and time of each class, as well the name of each experiment and a materials list. The materials
               list for each experiment can be accessed by clicking on the date and then clicking the name of the 
               experiment. You will be directed to a PDF containing the materials for the experiment along with relevant 
               information and links about the experiment as well.<br/> <br/>

              To register, please click <a href="https://docs.google.com/forms/d/e/1FAIpQLSd6VNziG3jx3IBjadWNmKJ3TbFVUoG_yIoLj9nUade5cZZpyw/viewform?usp=sf_link">here</a>.
            </p></RevealFromLeft>
          </div>
        </div>
        <div className="overlap">
          <RevealFromRight><div className="text-wrapper-4">calendar</div></RevealFromRight>
          <RevealFromLeft><em><div className="click-here">click each event for more info</div></em></RevealFromLeft>
          <RevealFromLeft><div className="calendar-wrapper"><NovaCalendar/></div></RevealFromLeft>
        </div>
        
      </div>
    </div>
  );
};
