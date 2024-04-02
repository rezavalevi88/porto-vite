import React, { useEffect } from "react";
import Typed from "typed.js";
import './Hero.css';
import picture from '../../assets/IMG/reza-foto.png';
import adobe from '../../assets/IMG/adobe.svg'
import figma from '../../assets/IMG/figma.svg'
import react from '../../assets/IMG/react.svg'
import github from '../../assets/IMG/github.svg'

const Hero = () => {
    useEffect(() => {
        // Initialize Typed.js instance
        const typed = new Typed('.typing', {
            strings: ['Graphic Designer', 'Frontend Developer'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
        });

        // Cleanup function to destroy Typed instance on component unmount
        return () => {
            typed.destroy();
        };
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    const scrollToPortfolio = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Mengatur nilai offset negatif untuk menggulir sedikit ke atas dari bagian yang dituju
            element.scrollIntoView({ behavior: "smooth", block: "start",  });
        }
    };
    

    return (
        <section id='hero' className="hero-container">
            <div className="hero-content">
                <h3>Hello 👋,<br />I'm Reza Valevi</h3>
                <h2 className="typing"></h2>
                <p>I am a Graphic Designer who began my career 
                    in 2017 and ventured into entrepreneurship 
                    in 2019 with a focus on Design and Printing 
                    services, under the business name Rumah Printing</p>
                <div className="portfolio-container">
                    <h3>My Portfolio</h3>
                    <div className="btn-container">
                        <button className="btn-portfolio" onClick={() => scrollToPortfolio('porto-gd')}>
                            Graphic Design
                        </button>
                        <button className="btn-portfolio" onClick={() => scrollToPortfolio('porto-fe')}>
                            Frontend
                        </button>
                    </div>
                </div>
            </div>

            <div className="hero-img">
                <img className="picture" src={picture} alt=""/>
                <div className="design-icon">
                    <img src={adobe} alt=""/>
                    <img src={figma} alt="" />
                    <img src={react} alt=""/>
                    <img src={github} alt="" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
