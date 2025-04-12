import React, {useState} from "react";
import './page-not-found.css';

export default function Page404() {
    return (
        <div className="Page404">
            <div>Page was not found</div>
            <div>Error 404</div>
            {/* <i className="fa-solid fa-face-laugh"></i> */}
            <i className="fa-solid fa-question"></i>
        </div>
    )
};


