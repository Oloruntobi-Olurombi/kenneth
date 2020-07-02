import React  from 'react';
import './App.css';
import Nav from '../src/components/nav';
import Banner from '../src/components/banner';
import Work from '../src/components/work';
import About from '../src/components/about';
import Contact from '../src/components/contact';
import Footer from '../src/components/footer'


function App() {
  
  return (
    
      <div className="super-container">
        <Nav />
        <Banner />
        <Work />
        <About />
        <Contact />
        <Footer />


      </div>

  );
}

export default App;
