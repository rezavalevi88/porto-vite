import React from "react";
import './SkillCard.css';


const SkillCard = 
    ({ title, iconUrl, isActive, onClick }) => {

return (
    <div 
    className={`skills-card ${isActive ? 'active' : ''}`} 
    onClick={ () => onClick ()}
    >

        <div className="skill-icon">
            <img className="svg" src={iconUrl} alt={title}/>
        </div>
        <span>{title}</span>
    </div>
)

}

export default SkillCard;