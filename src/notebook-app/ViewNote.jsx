import React, { useState, useEffect } from 'react';
import AddNewNote from './AddNewNote.jsx';
import './ViewNote.css';

export default function  ViewNote({noteTitle, noteDescription}) {


    // const [noteTitle, setNoteTitle] = useState('something');
    // const [noteDescription, setNoteDescription] = useState('blah blah blah');



return(
    <div className="ViewNote">
        <div className="ViewNote-container">
            <div className="ViewNote-1st-row">
            <textarea className="ViewNote-title">{noteTitle}</textarea>
            </div>

            <textarea className="ViewNote-contents">

                {noteDescription}

  
            </textarea>

            <button className="ViewNote-close-btn">Close note</button>
        </div>
    </div>
)
};