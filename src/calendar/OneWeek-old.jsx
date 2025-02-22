import React, { useState } from "react";



// import navbar and footer
import CalendarNavbar from './calendar-navbar/CalendarNavbar.jsx';
import Footer from '../Footer.jsx';


// import other functions
import Overlay from './Overlay.js';




import './OneWeek.css';



export default function OneWeek() {


    const [isVisible, setIsVisible] = useState(false);
    const [rowColor, setRowColor] = 'gold';

    const toggleOverlay = () => {
        setIsVisible(!isVisible);
    }



    function handleChange() {


    }

    function sayTime() {

    }




    return (
        <div className="OneWeek">
            {isVisible && <Overlay />}

            <CalendarNavbar />

            <br></br>

            <div className="OneWeek-top-row">
                <button><i class="fa-solid fa-arrow-left"></i></button>
                <div className="month-year-label">January 20-26, 2025</div>
                <button><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <br></br>

            

            <div className="OneWeek-table">
                <div className="OneWeek-table-row OneWeek-table-row-1">
                    <div className="OneWeek-table-time"></div>
                    <div className="OneWeek-day-of-week">Monday</div>

                    <div className="OneWeek-day-of-week">Tuesday</div>
                    <div className="OneWeek-day-of-week">Wednesday</div>
                    <div className="OneWeek-day-of-week">Thursday</div>

                    <div className="OneWeek-day-of-week">Friday</div>
                    <div className="OneWeek-day-of-week">Saturday</div>
                    <div className="OneWeek-day-of-week">Sunday</div>
                </div>

                <div className="OneWeek-table-row OneWeek-table-row-2">
                    <div className="OneWeek-table-time"><div className="OneWeek-time-note">12:00 AM</div></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                </div>

                <div className="OneWeek-table-row OneWeek-table-row-3">
                    <div className="OneWeek-table-time">1:00 AM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div>



                <div className="OneWeek-table-row OneWeek-table-row-4">
                    <div className="OneWeek-table-time">2:00 AM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div>



                <div className="OneWeek-table-row OneWeek-table-row-5">
                    <div className="OneWeek-table-time">3:00 AM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div>



                <div className="OneWeek-table-row OneWeek-table-row-6">
                    <div className="OneWeek-table-time">4:00 AM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div>



                <div className="OneWeek-table-row OneWeek-table-row-7">
                    <div className="OneWeek-table-time">5:00 AM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div>


                <div className="OneWeek-table-row OneWeek-table-row-8">
                    <div className="OneWeek-table-time">6:00 AM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div>


                <div className="OneWeek-table-row OneWeek-table-row-9">
                    <div className="OneWeek-table-time">7:00 AM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div>



                <div className="OneWeek-table-row OneWeek-table-row-10">
                    <div className="OneWeek-table-time">8:00 AM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div>



                <div className="OneWeek-table-row OneWeek-table-row-11">
                    <div className="OneWeek-table-time">9:00 AM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div>



                <div className="OneWeek-table-row OneWeek-table-row-12">
                    <div className="OneWeek-table-time">10:00 AM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div>



                <div className="OneWeek-table-row OneWeek-table-row-13">
                    <div className="OneWeek-table-time">11:00 AM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div>


                <div className="OneWeek-table-row OneWeek-table-row-14">
                    <div className="OneWeek-table-time">12:00 PM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div>


                <div className="OneWeek-table-row OneWeek-table-row-14">
                    <div className="OneWeek-table-time">1:00 PM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div>



                <div className="OneWeek-table-row OneWeek-table-row-14">
                    <div className="OneWeek-table-time">2:00 PM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div>



                <div className="OneWeek-table-row OneWeek-table-row-14">
                    <div className="OneWeek-table-time">3:00 PM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div>



                <div className="OneWeek-table-row OneWeek-table-row-14">
                    <div className="OneWeek-table-time">4:00 PM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div>



                <div className="OneWeek-table-row OneWeek-table-row-14">
                    <div className="OneWeek-table-time">5:00 PM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div>



                <div className="OneWeek-table-row OneWeek-table-row-14">
                    <div className="OneWeek-table-time">6:00 PM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div>



                <div className="OneWeek-table-row OneWeek-table-row-14">
                    <div className="OneWeek-table-time">7:00 PM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div>



                <div className="OneWeek-table-row OneWeek-table-row-14">
                    <div className="OneWeek-table-time">8:00 PM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div>



                <div className="OneWeek-table-row OneWeek-table-row-14">
                    <div className="OneWeek-table-time">9:00 PM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div>



                <div className="OneWeek-table-row OneWeek-table-row-14">
                    <div className="OneWeek-table-time">10:00 PM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div>



                <div className="OneWeek-table-row OneWeek-table-row-14">
                    <div className="OneWeek-table-time">11:00 PM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div>







            </div>

            <br></br>
            <br></br>
            <br></br>
            <Footer />

        </div>

    )
};

