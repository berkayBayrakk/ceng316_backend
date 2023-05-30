const express=require('express');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const specs= require('./Config/SwaggerConfig');

const verifyJwt=require('./Middleware/verifyJwt')

const app=express();
    
app.use(express.json());

app.use(bodyParser.json());


//routes
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/auth',require('./Routes/auth'));

//app.use(verifyJwt);

app.use('/faculty',require('./Routes/faculty'));
app.use('/election',require('./Routes/election'));
app.use('/department',require('./Routes/department'));
app.use('/candidate',require('./Routes/candidate'));

module.exports =app;