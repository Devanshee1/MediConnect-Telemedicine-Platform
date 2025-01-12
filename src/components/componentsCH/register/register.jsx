import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        mobile: "",
        password: "",
        reEnterPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const register = () => {
        const { name, mobile, password, reEnterPassword } = user;

        if (!name || !mobile || !password || !reEnterPassword) {
            alert("All fields are required");
            return;
        }

        if (password !== reEnterPassword) {
            alert("Passwords do not match");
            return;
        }

        // Check if user already exists in localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser = users.find((u) => u.mobile === mobile);
        if (existingUser) {
            alert("User already exists with this mobile number");
            return;
        }

        // Save the new user to localStorage
        users.push({ name, mobile, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful! Please log in.");
        navigate("/login"); // Redirect to Login Page
    };

    return (
        <div>
            <div className="total">
                <img
                    src="https://accounts.practo.com/static/images/illustration.png"
                    alt="Illustration"
                />
                <div className="register">
                    <div className="Heading">
                        <h4>Join Practo</h4>
                    </div>
                    <br />
                    <p>Full name</p>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        placeholder="Full Name"
                        onChange={handleChange}
                    />
                    <p>Mobile Number</p>
                    <input
                        type="text"
                        name="mobile"
                        value={user.mobile}
                        placeholder="Mobile Number"
                        onChange={handleChange}
                    />
                    <p>Create Password</p>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        placeholder="Create password"
                        onChange={handleChange}
                    />
                    <p>Re-enter Password</p>
                    <input
                        type="password"
                        name="reEnterPassword"
                        value={user.reEnterPassword}
                        placeholder="Re-enter password"
                        onChange={handleChange}
                    />
                    <div className="button" onClick={register}>
                        Register
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
