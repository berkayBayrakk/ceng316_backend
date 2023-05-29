
const bcrypt=require('bcrypt');
const {sql}=require('./PostgreNeonConfig')
async function createFacultyInstances(){
    await sql`INSERT INTO faculty (name) VALUES ('Faculty 1');`;
    await sql`INSERT INTO faculty (name) VALUES ('Faculty 2');`;

}

async function createDeaprtmentInstances(){
    await sql`INSERT INTO Department (name,faculty_id) VALUES ('Department 1',1);`;
   // await sql`INSERT INTO Department (name,faculty_id) VALUES ('Department 2',1);`;
    //await sql`INSERT INTO Department (name,faculty_id) VALUES ('Department 3',2);`;
}



async function createStudentInstances(){
    const cryptedPassword=await bcrypt.hash("123",10);

    await sql`INSERT INTO Student (name,password,email,department_id) VALUES ('Student 2',${cryptedPassword}::text,'student2@gmail.com',2);`;
    //await sql`INSERT INTO Student (name,password,email,department_id) VALUES ('Student 2','${cryptedPassword}','student2@gmail.com',1);`;
    //await sql`INSERT INTO Student (name,password,email,department_id) VALUES ('Student 3','${cryptedPassword}','student3@gmail.com',2);`;
}
module.exports={createFacultyInstances,createDeaprtmentInstances,createStudentInstances};

