import { useState } from 'react'
import { Link } from "react-router-dom";

import './About-and-contact-old.css';

import DefaultSetup from '../DefaultSetup.jsx';


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

                        <li>GitHub: <span className="AboutAndContact-normal-font">@ks987</span></li>
                        <li>GitHub: <span className="AboutAndContact-normal-font">@ks987</span>

                            <ul className="AboutAndContact-sub-li">
                                <li><a href="https://github.com/ks987" target="_blank">Link: https://github.com/ks987</a></li>
                            </ul></li>

                        <li>Gmail: <span className="AboutAndContact-normal-font">ksen9291@gmail.com</span></li>
                        <li>Gmail: <span className="AboutAndContact-normal-font">ksen9291@gmail.com</span></li>
                        <li>Portfolio contains <span className="AboutAndContact-highlighted">2</span> React.js projects:

                            <li>
                                <span className="AboutAndContact-highlighted">"Calendar App"</span>

                                <span className="AboutAndContact-cursive">and</span>

                                <span className="AboutAndContact-highlighted">"To-Do App".</span>

                            </li>
                        </li>
                    </ul>


                </div>


            </div>
        </div>


    )
};

