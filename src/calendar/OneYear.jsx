import React, { useState } from "react";

// import jsx files
import CalendarNavbar from './calendar-navbar/CalendarNavbar.jsx';
import Sidebar from './Sidebar.jsx';
import OneYearMobile from './OneYearMobile.jsx';

// import css files
import './OneYear.css';


export default function OneYear() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const weekDayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const weekDayFullNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const weekDayThreeLetters = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const today = new Date();
    const day = today.getDate(); // day of the month
    const month = today.getMonth() + 1; // Month is indexed at 0, so add 1
    const year = today.getFullYear(); // Full year
    const dayOfWeek = 6 - today.getDay();  //to start week on Monday

    const [nextYear, setNextYear] = useState(year);
    const [weekendColor, setWeekendColor] = useState('');

    function addYear() {
        setNextYear(nextYear + 1);
    }

    function subtractYear() {
        setNextYear(nextYear - 1);
    }


    // start the first week of the month on the correct week day
    function determineWeekDay() {

        return (dayOfWeek);

    };


    function getDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }



    // if it is Saturday or Sunday mark the day purple

    function markWeekendsPurple() {
        setWeekendColor('OneYear-weekend');
    }

    return (

        <>
            <OneYearMobile />
            <div className="OneYear">

                <div className="OneYear-Calendar-Navbar">
                    <CalendarNavbar />
                </div>


                <br></br>

                <div className="OneYear-top-row">
                    <button onClick={subtractYear}><i class="fa-solid fa-arrow-left"></i></button>
                    <div className="OneYear-month-year-label">{nextYear}</div>
                    <button onClick={addYear}><i class="fa-solid fa-arrow-right"></i></button>
                </div>


                <div className="OneYear-sidebar-and-months">


                    <Sidebar />


                    <div className="OneYear-months">

                        {monthNames.map((month, monthIndex) => (
                            // draw the boxes for each month 
                            <div key={monthIndex} className="OneYear-month-box">
                                <div className="OneYear-name-of-month-week-days">
                                {/* print the month title */}
                                    <div className="OneYear-month-title">{month}</div>

                                    <div className="OneYear-week">
                                {/* print the weekday title */}
                                        {weekDayNames.map((dayOfWeek) => (
                                            <div key={dayOfWeek} className="OneYear-week-day-name">{dayOfWeek}</div>

                                        ))}
                                {/* draw empty day slots */}
                                        {Array.from({ length: new Date(nextYear, monthIndex, 0).getDay() }).map((_, index) => (
                                            <div key={`empty-${index}`} className="OneYear-empty-day"></div>
                                        ))}
                             {/* draw actual days of the month for each month of the year */}
                                        {Array.from({ length: getDaysInMonth(monthIndex, year) }).map((_, day) => (


                                            (<div key={day} className={`OneYear-one-day ${weekendColor}`}>{day + 1}</div>)

                                        ))}

                                    </div>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>




            </div>

        </>
    )
}
