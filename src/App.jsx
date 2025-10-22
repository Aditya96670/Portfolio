import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (

    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-white transition-colors duration-500">

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    
</div>


    
  );
};

export default App;
