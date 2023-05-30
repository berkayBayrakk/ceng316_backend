const {sql}=require('../Config/PostgreNeonConfig');


async function getStudentByEmail(email){
    const result=await sql`SELECT * from Student WHERE email=${email}::text`
    return result[0];
};

async function updateStudentRoleByStudentId(role, id) {
    const result= await sql`UPDATE Student SET role = ${role}::text WHERE id=${id}::int4`;
    return result;
}

module.exports={getStudentByEmail, updateStudentRoleByStudentId};
