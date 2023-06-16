import React from "react";
import "./softwareSkills.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import skillsSection from "../../data/skillSection";


export default function SoftwareSkills() {
  return (
    <div>
      <div className="skillsContainer">
        <ul className="devIconsList">
          {skillsSection && skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="devIconContainer"
                name={skills.skillName}
              >
                <FontAwesomeIcon icon={skills.fontAwesomeClassname} className="faIcon"/>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}