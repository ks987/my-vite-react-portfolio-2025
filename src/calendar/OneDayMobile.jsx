import { React, useState } from "react";

import CalendarNavbar from './calendar-navbar/CalendarNavbar.jsx';
import SidebarMobile from './calendar-sidebar/SidebarMobile.jsx';

import './OneDayMobile.css';


export default function OneDayMobile() {


    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const weekDayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const weekDayFullNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const weekDayThreeLetters = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const timesArray = ['12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM',
        '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM',
        '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'];

    const [currentDate, setCurrentDate] = useState(new Date());

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


    const fourDaysLater = new Date(currentDate);
    fourDaysLater.setDate(currentDate.getDate() + 1);

    const goToToday = () => {
        setCurrentDate(new Date());
    }




    return (
        <div className="OneDayMobile">

            <div className="OneDayMobile-top-section">
                <div className="OneDayMobile-no-weekdays-included">
                    <div className="OneDayMobile-navbar">
                        <CalendarNavbar />

                        <div className="OneDayMobile-title">One Day</div>

                        <SidebarMobile />
                        <br></br>

                    </div>

                    <div className="OneDayMobile-switch-date">
                        {/* <div className="FourDaysMobile-go-to-today" onClick={goToToday}>TODAY</div> */}
                        <br></br>
                        <button onClick={subtractOneDay}><i class="fa-solid fa-arrow-left"></i></button>
                        <div className="OneDayMobile-month-year-label-start">{currentDate.toDateString()}</div>
                        <button onClick={addOneDay}><i class="fa-solid fa-arrow-right"></i></button>
                    </div>


                </div>

                <div className="OneDayMobile-week-row">

                    <div className="OneDayMobile-start-of-row"></div>
                    <div className="OneDayMobile-day-titles">
                        {Array.from({ length: 1 }).map((_, index) => {
                            const columnDate = new Date(currentDate);
                            columnDate.setDate(currentDate.getDate() + index);

                            return (
                                <div key={index} className="OneDayMobile-weekdays">
                                    <div className="OneDayMobile-day-title">{columnDate.toDateString()}</div>

                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>

{/* draw a row of all day tasks */}

            <div className="OneDayMobile-all-day-task-row">
                <div className="OneDayMobile-all-day-label">all day</div>
                <div className="OneDayMobile-all-day-slot"></div>
            </div>


            <div className="OneDayMobile-schedule-container">



{/* draw a column of times for the schedule */}
                <div className="OneDayMobile-first-column">

                    {timesArray.map((hour) => (
                        <div className="OneDayMobile-hour-title">
                            {hour}
                            <div className="OneDayMobile-line"></div>
                        </div>


                    ))}
                </div>



                <div className="OneDayMobile-slot-columns">


                    {Array.from({ length: 1 }).map((_, index) => {
                        const columnDate = new Date(currentDate);
                        columnDate.setDate(currentDate.getDate() + index);

                        return (
                            <div key={index} className="OneDayMobile-weekdays">
                                {timesArray.map((time, slotIndex) => (
                                    <div key={slotIndex} className="OneDayMobile-hour-slot"></div>

                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

    )
}