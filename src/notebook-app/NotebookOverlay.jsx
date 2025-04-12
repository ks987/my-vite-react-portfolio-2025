import React, { useState, useEffect } from "react";
import './NotebookOverlay.css';

export default function NotebookOverlay() {


    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');

    // Load saved note on mount
    useEffect(() => {
        const savedTitle = sessionStorage.getItem('noteTitle') || '';
        const savedContent = sessionStorage.getItem('noteContent') || '';
        setNoteTitle(savedTitle);
        setNoteContent(savedContent);
    }, []);


    function toUpdateTitle(event) {
        setNoteTitle(event.target.value);
    }

    function toUpdateContent(event) {
        setNoteContent(event.target.value);
    }


    function saveNotePerSession(e) {
        const {title, contents} = e.target;
        const formData = JSON.parse(sessionStorage.getItem("formData")) ?? {};
        formData[title] = value;
        sessionStorage.setItem('note title', noteTitle);
        sessionStorage.setItem('note content', noteContent);

    }

    function clearNote() {
        setNoteTitle('');
        setNoteContent('');
        sessionStorage.removeItem('note title');
        sessionStorage.removeItem('note content');
    }




    return (

        <div className="NotebookOverlay">
            <div className="NotebookOverlay-contents">


                {/* <button className="Overlay-close-button">X</button> */}
                <br></br>
                <button className="NotebookOverlay-clear-note-btn" onClick={clearNote}>Clear contents</button>
                <br></br>
                <br></br>
                <label>Title of the note: </label>
                <br></br>
                <input className="NotebookOverlay-note-title" value={noteTitle} onChange={toUpdateTitle}></input>
                <br></br>
                <label>Contents of the note: </label>
                <br></br>
                <textarea value={noteContent} onChange={toUpdateContent}></textarea>
                <br></br>


                <button className="NotebookOverlay-save-changes-btn"
                    onClick={saveNotePerSession}>Save note</button>
            </div>
        </div>
    )
}