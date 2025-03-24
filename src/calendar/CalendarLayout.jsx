import React from "react";
import { Outlet } from "react-router-dom";

// import jsx files
import OneYear from './OneYear.jsx';
import CalendarNavbar from './calendar-navbar/CalendarNavbar.jsx';

// import css files
import './CalendarLayout.css';


export default function CalendarLayout() {

        return (
                <>

                        <div className="CalendarLayout-navbar">
                                <CalendarNavbar />
                        </div>
                        <div className="CalendarLayout-main-page">
                                <Outlet />
                        </div>

                </>

        )
};



