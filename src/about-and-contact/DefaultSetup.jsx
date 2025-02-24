import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

import './DefaultSetup.css';

export default function DefaultSetup() {

    const [count, setCount] = useState(0);
    

    return (


        <div className="DefaultSetup">
            <div className="DefaultSetup-logos">
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="DefaultSetup-vite-logo" alt="Vite logo" />
                </a>
                <a className="DefaultSetup-link" href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="DefaultSetup-react-logo" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className=".DefaultSetup-card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p className="DefaultSetup-note">
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="DefaultSetup-read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>

    )

};