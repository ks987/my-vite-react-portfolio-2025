import { useState } from 'react'
import { Link } from "react-router-dom";

import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'


import './About-and-contact.css';




export default function AboutAndContact() {

    return (
        <div className="AboutAndContact">

            <div className="AboutAndContact-container">

                <div className="DefaultSetup-section">

                    <div className="DefaultSetup">
                        <div className="DefaultSetup-container">
                            <div className="DefaultSetup-logos">
                                <a href="https://vite.dev" target="_blank">
                                    <img src={viteLogo} className="DefaultSetup-vite-logo" alt="Vite logo" />
                                </a>
                                <a className="DefaultSetup-link" href="https://react.dev" target="_blank">
                                    <img src={reactLogo} className="DefaultSetup-react-logo" alt="React logo" />
                                </a>
                            </div>
                            <h1>Vite + React</h1>

                            <p className="DefaultSetup-website-note">
                                <ul className="DefaultSetup-ul">


                                    <li>The frontend of this website
                                        <br></br>is built with <span>React.js,</span> </li>
                                    <li>styled with <span>CSS,</span> </li>
                                    <li>and powered by <span>Vite,</span> </li>
                                    <li>while WordPress is used for content management.</li>
                                    <li>The website is hosted on Hostinger.</li>


                                </ul> </p>


                        </div>
                    </div>

                </div>






                <div className="AboutAndContact-info">
                    <h1>About Me</h1>
                    <p>My name is [ to insert the name at the end].</p>
                    <p>GitHub link is <a href="https://github.com/ks987" target="_blank">https://github.com/</a>
                    </p>
                    <p>GitHub username is <span>@</span></p>

                    <h3> I specialize in:</h3>
                    <ul>
                        <li> <i class="fa-solid fa-square-check"></i> React.js, JavaScript – Developing scalable and maintainable web applications.</li>
                        <li><i class="fa-solid fa-square-check"></i> CSS – Crafting clean and modern UI designs.</li>
                    </ul>
                    <h3>My Approach to Development</h3>
                    <p className="AboutAndContact-approach"> I attempt to follow the best practices
                        to build applications that are visually appealing, highly performant, and accessible. I focus on
                        problem-solving, user experience, and maintainability.</p>

                    <h3>Projects & Experience</h3>
                    <p>I’ve built multiple projects, from landing pages
                        to productivity tools, aiming to create intuitive experiences. You can view my projects by clicking on
                        tabs at the top of the page.</p>

                </div>

            </div>
        </div>
    )
}