import React, { useState } from "react";


// import  jsx files 
import CalendarNavbar from './calendar-navbar/CalendarNavbar.jsx';

import { tasksInDatabase } from './database-sample.jsx';
import Sidebar from './calendar-sidebar/Sidebar.jsx';
import OneWeekMobile from './OneWeekMobile.jsx';

// import css files
import './OneWeek.css';


export default function OneWeek() {

    // const [isVisible, setIsVisible] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());

    // const toggleOverlay = () => {
    //     setIsVisible(!isVisible);

    // }

    // const today = new Date();
    // const day = today.getDate(); // day of the month
    // const month = today.getMonth() + 1; // Month is indexed at 0, so add 1
    // const year = today.getFullYear(); // Full year


    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const weekDayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const weekDayFullNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const weekDayThreeLetters = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const timesArray = ['12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM',
        '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM',
        '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'];

    // const [nextDay, setNextDay] = useState(day);
    // const [nextMonth, setNextMonth] = useState(month);
    // const [nextYear, setNextYear] = useState(year);




    // const addDay = () => {
    //     setCurrentDate((previousDate) => new Date(previousDate.setDate(previousDate.getDate() + 7)));
    // }

    // const subtractDay = () => {
    //     setCurrentDate((previousDate) => new Date(previousDate.setDate(previousDate.getDate() - 7)));
    // }


    const addWeek = () => {
        setCurrentDate((previousDate) => {
            const newDate = new Date(previousDate);
            newDate.setDate(newDate.getDate() + 7);
            return newDate;
        });
    };

    const subtractWeek = () => {
        setCurrentDate((previousDate) => {
            const newDate = new Date(previousDate);
            newDate.setDate(newDate.getDate() - 7);
            return newDate;
        });
    };




    const sevenDaysLater = new Date(currentDate);
    sevenDaysLater.setDate(currentDate.getDate() + 6);

    const goToToday = () => {
        setCurrentDate(new Date());
    }


    return (
        <>
        <OneWeekMobile/>
        <div className="OneWeek">

            <CalendarNavbar />

            <br></br>

            <div className="OneWeek-top-row">
                <div className="OneWeek-go-to-today" onClick={goToToday}>TODAY</div>
                <button onClick={subtractWeek}><i class="fa-solid fa-arrow-left"></i></button>
                <div className="OneWeek-month-year-label-start">{currentDate.toDateString()}</div>
                <div className="OneWeek-month-year-dash"> – </div>
                <div className="OneWeek-month-year-label-end">{sevenDaysLater.toDateString()}</div>
                <button onClick={addWeek}><i class="fa-solid fa-arrow-right"></i></button>



            </div>
            <div className="OneWeek-sidebar-and-one-week">

                <Sidebar />

                <div className="OneWeek-seven-columns">

                    <div className="OneWeek-times-column">
                        <div className="OneWeek-empty-rectangle-1"></div>
                        {timesArray.map((t, indexTime) => (
                            <>
                                <div key={indexTime} className="OneWeek-times-row">{t}<span>------</span></div>
                            </>
                        ))}
                        <div className="OneWeek-empty-rectangle-2"></div>

                    </div>


                    {Array.from({ length: 7 }).map((_, index) => {
                        const columnDate = new Date(currentDate);
                        columnDate.setDate(currentDate.getDate() + index);

                        return (
                            <div key={index} className="OneWeek-one-empty-column">
                                <div className="OneWeek-day-title">{columnDate.toDateString()}</div>

                                {timesArray.map((time, slotIndex) => (


                                    <div key={slotIndex} className="OneWeek-one-day-slot"></div>

                                ))}

                            </div>

                        );
                    })}
                </div>

            </div>
        </div>
        </>



    )
}



