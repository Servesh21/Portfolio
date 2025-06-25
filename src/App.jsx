import React from "react";
import Navbar from "./sections/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import  StarryBackground from "./components/StarryBackground";
import Experiences from "./sections/Experiences";
import Footer from './sections/Footer';

const App = () => {
  return (
    
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <StarryBackground />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      {/* <Contact /> */}
      
      <Footer/>
    </div>
  );
};

export default App;
