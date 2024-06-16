require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const app = express();

//Config json and form data response
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Solve CORS
app.use(cors({credentials: true, origin:"https://portfolio2024-e4t3.vercel.app"})); 

app.use(express.json());  

//Uploads
app.use('/uploads', express.static(path.resolve(__dirname, 'uploads', 'photos')));

//Db Connection:
const conn = require("./db/conn");

conn();

//Routes: 
const port = process.env.PORT;

const routes = require("./routes/router");
app.use('/', routes);

app.listen(port, () => {
    console.log("API it's running.");
});