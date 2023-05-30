const {sql}=require('../Config/PostgreNeonConfig');

async function isStudentVoted(studentId, electionId) {
    const result = await sql`SELECT 1 FROM Vote WHERE student_id = ${studentId}::int4 AND election_id = ${electionId}::int4`;
    return result;
};

async function getVoteCountByElectionId(electionId) {
    const result = await sql`SELECT COUNT(*) AS vote_count FROM Vote
    WHERE election_id = ${electionId}::int4`;
    return result; 
};

// Get all students voted to specific election.
async function getAllVotesByElectionId(electionId) {
    const result = await sql`SELECT Student_id, Candidate_id FROM Vote WHERE election_id = ${electionId}::int4`;
    return result;
};

// Get all elections that student voted.
async function getAllElectionsByStudentId(studentId) {
    const result = await sql`SELECT election_id FROM Vote WHERE student_id = ${studentId}::int4`;
    return result;
};


module.exports(isStudentVoted, getVoteCountByElectionId, getAllVotesByElectionId, getAllElectionsByStudentId);