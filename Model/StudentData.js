const {client}=require('../Config/PostgreSQLConfig');


async function getStudentByEmail(email){
    const query=`SELECT * from Student WHERE email='${email}'`;
    return (await client.query(query)).rows[0];
}

module.exports={getStudentByEmail};