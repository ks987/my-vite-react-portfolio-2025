import React, { useState, useEffect } from "react";


import CalendarAddNewTask from './Calendar-add-new-task.jsx';

import './SidebarMobile.css';


export default function SidebarMobile() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const weekDayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    const currentHours = today.getHours();
    const currentMinutes = today.getMinutes();
    const currentHours12 = (currentHours % 12) || 12; // convert to 0 to 12 for 12-hour format
    const currentMinutesFormatted = currentMinutes.toString().padStart(2, '0');
    const amPm = () => {
        if (currentHours >= 12) {
            return 'PM';
        } else {
            return 'AM';
        }

    };


    const calendarNames = ['Main Calendar', 'Sample Schedule ', 'Holidays', 'Travel Calendar', 'Calendar #5'];

    const [circleColor, setCircleColor] = useState(['gold', 'coral', 'yellowgreen', 'cornflowerblue', 'violet', 'deeppink', 'tomato', 'greenyellow', 'pink', 'lightblue']);
    const [isPickColorVisible, setIsPickColorVisible] = useState(true);
    const [checkedItems, setCheckedItems] = useState(calendarNames.map(() => true));
    ; // track checked conditions for every calendar
    const [checked, setChecked] = useState('fa-solid fa-square-check');
    const [addNewCalendarOn, setAddNewCalendarOn] = useState(true);


    // toggle visiblity of add-new-task field with assigning tasks
    const [isAddNewTaskVisible, setIsAddNewTaskVisible] = useState(false);

    // toggle visiblity of add-new-task field with assigning tasks

    const toggleAddNewTaskField = () => {
        setIsAddNewTaskVisible(!isAddNewTaskVisible);
    }




    // determine day of week
    function getWeekday() {
        return weekDayArray[new Date().getDay()];
    }

    // set new color 
    function handleColorChange(newColor) {
        setCircleColor(newColor);
    }

    // show or hide the color picker

    function toggleColorPicker() {
        setIsPickColorVisible(!isPickColorVisible);
    }


    function toggleAllCheckboxes() {
        if (checked === 'fa-solid fa-square-check') {
            setChecked('fa-solid fa-square');
        } else {
            setChecked('fa-solid fa-square-check');
        }
    }

    function toggleOneCheckbox(index) {

        setCheckedItems(checkedItems.map(() => {
            if (checked === 'fa-solid fa-square-check') {
                calendarNames[index].setChecked('fa-solid fa-square');
            } else {
                calendarNames[index].setChecked('fa-solid fa-square-check');
            }
        }))
    }


    // set custom ID to each checkbox icon

    const [iconID, setIconID] = useState('checkbox-1');



    // check or uncheck the custom checkbox 


    // display a field to add a new calendar to the list

    function displayAddNewCalendar(event) {
        setAddNewCalendarOn(!addNewCalendarOn);
        event.stopPropagation();
    }



    // current time

    const [currTime, setCurrTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrTime(new Date());
        }, 1000); // update every second

        return () => clearInterval(interval); // Cleanup on unmount


    }, []);

    // go to today's date

    const goToToday = () => {
        setCurrentDate(new Date());
    }





    return (
        <div className="SidebarMobile">

            {isAddNewTaskVisible && <CalendarAddNewTask />}

            <div className="SidebarMobile-top-row">

                <button className="SidebarMobile-add-new-task-btn"
                    onClick={toggleAddNewTaskField}>Add New Task</button>

                <button className="SidebarMobile-go-to-today-btn" onClick={goToToday}>Go to Today</button>
            </div>
            <div className="SidebarMobile-current-date">
                <div></div>
                {/* <div>{currentHours12}:{currentMinutesFormatted} {amPm()}</div> */}
                <div>{currTime.toLocaleTimeString()}</div>
                <div>{getWeekday()}, </div>
                <div>{monthsArray[month]} {day}, {year}</div>

            </div>

        </div>
    )
}