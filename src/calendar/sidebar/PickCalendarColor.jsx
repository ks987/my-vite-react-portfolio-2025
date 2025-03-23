import './PickCalendarColor.css';


import React, { useState } from "react";

export default function PickCalendarColor() {


    const [color, setColor] = useState("#ffddcc");


    function colorPicker(e) {
        setColor(e.target.value);
    }


    const [value, setValue] = useState("rgb(245, 250, 50");



    

    return (


        <div>

        <div className="PickCalendarColor">
                <div>

                    <input color="pink" type="color" onChange={colorPicker}
                        className="PickCalendarColor-input"></input>

                    <div className="PickCalendarColor-output" style={{ background: color }}>Selected color: {color}</div>

                </div>
            </div>

        </div>
    )
}