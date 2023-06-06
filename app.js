const express=require('express');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const specs= require('./Config/SwaggerConfig');

const{createStudentInstances} =require('./Config/seed');
const{createFacultyInstances} =require('./Config/seed');
const{createDeaprtmentInstances} =require('./Config/seed');
const{createElectionInstances} =require('./Config/seed');
const{createCandidateInstances} =require('./Config/seed');
const{changeRoles} =require('./Config/seed');
changeRoles();
//createCandidateInstances();
//createStudentInstances();
// createDeaprtmentInstances();
//createFacultyInstances();
//createElectionInstances();
const app=express();

const cors=require('./Middleware/cors')
//createStudentInstances();
app.use(express.json());

app.use(bodyParser.json());



  
// Enable CORS for all routes
app.use(cors);

//routes
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/auth',require('./Routes/auth'));

//app.use(verifyJwt);
app.use('/student',require('./Routes/student'));
app.use('/faculty',require('./Routes/faculty'));
app.use('/election',require('./Routes/election'));
app.use('/department',require('./Routes/department'));
app.use('/candidate',require('./Routes/candidate'));

module.exports =app;