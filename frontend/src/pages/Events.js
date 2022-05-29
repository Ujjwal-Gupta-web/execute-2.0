import React from 'react'
import Navbar from "../components/Navbar"
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import EventCard from '../components/EventCard'
import {Link} from 'react-router-dom'

const events = [
    {
      id: 1,
      url: './images/Birthday.jpg',
      title: 'Birthday'
    },
    {
      id: 2,
      url: './images/Wedding.jpg',
      title: 'Wedding'
    },
    {
      id: 3,
      url: './images/Reception.jpg',
      title: 'Reception'
    },
    {
      id: 4,
      url: './images/Party.jpg',
      title: 'Party'
    },
  ];
  
const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: "#ea580c",
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    // height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Events() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
            <Navbar />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" style={{color: "white"}} gutterBottom>
            Life is an event. Make it memorable.
            </Typography>
            <Typography variant="h5" align="center" style={{color: "#e6e6e6"}} paragraph>
            Our business will make memories with you.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {events.map((event,i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <Link className={classes.link} to={`/custom-event#${event.id}`}>
                  <EventCard
                      url= {event.url}
                      title={event.title}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Event Wala
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                We are event wala
        </Typography>
      </footer>
    </>
  );
}
