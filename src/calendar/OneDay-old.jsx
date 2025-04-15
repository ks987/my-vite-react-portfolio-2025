import React, { useState } from "react";
import { Link } from 'react-router-dom';
import CalendarAddNewTask from './Calendar-add-new-task.jsx';


// import navbar, footer, and sidebar
import CalendarNavbar from './calendar-navbar/CalendarNavbar.jsx';
import Footer from '../Footer.jsx'
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


    // const [nextDay, setNextDay] = useState(day);
    // const [nextMonth, setNextMonth] = useState(monthsArray[month]);
    // const [nextYear, setNextYear] = useState(year);

    const [nextDay, setNextDay] = useState(parseInt(day));
    const [nextMonth, setNextMonth] = useState(monthsArray[month]);
    const [nextYear, setNextYear] = useState(year);

    // change to the previous day
    function oldSubtractOneDay() {


        if (nextDay <= 31 && nextMonth === 'April' || 'June' || 'September' || 'November') {
            setNextMonth(monthsArray[monthsArray.indexOf(nextMonth)]);
            setNextDay(nextDay - 1);
            setNextYear(nextYear);
        } else if (nextDay === 1 && nextMonth === 'April' || 'June' || 'September' || 'November') {
            setNextMonth(monthsArray[monthsArray.indexOf(nextMonth) - 1]);
            setNextDay(31);
            setNextYear(nextYear);
        } else if (nextMonth === 'January' && nextDay === 1) {
            setNextMonth(monthsArray[11]);
            setNextDay(31);
            setNextYear(parseInt(nextYear) - 1);
        }

    }
    // change to the next day

    function oldAddOneDay() {


        if ((nextDay === 31) && (nextMonth === 'January' || 'March' || 'May' || 'July' || 'August' || 'October' || 'December')) {
            setNextMonth(monthsArray[monthsArray.indexOf(nextMonth) + 1]);
            setNextDay(1);
            setNextYear(nextYear);
        } else if ((nextDay === 30) && (nextMonth === 'April' || 'June' || 'September' || 'November')) {
            setNextMonth(monthsArray[monthsArray.indexOf(nextMonth)]);
            setNextDay(30);
            setNextYear(nextYear);
        } else if ((nextDay <= '32') && (nextMonth !== 'February')) {
            setNextMonth(monthsArray[monthsArray.indexOf(nextMonth)]);
            setNextDay(parseInt(nextDay) + 1);
            setNextYear(nextYear);
        } else if (nextMonth === 'December' && nextDay === 1) {
            setNextMonth(monthsArray[0]);
            setNextYear(parseInt(nextYear) + 1);
        } else if (nextYear % 4 === 0 && nextMonth === 'February') {
            setNextMonth(monthsArray[monthsArray.indexOf(nextMonth)]);
            setNextDay(29);
        } else if (nextMonth === 'December' && nextDay === 31) {
            setNextDay(1);
            setNextYear(parseInt(nextYear) + 1);
        } else if (nextMonth === 'February' && nextDay < '29') {
            setNextDay(parseInt(nextDay) + 1);
            setNextMonth(monthsArray[monthsArray.indexOf(nextMonth + 1)]);
        }



    };




    // function changeDate(offset) {
    //     const date = new Date(nextYear, monthsArray.indexOf(nextMonth), nextDay);
    //     date.setDate(date.getDate() + offset);
    //     setNextDay(date.getDate());
    //     setNextDay()
    // }





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
     
                <div className="OneDay-schedule">

                    <div className="OneDay-times">
                        <div className="OneDay-time-offset-top"></div>
                        {timeArray.map((time) => (


                            <div className="OneDay-time-in-schedule">{time}</div>


                        ))}

                        <div className="OneDay-time-offset-bottom"></div>

                    </div>


                    <div className="OneDay-timeslots">
                        <div className="OneDay-timeslot-for-12am"></div>

                        {timeArray.map(() => (
                            <div className="OneDay-timeslots-row">
            
                            </div>
                        ))}

                    </div>
                </div>
            </div>


            <Footer/>
        </div>
    )
};

