import React, { useState } from "react";

import CalendarNavbar from './calendar-navbar/CalendarNavbar.jsx';
import Sidebar from './sidebar/Sidebar.jsx';

import './FourDays.css';

export default function FourDays() {

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




    const addDay = () => {
        setCurrentDate((previousDate) => new Date(previousDate.setDate(previousDate.getDate() + 1)));
    }

    const subtractDay = () => {
        setCurrentDate((previousDate) => new Date(previousDate.setDate(previousDate.getDate() - 1)));
    }

    const fourDaysLater = new Date(currentDate);
    fourDaysLater.setDate(currentDate.getDate() + 3);


    return (
        <div className="FourDays">

            <CalendarNavbar />

            <br></br>

            <div className="FourDays-top-row">

                <button onClick={subtractDay}><i class="fa-solid fa-arrow-left"></i></button>
                <div className="month-year-label-start">{currentDate.toDateString()}</div>
                <div className="month-year-dash"> – </div>
                <div className="month-year-label-end">{fourDaysLater.toDateString()}</div>
                <button onClick={addDay}><i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <br></br>
            <div className="FourDays-sidebar-and-four-days">

                <Sidebar />

                <div className="FourDays-four-columns">
                    {/* Print the date of the column */}

                    <div className="FourDays-times-column">
                        <div className="FourDays-empty-rectangle-1"></div>
                        {timesArray.map((t, indexTime) => (
                            <>
                            <div key={indexTime} className="FourDays-times-row">{t}<span>------</span></div>
                   
                            </>
                        ))}
                      
                    </div>


                    <div className="FourDays-slot-columns">

                        {Array.from({ length: 4 }).map((_, index) => {
                            const columnDate = new Date(currentDate);
                            columnDate.setDate(currentDate.getDate() + index);

                            return (
                                <div key={index} className="FourDays-one-empty-column">
                                    <div className="FourDays-day-title">{columnDate.toDateString()}</div>
                    
                                    {timesArray.map((time, slotIndex) => (

                                        <div key={slotIndex} className="FourDays-one-day-slot"></div>

                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>



    )
}




