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
    if(err){console.log('error');}
    else{
        console.log('Database connection succesfull');
    }
})

//query database
const SELECT_ALL = 'SELECT * FROM users'
app.get('/api', (req, res) =>{
    db.query(SELECT_ALL, (err, results)=>{
        console.log(results);
        if(err){
            return res.send(err);
        }
        else{
            return res.send(results);
        }

    });
});

// app.get('/api', (req, res) =>{
//     res.send('Welcome to the API page!');
// });

//connect to server
const port = process.env.PORT;
app.listen(port, () =>{
    console.log('Connected to server');
});

module.export