const {sql}=require('../Config/PostgreNeonConfig');


async function getStudentByEmail(email){
    const result=await sql`SELECT * from Student WHERE email=${email}::text`
    return result[0];
}

module.exports={getStudentByEmail};