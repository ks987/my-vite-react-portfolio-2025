import React from "react";
import { Link } from 'react-router-dom';

// import CSS files
import './CalendarNavbar.css';


export default function CalendarNavbar() {
    return (
        <div className="CalendarNavbar">

            <div className="CalendarNavbar-title">Calendar</div>

            <nav className="CalendarNavbar-itself">
                <Link id="open-one-day-btn" className="calendar-link" to='/go-to-day'>Day</Link>
                <Link id="github-link" className="calendar-link" to='/go-to-four-days'>Four Days</Link>
                <Link id="fake-log-in" className="calendar-link" to='/go-to-week'>Week</Link>
                <Link id="calendar-app" className="calendar-link" to='/go-to-month'>Month</Link>
                <Link id="to-do-app" className="calendar-link" to='/go-to-year'>Year</Link>
            </nav>
        </div>

    )

};