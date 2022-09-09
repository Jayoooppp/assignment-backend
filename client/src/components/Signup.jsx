import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from '../actions/auth';
import Navbar from './Navbar';


const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialState = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" }
    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.firstName === "" || formData.lastName === "" || formData.email === "" || formData.password === "" || formData.confirmPassword === "") {
            alert("Please fill all the fields")
        }
        else if (formData.password !== formData.confirmPassword) {
            alert("Passwords does not match")
        } else {
            dispatch(signup(formData, navigate));
        }
    }

    const handleShowPassword = (e) => {
        setShowPassword(!showPassword)


    }

    return (
        <>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <Navbar />
                    <div style={{ marginTop: "80px" }}>
                        <form>
                            <h3>Sign Up</h3>

                            <div className="mb-3">
                                <label>First name</label>
                                <input
                                    name="firstName"
                                    type="text"
                                    className="form-control"
                                    placeholder="First name"
                                    onChange={(e) => {
                                        setFormData({ ...formData, firstName: e.target.value })
                                    }}
                                    required
                                    value={formData.firstName}
                                    autoFocus
                                />
                            </div>

                            <div className="mb-3">
                                <label>Last name</label>
                                <input type="text" className="form-control" placeholder="Last name"
                                    name="lastName"
                                    onChange={(e) => {
                                        setFormData({ ...formData, lastName: e.target.value })
                                    }}
                                    required
                                    value={formData.lastName}

                                />
                            </div>

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
                                    required
                                    value={formData.email}

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

                            <div className="mb-3">
                                <label>Confirm Password</label>
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm password"
                                    onChange={(e) => {
                                        setFormData({ ...formData, confirmPassword: e.target.value })
                                    }}
                                    required
                                    form={formData.confirmPassword}
                                />
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                                    Sign Up
                                </button>
                            </div>
                            <p className="forgot-password text-right">
                                Already registered <a href="/">sign in?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup

