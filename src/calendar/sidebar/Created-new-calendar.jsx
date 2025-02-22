import React, {useState} from "react";

import './Created-new-calendar.css';

export default function CreatedNewCalendar() {


    const [shown, setShown] = useState(true);
    function closeNote(event) {
        event.stopPropagation();
        setShown(false);
    }


    return (
       <div>

    {shown && (<div className="CreatedNewCalendar">
            <div>
                <div className="CreatedNewCalendar-close-btn" onClick={closeNote}>X</div>
                <div className="CreatedNewCalendar-note">New calendar has been added to the list of your existing calendars</div>
            </div>
        </div>) }

        </div>
    )
};