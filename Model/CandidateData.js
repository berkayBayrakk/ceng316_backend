const {sql}=require('../Config/PostgreNeonConfig');

async function getAllCandidatesByElectionId() {
    const result = await sql``;
    return result;
}

module.exports={getAllCandidates};