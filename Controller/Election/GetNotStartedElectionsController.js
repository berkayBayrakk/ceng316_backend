const {getAllElectionsNotStarted}=require('../../Model/ElectionData')

const getNotStartedElections=async(req,res)=>{
    try {
        const notStartedElections=await getAllElectionsNotStarted();
        return res.json(notStartedElections);
    } catch (error) {
        res.status(500).json({"message":`${error}`});
    }
}

module.exports=getNotStartedElections;