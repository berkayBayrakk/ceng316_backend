const {sql}=require('../Config/PostgreNeonConfig');

async function getFormIdAndCandidateNameByCandidateId(id) {
    const result = await sql `SELECT Form.id , Student.name as candidate_name
    FROM Form
    JOIN Candidate ON Form.candidate_id = Candidate.id
    JOIN Student ON Candidate.student_id = Student.id
    WHERE Candidate.id = ${id}::int4;`;
    return result;
}

async function getAllForms() {
    const result = await sql `SELECT * FROM Form`;
    return result;
}

async function getAllPendingForms() {
    const result = await sql`SELECT Form.id, Form.type, Form.name
    FROM Form
    JOIN Candidate ON Form.candidate_id = Candidate.id
    WHERE Candidate.status = 'pending';
    `;
    return result;
}

module.exports={getFormIdAndCandidateNameByCandidateId, getAllForms, getAllPendingForms};