import React from "react";
import Fade from 'react-reveal/Fade';
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";

function About(){
 return (
   <Fade bottom cascade>
     <div className="about-container" id="about">
       <Zoom bottom cascade>
         <div className="about-title-container">
           <h3>ABOUT ME</h3>
         </div>
       </Zoom>
       <Bounce bottom cascade>
         <div className="about-para">
           <h4>
             In 2019, I had the opportunity to learn and work at stutern <br />
             where I acquire the fundamentals skills in order to work in <br />
             the Data science and management industry. I currently, <br />{" "}
             volunteer at <span className="current">MY DATA SCIENCE PALS </span>
             as an Instructor.
           </h4>
         </div>
       </Bounce>
     </div>
   </Fade>
 );
}

export default About;