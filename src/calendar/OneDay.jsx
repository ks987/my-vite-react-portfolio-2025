import React, { useState } from "react";
import CalendarAddNewTask from './calendar-sidebar/Calendar-add-new-task.jsx';
import CalendarNavbar from './calendar-navbar/CalendarNavbar.jsx';
import Sidebar from './calendar-sidebar/Sidebar.jsx';
import OneDayMobile from './OneDayMobile.jsx';


// import sample tasks
import TaskCode from './calendar-sample-tasks/TaskCode.jsx';
import TaskGroceries from './calendar-sample-tasks/TaskGroceries.jsx';
import TaskReading from './calendar-sample-tasks/TaskReading.jsx';


// styles
import './OneDay.css';


export default function OneDay() {

    const [isVisible, setIsVisible] = useState(false);
    const [currDate, setCurrDate] = useState(new Date());
    const [currentDate, setCurrentDate] = useState(new Date());

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


    const addOneDay = () => {
        setCurrentDate((previousDate) => {
            const newDate = new Date(previousDate);
            newDate.setDate(newDate.getDate() + 1);
            return newDate;
        });
    };

    const subtractOneDay = () => {
        setCurrentDate((previousDate) => {
            const newDate = new Date(previousDate);
            newDate.setDate(newDate.getDate() - 1);
            return newDate;
        });
    };


    const oneDayLater = new Date(currentDate);
    oneDayLater.setDate(currentDate.getDate() + 1);

    const goToToday = () => {
        setCurrentDate(new Date());
    }



    return (
        <>

            <OneDayMobile />

            <div className="OneDay">

                {isVisible && <CalendarAddNewTask />}

                <CalendarNavbar />
                <br></br>

                <div className="OneDay-switch-date">
                    {/* <div className="FourDaysMobile-go-to-today" onClick={goToToday}>TODAY</div> */}
                    <br></br>
                    <button onClick={subtractOneDay}><i class="fa-solid fa-arrow-left"></i></button>
                    <div className="OneDay-month-year-label-start">{currentDate.toDateString()}</div>
                    <button onClick={addOneDay}><i class="fa-solid fa-arrow-right"></i></button>
                </div>


                <br></br>

                <div className="OneDay-sidebar-and-schedule">
                    <Sidebar />

                    <div className="OneDay-slot-columns">


                        {Array.from({ length: 1 }).map((_, index) => {
                            const columnDate = new Date(currentDate);
                            columnDate.setDate(currentDate.getDate() + index);

                            return (
                                <div key={index} className="OneDay-weekdays">
                                    {timeArray.map((time, slotIndex) => (
                                        <div className="OneDay-day-row">
                                        <div key={slotIndex} className="OneDay-hour-label">{time}</div>
                                        <div key={slotIndex} className="OneDay-hour-slot"></div>
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>




                </div>
                <br></br>
            </div>
        </>
    )
}