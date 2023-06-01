const {createCandidate}=require('../../Model/CandidateData');
const {getStudentById}=require('../../Model/StudentData');
const {getElectionById}=require('../../Model/ElectionData');
const {createForm}=require('../../Model/FormData');




async function applyToBecomeCandidate(req,res){
    const{studentId,electionId}=req.body;
    const files = req.files;
    try {
        if(!files) return res.status(400).json({'message':'No file uploaded.'});

        //check student's department id and election's department id are same
        const election=await getElectionById(electionId);
        const student=await getStudentById(studentId);
        if(election.department_id!==student.department_id)return res.status(400).json({'message':'Bad Request'});

        const candidate=await createCandidate(studentId,electionId);
        files.forEach(async file => {
            await createForm(candidate.id,file.buffer,file.originalname,file.mimetype,file.size);
        });
        return res.json(candidate);
    } catch (error) {
        res.status(500).json({"message":`${error}`});
    }
}

module.exports=applyToBecomeCandidate;