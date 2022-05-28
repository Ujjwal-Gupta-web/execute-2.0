import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import Events from '../pages/Events';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

export default function Router(){

    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/events" element={<Events />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
        </Routes>
        </BrowserRouter>



        </>
    )
}