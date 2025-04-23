import React, { useState } from "react";
import {Outlet } from "react-router";

import ArtGalleryNavbar from './ArtGallery-navbar.jsx';

import './ArtGallery-layout.css';

export default function ArtGalleryLayout() {

    return (
        <div className="ArtGallery-layout">

            <div className="ArtGallery-layout-navbar">
                <ArtGalleryNavbar/>
            </div>

            <div className="ArtGallery-layout-main-page">
            <Outlet/>
            </div>

            <div className="ArtGallery-layout-footer">
                
            </div>


        </div>
    )
} 