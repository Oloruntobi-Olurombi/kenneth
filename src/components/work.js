import React from'react';
import Bounce from "react-reveal/Bounce";
import Zoom from 'react-reveal/Zoom';
import Slide from "react-reveal/Slide";
import imgOne from "../img/dsnew-1.jpg";
import imgTwo from "../img/dsnew-7.jpg";
import imgThree from "../img/dsnew-2.jpg";
import imgFour from "../img/dsnew-4.jpg";
import imgFive from "../img/dsnew-3.jpg";
import imgSix from "../img/dsnew-6.jpg";

// import imgOne from '../img/data-science1.jpg';
// import imgTwo from '../img/data-science2.jpg';
// <img src={imgTwo} alt="" />
// <img src={imgOne} alt="" className="ImgOne" />

function Work(){
 return (
   <div className="container-work" id="work">
     
     <div className="work-container-title">
       <Bounce right cascade>
         <h2> Check out my valuable projects</h2>
       </Bounce>
     </div>
     
     <div className="ImageContainer">

       
      
         <Slide left>
           <div className="imgOneContainer">
               <a
                 className="a"
                 href="https://github.com/datascientist-kenn/COVID19-Dashboard"
               >
             
               <img src={imgOne} alt="" className="imgOne"/>
             <Zoom bottom cascade>
                 <h1 className="img-text-1">Covid Tracker Dashboard</h1>
             </Zoom>
               </a>
           </div>
         </Slide>
       
       

       
     
         <Slide right>
           <div className="imgTwoContainer">
             
               <a href="https://github.com/datascientist-kenn/DSN-on-Zindi-Insurance-Prediction">
                  <img src={imgTwo} alt="" className="imgTwo"/>
             <Zoom bottom cascade>
                 <h1 className="img-text-2">Insurance Prediction</h1>
             </Zoom>
               </a>
            
           </div>
         </Slide>
       
      
      

      
       
       <Slide right>
         <div className="imgThirdContainer">
           
             <a href="https://github.com/datascientist-kenn/Zindi-Financial-Inclusion-in-Africa">
           <img src={imgThree} alt="" className="imgThree"/>
             <Zoom bottom cascade>
             <h1 className="img-text-3">Financial Inclusion in Africa</h1>
             </Zoom>
             </a>
        
         </div>
       </Slide>
        
       
       
         

       <Slide left>
         <div className="imgFourthContainer">
           
             <a href="https://github.com/datascientist-kenn/Loan_Credit_Score_Framework">
           <img src={imgFour} alt="" className="imgFour"/>
             <Zoom bottom cascade>
             <h1 className="img-text-4">
               Loan Predication 
             </h1>
             </Zoom>
                 </a>
           
         </div>
       </Slide>
    
     
        

     
        
       <Slide left>
     
         <div className="imgFifthContainer">
           
             <a href="https://github.com/datascientist-kenn/Sentiment-Analysis-of-the-COVID19-Corona-Virus-Pandemic.">
           <img src={imgFive} alt="" className="imgFive"/>
             <Zoom bottom cascade>
             <h1 className="img-text-5">Sentiment Analysis of Covid 19</h1>
             </Zoom>
             </a>
           
         </div>
       </Slide>
        

        
       <Slide right>
         <div className="imgSixthContainer">
           
             <a href="https://github.com/datascientist-kenn/Naive-Bayes-on-fetch_20newsgroup">
            <img src={imgSix} alt="" className="imgSix"/>
             <Zoom bottom cascade>
             <h1 className="img-text-6">Naive Byes on fetch 20 newsgroup</h1>
             </Zoom>
             </a>
           
         </div>
       </Slide>
       </div>
    
   </div>
  
 );
}

export default Work;