import { fab } from '@fortawesome/free-brands-svg-icons'; // Import the Font Awesome brand icons from the '@fortawesome/free-brands-svg-icons' package
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import the Font Awesome solid icons from the '@fortawesome/free-solid-svg-icons' package
import { library } from '@fortawesome/fontawesome-svg-core'; // Import the 'library' object from the '@fortawesome/fontawesome-svg-core' package

// Add the imported icon sets (fab: brand icons, fas: solid icons) to the Font Awesome library
library.add(fab, fas);
const Info = [
    {
        text: "Consultation",
        description:
        "It starts with a conversation where we'll determine what your project is about.",
        icon: "fa-solid fa-person-chalkboard"
    },
    {
        text: "Proposal",
        description:
        "A detailed project proposal will be presented, followed by an action plan",
        icon: "fa-solid fa-file-signature"
    },
    {
        text: "Creation",
        description:
        "Clients receive regular status updates as I work on and test the project.",
        icon: "fa-solid fa-code"
    },
    {
        text: "Launch",
        description:
        "Your product comes to life with value added and peace of mind.",
        icon: "fa-sharp fa-rocket"
    },
]

export default Info