import { React, useState } from "react";


import './OneWeekMobile.css';


export default function OneWeekMobile() {




    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const weekDayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const weekDayFullNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const weekDayThreeLetters = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const timesArray = ['12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM',
        '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM',
        '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'];




    return (
        <div className="OneWeekMobile">
            <div>One Week Mobile </div>


            <div className="OneWeekMobile-grid">
                <div className="OneWeekMobile-header">
                    <div className="OneWeekMobile-time-label"></div>{/* empty corner */}
                    {weekDayThreeLetters.map((day) => (
                        <div key={day} className="OneWeekMobile-day-header">{day}</div>
                    ))}

                </div>

                {
                    timesArray.map((time) => (

                        <div key={time} className="OneWeekMobile-row">

                            {time}
                            <div className="OneWeekMobile-time-label">
                                {
                                    weekDayThreeLetters.map((oneDay) => (
                                        <div key={oneDay + time} className="OneWeekMobile-tile">{oneDay}</div>
                                    ))}

                            </div>

                        </div>


                    ))
                }
            </div>


            <div>something else</div>



        </div>
    )
}