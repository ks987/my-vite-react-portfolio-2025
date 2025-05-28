import React, { useState, useEffect } from "react";
import AddNewNote from './AddNewNote.jsx';
import ViewNote from './ViewNote.jsx';
import './NotebookApp.css';

export default function NotebookApp() {

    const [viewExistingNote, setViewExistingNote] = useState(false);
    const [createNewNote, setCreateNewNote] = useState(false);
    const [buttonText, setButtonText] = useState('Add new note');
    const [notes, setNotes] = useState([]);



    const arrayOfNotes = ['1', '2', '3', '4', '5', '6', '7',
        '8', '9', '10', '11', '12', '13', '14',
        '15', '16', '17', '18', '19', '20', '21'];


// load notes from localStorage on first render

useEffect(() => {
    try {
        const savedNotes = JSON.parse(localStorage.getItem("notebook-notes")) ?? [];
        setNotes(savedNotes);
    } catch (err) {
        console.error("Failed to load from localStorage, err");
    }
}, []);


// save notes to localStorage whenever they change 

useEffect(() => {
    try{
        localStorage.setItem("notebook-notes", JSON.stringify(notes));
    } catch (err) {
        console.error("Failed  to save to localStorage", err);
    } 
}, [notes]);


    function toOpenCreateNote() {
        setCreateNewNote((prev) => !prev);
        if (buttonText === 'Close the note') {
            setButtonText('Add new note');
        } else {

            setButtonText('Close the note');
        }

    }

    function toViewExistingNote() {
        setViewExistingNote(!viewExistingNote);
    }




    return (
        <div className="NotebookApp">

            {createNewNote && <AddNewNote notes={notes} setNotes={setNotes} />}



            <div>

                <button
                    className="NotebookApp-create-new-note-btn"
                    onClick={toOpenCreateNote}>
                    {buttonText}
                </button>


                {!viewExistingNote && <ViewNote/>}

                <div className="NotebookApp-all-notes">
                    {notes.map((noteContent, index) => {
                        const [title, ...descParts] = noteContent.split(": ");
                        const description = descParts.join(":").trim();

                        return (
                            <div key={index} className="NotebookApp-one-note"
                                onClick={toViewExistingNote}>
                                <h3 className="NotebookApp-one-note-title">{title}</h3>
                                <div className="NotebookApp-one-note-description">{description}</div>
                            </div>
                        );
                    })}

                </div>



                <br></br>
                <br></br>


                <div className="NotebookApp-empty-block-of-space"></div>

            </div>
        </div>
    )
};


