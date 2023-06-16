import React from "react";
import { fab } from '@fortawesome/free-brands-svg-icons'; // Import the Font Awesome brand icons from the '@fortawesome/free-brands-svg-icons' package
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import the Font Awesome solid icons from the '@fortawesome/free-solid-svg-icons' package
import { library } from '@fortawesome/fontawesome-svg-core'; // Import the 'library' object from the '@fortawesome/fontawesome-svg-core' package

// Add the imported icon sets (fab: brand icons, fas: solid icons) to the Font Awesome library
library.add(fab, fas);

const skillsSection  = {
    softwareSkills: [
        {
            skillName: "HTML-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "CSS3",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "React",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            skillName: "Nodejs",
            fontAwesomeClassname: "fab fa-node"
        },
        {
            skillName: "NPM",
            fontAwesomeClassname: "fab fa-npm"
        },
    ],
    display: true // Set false to hide this section, defaults to true
}

export default skillsSection