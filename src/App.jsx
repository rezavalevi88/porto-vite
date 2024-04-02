import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
import PortfolioFe from './Components/Portfolio/PortfolioFe';
import Experience from "./Components/Experience/Experience";
import ContactSection from "./Components/Contact/ContactSection";
import Footer from "./Components/Footer/Footer";
import './App.css';

const App = () => {
  useEffect(() => {
    const smoothScroll = () => {
      const links = document.querySelectorAll('a[href^="#"]');
      
      links.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').slice(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            });
          }
        });
      });
    };

    smoothScroll();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <Portfolio />
        <PortfolioFe />
        <Experience />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
