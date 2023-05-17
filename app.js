const express=require('express');
const bodyParser = require('body-parser');

const postgresDB=require('./Config/PostgreSQLConfig');

const app=express();
    
app.use(express.json());

app.use(bodyParser.json());

postgresDB.client.connect((err)=>{
    if(err){
        console.log(err);
    }
});

postgresDB.createTables();

module.exports =app;