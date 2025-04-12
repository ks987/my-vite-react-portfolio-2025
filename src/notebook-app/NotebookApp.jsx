import React, { useState, useEffect } from "react";
import NotebookOverlay from './NotebookOverlay.jsx';
import ViewNote from './ViewNote.jsx';

import './NotebookApp.css';

export default function NotebookApp() {

    const [openExistingNote, setOpenExistingNote] = useState('false');
    const [createNewNote, setCreateNewNote] = useState('false');
    const [buttonText, setButtonText] = useState('Add new note');


    const arrayOfNotes = ['1', '2', '3', '4', '5', '6', '7', 
        '8', '9', '10', '11', '12', '13', '14', 
        '15', '16', '17', '18', '19', '20', '21'];


    function toOpenNote() {
        setOpenExistingNote((prev) => !prev);
    }

    function toOpenCreateNote() {
        setCreateNewNote((prev) => !prev);
        if (buttonText === 'Close the note') {
            setButtonText('Add new note');
        } else {

            setButtonText('Close the note');
        }

    }

    function toHideOverlay() {
        setCreateNewNote((prev) => !prev);
    }


 

    return (
        <div className="Notepad">

            {!createNewNote && <NotebookOverlay />}
  


            <div>

                <button className="Notepad-create-new-note-btn" onClick={toOpenCreateNote}>{buttonText}</button>
                {!openExistingNote && <ViewNote />}

                <div className="Notepad-all-notes">
                    {arrayOfNotes.map((title => (
                        <div className="Notepad-one-note" onClick={toOpenNote}>Note # {title}</div>
                    )))}
                </div>


                <br></br>
                <br></br>


                <div className="Notepad-empty-block-of-space"></div>

            </div>
        </div>
    )
};




// coding tasks for the notepad app
// 1. overlay needs to have session storage
// 2. notes need to be searchable
// 3. notes need to be filterable
// 4. notes need to be saved with local storage
