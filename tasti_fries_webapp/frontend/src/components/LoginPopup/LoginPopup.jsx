import React, { useState } from "react";
import Swal from 'sweetalert2'; // Import SweetAlert2
import "./LoginPopup.css";
import { assets } from "../../assets/assets"; // Adjust path as per your project structure
import { users } from "../../Data/data"; // Adjust path as per your project structure

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if the user exists in the users array
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      console.log("User found:", foundUser); // Log the found user to the console

      // Create JSON data
      const jsonData = {
        email,
        status: "active",
      };

      // Show success alert using SweetAlert2
      await Swal.fire({
        title: "Success!",
        text: "Login successful. Welcome back!",
        icon: "success",
        confirmButtonText: "OK",
      });
      
      setShowLogin(false); // Close the login popup on successful login
    } else {
      // Show error alert using SweetAlert2
      await Swal.fire({
        title: "Error!",
        text: "Login failed. Invalid email or password.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleLogin}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img 
            onClick={() => setShowLogin(false)} 
            src={assets.cross_icon} 
            alt="close icon" 
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input type="text" placeholder="Your name" required />
          )}
          <input 
            type="email" 
            placeholder="Your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
