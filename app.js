const express=require('express');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const specs= require('./Config/SwaggerConfig');
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



//routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/auth',require('./Routes/auth'));



module.exports =app;