import React, { useState } from "react";
import Swal from 'sweetalert2';
import bcrypt from 'bcryptjs'; // Import bcryptjs
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { users } from "../../Data/data";

const LoginPopup = ({ setShowLogin, setIsLoggedIn }) => {
  const [currState, setCurrState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Find the user by email
    const foundUser = users.find((user) => user.email === email);

    if (foundUser) {
      // Compare the entered password with the hashed password using bcrypt.compare()
      const isMatch = await bcrypt.compare(password, foundUser.password);

      if (isMatch) {
        console.log("Password matches, user found:", foundUser);

        // Show success alert using SweetAlert2
        await Swal.fire({
          title: "Success!",
          text: "Login successful. Welcome back!",
          icon: "success",
          confirmButtonText: "OK",
        });

        setIsLoggedIn(true);  // Update login state to true on success
        setShowLogin(false);  // Close the login popup on successful login
      } else {
        // Show error alert using SweetAlert2 if passwords don't match
        await Swal.fire({
          title: "Error!",
          text: "Login failed. Invalid email or password.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } else {
      // Show error alert if no user is found with the provided email
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
