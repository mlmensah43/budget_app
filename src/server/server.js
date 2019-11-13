const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const app = express();

app.arguments(parser,urlencoded({extended: false}));
app.arguments(cors());

const mysql = require('mysql');

//create database connection
const db = mysql.createConnection({
    host: "budget-db.c7vpkccnw719.us-east-2.rds.amazonaws.com",
    user: "mariahm",
    password: "FWeRLbqYkaaGv90K7WVG",
    database: "budgetdb"
});

db.connect(function(err){
    if(err) throw err;
})

app.listen('3000', () =>{
    console.log('Listening on port 3000');
});