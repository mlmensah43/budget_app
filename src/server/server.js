const express = require('express');
const app = express();
const cors = require('cors');


// app.use(express.urlencoded({extended: false}));
app.use(cors());



//connect to server
const port = process.env.PORT || 3000
app.listen(port, () =>{
    console.log('Connected to server');
});
app.use(express.static('public'));
app.use(express.json());


//create database connection
const mysql = require('mysql');
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
            console.log('Fetch unsuccessful');
        }
        else{
            return res.send(results);
            console.log('Fetch successful');
        }

    });
});


//add user to database
// const INSERT_USER = "INSERT INTO users (first_name, last_name, email, password) VALUES ('"+data.first_name+"', '"+data.last_name+"', '"+data.email+"', '"+data.password+"')";
app.post('/api', (req, res) =>{
    console.log('received request')
    
    const data = req.body;
    console.log(data);
    db.query("INSERT INTO users (first_name, last_name, email, password) VALUES ('"+data.first_name+"', '"+data.last_name+"', '"+data.email+"', '"+data.password+"')", (err, results)=>{
        
        if(err){
            return res.send(err);
            console.log('Sign up unsuccessful');
        }
        else{
            return res.send('added user');
            console.log('Sign up successful');
        }

    });
});

// app.get('/api', (req, res) =>{
//     res.send('Welcome to the API page!');
// });



module.export