import React from 'react';
import Roll from "react-reveal/Roll";

function Contact(){
 return (
   <Roll bottom>
     <div className="contact-container" id="contact">
       <div className="studies">
         <h1>Studies</h1>
         <div className="box">
           <h2>2019-2020</h2>
           <p>Stutern (SGA 0.7)</p>
           <p>Portifilo in Data Science</p>
         </div>

         <div className="box">
           <h2>2011-2015</h2>
           <p>University of Ibadan</p>
           <p>Bsc Physics</p>
         </div>
       </div>

       <div className="experiences">
         <h1>Experiences</h1>
         <div className="box">
           <h2>2020 - till date </h2>
           <p>My data science pals</p>
           <p>Instructor / Data Science</p>
         </div>

         <div className="box">
           <h2>2019-2020</h2>
           <p>Stutern</p>
           <p>Intern / Data Science</p>
         </div>
       </div>

       <div className="contact">
         <h1>Contact</h1>
         <div className="inside-contact">
           <a href="https://github.com/datascientist-kenn">
             <div className="box-1">
               <button>Linkedin</button>
             </div>
           </a>

           <a href="mailto:dagogokenn@gmail.com">
           <div className="box-1">
             <button>@Mail</button>
           </div>
            </a>
           <a href="https://">
             <div className="box-1">
               <button>Github</button>
             </div>
           </a>
         </div>
       </div>
     </div>
   </Roll>
 );
}

export default Contact;