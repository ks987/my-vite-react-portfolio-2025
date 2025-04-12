import React from "react";

import './SidebarMobile.css';

export default function SidebarMobile() {
    // to open or close the overlay
    const [isVisible, setIsVisible] = useState(false);
    const [isToDelete, setIsToDelete] = useState(false);
    const [inputValue, setInputValue] = useState("task title");

    // to set the proper time and date for the new task 
    const [day, setDay] = useState("18");
    const [month, setMonth] = useState("February");
    const [dayOfWeek, setDayOfWeek] = useState("Tuesday");
    const [year, setYear] = useState("2025");
    const [startTime, setStartTime] = useState("10:30 AM");
    const [endTime, setEndTime] = useState("11:30 AM");
    const [description, setDescription] = useState("");
    const [calendarColor, setCalendarColor] = useState("gold");
    const [calendarName, setCalendarName] = useState("Main Calendar");

    // to display a list of calendar options

    const [showCalendars, setShowCalendars] = useState(false);

    const calendarDatabase = [
        "Main Calendar",
        "Sample Schedule",
        "Holidays",
        "Travel Calendar",
        "Menu Calendar",
    ];

    const areYouSure = (event) => {
        event.stopPropagation();
        if (inputValue.trim() === "") {
            // if input is empty, close right away
            setIsVisible(true);
        } else {
            // else, show the confirmation
            setIsToDelete(true);
        }
    };

    const showOverlay = (event) => {
        event.stopPropagation();
        setIsVisible(false);
        setIsToDelete(false);
    };

    const hideOverlay = (event) => {
        event.stopPropagation();
        setIsVisible(true);
        setIsToDelete(false);
    };


    return (
        <div className="SidebarMobile">

            return (
            <div>
                {isToDelete && (
                    <div className="Overlay-discard-delete-note">
                        <br />
                        <h4>Discard unsaved note?</h4>
                        <br />
                        <button className="Overlay-cancel-btn" onClick={showOverlay}>Cancel</button>
                        <button className="Overlay-discard-btn" onClick={hideOverlay}>Discard</button>
                    </div>
                )}

                {!isVisible && (
                    <div className="Overlay">
                        <button className="Overlay-close-btn" onClick={areYouSure}>X</button>
                        <input
                            type="text"
                            className="Overlay-event-title"
                            placeholder="Add title"
                            value={inputValue}
                            onChange={(event) => setInputValue(event.target.value)}
                        />

                        <div className="Overlay-date-row">
                            <input type="text" className="Overlay-day-of-week" value={dayOfWeek} onChange={(e) => setDayOfWeek(e.target.value)} />
                            <input type="text" className="Overlay-month" value={month} onChange={(e) => setMonth(e.target.value)} />
                            <input type="text" className="Overlay-day" value={day} onChange={(e) => setDay(e.target.value)} />
                            <div className="Overlay-comma">, </div>
                            <input type="text" className="Overlay-year" value={year} onChange={(e) => setYear(e.target.value)} />
                            <div className="Overlay-at"> @ </div>
                            <input type="text" className="Overlay-starting-time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                            <div className="Overlay-time-dash">-</div>
                            <input type="text" className="Overlay-ending-time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                        </div>

                        <div className="Overlay-note">Add description</div>
                        <textarea
                            className="Overlay-description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Add description here..."
                        />

                        <div className="Overlay-calendar-name-and-color">
                            <button className="Overlay-picked-calendar" onClick={() => setShowCalendars(!showCalendars)}>
                                {calendarName}
                            </button>

                            {showCalendars && (
                                <div>
                                    {calendarDatabase.map((calendar, index) => (
                                        <div key={index}>{calendar}</div>
                                    ))}
                                </div>
                            )}

                            <div className="Overlay-event-color" style={{ background: calendarColor }}></div>
                        </div>

                        <button className="Overlay-save-event-btn">Save</button>
                    </div>
                )}
            </div>



        </div>
            );
        }