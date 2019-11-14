const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(cors());

const mysql = require('mysql');

//create database connection
const db = mysql.createConnection({
    host: "budgetdb.c7vpkccnw719.us-east-2.rds.amazonaws.com",
    user: "mariahm",
    password: "FWeRLbqYkaaGv90K7WVG",
    database: "budgetdb"
});

db.connect(function(err){
    if(err){console.log('error')};
})

//connect to server
app.listen(process.env.PORT, process.env.IP, () =>{
    console.log('Connected to server');
});