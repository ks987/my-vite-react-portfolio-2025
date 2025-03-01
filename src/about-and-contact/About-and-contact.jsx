import { useState } from 'react'
import { Link } from "react-router-dom";

import './About-and-contact.css';

import DefaultSetup from './DefaultSetup.jsx';


export default function AboutAndContact() {

    return (
        <div className="AboutAndContact">

            <div className="AboutAndContact-container">

                <DefaultSetup />

                <div className="AboutAndContact-info">
                    <h1>About Me</h1>
                    <p>Hello, my name is Kseniia Bondarenko.
                        <br></br>
                    I'm a software development student, mainly focused on React.js, and excited about building dynamic, 
                    user-friendly web applications.
                    <br></br>
                    I thrive on turning ideas into functional and visually 
                    appealing digital experiences, ensuring seamless performance 
                    and <span> responsiveness.</span></p>

                    <h3>What I Do</h3>
                    <p> I specialize in:</p>
                    <ul>
                        <li> <i class="fa-solid fa-square-check"></i> React.js, JavaScript – Developing scalable and maintainable web applications.</li>
                        <li><i class="fa-solid fa-square-check"></i> CSS – Crafting clean and modern UI designs.</li>
                    </ul>
                    <h3>My Approach to Development</h3>
                    <p> I believe in writing clean, reusable code and following best practices 
                    to build applications that are not only visually appealing but 
                    also highly performant and accessible. I focus on 
                    problem-solving, user experience, and maintainability.</p>

                    <h3>Projects & Experience</h3>
                    <p>I’ve built multiple projects, from landing pages 
                        to productivity tools, always aiming to create intuitive 
                        and engaging experiences. Check out my projects by clicking on 
                        tabs at the top of the page!</p>
                        <p>GitHub link is <a href="https://github.com/ks987" target="_blank">https://github.com/ks987</a>
                        </p>
                        <p>GitHub username is <span>@ks987</span></p>

                    <h3>Let’s Connect!</h3>
                    <p>I’m always open to discussing new opportunities and collaborations. 
                        Feel free to reach out at ksen9291@gmail.com (ksen9291@gmail.com) or connect with me on LinkedIn. 
                        Let’s build something amazing together!</p>
                </div>




            </div>
        </div>
    )
}