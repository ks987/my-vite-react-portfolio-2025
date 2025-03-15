import React, {useState} from "react";
import CalendarNavbar from './calendar-navbar/CalendarNavbar.jsx';
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

    function addYear(){

    }




    return(
        <div className="OneYearMobile">
        
            <div className="OneYearMobile-Calendar-Navbar">
                <CalendarNavbar/>
            </div>

            <div>One Year Mobile </div>






        </div>
    )
}

