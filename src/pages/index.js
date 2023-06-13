import * as React from "react"
import profileImage from '../images/profile.jpg';
import '../styles/index.css'
import infos from '../data/info.js';


const IndexPage = () => {
  return (
      <main className="pageStyles">
        <div className="columnStyles">
            <h1 className="headingStyles">
              Jason Jugo
              <br />
              <span className="headingAccentStyles">— Software Engineer</span>
            </h1>

            <h2>A Software Engineer Building Tomorrow's Solutions, One Line of Code at a Time</h2>
            <p></p>
            <div className="columnStyles">
              <img src={profileImage} alt="Profile of Jason" className="profileStyle"/>
            </div>
            <div className="listContainer">
              <div className="columnStyles">
                <ul className="listStyles">
                  {infos.slice(0, 2).map(info => (
                    <li key={info.url} className="listItemStyles" style={{color: info.color }}>
                      <span>
                        <a
                          className="linkStyle"
                          href={`${info.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                        >
                          {info.text}
                        </a>
                        <p className="descriptionStyle">{info.description}</p>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="listContainer">
              <div className="columnStyles">
                <ul className="listStyles">
                  {infos.slice(2).map(info => (
                    <li key={info.url} className="listItemStyles" style={{color: info.color }}>
                      <span>
                        <a
                          className="linkStyle"
                          href={`${info.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                        >
                          {info.text}
                        </a>
                        <p className="descriptionStyle">{info.description}</p>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
      </main>
  )
}

export default IndexPage

export const Head = () => <title>Jason Jugo | Software Engineer</title>
