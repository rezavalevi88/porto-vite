import React from "react";
import './MobileNav.css';
import logo from '../../../assets/IMG/logo.svg';


const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div
                className={`mobile-menu ${isOpen ? 'active' : ''}`}
                onClick={toggleMenu}
            >
                <div className="mobile-menu-container">
                    <img className="logo" src={logo} alt="Logo" />

                    <ul>
                        <li>
                            <a href="#" className="menu-item" onClick={() => scrollToTop()}>Home</a>
                        </li>
                        <li>
                            <a href='#skills' className="menu-item">Skills</a>
                        </li>
                        <li>
                            <a href='#experience' className="menu-item">Experience</a>
                        </li>
                        <li>
                            <a href='#contact' className="menu-item">Contact</a>
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
                </div>
            </div>
        </>
    );
}

export default MobileNav;
