import React, { useState } from "react";
import {Link } from "react-router";
import './ArtGallery-navbar.css';

export default function ArtGalleryNavbar() {

    return (
        <div className="ArtGalleryNavbar">

            <div className="ArtGalleryNavbar-title">Gallery of ChatGPT Artworks</div>


            <div className="ArtGalleryNavbar-menu">
                <Link to='/grid-mode'><button className="ArtGallery-grid-mode">grid mode</button></Link>
                <Link to='/gallery-mode'><button className="ArtGallery-gallery-mode">gallery mode</button></Link>
                <Link to='/column-mode'><button className="ArtGallery-column-mode">column mode</button></Link>
            </div>

        </div>
    )
} 