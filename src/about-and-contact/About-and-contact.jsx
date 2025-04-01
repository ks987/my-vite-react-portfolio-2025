import { useState } from 'react'

import './About-and-contact.css';




export default function AboutAndContact() {

    return (

        <div className="AboutAndContact">
            <div className="AboutAndContact-container">
                <div className="AboutAndContact-info">
                    <h1 className="AboutAndContact-title">About Me</h1>
                    <p>My name is [ to insert the name at the end].</p>
                    <p>GitHub link is <a href="https://github.com/ks987" target="_blank">https://github.com/</a>
                    </p>
                    <p>GitHub username is <span>@</span></p>

                    <h3> I am proficient in:</h3>
                    <ul>
                        <li> <i class="fa-solid fa-square-check"></i> React.js and JavaScript – development of web applications.</li>
                        <li><i class="fa-solid fa-square-check"></i> CSS –  enhancement of UI designs.</li>
                    </ul>
                    <h3>My Approach</h3>
                    <p className="AboutAndContact-approach"> I attempt to follow the best practices
                        to build applications that are visually appealing, intuitive, and highly performant. I focus on
                        problem-solving and user experience. </p>

                    <h3>Projects</h3>
                    <p>I’ve built several projects: landing pages, productivity tools 
                        (calendar app and to-do list). 
                        You can view my projects by clicking on
                        tabs at the top of the website page.</p>

                    <h3>About this portfolio</h3>
                    <p>
                        The front-end of this website is built with React.js, powered by Vite, styled with CSS, WordPress is used for content management, the website is hosted on Hostinger.
                    </p>

                </div>


            </div>
        </div>

    )
}