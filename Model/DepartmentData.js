const {client}=require('../Config/PostgreSQLConfig');


async function getAllDepartments(){
    const query="SELECT d.id as id,d.name as department_name, f.name as faculty_name, f.id as faculty_id from Department as d CROSS JOIN Faculty as f WHERE f.id=d.faculty_id";
    return (await client.query(query)).rows;
}

module.exports={getAllDepartments};