import React from 'react';
import markus from '../../assets/images/markus.jpg'

export default function AboutMe() {
    return (
        <div>
            <br />
            <center><h1>Markus Mercado || Full Stack Web Developer</h1></center>
            <br />

            <center><img src={markus} className="markus" alt="markus_picture"></img></center>

            <br />
            <br />

            <center><p className="aboutText">
            Hi, there! I'm Markus, a recent graduate of the UC Irvine Coding Bootcamp where I received a certificate in Full Stack Web Development. 
            I have experience creating full-featured web applications from the grounud up, utilizing my experience in the MERN tech stack to create efficient, 
            scalable solutions. I'm looking to get a career started in web development/software engineering. Thank you for your consideration!
            </p></center> 
        </div>
    )
}