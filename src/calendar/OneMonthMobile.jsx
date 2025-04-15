import React, { useState } from "react";
import CalendarNavbar from './calendar-navbar/CalendarNavbar.jsx';
import SidebarMobile from './calendar-sidebar/SidebarMobile.jsx';

import './OneMonthMobile.css';

export default function OneMonthMobile() {

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


        <div className="OneMonthMobile">
            <CalendarNavbar />
            <div className="OneMonthMobile-title">One Month</div>
            <SidebarMobile/>
            <div className="OneMonthMobile-top-row">
                    <button
                        onClick={subtractOneMonth}
                    ><i class="fa-solid fa-arrow-left"></i></button>
                    <div className="OneMonthMobile-month-year-label">{months[currentMonth]} {currentYear}</div>
                    <button
                        onClick={addOneMonth}
                    ><i class="fa-solid fa-arrow-right"></i></button>
                </div>
           

            <div className="OneMonthMobile-everything-container">
                <div className="OneMonthMobile-week-names">
                    {weekDayThreeLetters.map((weekDay) => (
                        <div className="OneMonthMobile-week-title">{weekDay}</div>
                    ))}
                </div>


                <div className="OneMonthMobile-draw-month">
                    {monthDays.map((day, index) => (
                        <div key={index} className="OneMonthMobile-day-title">
                            {day !== null ? day : ""}
                        </div>
                    ))

                    }
                </div>
                <br></br>
                <br></br>

            </div>
            </div>


            )
}