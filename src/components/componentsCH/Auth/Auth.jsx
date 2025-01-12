import React,  { useState } from "react";
import Register from "../register/register";
import Login from "../login/login";
import "./Auth.css";

 const Auth = () => {

     const [state, setState] = useState(<Login />);


     const updateContent = () => {
        let parent = document.getElementsByClassName("first");
      setState(
        <Login />
      )

      function changeColor(blue) {
        if (parent[0]) {
            parent[0].style.color = blue; // Corrected here: Apply color to the first element inside the "first" class
        }
    }
    changeColor("blue"); // Pass the color
      
    };

     const updateAnother = () => {
        
        setState(
            <Register />
        )
        
    }
    

    return (
        <div className="auth">

            <div className="high">
                <div className="first">
                    <button  onClick={updateContent}>Login</button>
                </div>
                <div className="second">
                    <button onClick={updateAnother}>Regsiter</button>
                </div>
            </div>
            <hr className="line"></hr>
            <div className="body">
                 
                 <div id="main">
                    {state}
                 </div>
            </div>
        </div>
    )
 }

 export default Auth