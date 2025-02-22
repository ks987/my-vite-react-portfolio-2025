import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'


import './About-and-contact.css';
import Footer from '../Footer.jsx';
import '../App.css';

export default function AboutAndContact() {

    const [count, setCount] = useState(0)
    return (
        <div className="AboutAndContact">



            <div className="Default-set-up">
                <div>
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.jsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </div>




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


    )
};

