import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Overlay from './Overlay.jsx';



import CalendarNavbar from './calendar-navbar/CalendarNavbar.jsx';
import Sidebar from './sidebar/Sidebar.jsx';

// import sample tasks
import TaskCode from './sample-tasks/TaskCode.jsx';
import TaskGroceries from './sample-tasks/TaskGroceries.jsx';
import TaskReading from './sample-tasks/TaskReading.jsx';


// styles
import './OneDay.css';


export default function OneDay() {

    const [isVisible, setIsVisible] = useState(false);
    const [currDate, setCurrDate] = useState(new Date());

    function openOverlay() {
        setIsVisible(!isVisible);
    };


    // drag and drop overlay

    // change the date to the next day or to the previous one



    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    const timeArray = ['12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM',
        '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM',
        '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'];

    const daysArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    const onlyMonth = monthsArray[month - 1];
    const onlyDay = daysArray[day - 1];
    const onlyYear = year;
    const modifiedDate = `${onlyMonth} ${onlyDay}, ${onlyYear}`;

    const [nextDay, setNextDay] = useState(parseInt(day));
    const [nextMonth, setNextMonth] = useState(monthsArray[month]);
    const [nextYear, setNextYear] = useState(year);


    function changeDate(offset) {
        const newDate = new Date(currDate);
        newDate.setDate(newDate)

    }

    return (

        <div className="OneDay">

            {isVisible && <Overlay />}

            <CalendarNavbar />

            <br></br>

            <div className="OneDay-top-row">
                <button>
                    <i className="fa-solid fa-arrow-left"></i></button>

                <div className="month-year-label">{nextMonth} {nextDay}, {nextYear}</div>

                <button>
                    <i className="fa-solid fa-arrow-right"></i></button>
            </div>

            <br></br>

            <div className="OneDay-sidebar-and-schedule">
                <Sidebar />


</div>
</div>
            
)}