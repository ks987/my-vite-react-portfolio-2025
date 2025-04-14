import { React, useState } from "react";

import CalendarNavbar from './calendar-navbar/CalendarNavbar.jsx';
import CurrentTimeMobile from './calendar-sidebar/CurrentTimeMobile.jsx';
import SidebarMobile from './calendar-sidebar/SidebarMobile.jsx';

import './OneWeekMobile.css';


export default function OneWeekMobile() {


    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const weekDayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const weekDayFullNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const weekDayThreeLetters = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const timesArray = ['12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM',
        '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM',
        '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'];


    return (
        <div className="OneWeekMobile">

            <div className="OneWeekMobile-top-section">
                <div className="OneWeekMobile-navbar">
                    <CalendarNavbar />
                    <br></br>
                    <SidebarMobile/>
                    <br></br>

                </div>
                <div className="OneWeekMobile-row">
                <div className="OneWeekMobile-start-of-row"></div>
                    <div className="OneWeekMobile-day-titles">
                        {weekDayThreeLetters.map((dayTitle) => (
                            <div className="OneWeekMobile-day-title">{dayTitle}</div>
                        ))}
                    </div>


                </div>

            </div>

            <div className="OneWeekMobile-schedule-container">
                <div className="OneWeekMobile-first-column">
                    <div className="OneWeekMobile-empty-corner"></div>
                    {timesArray.map((hour) => (
                        <div className="OneWeekMobile-hour-title">{hour}  ----</div>

                    ))}
                </div>



                <div className="OneWeekMobile-other-columns">
                    {
                        weekDayThreeLetters.map((weekday => (
                            <div className="OneWeekMobile-weekdays">
                                {
                                    timesArray.map((time) => (
                                        <div className="OneWeekMobile-hour-slot"></div>
                                    ))
                                }
                            </div>

                        )))
                    }
                </div>
            </div>
        </div>

    )
}