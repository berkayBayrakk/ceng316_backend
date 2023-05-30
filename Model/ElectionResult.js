const {sql}=require('../Config/PostgreNeonConfig');


// Fetch all election result.
async function getAllElectionResult() {
    const result = await sql `SELECT * FROM ElectionResult`;
    return result;
};

// Fetch single election result informations by giving election id.
async function getElectionResultByElectionId(id) {
    const result = await sql `SELECT ElectionResult.id, ElectionResult.winner_student_id, ElectionResult.votes, Student.name AS elected_name
    FROM ElectionResult
    JOIN Student ON ElectionResult.winner_student_id = Student.id
    WHERE ElectionResult.election_id = ${id}::int4;`;
    return result;
};

module.exports={getAllElectionResult, getElectionResultByElectionId};


