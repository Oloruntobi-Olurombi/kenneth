import React from 'react';



function Nav (){
  

 return (
   
     
    
       <div className='nav-container' >
            
         <div className="nav-logo">
         <h3>Kenneth Dagogo <span></span>🧑‍💻</h3>
         </div>

         <div className="nav-link">
            
           <div className="work">
           
           <a href="#work" className="link"><h3>Work</h3></a>
             
           </div>

           <div className="about">
           
               <a href="#about" className="link"><h3>About</h3></a>
             
         </div>

           <div className="contact">
           
           <a href="#contact" className="link"><h3>Contact</h3></a>
             
           </div>

           
         </div>
       </div>
   
     
     
   
 );
  
}


export default Nav;