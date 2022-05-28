import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useNavigate } from 'react-router-dom'
import {signup_user} from '../controllers/user'
import {signup_business} from '../controllers/business'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [business_owner_name, setBusiness_owner_name] = useState("");
  const [business_email, setBusiness_email] = useState("");
  const [business_password, setBusiness_password] = useState("");
  const [business_name, setBusiness_name] = useState("");
  const [business_mobile_number, setBusiness_mobile_number] = useState("");
  const [business_gst, setBusiness_gst] = useState("");
  const [business_website_url, setBusiness_website_url] = useState("");
  const [business_description, setBusiness_description] = useState("");
  const [business_service_type, setBusiness_service_type] = useState("");
  const [business_city, setBusiness_city] = useState("");
  const [type, setType] = useState(10);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(type===10){
      let obj={
        name: business_owner_name,
        email: business_email,
        password: business_password,
        contact: business_mobile_number,
      }
      signup_user(obj).then(data=>{
        console.log(data)
        if(data.tag){
          localStorage.setItem("user",data.token)
        }
        else{
          alert(data.message);
        }
      });

    }
    else{
      let obj={
        business_owner_name,
        business_email,
        business_password,
        business_name,
        business_mobile_number,
        business_gst,
        business_website_url,
        business_description,
        business_service_type,
        business_city
      }
      signup_business(obj).then(data=>{
        console.log(data)
        if(data.tag){
          localStorage.setItem("business",data.token);
        }
        else{
          alert(data.message);
        }
      })
      
    }

  };

  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />

          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#ea580c" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >


              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Who you are?</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={type}
                      label="Who you are?"
                      onChange={(e) => setType(e.target.value)}
                    >
                      <MenuItem value={10}>Customer</MenuItem>
                      <MenuItem value={20}>Businessman</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Full Name"
                    autoFocus
                    onChange={(e) => {
                      setBusiness_owner_name(e.target.value);
                    }}
                    value={business_owner_name}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => {
                      setBusiness_email(e.target.value);
                    }}
                    value={business_email}
                  />
                </Grid>
                {type===20 &&<Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="business_name"
                    label="business_name"
                    name="business_name"
                    autoComplete="business_name"
                    onChange={(e) => {
                      setBusiness_name(e.target.value);
                    }}
                    value={business_name}
                  />
                </Grid>}
                {<Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => {
                      setBusiness_password(e.target.value);
                    }}
                    value={business_password}
                  />
                </Grid>}

                { 
                  <Grid item xs={12}>
                  <TextField
                    // autoComplete="given-name"
                    // name="firstName"
                    required
                    fullWidth
                    id="business_mobile_number"
                    label="Mobile Number"
                    autoFocus
                    onChange={(e) => {
                      setBusiness_mobile_number(e.target.value);
                    }}
                    value={business_mobile_number}
                    />
                  </Grid>
                }
                {type===20 && <Grid item xs={12}>
                  <TextField
                    // autoComplete="given-name"
                    // name="firstName"
                    required
                    fullWidth
                    id="business_gst"
                    label="business_gst"
                    autoFocus
                    onChange={(e) => {
                      setBusiness_gst(e.target.value);
                    }}
                    value={business_gst}
                  />
                </Grid>}
                {type===20 &&<Grid item xs={12}>
                  <TextField
                    // autoComplete="given-name"
                    // name="firstName"
                    required
                    fullWidth
                    id="business_website_url"
                    label="business_website_url"
                    autoFocus
                    onChange={(e) => {
                      setBusiness_website_url(e.target.value);
                    }}
                    value={business_website_url}
                  />
                </Grid>}
                {type===20 &&<Grid item xs={12}>
                  <TextField
                    // autoComplete="given-name"
                    // name="firstName"
                    required
                    fullWidth
                    id="business_description"
                    label="business_description"
                    autoFocus
                    onChange={(e) => {
                      setBusiness_description(e.target.value);
                    }}
                    value={business_description}
                  />
                </Grid>}
                {type===20 &&<Grid item xs={12}>
                  <TextField
                    // autoComplete="given-name"
                    // name="firstName"
                    required
                    fullWidth
                    id="business_service_type"
                    label="business_service_type"
                    autoFocus
                    onChange={(e) => {
                      setBusiness_service_type(e.target.value);
                    }}
                    value={business_service_type}
                  />
                </Grid>}
                {type===20 && <Grid item xs={12}>
                  <TextField
                    // autoComplete="given-name"
                    // name="firstName"
                    required
                    fullWidth
                    id="business_city"
                    label="business_city"
                    autoFocus
                    onChange={(e) => {
                      setBusiness_city(e.target.value);
                    }}
                    value={business_city}
                  />
                </Grid>}

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
