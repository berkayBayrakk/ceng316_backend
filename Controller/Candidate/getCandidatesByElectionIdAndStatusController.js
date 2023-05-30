const {getAllCandidatesByElectionIdAndStatus}=require('../../Model/CandidateData');

async function getCandidatesByElectionIdAndStatus(req,res){
    const electionId=req.query.electionId;
    const status=req.query.status;
    console.log(electionId,status);
    try {
        const candidates=await getAllCandidatesByElectionIdAndStatus(electionId,status);
        if(candidates){
            return res.json(candidates);
        }
        return  res.sendStatus(404);
    } catch (error) {
        res.status(500).json({"message":`${error}`});
    }
}

module.exports=getCandidatesByElectionIdAndStatus;