const {client}=require('../Config/PostgreSQLConfig');

async function getAllFaculties(){
    const query="SELECT * from Faculty";
    return (await client.query(query)).rows;
}

async function getFacultyById(id){
    const query=`SELECT  * from Faculty WHERE id=${id}`;
    return (await client.query(query)).rows[0];
}


module.exports={getAllFaculties,getFacultyById};