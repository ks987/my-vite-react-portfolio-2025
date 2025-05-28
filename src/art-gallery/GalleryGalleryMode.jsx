import React, {useState} from "react"
import {v4 as uuidv4} from "uuid";
import ArtGalleryNavbar from './ArtGallery-navbar.jsx';


import './GalleryGalleryMode.css';


export default function GalleryGalleryMode(){

const arrayOfArtworks = [
    'public/images/food/chatgpt-breakfast.png',
    'public/images/food/chatgpt-burrito-bowl.png',
    'public/images/food/chatgpt-dessert.png',
    'public/images/food/chatgpt-mediterrarean-bowl.png',
    'public/images/food/chatgpt-oatmeal.png',
    'public/images/food/chatgpt-tropical-smoothie.png'
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