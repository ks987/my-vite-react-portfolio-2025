import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

import './DefaultSetup.css';

export default function DefaultSetup() {

    const [count, setCount] = useState(0);


    return (


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

    )

};