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
            <h4 className="ToDoApp-title">To-Do Application</h4>
            <div className="ToDoApp-new-task-field">

                <button className="ToDoApp-create-button" onClick={toShowCreateNew}>+ Create New Task</button>

            </div>

            {showCreateNewTask && <CreateOneList />}


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
            <Footer />
        </div>
    )
};

