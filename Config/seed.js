const {client}=require('./PostgreSQLConfig');
const bcrypt=require('bcrypt');

function createFacultyInstances(){
    const query1="INSERT INTO Faculty (name) VALUES ('Faculty 1');";
    const query2="INSERT INTO Faculty (name) VALUES ('Faculty 2');";

    client.query(query1);
    client.query(query2);

}

function createDeaprtmentInstances(){
    const query1="INSERT INTO Department (name,faculty_id) VALUES ('Department 1',1);";
    const query2="INSERT INTO Department (name,faculty_id) VALUES ('Department 2',1);";
    const query3="INSERT INTO Department (name,faculty_id) VALUES ('Department 3',2);";

    client.query(query1);client.query(query2);client.query(query3);
}



async function createStudentInstances(){
    const cryptedPassword=await bcrypt.hash("123",10);
    const query1=`INSERT INTO Student (name,password,email,department_id) VALUES ('Student 1','${cryptedPassword}','student1@gmail.com',1);`;
    const query2=`INSERT INTO Student (name,password,email,department_id) VALUES ('Student 2','${cryptedPassword}','student2@gmail.com',1);`;
    const query3=`INSERT INTO Student (name,password,email,department_id) VALUES ('Student 3','${cryptedPassword}','student3@gmail.com',2);`;

    client.query(query1);client.query(query2);client.query(query3);
}
module.exports={createFacultyInstances,createDeaprtmentInstances,createStudentInstances};

