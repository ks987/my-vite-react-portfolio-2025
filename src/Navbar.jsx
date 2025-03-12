import React from "react";
import { Link, Outlet } from 'react-router-dom';


// Import components
import Footer from './Footer.jsx';



// import css files 


import './Navbar.css';

export default function Navbar() {



    return (
        <div className="Navbar">
            <div className="Navbar-portfolio-title">React portfolio by</div>

            <nav className="Navbar-for-portfolio">
                <Link id="about-and-contact" className="navbar-link" to='/about-and-contact'>About</Link>
                <Link id="calendar-app" className="navbar-link" to='/calendar-in-react'>Calendar App</Link>
                <Link id="to-do-app" className="navbar-link" to='/to-do-app-in-react'>To-Do App</Link>
            </nav>

        </div>
    )
};