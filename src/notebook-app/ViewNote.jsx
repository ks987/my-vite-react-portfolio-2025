import React, { useState, useEffect } from 'react';
import './ViewNote.css';

export default function  ViewNote() {

return(
    <div className="ViewNote">
        <div className="ViewNote-container">
            <div className="ViewNote-1st-row">
            <div className="ViewNote-title"><textarea></textarea></div>
            </div>

            <div className="ViewNote-date-created">Created: February 1, 2024</div>
            <div className="ViewNote-date-modified">Modified: April 3, 2025</div>
            <div className="ViewNote-contents">

                <textarea></textarea>
            </div>
        </div>
    </div>
)
};