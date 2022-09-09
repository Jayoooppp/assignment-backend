import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import Profile from './Profile';
import { useSelector } from 'react-redux';
function Home() {

    // window.location.reload(false);
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("profile"))
    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    }, [])



    return (
        <>
            <Navbar isHome="true" />
            <Profile />

        </>
    )


}

export default Home