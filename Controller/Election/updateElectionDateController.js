const {updateElectionStartAndEndTimeByDepartmentId}=require('../../Model/ElectionData')
const{getDepartmentById}=require('../../Model/DepartmentData')
const {compareStartEndDates,isValidDate}=require('../../BusinessLogic/ElectionDateStatus')

const announceElectionDateController=async(req,res)=>{
    const {startDate,endDate,departmentId}=req.body;
    if(!startDate||!endDate|| !departmentId) return res.status(400).json({'message':'Missing information'});
    try {
        const isDepartmentExist=(await getDepartmentById(departmentId)).length===0;
        if(!isValidDate(startDate) || !isValidDate(endDate) || !compareStartEndDates(startDate,endDate) || isDepartmentExist){
            return res.status(400).json({'message':'Bad Request'});
        }
        const result=await updateElectionStartAndEndTimeByDepartmentId(departmentId,startDate,endDate);
        if(result) return res.json({"message":"Election has been updated"})
    } catch (error) {
        res.status(500).json({"message":`${error}`});
    }
}

module.exports=announceElectionDateController;