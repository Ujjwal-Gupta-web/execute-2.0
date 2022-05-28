import React from 'react'
import {Link} from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
 
}));

export default function Navbar(){
    const classes = useStyles();

    return(

        <>
       
      <Toolbar>

          <div className={classes.navlinks}>
             <Link className={classes.link} to="/">Home</Link>
            <Link className={classes.link} to="/events">Events</Link>
            <Link className={classes.link} to="/services"> Services</Link>
            <Link className={classes.link} to="/login">Login</Link>
            <Link className={classes.link} to="/signup">Signup</Link>
          </div>
      </Toolbar>


       
        </>

    )
}