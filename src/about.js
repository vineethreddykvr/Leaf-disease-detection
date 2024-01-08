import React from "react";
import Popup from "./popup";
import './about.css'


const About = () => {

    return (
        <div className="main">
          <ProfileCard
            name="K. Vineeth"
            role="Full Stack Developer"
            imageUrl="https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg"
            socialLinks={[
              { name: 'Facebook', iconClass: 'fab fa-facebook' },
              { name: 'Instagram', iconClass: 'fab fa-instagram' },
              { name: 'Twitter', iconClass: 'fab fa-twitter' },
            ]}
          />
          <ProfileCard
            name="E. Mayukha"
            role="ML Engineer"
            imageUrl="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
            socialLinks={[
              { name: 'Facebook', iconClass: 'fab fa-facebook' },
              { name: 'Instagram', iconClass: 'fab fa-instagram' },
              { name: 'Twitter', iconClass: 'fab fa-twitter' },
            ]}
          />
          <ProfileCard
            name="I. Bhanu Teja"
            role="Front End Developer"
            imageUrl="https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg"
            socialLinks={[
              { name: 'Facebook', iconClass: 'fab fa-facebook' },
              { name: 'Instagram', iconClass: 'fab fa-instagram' },
              { name: 'Twitter', iconClass: 'fab fa-twitter' },
            ]}
          />
        </div>
      );
    };
    
    const ProfileCard = ({ name, role, imageUrl, socialLinks }) => {
      return (
        <div className="profile-card">
          <div className="img">
            <img src={imageUrl} alt={name} />
          </div>
          <div className="caption">
            <h3>{name}</h3>
            <p>{role}</p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a key={index} href="#">
                  <i className={link.iconClass}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      );
};

export default About;
