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
        if(err){
            return res.send(err);
        }
        else{
            return res.json({
                data: results
            })
        }
    });
});

//connect to server
//process.env.PORT, process.env.IP
app.listen(process.env.PORT, process.env.IP, () =>{
    console.log('Connected to server');
});

module.export