import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";


const Navbar = ({ isHome = false }) => {
    const user = JSON.parse(localStorage.getItem("profile"))
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
        navigate("/");

    }
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>
                        Login-Signup Assignment
                    </Link>
                </div>
                <div class="navbar-right">
                    {isHome && (
                        <div className="topnav-right" >
                            <h4 className='topnav-item'>{user.firstName + " " + user.lastName}</h4>
                            <button className="topnav-button btn navbar-btn btn-danger" onClick={handleLogout}>Logout</button>
                        </div>
                    )}

                </div>
            </nav>

        </div >




    )
}

export default Navbar