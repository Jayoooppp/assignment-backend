import React, { useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'

import Login from './components/Login'
import SignUp from './components/Signup'
import Home from './components/Home'
import ProfileEdit from './components/ProfileEdit'

function App() {
  const user = JSON.parse(localStorage.getItem("profile"))



  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={(!user ? <Login /> : <Navigate to="/home" />)} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/edit" element={<ProfileEdit />} />

      </Routes>

    </BrowserRouter >
  );
}

export default App;
