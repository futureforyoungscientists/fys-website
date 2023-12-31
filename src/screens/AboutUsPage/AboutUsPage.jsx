import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { CompactMenu } from "../../components/CompactMenu/CompactMenu";
import { RevealFromRight } from "../../components/animations/RevealFromRight";
import { RevealFromLeft } from "../../components/animations/RevealFromLeft";

export const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <div className="div">
        
        <div className="about-us-top">
          <div className="overlap-group">
          <div className="content-centering-container">
            <RevealFromLeft><CompactMenu/></RevealFromLeft>
            <RevealFromRight><h1 className="h-1">about us</h1></RevealFromRight>
            <RevealFromLeft><div><p className="p">
              We founded FYS with the mission to inspire children to think critically, like scientists. We believe that
              fostering scientific curiosity at a young age is essential to get our students on a path to learn about
              the STEM field. Through the engaging nature of hands-on learning, lessons become more appealing and fun
              while bringing out the inner curiosity that is present in every child.
            </p></div></RevealFromLeft>
          </div>
        </div>
        <div className="team-nebula">
          <div className="overlap">
          <div className="content-centering-container">
            <div className="overlap-group-2">
              <div className="sample-person">
                <RevealFromRight><img className="profile-pic" alt="Profile pic" src="/img/Headshots/Lauren.png" /></RevealFromRight>
                <RevealFromLeft><div className="text-wrapper-4">Lauren Churchill</div></RevealFromLeft>
                <RevealFromLeft><div><p className="lorem-ipsum-dolor">
                Lauren Churchill is an IB junior at Palm Harbor University High School who has passions for neuroscience, 
                space science/astronomy, and chemistry. She was exposed to these STEM topics at a very young age due to both 
                her parents being involved in medicine and engineering. At school, she is involved in the FIRST Tech Challenge/Robotics, 
                FBLA as the secretary, Mu Alpha Theta as the Precalculus coach, and the GIDAS gene research club as the vice president. 
                Outside of school, she plays tennis, reads, and enjoys playing video games - as well as being involved in volunteering 
                at local robotics camps, tutoring organizations, and her own organization which furthers education in astronomy/astrophysics 
                for elementary and middle school students.

                </p></div></RevealFromLeft>
              </div>
              
            </div>
            <div className="overlap-2">
            <div className="sample-person">
                <RevealFromRight><img className="profile-pic" alt="Profile pic" src="/img/Headshots/Samiksha.jpg" /></RevealFromRight>
                <RevealFromLeft><div className="text-wrapper-4">Samiksha Emmaneni</div></RevealFromLeft>
                <RevealFromLeft><div><p className="lorem-ipsum-dolor">
                Samiksha Emmaneni is a junior at Centennial High School in Frisco, TX, who has a deep passion for aerospace and 
                programming. With leadership positions at her school’s Society of Women’s Engineering and Girls Who Code chapters, 
                she actively works to promote gender equality in STEM. As an aspiring Aerospace Engineer, she’s now taking her third 
                PLTW (Project Lead The Way) engineering course at school and is participating in her second year of the FIRST robotics 
                competition. Outside of school, she enjoys playing the piano during her free time and maintains a Medium blog where she 
                shares her thoughts and insights on various tech-related topics. 
                </p></div></RevealFromLeft>
              </div>
              
            </div>
            <div className="overlap-3">
              <div className="sample-person">
                <RevealFromRight><img className="profile-pic" alt="Profile pic" src="/img/Headshots/Annika.jpg" /></RevealFromRight>
                <RevealFromLeft><div className="text-wrapper-4">Annika Khurana</div></RevealFromLeft>
                <RevealFromLeft><div><p className="lorem-ipsum-dolor" font-size="12px">
                Annika Khurana is a motivated senior at New Canaan High School who has long held an appreciation for STEM 
                subjects. As an elementary schooler, Annika was determined to explore STEM applications in the world around 
                her, whether by observing plants and animals or by taking a closer look at the properties of objects. She 
                often longed for more instructional resources and experiments to work through on her own; Many years later, 
                she is excited to fulfill the similar desires of FYS students. As a high schooler, Annika has become more 
                interested in mathematics (her favorite school subject), chemistry, and physics and has also been involved 
                with her school’s science team. Outside of STEM, Annika is passionate about business/economics. She enjoys 
                sharing her knowledge about money management and entrepreneurship with elementary/middle school students 
                through her organization Money Matters New Canaan. Annika also writes for her school newspaper, of which 
                she will be an Editor-in-Chief, and plays for her school’s tennis team. 
                </p></div></RevealFromLeft>
              </div>
              
            </div>
            
            <RevealFromRight><div className="text-wrapper-5">team nebula</div></RevealFromRight>
          </div>
        </div>
        </div>
        <div className="team-nova">
          <div className="overlap-4">
          <div className="content-centering-container">
            <div className="overlap-group-2">
            <div className="sample-person">
                <RevealFromRight><img className="profile-pic" alt="Profile pic" src="/img/Headshots/Siddh.jpg" /></RevealFromRight>
                <RevealFromLeft><div className="text-wrapper-4">Siddh Agarwal</div></RevealFromLeft>
                <RevealFromLeft><div><p className="lorem-ipsum-dolor">
                Siddh Agarwal is a senior at Hicksville High School who is especially interested in learning about 
                STEM and helping out his community. He has been exposed to a variety of STEM disciplines through the 
                double-accelerated STEM program, research in quantum computing and AI outside of school, and the Science 
                Olympiad, which he was the co-president of at his school this year. Through school, he has especially gained 
                an interest in physics and chemistry. Some of his interests outside of STEM include swimming and music. Siddh 
                has given back to his community most significantly through co-founding EzClass, an organization that teaches 
                free classes at the local library, along with Birinder. Through this organization, he taught programming, 
                game development, and robotics through interactive lessons that he designed, and based upon his knowledge 
                of programming which he had previously learned on his own. Through this experience and combining his passion 
                for STEM and community service, joining Future for Young Scientists allows him to share his passion for STEM 
                with younger children, which will hopefully help them to become as enthused with STEM subjects as he is.
                </p></div></RevealFromLeft>
              </div>
              
            </div>
            <div className="overlap-2">
              
            <div className="sample-person">
                <RevealFromRight><img className="profile-pic" alt="Profile pic" src="/img/Headshots/Birinder.jpg" /></RevealFromRight>
                <RevealFromLeft><div className="text-wrapper-4">Birinder Bachhal</div></RevealFromLeft>
                <RevealFromLeft><div><p className="lorem-ipsum-dolor">
                Birinder Bachhal is a senior at Hicksville High School who has a keen interest and a developed passion 
                for STEM fields, specifically Chemistry and Forensic Science. At a young age, being exposed to these topics 
                through STEM-based magic tricks as an elementary school student allowed him to participate in the double-accelerated 
                STEM program at his middle and high school. Along with this, having been the treasurer of the Hicksville Science 
                Olympiad team, and being the president of his school’s Science National Honor Society chapter, he has created a 
                pathway of success for himself at an early age. Similarly, through his participation in the SARC research 
                competition, he has built a reputable background in STEM research. In early 2020, EzClass, a teaching organization 
                that he and Siddh created, allowed him to develop a new passion for teaching the younger generations interesting, 
                intriguing, and important topics in the vast realm of STEM, specifically topics in his passion for Chemistry and 
                Forensic Science. Through his significant passion for STEM topics and his willingness to give back to his community, 
                he hopes to spark a passion in STEM for future generations across the world. 

                </p></div></RevealFromLeft>
              </div>
            </div>
            <div className="overlap-3">
              
            <div className="sample-person">
                <RevealFromRight><img className="profile-pic" alt="Profile pic" src="/img/Headshots/Nikki.jpg" /></RevealFromRight>
                <RevealFromLeft><div className="text-wrapper-4">Nikki Kamath</div></RevealFromLeft>
                <RevealFromLeft><div><p className="lorem-ipsum-dolor">
                Nikki Kamath is an ambitious junior at Hicksville High School, who has a passion for various STEM fields, 
                including biology, genetics, ecology, forestry, ornithology, chemistry, and immunology. Ever since her 
                acceptance into the double-accelerated STEM program in 6th grade, she has had a passion for science, research, 
                and math, demonstrated by her activities such as Science Olympiad, Math Olympiad, and the FIRST Robotics Program 
                offered at school. Now, she aims to lead other students through her roles as the Vice President of Science 
                Olympiad, a member of the Hicksville J-Birds Robotics Team, secretary of Hicksville’s new debate team, and 
                secretary of Mu Alpha Theta. Outside of school ,she is involved in The Society For The Prevention Of Teen 
                Suicide, and she strives to help others find a passion in scientific experiments and research. In the future, 
                Nikki hopes to be a physician and researcher. 
                </p></div></RevealFromLeft>
              </div>
            </div>
            <div className="sample-person-2">
                <RevealFromRight><img className="profile-pic" alt="Profile pic" src="/img/Headshots/Bilal.png" /></RevealFromRight>
                <RevealFromLeft><div className="text-wrapper-4">Bilal Mahmood</div></RevealFromLeft>
                <RevealFromLeft><div><p className="lorem-ipsum-dolor">
                Bilal Mahmood is an enthusiastic senior at Hicksville High School, with a deep love for STEM and the musical arts. 
                When not playing his trombone or studying for the next test, he is always surrounded by science and math-related 
                activities and work. Ever since being involved in Math Olympiad, he has always had a drive to be involved in STEM 
                activities. His acceptance into the FIRST Robotics Program, the Science Olympiad and Math Olympiad, and the 
                Double-Accelerated Program in middle school only reinforced this drive. Today, he is the President of Hicksville 
                High School’s Science Olympiad, a proud member of the Hicksville J-Birds Robotics Team, and a member of the many 
                Honor Societies of Hicksville High School. He specializes in fields of astronomy, ornithology, and physics. 
                Outside of his STEM activities, he is also involved in the Hicksville Marching and Jazz ensembles, the 
                Hicksville Cross Country team, and is currently researching anomalies in cosmology. 
                </p></div></RevealFromLeft>
              </div>
            <div className="text-wrapper-6">team nova</div>
          </div>
        </div>
        </div>
        <div className="team-founders">
          <div className="overlap-5">
          <div className="content-centering-container">
            <div className="overlap-group-2">
              
            <div className="sample-person">
                <RevealFromRight><img className="profile-pic" alt="Profile pic" src="/img/Headshots/Fiddi.jpeg" /></RevealFromRight>
                <RevealFromLeft><div className="text-wrapper-4">Fiddi Hilmi</div></RevealFromLeft>
                <RevealFromLeft><div><p className="lorem-ipsum-dolor">
                Fiddi Hilmi is currently a rising third year at Binghamton University majoring in Biological Sciences. 
                He is currently in the Beckman Scholars Program at Binghamton completing research that looks at how to 
                disturb antibiotic resistant biofilms. Previously, Fiddi was in the NSF funded REU site at Binghamton 
                University where he studied the skin microbiota of Costa Rican lizards! He is passionate about microbial 
                ecology and hopes to get his Ph.D. in Microbiology and Immunology. He is also passionate about teaching 
                and mentoring the next generation of scientists! When he isn’t in the lab, Fiddi likes relaxing with his 
                friends or playing video games.
                </p></div></RevealFromLeft>
              </div>
            </div>
            <div className="overlap-2">
              
            <div className="sample-person">
                <RevealFromRight><img className="profile-pic" alt="Profile pic" src="/img/Headshots/Serena.jpg" /></RevealFromRight>
                <RevealFromLeft><div className="text-wrapper-4">Serena Lam</div></RevealFromLeft>
                <RevealFromLeft><div><p className="lorem-ipsum-dolor">
                Serena Lam is from Long Island, NY and is currently a rising third year at Northeastern University 
                with a combined major in Environmental Engineering and Landscape Architecture. With passions in green 
                building/public space design, sustainable development, and energy systems, she is currently a Staff 
                Engineer Intern at Bohler Engineering, a civil engineering company with a niche in land development 
                for her co-op. Along with this, she is studying for her LEED Green Associate accreditation to work 
                towards her goal of being involved in the green industry. At Northeastern, Serena also partakes in 
                student organizations like Northeastern University Sustainable Building Organization, Northeastern 
                University Solar Decathlon, and American Institute of Architecture Students. In addition to this, 
                during the school year Serena works as an Office Assistant under the School of Architecture at 
                Northeastern where she’ll partake in specific projects through the department as needed. And outside 
                of school in her free time, Serena enjoys crocheting, playing on the piano, and reference drawing. 
                </p></div></RevealFromLeft>
              </div>
            </div>
            <div className="overlap-3">
              
            <div className="sample-person">
                <RevealFromRight><img className="profile-pic" alt="Profile pic" src="/img/Headshots/Aric.png" /></RevealFromRight>
                <RevealFromLeft><div className="text-wrapper-4">Aric Peng</div></RevealFromLeft>
                <RevealFromLeft><div><p className="lorem-ipsum-dolor">
                Aric Peng is a driven and accomplished individual currently pursuing Mechanical and Computer Engineering at Boston University.
                As a dedicated junior, Aric has already made significant strides in the world of technology and research.
                Having a keen interest in the intersection of biology and engineering, Aric gained valuable expertise in bioinformatics data analysis during his time at Cold Spring Harbor.
                This experience honed his analytical skills and broadened his understanding of genomic models, data analysis, and machine learning.
                At the BU Biomorpable Robotics Laboratory, Aric serves as a research assistant, contributing to the development of surgical robotics aimed at improving trauma response. 
                His passion for robotics and commitment to the advancement of minimally invasive medical technology to improve patient outcomes and recovery times.
                This summer, Aric had the opportunity to expand his knowledge further at General Electric Aerospace.
                There, he delved into the world of jet engine manufacturing and software development, striving to optimize production speeds and enhance aerospace technology.
                Aric looks forward to further challenges and opportunities, he remains dedicated to making a meaningful impact in the field of engineering and beyond.
                </p></div></RevealFromLeft>
              </div>
            </div>
            <div className="sample-person-2">
                <RevealFromRight><img className="profile-pic" alt="Profile pic" src="/img/Headshots/Nav.jpeg" /></RevealFromRight>
                <RevealFromLeft><div className="text-wrapper-4">Navpreet Singh</div></RevealFromLeft>
                <RevealFromLeft><div><p className="lorem-ipsum-dolor">
                  Navpreet Singh is a rising junior at MIT studing Artificial Intelligence, while also minoring in Economics. Currently, he 
                  is working as an Autonomy Intern at Lockheed Martin, working on implementing autonomous flight capabilities for the Black Hawk 
                  helicopter and its variants. At MIT, Navpreet is a researcher at the Computer Science and Artificial Intelligence Laboratory, studying the applications 
                  of Natural Language Processing in industry. He has also done research at the MIT Media Lab, working on solutions to water scarcity in 
                  arid regions of Latin America. In terms of his teaching experiences outside of FYS, Navpreet had the opportunity to teach a course on 
                  the applications of AI to high school students in Jordan, through the MIT MISTI Global Teaching Labs Initiative. He has also spent a summer as a Computer Science Instructor 
                  in Jerusalem for the Middle East Entrepreneurs of Tomorrow, teaching data science in Python to 9th graders from both 
                  Israeli and Palestinian backgrounds.
                </p></div></RevealFromLeft>
              </div>
            <div className="text-wrapper-7">founders</div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};
