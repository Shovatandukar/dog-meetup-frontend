import React from 'react';
import './About.css';
import imgAboutUs from '../img/About.jpg'


function About() {
    return (
        <div className="about">
            <div className="about__top">
                <div className="about__top--left">
                    <img src={imgAboutUs} alt="" />
                </div>
                <div className="about__top--right">
                    <h3>About us</h3>
                    <p>We are here with our brand new platform which will provide Dog Owner and opportunity to the register the dog and find the suitable activity and park for their dog to entertain
                        All Dog Owners and event organiser are welcome to get register

                        We are a New Zealand based and we have a dedicated support team please get in Touch with our team if you have any issue using the website!</p>
                </div>
            </div>
        </div>
    )
}

export default About