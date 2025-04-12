import React, { useState } from "react";
import CalendarNavbar from './calendar-navbar/CalendarNavbar.jsx';
import SidebarMobile from './sidebar/SidebarMobile.jsx';

import './OneYearMobile.css';


export default function OneYearMobile() {

    const today = new Date();
    const day = today.getDate(); // get day of the month
    const month = today.getMonth() + 1; // Month is indexed at 0, so add 1
    const year = today.getFullYear();
    const dayOfWeek = 6 - today.getDay();


    const [nextYear, setNextYear] = useState(year);
    const [weekendColor, setWeekendColor] = useState('');

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const weekDayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];


    function getDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }

    function addYear() {
        setNextYear(nextYear + 1);
    }

    function subtractYear() {
        setNextYear(nextYear - 1);
    }


    // if it is a weekend, mark the day purple
    function markWeekendsPurple() {
        setWeekendColor('OneYearMobile-weekend');
    }

    return (
        <div className="OneYearMobile">

            <div className="OneYearMobile-Calendar-Navbar">
                <CalendarNavbar />
            </div>
            <br></br>

            <div className="OneYearMobile-arrows">
                <i className="fa-solid fa-arrow-left"></i>
                <div className="OneYearMobile-title">{year}</div>
                <i className="fa-solid fa-arrow-right"></i>
            </div>




            <div className="OneYearMobile-sidebar-and-months">
                <SidebarMobile />

                <div className="OneYearMobile-months">
                    {monthNames.map((month, monthIndex) => (
                        // draw the boxes for each month 
                        <div key={monthIndex} className="OneYearMobile-month-box">

                            {/* print the month title */}
                            <div className="OneYearMobile-month-title">{month}</div>

                            <div className="OneYearMobile-week">
                                {/* print the weekday title */}
                                {weekDayNames.map((dayOfWeek) => (
                                    <div key={dayOfWeek} className="OneYearMobile-week-day-title">{dayOfWeek}</div>

                                ))}
                             
                                {/* draw empty day slots */}

                                {Array.from({ length: new Date(nextYear, monthIndex, 0).getDay() }).map((_, index) => (
                                    <div key={`empty-${index}`} className="OneYearMobile-empty-day"></div>
                                ))}

                            

                                {/* draw actual days of the month for each month of the year */}

                                {Array.from({ length: getDaysInMonth(monthIndex, year) }).map((_, day) => {
                                    const date = new Date(nextYear, monthIndex, day + 1);
                                    const isWeekend = date.getDay() === 0 || date.getDay() === 6;  //Sunday = 0, Saturday = 6
                                    return (
                                        <div 
                                        key={day}
                                        className={`OneYearMobile-one-day ${isWeekend ? 'OneYearMobile-weekend' : 'OneYearMobile-weekday'}`}
                                        >
                                            {day + 1}
                                            </div>
                                    );

                                })}
                                
                                
                                
          
                                
                            </div>


                        </div>
                    ))}


                </div>


            </div>


        </div>
    )
}

