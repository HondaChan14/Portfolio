import React from 'react';

const Skills = ({ skills }) => {

  return (
    <>
      <ul className="dev-icons">
        {skills.map((skill) => (
          <li key={skill.skillName}>
            <figure>
              {skill.skillIcon}
              <figcaption>{skill.skillName}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Skills;
