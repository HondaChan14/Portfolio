import React from "react";
import "./softwareSkills.css";
import skillsSection from "../../data/skillSection";


export default function SoftwareSkills() {
  return (
    <div className="main-container">
      <div className="container">
        <ul className="dev-icons-list">
          {skillsSection && skillsSection.softwareSkills.map((skill, i) => {
            return (
              <li
                key={i}
                className="dev-icon-container"
              >
                {skill.skillIcon}
                <p>{skill.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}