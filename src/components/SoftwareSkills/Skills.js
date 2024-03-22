import React from 'react';

const Skills = ({ skills, title }) => {

  return (
    <>
    <h4>{title}</h4>
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
