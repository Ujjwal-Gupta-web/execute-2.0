import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ServiceCard from '../components/ServiceCard'
import Filter from '../components/Filter';
import {get_services} from "../controllers/service"
import {get_businesses} from "../controllers/business"

// const services = [
//   {
//     "profileimage": './images/Birthday.jpg',
//     "name": 'Chai Suta Bar',
//     "service": "We provide Chai and sutta for special occassions.",
//     "address": "Shop No. 28 & 29 Bahuguna Market Auckland Road,Ashok Nagar, near NCZCC, Prayagraj, Uttar Pradesh 211001",
//     "city": "Prayagraj",
//     "state": "Uttar Pradesh",
//     "price": "5000",
//     reviews: 510,
//     rating: 4.7
//   },
//   {
//     "profileimage": './images/Party.jpg',
//     "name": 'Top & Town',
//     "address": "Shop No. 28 & 29 Bahuguna Market Auckland Road,Ashok Nagar, near NCZCC, Prayagraj, Uttar Pradesh 211001",
//     "city": "Prayagraj",
//     "state": "Uttar Pradesh",
//     "price": "2800",
//     reviews: 51,
//     rating: 4.7
//   },
//   {
//     "profileimage": './images/Reception.jpg',
//     "name": 'Eat On',
//     "address": "Shop No. 28 & 29 Bahuguna Market Auckland Road,Ashok Nagar, near NCZCC, Prayagraj, Uttar Pradesh 211001",
//     "city": "Prayagraj",
//     "state": "Uttar Pradesh",
//     "price": "10,000",
//     reviews: 10,
//     rating: 3.2
//   },
//   {
//     "profileimage": './images/Wedding.jpg',
//     "name": 'KFC',
//     "address": "Shop No. 28 & 29 Bahuguna Market Auckland Road,Ashok Nagar, near NCZCC, Prayagraj, Uttar Pradesh 211001",
//     "city": "Prayagraj",
//     "state": "Uttar Pradesh",
//     "price": "3000",
//     reviews: 588,
//     rating: 4.1
//   },
// ];

const locations=["Prayagraj","Mumbai","London","England","Kolkata"];

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Services() {
  const [services,setServices]=useState([]);
  const [businesses,setBussinesses]=useState([]);


  useEffect(()=>{
    get_services().then(data=>setServices(data.message));
    get_businesses().then(data=>setBussinesses(data.business));
    console.log(businesses);
    console.log(services);
  },[])
  console.log(businesses);
  console.log(services);
  const classes = useStyles();
  return (
    <>
      <Navbar/>
      <Filter locations={locations}/>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}>
            {
              businesses && businesses.map((service,i) => (
              <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                { service && <ServiceCard service={service} />}
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
  )
}
