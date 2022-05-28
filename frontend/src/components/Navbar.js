import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    color: "white"
  }
}));



export default function ButtonAppBar() {
  const classes = useStyles();

  

  return (
    <div className={classes.root}>
      <AppBar position="static" className="">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Event wala
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