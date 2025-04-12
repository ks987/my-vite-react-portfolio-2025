import React, {useState} from "react";

import './SidebarMobile.css';


export default function SidebarMobile(){

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
        const [checkedItems, setCheckedItems] = useState({ calendarNames }); // track checked conditions for every calendar
        const [checked, setChecked] = useState('fa-solid fa-square-check');
        const [addNewCalendarOn, setAddNewCalendarOn] = useState(true);
    
    
        // toggle visiblity of overlay with assigning tasks
        const [isOverlayVisible, setIsOverlayVisible] = useState(false);
        // toggle visiblity of overlay with assigning tasks
    
        const toggleOverlay = () => {
            setIsOverlayVisible(!isOverlayVisible);
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

        
    


    return(
        <div className="SidebarMobile">

            <button className="SidebarMobile-add-new-task-btn"
                onClick={toggleOverlay}>Add New Task</button>


            <div className="SidebarMobile-today">
                <div>Today</div>
                <div>{currentHours12}:{currentMinutesFormatted} {amPm()}</div>
                <div>{getWeekday()}, </div>
                <div>{monthsArray[month]} {day}, {year}</div>
            </div>

        </div>
    )
}