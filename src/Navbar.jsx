import React from "react";
import { Link, Outlet } from 'react-router-dom';


// Import components
import Footer from './Footer.jsx';

// Link the apps to the navbar

import AboutAndContact from './about-and-contact/About-and-contact.jsx';
import Calendar from './calendar/Calendar.jsx';
import ToDoApp from './to-do-app/ToDoApp.jsx';


// Links to the js files to the calendar navbar


import OneDay from './calendar/OneDay.jsx';
import FourDays from './calendar/FourDays.jsx';

import OneWeek from './calendar/OneWeek.jsx';
import OneMonth from './calendar/OneMonth.jsx';

import OneYear from './calendar/OneYear.jsx';

// Links to the to-app pages



// import css files 


import './Navbar.css';

export default function Navbar() {



    return (
        <div className="Navbar">
            <div className="Navbar-portfolio-title">React portfolio by Kseniia Bondarenko</div>
            <nav className="Navbar-for-portfolio">
                <Link id="about-and-contact" className="navbar-link" to='/about-and-contact'>About</Link>
                <Link id="calendar-app" className="navbar-link" to='/calendar-in-react'>Calendar App</Link>
                <Link id="to-do-app" className="navbar-link" to='/to-do-app-in-react'>To-Do App</Link>
            </nav>

            <main className="Navbar-main-page">
                <Outlet />
            </main>

            <footer className="Navbar-footer">
                <Footer/>
            </footer>





        </div>
    )
};