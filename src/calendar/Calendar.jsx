import React, { useState } from "react";


// import navbar and footer
import CalendarNavbar from './calendar-navbar/CalendarNavbar.jsx';
import Footer from '../Footer.jsx';


// import js files
import OneYear from './OneYear.jsx';
// import css files
import './Calendar.css';





export default function Calendar() {

        return(
            <div className="Calendar">
                    <OneYear/>
                    <hr></hr>
              
            </div>
        )
};



