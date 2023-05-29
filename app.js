const express=require('express');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const specs= require('./Config/SwaggerConfig');

const postgresDB=require('./Config/PostgreSQLConfig');
const {}=require('./Config/PostgreNeonConfig');
const{createFacultyInstances,createDeaprtmentInstances,createStudentInstances} = require('./Config/seed')
const app=express();
    
app.use(express.json());

app.use(bodyParser.json());

//createFacultyInstances().then((obj)=>{console.log(obj)})

/*postgresDB.client.connect((err)=>{
    if(err){
        console.log(err);
    }
});

postgresDB.createTables().then((obj)=>{console.log(obj)});
*/
//createFacultyInstances().then(()=>{})
//createDeaprtmentInstances().then(()=>{})
//createStudentInstances().then(()=>{})

//routes
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/auth',require('./Routes/auth'));

app.use('/faculty',require('./Routes/faculty'));

app.use('/department',require('./Routes/department'));

module.exports =app;