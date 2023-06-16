import React from "react";
import "./softwareSkills.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import skillsSection from "../../data/skillSection";


export default function SoftwareSkills() {
  return (
    <div>
      <div className="skills-container">
        <ul className="dev-icons">
          {skillsSection && skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="dev-icons-list"
                name={skills.skillName}
              >
                <FontAwesomeIcon icon={skills.fontAwesomeClassname} />
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}