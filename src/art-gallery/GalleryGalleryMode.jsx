import React, {useState} from "react"
import {v4 as uuidv4} from "uuid";
import ArtGalleryNavbar from './ArtGallery-navbar.jsx';


import './GalleryGalleryMode.css';


export default function GalleryGalleryMode(){

const arrayOfArtworks = [
    '/images/food/chatgpt-breakfast.png',
    '/images/food/chatgpt-burrito-bowl.png',
    '/images/food/chatgpt-dessert.png',
    '/images/food/chatgpt-mediterrarean-bowl.png',
    '/images/food/chatgpt-oatmeal.png',
    '/images/food/chatgpt-tropical-smoothie.png'
]


const artTitles = [
    'Breakfast',
    'Burrito Bowl',
    'Dessert',
    'Mediterranean Bowl',
    'Oatmeal',
    'Tropical Smoothie'
];

    return(
        <div className="GalleryGalleryMode">

            <div>
                <ArtGalleryNavbar/>
            </div>
            <h1>Gallery Mode</h1>




            <div className="GalleryGalleryMode-container">

                {arrayOfArtworks.map((path, index) => (
                    <div key={uuidv4()} className="GalleryGalleryMode-artwork-div">
                        <div key={uuidv4()} className="GalleryGalleryMode-artwork-title">{artTitles[index]}</div>
                       
                        <img className="GalleryGalleryMode-image" key={uuidv4()} src={path}></img>
                        </div>
                ))}

            </div>
        </div>
    )
}