import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from '../actions/auth';
import Navbar from './Navbar';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const initialState = { email: "", password: "" }
    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.email === "" || formData.password === "") {
            alert("Please fill all fields")
        } else {
            dispatch(login(formData, navigate));

        }


    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword);

    }
    return (
        <>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <Navbar />
                    <form method="post">
                        <h3>Sign In</h3>

                        <div className="mb-3">
                            <label>Email address</label>
                            <input
                                name="email"
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                onChange={(e) => {
                                    setFormData({ ...formData, email: e.target.value })
                                }}
                                value={formData.email}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Enter password"
                                onChange={(e) => {
                                    setFormData({ ...formData, password: e.target.value })
                                }}
                                required
                                value={formData.password}

                            />
                            &nbsp;
                            <input type="checkbox" onClick={handleShowPassword} /> Show Password

                        </div>



                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                        <p className="forgot-password text-right">
                            Don't have account <a href="/sign-up">sign up?</a>
                        </p>
                    </form >
                </div>
            </div>
        </>
    )
}

export default Login