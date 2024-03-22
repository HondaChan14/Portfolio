import React from 'react';
import './softwareSkills.css';
import Skills from './Skills';
import { frontend, backend, devops, apidev, hosting } from '../../data/skillSection';

const skillCategories = [ frontend, backend, devops, apidev, hosting ]
const langTitles = ["Frontend", "Backend", "Dev Ops", "API Development", "Hosting"]

export default function SoftwareSkills() {
  return (
    <div className="main-container">
      <div className="container column">
        {skillCategories && skillCategories.map((category, index) => (
          <Skills key={index} skills={category} title={langTitles[index]}/>
        ))}
      </div>
    </div>
  );
}
