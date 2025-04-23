
import { useState } from "react";
import './Create-one-list.css';

export default function CreateOneList() {

    const [hideCreateList, setHideCreateList] = useState(false);
    const [showCheckboxes, setShowCheckboxes] = useState('fa-regular fa-square');
    const [task, setTask] = useState('');
    const [oneList, setOneList] = useState([]);
    const [showNewRow, setShowNewRow] = useState(false);
    const [newRowIcon, setNewRowIcon] = useState('fa-solid fa-plus');

    function closeCreateOneList(e) {
        setHideCreateList(!hideCreateList);
        e.stopPropagation();
    }


    function toggleCheckboxes() {

        if (showCheckboxes === 'fa-regular fa-square') {
            setShowCheckboxes("fa-regular fa-square CreateOneList-hide-checkboxes");
        } else {
            setShowCheckboxes("fa-regular fa-square");
        }
    }

    function addTask() {
        // to save the typed task and to add the field below for the new task

        setShowNewRow(true);
    }

    function turnIntoCheckbox() {
 
            setNewRowIcon('fa-regular fa-square')

    }

    return (
        <div>

            {!hideCreateList &&
                <div className="CreateOneList">
                    <div className="CreateOneList-container">
                        <div className="CreateOneList-one-list">
                            <div className="CreateOneList-top-row">
                                <div className="CreateOneList-label-1">Title:</div>
                                <div contentEditable="true" className="CreateOneList-title"></div>
                            </div>
                            <button className="CreateOneList-checkboxes-button"
                                onClick={toggleCheckboxes}>Toggle Checkboxes</button>


                            <div className="CreateOneList-all-tasks">

                                <div className="CreateOneList-row">
                                    <i className={showCheckboxes}></i>
                                    <div contentEditable="true"

                                        className="CreateOneList-task"
                                        onKeyDown={addTask}>{task}</div>
                                </div>


                                {showNewRow && (<div className="CreateOneList-add-new-row">
                                    <i className={newRowIcon}></i>
                                    <div contentEditable="true" onKeyDown={turnIntoCheckbox}></div>
                                </div>)}

                            </div>

                            <button className="CreateOneList-close-button"
                                onClick={closeCreateOneList}>Save & Close</button>

                        </div>
                    </div>
                </div>


            }


        </div>
    )
};

