import React from 'react'
import {Link} from 'react-router-dom'


export default function Navbar(){

    return(

        <>

        <div className="navbar">
            <Link className="navlink" to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/services"> Services</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            
        </div>
        </>

    )
}