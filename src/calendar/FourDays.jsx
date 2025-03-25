import React, { useState } from "react";

import CalendarNavbar from './calendar-navbar/CalendarNavbar.jsx';
import Sidebar from './sidebar/Sidebar.jsx';

import './FourDays.css';

export default function FourDays() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleOverlay = () => {
        setIsVisible(!isVisible);

    }


    const today = new Date();
    const day = today.getDate(); // day of the month
    const month = today.getMonth() + 1; // Month is indexed at 0, so add 1
    const year = today.getFullYear(); // Full year


    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const weekDayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const weekDayFullNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const weekDayThreeLetters = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const timesArray = ['12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM',
        '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM',
        '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'];

    const [nextDay, setNextDay] = useState(day);
    const [nextMonth, setNextMonth] = useState(month);


    function addDay() {
        setNextDay(nextDay + 1);
        setNextMonth(nextMonth);
    }


    function subtractDay() {
        setNextDay(nextDay - 1);
        setNextMonth(nextMonth);
    }

    return (
        <div className="FourDays">

            <CalendarNavbar />



            <br></br>

            <div className="FourDays-top-row">
                <button onClick={subtractDay}><i class="fa-solid fa-arrow-left"></i></button>

                <div className="month-year-label-start">{monthNames[nextMonth-1]}{nextDay}</div>
                <div className="month-year-dash"> – </div>
                <div className="month-year-label-end">{monthNames[nextMonth-1]}{nextDay}</div>

                <button onClick={addDay}><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="FourDays-developer-note">to display Mar 30, Mar 31, Apr 1, Apr 2</div>
            <div className="FourDays-sidebar-and-four-days">

                <Sidebar />

                <div className="FourDays-four-columns">
                    {/* Print the date of the column */}

                    {Array.from({ length: 4 }).map((_, index) => {
                        const currentDate = new Date(today);
                        currentDate.setDate(today.getDate() + index);

                        return (
                            <div key={index} className="FourDays-one-column">
                                <div className="FourDays-day-title">{currentDate.toDateString()}</div>

                                {timesArray.map((time, timeIndex) => (
                                    <div key={timeIndex} className="FourDays-one-day-row">{time}</div>
                                ))}
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>



    )
}




