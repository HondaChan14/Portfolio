import * as React from "react"
import profileImage from '../images/profile.jpg';
import '../styles/index.css'
import Navbar from "../components/Navbar/Navbar";
import InfoSection from "../components/Info/InfoSection";
import SoftwareSkills from "../components/SoftwareSkills/SoftwareSkills";


const IndexPage = () => {
  return (
      <main className="main-container">
        <Navbar />
            <h1 className="heading-styles">
              Jason Jugo
              <br />
              <span className="heading-accent-styles">— Software Engineer</span>
            </h1>
          <div className="container">
            <h2>Building Tomorrow's Solutions, One Line of Code at a Time</h2>
          </div>
            <div className="profile-container">
              <img src={profileImage} alt="Profile of Jason"/>
            </div>
            <InfoSection />
          <SoftwareSkills />
      </main>
  )
}

export default IndexPage

export const Head = () => <title>Jason Jugo | Software Engineer</title>
