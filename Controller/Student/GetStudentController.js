
const {getAllStudents}=require('../../Model/StudentData');

const getAllStudentsHandler=async(req,res)=>{
    try {
        const students=await getAllStudents();
        return res.json(students);
    } catch (error) {
        res.status(500).json({"message":`${error}`});
    }
}

module.exports=getAllStudentsHandler;