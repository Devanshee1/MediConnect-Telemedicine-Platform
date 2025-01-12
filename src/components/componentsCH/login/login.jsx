import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        mobile: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const login = () => {
        const { mobile, password } = user;

        if (!mobile || !password) {
            alert("Please enter both mobile and password");
            return;
        }

        // Check credentials from localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser = users.find(
            (u) => u.mobile === mobile && u.password === password
        );

        if (existingUser) {
            alert(`Welcome, ${existingUser.name}!`);
            localStorage.setItem("loggedInUser", JSON.stringify(existingUser)); // Save logged-in user in localStorage
            navigate("/homepage"); // Redirect to Home Page
        } else {
            alert("Invalid mobile number or password");
        }
    };

    return (
        <div className="normal">
            <div className="nill">
                <img
                    src="https://accounts.practo.com/static/images/illustration.png"
                    alt="Illustration"
                />
                <div className="login">
                    <p>Mobile Number</p>
                    <input
                        type="text"
                        name="mobile"
                        value={user.mobile}
                        placeholder="Enter your Mobile Number"
                        onChange={handleChange}
                    />
                    <p>Password</p>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        placeholder="Enter your password"
                        onChange={handleChange}
                    />
                    <div className="button" onClick={login}>
                        Login
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
