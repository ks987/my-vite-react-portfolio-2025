import React, { useState, useEffect } from "react";
import './AddNewNote.css';

export default function AddNewNote({notes, setNotes}) {


    const [noteTitle, setNoteTitle] = useState('');
    const [noteDescription, setNoteDescription] = useState('');


    const toSaveNote = () => {
        if(!noteTitle.trim() && !noteDescription.trim()) return;

        const newNote = `${noteTitle.trim()}: ${noteDescription.trim()}`;
        setNotes((prevNotes) => [...prevNotes, newNote]);
        setNoteTitle("");
        setNoteDescription("");
    };


    const clearNote = () => {
        setNoteTitle("");
        setNoteDescription("");

    };

    const toUpdateTitle = (e) => {
        setNoteTitle(e.target.value);
    };

    return (

        <div className="AddNewNote">
            <div className="AddNewNote-contents">


                {/* <button className="Overlay-close-button">X</button> */}
                <br></br>
                <button className="AddNewNote-clear-note-btn" onClick={clearNote}>Clear contents</button>
                <br></br>
                <br></br>
                <label>Title of the note: </label>
                <br></br>
                <input 
                className="AddNewNote-note-title" 
                value={noteTitle} 
                onChange={toUpdateTitle}
                ></input>

                <br></br>
                <label>Contents of the note: </label>
                <br></br>
                <textarea value={noteDescription} 
                onChange={(e) => setNoteDescription(e.target.value)}
                ></textarea>
                <br></br>


                <button className="AddNewNote-save-changes-btn"
                    onClick={toSaveNote}>Save note</button>
            </div>
        </div>
    )
}