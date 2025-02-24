
import React from "react";
import { Outlet, Link } from "react-router-dom";




const Layout = () => {

    return (
        <div className="Layout">


            <div className="Layout-navbar-section">

                <div className="Navbar-portfolio-title">React portfolio by Kseniia Bondarenko</div>
                <nav className="Navbar-for-portfolio">
                    <Link id="about-and-contact" className="navbar-link" to='/about-and-contact'>About</Link>
                    <Link id="calendar-app" className="navbar-link" to='/calendar-in-react'>Calendar App</Link>
                    <Link id="to-do-app" className="navbar-link" to='/to-do-app-in-react'>To-Do App</Link>
                </nav>

            </div>

            <main className="Layout-main-page">
                <Outlet />

                {/* <Outlet/> = This is where page content will be rendered */}

            </main>


            <footer className="Layout-footer">

                <div className="Layout-Footer-portoflio">
                    <div className="Layout-footer-bar">

                        Copyright 2025

                    </div>
                </div>

            </footer>



        </div>
    )
}


export default Layout;