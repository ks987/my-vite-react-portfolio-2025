import { useState } from "react";

import './One-list.css';

export default function OneList() {
    const tasks = ['go grocery shopping', 'do laundry', 'code', 'go on a walk', 'read a book'];
    const [taskChecked, setTaskChecked] = useState("OneList-checkbox fa-regular fa-square");


    const [crossedOut, setCrossedOut] = useState('OneList-task');

    function toCrossOut() {

        if (crossedOut === 'OneList-task') {
            setCrossedOut('OneList-task OneList-crossed-out');
            setTaskChecked("OneList-checkbox fa-solid fa-check");
        } else {
            setCrossedOut('OneList-task');
            setTaskChecked("OneList-checkbox fa-regular fa-square");
        }
    }


    return (
        <div className="OneList">
            <div>


                <div className="OneList-title">to-do list # 1</div>
                <div className="Onetasklist-tasks-themselves">

                    {tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="OneList-row">
                            <div className="OneList-number">{taskIndex + 1}</div>
                            <i className={taskChecked}
                                onClick={(taskIndex) => (
                                    toCrossOut(taskIndex))
                                }></i>
                            <div className={crossedOut}>{task}</div>

        
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
};


