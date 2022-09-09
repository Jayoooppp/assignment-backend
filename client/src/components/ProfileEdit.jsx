import React, { useState } from 'react'
import "./ProfileEdit.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { update } from '../actions/user';

const ProfileEdit = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("profile"))
    const [data, setData] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user?.phone || "",
        imageURL: user?.imageURL || "",
        gender: user?.gender || "",
        dob: user?.dob || "",


    })
    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/home");

    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.firstName === "" || data.lastName === "" || data.email === "" || data.phone === "" || data.imageURL === "" || data.gender === "" || data.dob === "") {
            alert("Please fill all the details")
        } else {
            dispatch(update(data, user._id, navigate));
            navigate("/home")
        }


    }

    return (
        <div class="container">
            <div class="row gutters">
                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                    <div class="card h-100">
                        <div class="card-body">
                            <div class="account-settings">
                                <div class="user-profile">
                                    <div class="user-avatar">
                                        <img src={user.imageURL} alt="Maxwell Admin" />
                                    </div>
                                    <h5 class="user-name">{user.firstName + " " + user.lastName} </h5>
                                    <h6 class="user-email">{user.email}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                    <div class="card h-100">
                        <div class="card-body">
                            <div class="row gutters">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h6 class="mb-2 text-primary">Details</h6>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label for="firstName">First Name</label>
                                        <input type="text" name="firstName" class="form-control" id="firstName" placeholder="first name" required value={data.firstName} onChange={handleChange} />
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label for="lastName">Last Name</label>
                                        <input type="text" name="lastName" class="form-control" id="fullName" placeholder="last name" required value={data.lastName} onChange={handleChange} />
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" name="email" class="form-control" id="eMail" placeholder="Enter email ID" required value={data.email} onChange={handleChange} />
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label for="phone">Phone</label>
                                        <input type="text" name="phone" class="form-control" id="phone" placeholder="Enter phone number" required value={data.phone} onChange={handleChange} />
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label for="imageURL">Profile Image URL</label>
                                        <input type="url" class="form-control" id="imageURL" name="imageURL" placeholder="profile image url" required value={data.imageURL} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div class="row gutters">
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label for="Street">Gender</label>
                                        <select name="gender" required className='form-control' value={data.gender} onChange={handleChange}>
                                            <option value="none" selected>Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">other</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label for="dob">Date of Birth</label>
                                        <input type="date" id="dob" name="dob" className='form-control' value={data.dob} onChange={handleChange} />
                                    </div>
                                </div>

                            </div>
                            <div class="row gutters">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="text-right">
                                        <button type="button" id="submit" name="submit" class="btn btn-edit btn-secondary" onClick={handleCancel}>Cancel</button>
                                        <button type="button" id="submit" name="submit" class="btn btn-edit btn-primary" onClick={handleSubmit}>Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileEdit