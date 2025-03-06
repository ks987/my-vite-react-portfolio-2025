import React, { useState } from "react";

// import js files
import OneList from './One-list.jsx';
import Footer from '../Footer.jsx';
import CreateOneList from './Create-one-list.jsx';
import AllTasks from './all-tasks-file.jsx';

// import css files
import './ToDoApp.css';

export default function ToDoApp() {

    const [showCreateNewTask, setShowCreateNewTask] = useState(false);

    function toShowCreateNew() {
        setShowCreateNewTask((prev) => !prev);
    }

    return (
        <div className="ToDoApp">
            <div className="ToDoApp-title">To-Do Application</div>
            <div className="ToDoApp-new-task-field">

                <button className="ToDoApp-create-button" onClick={toShowCreateNew}>+ Add</button>

            </div>

            {showCreateNewTask && <CreateOneList />}


            <div className="ToDoApp-go-to-other-page">
                <button className="ToDoApp-go-back"><i class="fa-solid fa-arrow-left"></i></button>
                <div className="ToDoApp-page-number">Page #</div>
                <button className="ToDoApp-go-forward"><i class="fa-solid fa-arrow-right"></i></button>
            </div>


            <div className="ToDoApp-all-lists">
                <OneList />
                <OneList />
                <OneList />
                <OneList />
                
                <OneList />
                <OneList />
                <OneList />
                <OneList />
             
            </div>
        </div>
    )
};

