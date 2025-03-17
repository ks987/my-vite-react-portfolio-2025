import React, {useState} from "react";
import CalendarNavbar from './calendar-navbar/CalendarNavbar.jsx';
import SidebarMobile from './SidebarMobile.jsx';

import './OneYearMobile.css';


export default function OneYearMobile(){

    const today = new Date();
    const day = today.getDate(); // get day of the month
    const month = today.getMonth() + 1; // Month is indexed at 0, so add 1
    const year = today.getFullYear();
    const dayOfWeek = 6 - today.getDay();
    

    const [yearArray, setYearArray] = useState([]);
    const [nextYear, setNextYear] = useState(year);
    const [weekendColor, setWeekendColor] = useState('');


    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
   const days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
   const weekdayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    function addYear(){

    }



    return(
        <div className="OneYearMobile">
        
            <div className="OneYearMobile-Calendar-Navbar">
                <CalendarNavbar/>
            </div>
            <br></br>

            <div className="OneYearMobile-arrows">
            <i className="fa-solid fa-arrow-left"></i>
                <div className="OneYearMobile-title">2025</div>
                <i className="fa-solid fa-arrow-right"></i>
            </div>


        {/* <div className="OneYearMobile-year">
            {months.map((month, monthIndex) => (
                <div className="OneYearMobile-month-box">
                    
                    <div key={monthIndex} className="OneYearMobile-month-title">{month}</div>

                    {weekdays.map(weekday => (
                        <div className="OneYearMobile-weekday">{weekday}</div>
                    ))}
                    
                    {days.map((day => (
                        <div className="OneYearMobile-day">{day}</div>
                    )))}
                    
                    </div>
            ))}
        </div> */}

        <div className="OneYearMobile-sidebar-and-months">
            <SidebarMobile/>

            <div className="OneYearMobile-months">
                {monthNames.map((month, monthIndex) => (
                    // draw the boxes for each month 
                    <div key={monthIndex} className="OneYearMobile-month-box">
                    
                    




                    </div>
    
                ))}

            </div>



        </div>






            

        </div>
    )
}

