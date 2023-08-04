import React from "react";
import "./style.css";
import { CompactMenu } from "../../components/CompactMenu/CompactMenu";
import { NebulaCalendar } from "../../components/NebulaCalendar";
import { RevealFromLeft } from "../../components/animations/RevealFromLeft";
import { RevealFromRight } from "../../components/animations/RevealFromRight";

export const NebulaPage = () => {
  return (
    <div className="nebula">
      <div className="div">
        <div className="nebula-top">
          <div className="overlap-group">
            <RevealFromLeft><CompactMenu/></RevealFromLeft>
            <RevealFromRight><h1 className="h-1">team nebula</h1></RevealFromRight>
            <RevealFromLeft><p className="p">
              <b> To register for our program, please click <a href="https://forms.gle/bTVcYWxsAbfTipbL8" target="_blank">here</a>.</b></b>
              Meet Team Nebula: Future For Young Scientists' first team of educators hailing across 
              different parts of the USA! Though each team member has been exposed to a different STEM 
              curriculum in their schools, all are driven by the same mission: to spread their deep passion 
              for STEM and make experiment-based lessons accessible to students across the world. Team Nebula 
              believes that all students should be granted the opportunity to feed their inner curiosity. 
              In fact, each Nebula educator feels that fundamental STEM concepts haven't been emphasized 
              enough in their school districts, particularly in elementary and middle school, which creates 
              a lack of foundation for students entering high school. Though a variety of STEM-focused educational 
              resources are available online, Nebula feels that there is simply no substitute for experiment-based 
              learning as well as the personal interactions offered by live lessons. Each Nebula educator is 
              determined to spread awareness about FYS in their communities and ensure that the organization's 
              mission is fulfilled. 
              <br/> <br/>
              Our classes are currently being held from August 12th to September 9th once a week on Saturdays. 
              On the calendar below, you can find the date and time of each class, as well the name of each 
              experiment and a materials list. The materials list for each experiment can be accessed by clicking 
              on the date and then clicking the name of the experiment. You will be directed to a PDF containing 
              the materials for the experiment along with relevant information and links about the experiment as well.
            </p></RevealFromLeft>
          </div>
        </div>
        <div className="overlap">
          <RevealFromRight><div className="text-wrapper-4">calendar</div></RevealFromRight>
          <RevealFromLeft><div className="calendar-wrapper"><NebulaCalendar/></div></RevealFromLeft>
        </div>
        
      </div>
    </div>
  );
};
