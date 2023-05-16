const express=require('express');
const bodyParser = require('body-parser');

const postgresDB=require('./Config/PostgreSQLConfig');

const app=express();
    
app.use(express.json());

app.use(bodyParser.json());

postgresDB.connect((err)=>{
    console.log(err);
})

module.exports =app;