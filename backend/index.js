const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");

// API ROUTES
const userRoutes = require("./routes/userRoutes")
const businessRoutes = require("./routes/businessRoutes")

// DOTENV CONFIG
require('dotenv').config();

// ESSENTIAL MIDDLEWARES
app.use(cors());
app.use(express.json());

// DATABASE CONNECTION
const DB = process.env.DATABASE;
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Database connected.");
}).catch((err) => {
    console.log("Database error");
    console.log(err);
});


// if(process.env.NODE_ENV==='production'){
//     app.use(express.static("client/build"));
//     const path=require("path");
//     app.get("*",(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'));
//     })
// }


// APIS
app.use("/api/user", userRoutes);
app.use("/api/business", businessRoutes);


app.listen(port, () => {
    console.log(`The server is up and running at port ${port}`);
})