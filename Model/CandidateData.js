const {sql}=require('../Config/PostgreNeonConfig');

async function getAllCandidatesByElectionIdAndStatus(id,status) {
    const result = await sql`SELECT Candidate.id, Candidate.status, Student.name AS candidate_name, Election.name AS election_name
    FROM Candidate
    JOIN Student ON Candidate.student_id = Student.id
    JOIN Election ON Candidate.election_id = Election.id
    WHERE Candidate.Status = ${status}::text AND Election.id = ${id}::int4;`;
    return result;
};

async function createCandidate(student_id,election_id){
    const result = await sql`INSERT INTO Candidate (student_id,election_id,status) VALUES (${student_id}::int4,${election_id}::int4,'pending') RETURNING *;`;
    return result;
}

module.exports={getAllCandidatesByElectionIdAndStatus,createCandidate};
