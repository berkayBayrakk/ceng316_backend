
const bcrypt=require('bcrypt');
const {sql}=require('./PostgreNeonConfig')
async function createFacultyInstances(){

    //await sql`INSERT INTO faculty (name) VALUES ('Engineering Faculty');`;
    //await sql`INSERT INTO faculty (name) VALUES ('Science Faculty');`;

}
// 10 -> Engineering Faculty
// 11 -> Science Faculty 

async function createDeaprtmentInstances(){
    await sql`INSERT INTO Department (name,faculty_id) VALUES ('Computer Engineering',10);`;
    await sql`INSERT INTO Department (name,faculty_id) VALUES ('Electrical and Electronics Engineering',10);`;
    await sql`INSERT INTO Department (name,faculty_id) VALUES ('Mechanical Engineering',10);`;
    await sql`INSERT INTO Department (name,faculty_id) VALUES ('Food Engineering',10);`;
    await sql`INSERT INTO Department (name,faculty_id) VALUES ('Energy Systems Engineering',10);`;
    await sql`INSERT INTO Department (name,faculty_id) VALUES ('Bio Engineering',10);`;
    await sql`INSERT INTO Department (name,faculty_id) VALUES ('Civil Engineering',10);`;
    await sql`INSERT INTO Department (name,faculty_id) VALUES ('Chemical Engineering',10);`;
    await sql`INSERT INTO Department (name,faculty_id) VALUES ('Architecture',10);`;
    await sql`INSERT INTO Department (name,faculty_id) VALUES ('Mathematics',11);`;
    await sql`INSERT INTO Department (name,faculty_id) VALUES ('Physics',11);`;
    await sql`INSERT INTO Department (name,faculty_id) VALUES ('Chemistry',11);`;
    await sql`INSERT INTO Department (name,faculty_id) VALUES ('Molecular Biology and Genetics',11);`;

}

async function createElectionInstances(){

    //await sql`INSERT INTO Election (department_id,end_time,round,start_time) VALUES (5,'2023-6-10',1,'2023-6-6');`;
}
async function createCandidateInstances(){

    await sql`INSERT INTO Candidate (application_date,comment,election_id,status,student_id) VALUES ('2023-6-6','Trust me', 30, 'pending',24);`;
}
async function createAdminInstances(){
    const cryptedPassword=await bcrypt.hash("admin123123",10);

    await sql`INSERT INTO Admin (name,password,email,role) VALUES ('admin',${cryptedPassword}::text,admin@iyte.edu.tr,'admin');`
}


//berkay123
//enis123
//enes123
async function createStudentInstances(){
    const cryptedPassword=await bcrypt.hash("test123",10);
    /*
    await sql`INSERT INTO Student (name,password,email,department_id,role) VALUES ('admin',${cryptedPassword}::text,'admin@iyte.edu.tr',5,'admin');`;
    await sql`INSERT INTO Student (name,password,email,department_id,role) VALUES ('Berkay B',${cryptedPassword}::text,'adminberkay@std.iyte.edu.tr',5,'admin');`;
    await sql`INSERT INTO Student (name,password,email,department_id,role) VALUES ('Enes Dogan',${cryptedPassword}::text,'adminenes@std.iyte.edu.tr',5,'admin');`;
    await sql`INSERT INTO Student (name,password,email,department_id,role) VALUES ('Eren O',${cryptedPassword}::text,'admineren@std.iyte.edu.tr',6,'admin');`;
    */
    //await sql`INSERT INTO Student (name,password,email,department_id,role) VALUES ('Fatih Güzel',${cryptedPassword}::text,'fatihguzel@std.iyte.edu.tr',7,'admin');`;
    //await sql`INSERT INTO Student (name,password,email,department_id) VALUES ('Enis Güzel',${cryptedPassword}::text,'enisguzel@std.iyte.edu.tr',7);`;
    //await sql`INSERT INTO Student (name,password,email,department_id,role) VALUES ('Eyup Emre Cakir',${cryptedPassword}::text,'eyupemre@std.iyte.edu.tr',5,'student');`;
    //await sql`INSERT INTO Student (name,password,email,department_id,role) VALUES ('Eren Ozdemir',${cryptedPassword}::text,'erenozdemir@std.iyte.edu.tr',5,'admin');`;
    //await sql`INSERT INTO Student (name,password,email,department_id) VALUES ('Yakup Emir',${cryptedPassword}::text,'yakupemir@std.iyte.edu.tr',6);`;
    //await sql`INSERT INTO Student (name,password,email,department_id) VALUES ('Ceyda Korkmaz',${cryptedPassword}::text,'ceydakorkmaz@std.iyte.edu.tr',6);`;
    //await sql`INSERT INTO Student (name,password,email,department_id) VALUES ('Gizem Sanli',${cryptedPassword}::text,'gizemsanli@std.iyte.edu.tr',7);`;
    //await sql`INSERT INTO Student (name,password,email,department_id) VALUES ('Ali Ucar',${cryptedPassword}::text,'aliucar@iyte.edu.tr',7);`;
    //await sql`INSERT INTO Student (name,password,email,department_id) VALUES ('Irem Derler',${cryptedPassword}::text,'iremderler@std.iyte.edu.tr',8);`;
    
}

async function deleteStudents() {
    await sql`DELETE FROM Student`;
}
async function deleteCandidate() {
    await sql`DELETE FROM Candidate`;
}
async function deleteForms() {
    await sql`DELETE FROM Form`;
}
async function deleteDepartments() {
    await sql`DELETE FROM Department`;
}
async function deleteFaculty() {
    await sql`DELETE FROM Faculty`;
}

module.exports={createCandidateInstances,createElectionInstances,deleteFaculty, deleteDepartments,deleteForms, deleteCandidate,deleteStudents,createFacultyInstances,createDeaprtmentInstances,createStudentInstances,createAdminInstances};

