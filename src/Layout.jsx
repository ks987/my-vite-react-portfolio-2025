
import React from "react";
import { Outlet } from "react-router";


import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ScreenTooSmall from './ScreenTooSmall.jsx';
import './Layout.css';


const Layout = () => {

    return (
        <div className="Layout">
            
            <div className="Layout-navbar-section">
                <Navbar />
            </div>

            <div className="Layout-error-message">
                    <ScreenTooSmall/>
                </div>

                
            <main className="Layout-main-page">

             
                <Outlet />

                {/* <Outlet/> = This is where page content will be rendered */}

            </main>


            <div className="Layout-footer">
                <Footer />
            </div>



        </div>
    )
}


export default Layout;