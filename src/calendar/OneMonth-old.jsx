import { useState, useEffect } from "react";
import { tasksInDatabase } from './database-sample.jsx';


// import js files
import CalendarNavbar from './calendar-navbar/CalendarNavbar.jsx';
import CalendarAddNewTask from './Calendar-add-new-task.jsx';
import Sidebar from './sidebar/Sidebar.jsx';
import Footer from '../Footer.jsx';



// import css files
import './OneMonth.css';



export default function OneMonth() {

    // toggle the pop-up showing one assigned task 
    const [oneTaskIsVisible, setOneTaskIsVisible] = useState(false);


    // toggle the pop-up showing all assigned tasks
    const [oneDayTasksAreVisible, setOneDayTasksAreVisible] = useState(false);


    const [numberOfTasks, setNumberOfTasks] = useState('');

    // render a month-long calendar
    const daysInMonth = Array(49).fill(null); // Maximum slots in a calendar (6 weeks)

    const [dayOfMonth, setDayOfMonth] = useState('');

    // all months in existence
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    // determine today's date
    const today = new Date();
    const day = today.getDate(); // day of the month
    const month = today.getMonth() + 1; // Month is indexed at 0, so add 1
    const year = today.getFullYear(); // Full year

    const formattedDate = `${month}/${day}/${year}`;
    const monthYear = `${month}/${year}`;
    const wordMonth = `${months[month - 1]}`;
    const onlyYear = `${year}`;

    const [nextMonth, setNextMonth] = useState(wordMonth);
    const [nextYear, setNextYear] = useState(onlyYear);





    // add one more month to the date
    const addOneMonth = () => {
        const currMonthIndex = months.indexOf(nextMonth);
        if (currMonthIndex === 11) {
            setNextMonth(months[0]);
            setNextYear(parseInt(nextYear) + 1);
        } else {
            setNextMonth(months[currMonthIndex + 1]);
        }

    }

    const subtractOneMonth = () => {
        const currMonthIndex = months.indexOf(nextMonth);
        if (currMonthIndex === 0) {
            setNextMonth(months[11]);
            setNextYear(parseInt(nextYear) - 1);
        } else {
            setNextMonth(months[currMonthIndex - 1]);
        }


    }


    // determine number of tasks in existence per one day


    const determineNumberOfTasks = () => {

        setNumberOfTasks(`${tasksInDatabase.length} other`);


        // if (numberOfTasks === '') {
        //     setNumberOfTasks('');
        // } else if (numberOfTasks === NaN) {
        //     setNumberOfTasks('');
        // } else if (numberOfTasks === 1) {
        //     setNumberOfTasks(`${tasksInDatabase.length} more task`);
        // } else if (numberOfTasks === 0) {
        //     setNumberOfTasks('');
        // } else {
        //     setNumberOfTasks(`${tasksInDatabase.length} more tasks`);
        // }


    }



    useEffect(() => {
        determineNumberOfTasks();
    }, []);



    // display a pop-up with all the tasks assigned for that day
    const openAllTasksPopUp = () => {
        setOneDayTasksAreVisible(!oneDayTasksAreVisible);
    }


    return (
        <div className="OneMonth">
            <CalendarNavbar />


            {oneDayTasksAreVisible && (<div className="OneMonth-all-tasks-popup">
                <div>
                    <div>read</div>
                    <div>take a nap</div>
                    <div>go on a walk</div>
                    <div>learn French</div>
                    <div>code</div>
                </div>
            </div>)}

            {oneTaskIsVisible && (<div className="OneMonth-one-task-popup">
                <div>6:00 am read Kindle</div>
            </div>)}

            <br></br>

            <div className="OneMonth-top-row">
                <button
                    onClick={subtractOneMonth}
                ><i class="fa-solid fa-arrow-left"></i></button>
                <div className="month-year-label">{nextMonth}{' '}{nextYear}</div>
                <button
                    onClick={addOneMonth}
                ><i class="fa-solid fa-arrow-right"></i></button>
            </div>


            <div className="OneMonth-sidebar-and-one-month">
                <Sidebar />
                <div>





                    <div className="OneMonth-monthly-calendar">

                        {daysInMonth.map((_, index) => (
                            <div key={index} className="OneMonth-slot">

                                {index}
                                <div className="OneMonth-inserted-tasks">
                                    <div className="OneMonth-inserted-task-row">
                                        <div className="OneMonth-inserted-time">6:00 AM = </div>
                                        <div className="OneMonth-inserted-task">Code</div>
                                    </div>

                                    <button className="OneMonth-number-of-tasks"
                                        onClick={openAllTasksPopUp}>
                                        {numberOfTasks}
                                    </button>
                                </div>

                            </div>

                        ))}


                    </div>
                </div>



            </div>

            {/* sample overlay */}

            <Footer />
        </div>
    )
}




