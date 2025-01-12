import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";
import logo from './Images/logo.png';

export const Navigation = () => {
    const navigate = useNavigate();
    
    // Fetch logged-in user details from localStorage
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    
    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("loggedInUser"); // Remove the logged-in user's data
        navigate("/login"); // Redirect to login page
    };

    return (
        <div className="navbar-area">
            <nav className="nav-container">
                {/* Left Section: Logo */}
                <div className="div-nav-left">
                    <Link to="/">
                        <img 
                            src={logo}
                            alt="practo-logo" 
                            className="nav-logo" 
                        />
                    </Link>
                </div>

                {/* Middle Section: Navigation Links */}
                <div className="div-nav-middle">
                    <div className="div-nav-middle-item">
                        <div>Find Doctors</div>
                        <div>Book an appointment</div>
                    </div>

                    <Link to="/medicines" className="div-nav-middle-item">
                        <div>Medicines</div>
                        <div>Practo Pharmacy</div>
                    </Link>

                    <Link to="/doctors" className="div-nav-middle-item">
                        <div>Lab Tests</div>
                        <div>Book tests & checkup</div>
                    </Link>
                </div>

                {/* Right Section: Dropdown Menus and Login/Logout */}
                <div className="div-nav-right">
                    {/* Dropdown Menu: For Providers */}
                    <div className="nav-dropdown">
                        <button className="dropdown-btn">
                            For Providers ▼
                        </button>
                        {/* Uncomment and update as needed
                        <ul className="dropdown-menu">
                            <li className="nav-dropdown-item">Practo Prime</li>
                            <li className="nav-dropdown-item">Software for providers</li>
                            <li className="nav-dropdown-item">List your practice for Free</li>
                            <li className="nav-dropdown-item">Corporate wellness</li>
                        </ul>
                        */}
                    </div>

                    {/* Dropdown Menu: Security & Help */}
                    <div className="nav-dropdown">
                        <button className="dropdown-btn">
                            Security & Help ▼
                        </button>
                        <ul className="dropdown-menu">
                            <li className="nav-dropdown-item">Data security</li>
                            <li className="nav-dropdown-item">Help</li>
                        </ul>
                    </div>

                    {/* Login/Signup or Logout Button */}
                    {user ? (
                        <button className="btn-login" onClick={handleLogout}>
                            Logout
                        </button>
                    ) : (
                        <Link to="/Auth">
                            <button className="btn-login">
                                Login / Signup
                            </button>
                        </Link>
                    )}
                </div>
            </nav>
        </div>
    );
};
