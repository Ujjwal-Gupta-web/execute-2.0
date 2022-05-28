import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {red} from '@mui/material/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  navbar: {
    backgroundColor: "#e6e6e6",
    borderRadius: "0 0 15px 15px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
    fontFamily: ['Calistoga', "cursive"],
    fontSize: "3.5rem",
  },
  link: {
    textDecoration: "none",
    color: "red",
    fontSize: "1.2rem",
    fontWeight: "bold",
    fontFamily : ["Poppins", "sans-serif"]
  }
}));



export default function ButtonAppBar() {
  const classes = useStyles();

  

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className="text-orange-600" to="/">Event wala</Link>
          </Typography>
          <Button color="inherit">
            <Link className={classes.link} to="/">Home</Link>
         </Button>
          <Button color="inherit">
            <Link className={classes.link} to="/events">Events</Link>
         </Button>
          <Button color="inherit">
            <Link className={classes.link} to="/services"> Services</Link>
         </Button>
          <Button color="inherit">
            <Link className={classes.link} to="/login">Login</Link>
         </Button>
          <Button color="inherit">
            <Link className={classes.link} to="/signup">Signup</Link>
         </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}