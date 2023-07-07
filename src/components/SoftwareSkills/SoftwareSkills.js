import React from "react";
import "./softwareSkills.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import skillsSection from "../../data/skillSection";


export default function SoftwareSkills() {
  return (
    <div className="main-container">
      <div className="skills-container">
        <ul className="dev-icons-list">
          {skillsSection && skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="dev-icon-container"
                name={skills.skillName}
              >
                <FontAwesomeIcon icon={skills.fontAwesomeClassname} className="fa-icon"/>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}