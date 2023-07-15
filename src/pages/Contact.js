import React from "react";
import '../styles/contact.css';
import { RiMailFill, RiLinkedinBoxFill, RiGithubFill, RiTwitterFill, RiTwitchFill } from "react-icons/ri";
const socialMedias = [RiMailFill, RiLinkedinBoxFill, RiGithubFill, RiTwitterFill, RiTwitchFill]

const ContactPage = () => {
    return (
        <section className="main-container" id="contact">
            <div className="container">
                <h2>Hire me for your next project</h2>
                <p>Get in touch with me anytime!</p>
                
                <form action="#" method="post" className="form-container">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required/>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                    <button type="submit" className="button-style">Send</button>
                </form>

                <div className="social-media-container">
                {socialMedias.map((SocialMediaIcon, index) => (
                    <SocialMediaIcon key={index} size={32} />
                ))}
            </div>
            </div>
        </section>
    )
}

export default ContactPage