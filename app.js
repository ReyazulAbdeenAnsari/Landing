const express = require('express');
const fs = require('fs');
const path = require("path");
const app = express();
const port = 80;

// Important Lines
app.use('/static', express.static('static')) /*Giving folder access --  express module*/ 
app.use(express.urlencoded()); /*to getting data from a html form*/ 
app.set('view engine','pug'); /*setting view engine to pug*/ 
app.set('LandingPage', path.join(__dirname,'LandingPage')); /*Setting Path and directory -- path module*/ 

// targeting the index file to show in browser
app.get('/', (req,res) => {
    res.status(200).render('index.pug');
})

//taking data out from the html form
app.post('/', (req,res) => {
    let name = req.body.name;
    let email = req.body.email;
    let num = req.body.number;
    let age = req.body.age;
    let data = (`Client Name is ${name}, him/her email ${email}, him/her number ${num} and him/her age is ${age}`);
    fs.writeFileSync(name+'.txt', data); //creating a file and storing data
    res.status(200).render('index.pug') //rendring the template
})
app.listen(80, ()=>{
    console.log("Server Started Successfully " + port);
})