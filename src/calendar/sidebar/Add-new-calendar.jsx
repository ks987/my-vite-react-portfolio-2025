import React, { useState } from "react";


// import js files
import PickCalendarColor from '../PickCalendarColor.jsx';
import CreatedNewCalendar from './Created-new-calendar.jsx';
// import css files

import './Add-new-calendar.css';

export default function AddNewCalendar() {
    const [addNewCalendarOn, setAddNewCalendarOn] = useState('true');
    const [createdNewCalendarOn, setCreatedNewCalendarOn] = useState('false');

    function saveNewCalendar(event) {
        event.stopPropagation();
        setAddNewCalendarOn(false);
        setCreatedNewCalendarOn(true);
    }



    return (
        <div>

            {addNewCalendarOn && (<div className="AddNewCalendar">


                <div>

                    <p>Type the title for your new calendar</p>
                    <button className="AddNewCalendar-close-btn">X</button>
                    <input type="text" placeholder="Calendar title"></input>

                    <p>Pick the color for your new calendar</p>
                    <div className="AddNewCalendar-color-picker-box"><PickCalendarColor /></div>
                    <button className="AddNewCalendar-save-btn" onClick={saveNewCalendar}>Save</button>
                    {!createdNewCalendarOn && <createdNewCalendarOn/>}
                </div>
            </div>)}

        </div>
    )
};

