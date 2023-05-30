const {sql}=require('../Config/PostgreNeonConfig');

async function getAllElections() {
    const result = await sql `SELECT * FROM Election`;
    return result;
}

async function getElectionById(id) {
    const result = await sql `SELECT * FROM Election WHERE id=${id}::int4`;
    return result;
};


async function getAllElectionsActive() {
    const result = await sql `SELECT * FROM Election WHERE start_time <= CURRENT_TIME AND end_time > CURRENT_TIME`;
    return result;
};

async function getAllElectionsNotStarted() {
    const result = await sql `SELECT * FROM Election WHERE start_time > CURRENT_TIME`;
    return result;
};

async function getAllElectionsFinished() {
    const result = await sql `SELECT * FROM Election WHERE end_time <= CURRENT_TIME`;
    return result;
}

module.exports={getAllElections,getElectionById,getAllElectionsNotStarted,getAllElectionsActive,getAllElectionsFinished}; 