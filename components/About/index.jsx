import React from 'react';
import { StyledAbout } from "./style"

const About = () => {
    return (
        <StyledAbout id="about">
            <div className="description-container">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum felis a lacus sodales lobortis. In et elit </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum felis a lacus sodales lobortis. In et elit
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum felis a lacus sodales lobortis. In et elit</p>
            </div>
            <div className="avatar-container">
                <div className="avatar-wrapper">
                    <img src="images/avatar.jpg" alt="" />
                </div>
            </div>
            
        </StyledAbout>
    );
};

export default About;