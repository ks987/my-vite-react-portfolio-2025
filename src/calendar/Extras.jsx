export default function Extras() {

    const today = new Date();
    const day = today.getDate() + 1;
    const month = today.getMonth() + 1;
    const year = today.getFullYear();


    const daysArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const onlyMonth = monthsArray[month - 1];
    const onlyDay = daysArray[day - 1];
    const onlyYear = year;
    const modifiedDate = `${onlyMonth} ${onlyDay}, ${onlyYear}`;


    const [nextDay, setNextDay] = useState(day);
    const [nextMonth, setNextMonth] = useState(monthsArray[month]);
    const [nextYear, setNextYear] = useState(year);


    function addOneDay() {
        const currMonthIndex = monthsArray.indexOf(nextMonth);
        const currDayIndex = daysArray.indexOf(nextDay);

        if (currMonthIndex === 11) {
            setNextMonth(monthsArray[0]);
            setNextYear(parseInt(nextYear) + 1);
        } else {
            setNextMonth(monthsArray[currMonthIndex + 1]);
        }


        if ((parseInt(nextYear) % 4 === 0) && nextMonth === 'February') {
            if (nextDay === 28) {
                setNextDay(29);
            } else {
                setNextDay(1);
                setNextMonth('March');
            }
        } else {
            setNextDay(1);
            setNextMonth('March');
        }


        if ((nextDay === 31) && (nextMonth === 'January' || 'March' || 'May' || 'July' || 'August' || 'October' || 'December')) {
            setNextDay(31)

        } else {
            setNextDay(1);
        }



    };



    function subtractOneDay() {
        const currMonthIndex = monthsArray.indexOf(nextMonth);
        const currDayIndex = daysArray.indexOf(nextDay);




        if (currMonthIndex === 0) {
            setNextMonth(monthsArray[11]);
            setNextYear(parseInt(nextYear) - 1);
        } else {
            setNextMonth(monthsArray[currMonthIndex - 1]);
        }

        // leap year 




    }

    return (
        <div>


            <input
                type="color"
                min="0"
                max="1"
                step="0.01"
                value={parseFloat(color.split(",")[3])}
                onChange={(e) => {
                    const newAlpha = e.target.value;
                    setColor(color.replace(/[\d\.]+\)$/, `${newAlpha})`));
                }}></input>

            {/* monthly calendar itself */}


            {/* <div className="OneMonth-monthly-calendar">
            <div className="OneMonth-title-slot">Mon</div>
            <div className="OneMonth-title-slot">Tue</div>
            <div className="OneMonth-title-slot">Wed</div>
            <div className="OneMonth-title-slot">Thu</div>
            <div className="OneMonth-title-slot">Fri</div>
            <div className="OneMonth-title-slot">Sat</div>
            <div className="OneMonth-title-slot">Sun</div>


            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>

            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>

            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>

            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>

            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>

            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>
            <div className="OneMonth-slot"></div>

            <div className="OneMonth-slot"></div>


        </div> */}
        </div>
    )
}