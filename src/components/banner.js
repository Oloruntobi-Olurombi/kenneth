import React from 'react';
import Fade from 'react-reveal/Fade';
const Banner = () =>{
 return (
   <main>
     <div className="banner-container">
       <div className="banner-text-wapper">
         <Fade right>
           <h3>
             Hey! I'm Kenneth, a Lagos Based <br />
             Data Scientist.
           </h3>
         </Fade>
       </div>

       <div className="bird-container bird-container--one">
         <div className="bird bird--one"></div>
       </div>

       <div className="bird-container bird-container--two">
         <div className="bird bird--two"></div>
       </div>

       <div className="bird-container bird-container--three">
         <div className="bird bird--three"></div>
       </div>

       <div className="bird-container bird-container--four">
         <div className="bird bird--four"></div>
       </div>
     </div>
   </main>
 );
}


export default Banner;