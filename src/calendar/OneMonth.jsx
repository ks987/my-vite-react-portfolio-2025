import React, { useState, useEffect } from "react";

// import js files
import CalendarNavbar from './calendar-navbar/CalendarNavbar.jsx';
import Overlay from './Overlay.jsx';
import Sidebar from './calendar-sidebar/Sidebar.jsx';

import OneMonthMobile from './OneMonthMobile.jsx';


// import css files
import './OneMonth.css';

export default function OneMonth() {
    const [currentDate, setCurrentDate] = useState(new Date());

    // Months and weekdays
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const weekDayNamesShort = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const weekDayFullNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const weekDayThreeLetters = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];


    // Extract year and month
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();


    // Get number of days in the current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    //Get the weekday index of the first day od the month such as 0 = Sunday, 6 = Saturday
    const firstDayIndex = new Date(currentYear, currentMonth, 0).getDay();

    // Create an array for the calendar grid (including leading empty days)
    const monthDays = Array.from({ length: firstDayIndex }).fill(null).concat(
        Array.from({ length: daysInMonth }, (_, index) => index + 1)
    );



    const addOneMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
    };

    const subtractOneMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
    };






    // toggle the pop-up showing one assigned task 
    const [oneTaskIsVisible, setOneTaskIsVisible] = useState(false);


    // toggle the pop-up showing all assigned tasks
    const [oneDayTasksAreVisible, setOneDayTasksAreVisible] = useState(false);


    const [numberOfTasks, setNumberOfTasks] = useState('');



    // display a pop-up with all the tasks assigned for that day
    const openAllTasksPopUp = () => {
        setOneDayTasksAreVisible(!oneDayTasksAreVisible);
    }


    // go to today's date on the monthly view 

    const goToToday = () => {
        setCurrentDate(new Date());
    }




    return (

        <>
            <OneMonthMobile />

            <div className="OneMonth">
                <CalendarNavbar />

                <br></br>

                <div className="OneMonth-top-row">
                    <div className="OneMonth-go-to-today" onClick={goToToday}>TODAY</div>
                    <button
                        onClick={subtractOneMonth}
                    ><i class="fa-solid fa-arrow-left"></i></button>
                    <div className="month-year-label">{months[currentMonth]} {currentYear}</div>
                    <button
                        onClick={addOneMonth}
                    ><i class="fa-solid fa-arrow-right"></i></button>
                </div>



                <div className="OneMonth-sidebar-and-one-month">

                    <Sidebar />

                    <div className="OneMonth-everything-container">
                        <div className="OneMonth-week-names">
                            {weekDayThreeLetters.map((weekDay) => (
                                <div className="OneMonth-week-title">{weekDay}</div>
                            ))}
                        </div>

                        <div className="OneMonth-draw-month">
                            {monthDays.map((day, index) => (
                                <div key={index} className="OneMonth-day-title">
                                    {day !== null ? day : ""}
                                </div>

                            ))}

                        </div>
                    </div>



                </div>
                <br></br>
                <br></br>



            </div>
        </>
    )
}




