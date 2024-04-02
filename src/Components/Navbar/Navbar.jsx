import React, { useState } from "react";
import './Navbar.css';
import MobileNav from "./MobileNav/MobileNav";
import cv from '../../assets/IMG/CV REZA 2024 X.pdf';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <div className="cv-container">
                        <a href={cv} download={cv}>Download CV</a>
                    </div>
                    <ul>
                        <li>
                            <a href="#" className="menu-item" onClick={() => scrollToTop()}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="menu-item">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#experience" className="menu-item">
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="menu-item">
                                Contact Me
                            </a>
                        </li>
                        <li>
                            <button className="contact-btn" 
                            onClick={() => {
                                window.open('https://wa.me/62895802377770', '_blank');}}
                                >
                                Hire Me
                            </button>
                        </li>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span className={'material-symbols-outlined'} style={{ fontSize: '1.8rem' }}>
                            {openMenu ? '✖' : '☰'}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
