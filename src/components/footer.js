import React from 'react';
import Zoom from 'react-reveal/Zoom';

function Footer(){
 return (
   <div className="footer-container">
     <div className="footer-text-container">
       <Zoom right cascade>
         <a className="aa" href="https://github.com/Oloruntobi-Olurombi">
           <h2>Designed and developed with 💖 by Oloruntobi Olurombi</h2>
         </a>
       </Zoom>
     </div>
   </div>
 );
}

export default Footer;