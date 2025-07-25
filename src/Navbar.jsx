import React from "react";
import { Link } from 'react-router';


// import css files 


import './Navbar.css';

export default function Navbar() {



    return (
        <div className="Navbar">
            <div className="Navbar-portfolio-title">React portfolio by [insert the name]</div>

            <nav className="Navbar-for-portfolio">
                <Link id="about-and-contact" className="navbar-link" to='/about-and-contact'>
                <i className="fa-solid fa-address-card"></i>
                </Link>
                <Link id="notebook-app" className="navbar-link" to='/notebook-app-in-react'>NOTEBOOK</Link>

                <Link id="to-do-app" className="navbar-link" to='/to-do-app-in-react'>TO-DO APP</Link>
                
                <Link id="art-gallery-in-react" className="navbar-link" to='/art-gallery-in-react'>GALLERY</Link>
    
              
            </nav>

        </div>
    )
};