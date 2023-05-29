const {sql}=require('../Config/PostgreNeonConfig');

async function getAllCandidatesByElectionId(id) {
    const result = await sql`SELECT Candidate.id, Candidate.status, Student.name AS candidate_name, Election.name AS election_name
    FROM Candidate
    JOIN Student ON Candidate.student_id = Student.id
    JOIN Election ON Candidate.election_id = Election.id
    WHERE Candidate.Status = 'valid' AND Election.id = ${id}::int4;
    `;
    return result;
};

async function getAllCandidatesPending() {
    const result = await sql`SELECT Candidate.id, Student.name AS candidate_name, Election.name AS election_name
    FROM Candidate
    JOIN Student ON Candidate.student_id = Student.id
    JOIN Election ON Candidate.election_id = Election.id
    WHERE Candidate.status = 'pending';
    `;
    return result;
};


module.exports={getAllCandidatesByElectionId, getAllCandidatesPending};