import { React, useState } from "react";

import CalendarNavbar from './calendar-navbar/CalendarNavbar.jsx';
import SidebarMobile from './calendar-sidebar/SidebarMobile.jsx';



import './FourDaysMobile.css';


export default function FourDaysMobile() {


    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const weekDayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const weekDayFullNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const weekDayThreeLetters = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const timesArray = ['12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM',
        '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM',
        '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'];

    const [currentDate, setCurrentDate] = useState(new Date());

    const addFourDays = () => {
        setCurrentDate((previousDate) => {
            const newDate = new Date(previousDate);
            newDate.setDate(newDate.getDate() + 4);
            return newDate;
        });
    };

    const subtractFourDays = () => {
        setCurrentDate((previousDate) => {
            const newDate = new Date(previousDate);
            newDate.setDate(newDate.getDate() - 4);
            return newDate;
        });
    };


    const fourDaysLater = new Date(currentDate);
    fourDaysLater.setDate(currentDate.getDate() + 3);

    const goToToday = () => {
        setCurrentDate(new Date());
    }




    return (
        <div className="FourDaysMobile">

            <div className="FourDaysMobile-top-section">
                <div className="FourDaysMobile-no-weekdays-included">
                    <div className="FourDaysMobile-navbar">
                        <CalendarNavbar />

                        <div className="FourDaysMobile-title">Four Days</div>

                        <SidebarMobile />
                        <br></br>

                    </div>

                    <div className="FourDaysMobile-switch-date">
                        {/* <div className="FourDaysMobile-go-to-today" onClick={goToToday}>TODAY</div> */}
                        <br></br>
                        <button onClick={subtractFourDays}><i class="fa-solid fa-arrow-left"></i></button>
                        <div className="FourDaysMobile-month-year-label-start">{currentDate.toDateString()}</div>
                        <div className="FourDaysMobile-month-year-dash"></div>
                        <div className="FourDaysMobile-month-year-label-end">{fourDaysLater.toDateString()}</div>
                        <button onClick={addFourDays}><i class="fa-solid fa-arrow-right"></i></button>
                    </div>


                </div>

                <div className="FourDaysMobile-week-row">

                    <div className="FourDaysMobile-start-of-row"></div>
                    <div className="FourDaysMobile-day-titles">
                        {Array.from({ length: 4 }).map((_, index) => {
                            const columnDate = new Date(currentDate);
                            columnDate.setDate(currentDate.getDate() + index);

                            return (
                                <div key={index} className="FourDaysMobile-weekdays">
                                    <div className="FourDaysMobile-day-title">{columnDate.toDateString()}</div>

                                </div>
                            );
                        })}

                    </div>
                </div>


            </div>

            <div className="FourDaysMobile-all-day-task-row">
                    <div className="FourDaysMobile-all-day-label">all day</div>
                    {weekDayThreeLetters.map((oneWeekDay) => (
                        <div className="FourDaysMobile-all-day-slot"></div>
                    ))}

                </div>


            <div className="FourDaysMobile-schedule-container">


                




                <div className="FourDaysMobile-first-column">

                    {timesArray.map((hour) => (
                        <div className="FourDaysMobile-hour-title">
                            {hour}
                            <div className="FourDaysMobile-line"></div>
                        </div>


                    ))}
                </div>



                <div className="FourDaysMobile-slot-columns">


                    {Array.from({ length: 4 }).map((_, index) => {
                        const columnDate = new Date(currentDate);
                        columnDate.setDate(currentDate.getDate() + index);

                        return (
                            <div key={index} className="FourDaysMobile-weekdays">
                                {timesArray.map((time, slotIndex) => (
                                    <div key={slotIndex} className="FourDaysMobile-hour-slot"></div>

                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

    )
}