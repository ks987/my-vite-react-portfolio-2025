
import React from "react";
import { Outlet } from "react-router-dom";


import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

import './Layout.css';


const Layout = () => {

    return (
        <div className="Layout">
            
            <div className="Layout-navbar-section">
                <Navbar />
            </div>

            <main className="Layout-main-page">
                <Outlet />

                {/* <Outlet/> = This is where page content will be rendered */}

            </main>


            <footer className="Layout-footer">
                <Footer />
            </footer>



        </div>
    )
}


export default Layout;