import React, { useState } from "react";
import {Routes, Route, Link} from 'react-router-dom';



// import js files 


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


   
        return(
            <div className="Navbar">
        <div className="Navbar-portfolio-title">React portfolio by Kseniia Bondarenko</div>
                <nav className="Navbar-for-portfolio"> 
                    <Link id="about-and-contact" className="navbar-link" to='/about-and-contact'>About</Link>
                    <Link id="calendar-app" className="navbar-link" to='/calendar-in-react'>Calendar App</Link>
                    <Link id="to-do-app" className="navbar-link" to='/to-do-app-in-react'>To-Do App</Link>
                </nav>



                <Routes>
                    <Route exact path='/about-and-contact' element={<AboutAndContact/>}></Route>
                    <Route exact path='/calendar-in-react' element={<Calendar/>}></Route>
                    <Route exact path='/to-do-app-in-react' element={<ToDoApp/>}></Route>



                    {/* calendar routes */}

             
                    <Route exact path='/go-to-day' element={<OneDay/>}></Route>
                    <Route exact path='/go-to-four-days' element={<FourDays/>}></Route>
                    <Route exact path='/go-to-week' element={<OneWeek/>}></Route>
                    <Route exact path='/go-to-month' element={<OneMonth/>}></Route>
                    <Route exact path='/go-to-year' element={<OneYear/>}></Route>
      
                </Routes>

            </div>
        )
    };