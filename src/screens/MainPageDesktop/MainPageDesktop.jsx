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
                <RevealFromLeft><div> Our <b>free weekly online science classes</b> for children are geared toward children in grades 2-7 to convey advanced 
              science topics by conducting experiments that utilize household materials, allowing us to achieve our goal 
              in the most accessible way possible. In addition to our classes, Future for Young Scientists have held fun 
              community events to continue our belief in bettering our local communities. In 2021, the Founders curated the 
              Future for Young Scientists Educators Mentorship. We aim to allow other high achieving high school students to 
              learn valuable life skills by being an educator for Future for Young Scientists. Since its conception, the Founders 
              have mentored three teams of educators. We allow our Educators to have full autonomy for what they teach so that 
              they are fully passionate about the wide range of STEM topics that they choose to teach.</div></RevealFromLeft>
                <br /> <br/>
                <RevealFromLeft><div>In general, our classes are held over <b>Google Meets</b> and range from 45-60 minutes. Our classes are separated 
              into <b>2-5th graders</b> in our Elementary Focused Lesson and <b>6-7th graders</b> in our Middle School Focused Lesson. 
              Students and parents are welcome to join our classes at <b>any point</b> in the session! This means if you find our 
              program after we have begun you are more than welcome to fill out our registration form and join the next class.</div></RevealFromLeft>
                <br /> <br/>
                <RevealFromLeft><div>With our Educators, the <b>Nova Team</b> have now taught for two years and are all seniors at Hicksville High School. 
              They have held multiple in person community events in Hicksville to bring STEM education to the local community. 
              The <b>Nebula Team</b> will be debuting this summer as our first nationwide team! They are bright high school students 
              who are passionate about increasing the reach of Future for Young Scientists. We hope that you are able to attend 
              classes for both of these amazing groups, see you soon!</div></RevealFromLeft>
                <br />
                
              </p>
            </div>
          </div>
          <div className="welcome-section">
            <div className="overlap-2">
              <RevealFromRight><div className="text-wrapper-2">welcome</div></RevealFromRight>
              <RevealFromRight>
              <p className="welcome-message">
              Future for Young Scientists is an organization that seeks to spread the knowledge 
            of STEM to children by indulging in fun and engaging at-home experiments. With the 
            program running since 2020, across our different educators the organization has seen 
            nearly 200 different students since then from all across the globe. We hope to continue 
            to foster growth in our young scientists so explore our website to learn more!
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
            "Great Job!  The experiments were easy to perform but scientifically relevant and well-explained!  
              Class discussion was good, engaging the students."
              <br/>
              <b>— Douglas E.S.</b>
            </p></div></RevealFromRight>
            <RevealFromRight><div><p className="text-wrapper-12">
            “You all rock, guys! So interesting, entertaining and overall you all are so patient and sweet with kids. Thank you all so much!”
              <br/> <b>— Aida D.</b>
            </p></div></RevealFromRight>
            <RevealFromRight><div><p className="text-wrapper-13">
            “Thank you for everything. The kids are excited to hear you will continue to have these experiments. 
              What you are providing to these young ones are priceless experiences and memories. Thank you again!”
              <br/> <b>— Amy H.</b>
            </p></div></RevealFromRight>
            <RevealFromRight><div><p className="text-wrapper-14">
            “Future Young Scientists offered a wonderful program that my 10 year old son enjoyed this summer. 
              The experiments were fun and educational. They utilized common household items and the clean up was easy. 
              I highly recommend this program for elementary and middle school students.”
              <br/> <b>— Marilyn P.K.</b>
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
