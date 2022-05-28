import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Events from '../pages/Events';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

export default function Router(){

    return (
        <>

        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/events" element={<Events />}></Route>
            <Route exact path="/services" element={<Services />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
        </Routes>



        </>
    )
}