const {createCandidate}=require('../../Model/CandidateData');
const {getStudentById}=require('../../Model/StudentData');
const {getElectionById}=require('../../Model/ElectionData');


async function applyToBecomeCandidate(req,res){
    const{studentId,electionId}=req.body;
    try {
        //check student's department id and election's department id are same
        const election=await getElectionById(electionId);
        const student=await getStudentById(studentId);
        if(election.department_id!==student.department_id)return res.status(400).json({'message':'Bad Request'});

        const candidate=await createCandidate(studentId,electionId);
        return res.json(candidate);
    } catch (error) {
        res.status(500).json({"message":`${error}`});
    }
}

module.exports=applyToBecomeCandidate;