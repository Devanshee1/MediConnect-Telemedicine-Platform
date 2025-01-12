import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    const logout = () => {
        localStorage.removeItem("loggedInUser"); // Clear logged-in user
        navigate("/login"); // Redirect to Login Page
    };

    return (
        <div>
            <h1>Welcome, {user ? user.name : "Guest"}!</h1>
            <p>Mobile: {user?.mobile}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default HomePage;
