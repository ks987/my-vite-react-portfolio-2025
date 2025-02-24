import { useState } from 'react'


import './About-and-contact.css';


import Footer from '../Footer.jsx';
import DefaultSetup from './DefaultSetup.jsx';

import '../App.css';

export default function AboutAndContact() {

    return (
        <div className="AboutAndContact">
            
            <div className="AboutAndContact-container">

                <DefaultSetup />
                <div className="about-me-note">
                    <h3>About and Contact</h3>

                    <ul className="AboutAndContact-main-li">
                        <li>Name: <span>Kseniia Bondarenko</span></li>
                        <li>She/Her</li>
                        <li>Has been studying software development for:
                            <ul className="AboutAndContact-sub-li">
                                <li>
                                    2 years as of 2025.
                                </li>
                            </ul>
                        </li>
                        <li>GitHub: <span>@ks987</span>
                            <ul className="AboutAndContact-sub-li">
                                <li><a href="https://github.com/ks987" target="_blank">Link: https://github.com/ks987</a></li>
                            </ul></li>

                        <li>Gmail: <span>ksen9291@gmail.com</span></li>
                        <li>Gmail: <span>ksen9291@gmail.com</span></li>
                        <li>Portfolio contains <span>two</span> React.js projects:
                            <ul className="AboutAndContact-sub-li">
                                <li>
                                    "Calendar App" and "To-Do App".
                                </li>
                            </ul></li>
                    </ul>

                    <Footer />
                </div>


            </div>
        </div>


    )
};

