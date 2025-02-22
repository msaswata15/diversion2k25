import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css"; // Updated CSS file

const Auth = () => {
    const navigate = useNavigate();
    const [isSignup, setIsSignup] = useState(false);
    const [flashMessage, setFlashMessage] = useState({ message: "", type: "" });
    const [errors, setErrors] = useState({}); // Field errors

    // Password Strength Checker
    const checkPasswordStrength = (password) => {
        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return strongRegex.test(password);
    };

    // Validate Form Fields
    const validateForm = (formData) => {
        let newErrors = {};
        if (isSignup) {
            if (!formData.name.trim()) newErrors.name = "Name is required!";
            if (!formData.address.trim()) newErrors.address = "Address is required!";

            const phonePattern = /^[6-9]\d{9}$/;
            if (!phonePattern.test(formData.phone)) newErrors.phone = "Invalid phone number!";

            if (parseInt(formData.age) < 18) newErrors.age = "You must be 18+!";
        }

        if (!checkPasswordStrength(formData.password)) {
            newErrors.password = "Must have 8+ chars, 1 uppercase, 1 number, 1 special char!";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle Login or Signup
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());

        if (!validateForm(userData)) return;

        const url = isSignup
            ? "http://localhost:5000/api/auth/signup"
            : "http://localhost:5000/api/auth/login";

        try {
            const { data } = await axios.post(url, userData, {
                headers: { "Content-Type": "application/json" },
            });

            // Store token in localStorage
            localStorage.setItem("authToken", data.token);

            setFlashMessage({ message: data.message, type: "success" });

            setTimeout(() => {
                navigate(isSignup ? "/patient/dashboard" : "/patient/dashboard");
            }, 1000);
        } catch (error) {
            setFlashMessage({
                message: error.response?.data?.error || "Server Error! Try again later.",
                type: "danger",
            });
        }
    };

    return (
        <div id="auth-page">
            <div id="auth-box">
                {flashMessage.message && (
                    <div className={`auth-alert auth-alert-${flashMessage.type}`}>
                        {flashMessage.message}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <h2>{isSignup ? "Create an Account" : "Welcome Back"}</h2>

                    {isSignup && (
                        <>
                            <div className={`auth-input-box ${errors.name ? "auth-error" : ""}`}>
                                <input type="text" name="name" id="auth-name" required />
                                <label htmlFor="auth-name">Full Name</label>
                                {errors.name && <span className="auth-error-text">{errors.name}</span>}
                            </div>
                            <div className={`auth-input-box ${errors.address ? "auth-error" : ""}`}>
                                <input type="text" name="address" id="auth-address" required />
                                <label htmlFor="auth-address">Address</label>
                                {errors.address && <span className="auth-error-text">{errors.address}</span>}
                            </div>
                            <div className={`auth-input-box ${errors.phone ? "auth-error" : ""}`}>
                                <input type="tel" name="phone" id="auth-phone" required />
                                <label htmlFor="auth-phone">Phone Number</label>
                                {errors.phone && <span className="auth-error-text">{errors.phone}</span>}
                            </div>
                            <div className="auth-input-box">
                                <select name="gender" id="auth-gender" required>
                                    <option value="" disabled selected>
                                        Choose Gender
                                    </option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className={`auth-input-box ${errors.age ? "auth-error" : ""}`}>
                                <input type="number" name="age" id="auth-age" required />
                                <label htmlFor="auth-age">Age</label>
                                {errors.age && <span className="auth-error-text">{errors.age}</span>}
                            </div>
                        </>
                    )}

                    <div className="auth-input-box">
                        <input type="email" name="email" id="auth-email" required />
                        <label htmlFor="auth-email">Email</label>
                    </div>

                    <div className={`auth-input-box ${errors.password ? "auth-error" : ""}`}>
                        <input type="password" name="password" id="auth-password" required />
                        <label htmlFor="auth-password">Password</label>
                        {errors.password && <span className="auth-error-text">{errors.password}</span>}
                    </div>

                    <button type="submit" id="auth-button">
                        {isSignup ? "Sign Up" : "Login"}
                    </button>

                    <p>
                        {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
                        <span className="auth-toggle-link" onClick={() => setIsSignup(!isSignup)}>
                            {isSignup ? "Login" : "Sign Up"}
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Auth;
