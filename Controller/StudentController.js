const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const {getStudentByEmail}=require('../Model/StudentData')

async function loginHandler(req,res){
    const{email,password}=req.body;
    if(!email || !password) return res.status(400).json({'message':'Username and password are required'});
    
    try {
        const student=await getStudentByEmail(email);
        if(!student) return res.status(401).json({'message':'Email is not exist'});
        const resultPswrd=await bcrypt.compare(password,student.password)

        if(!resultPswrd) return res.status(401).json({'message':'Password is not correct'});

        const accessToken=jwt.sign(
            {
                "UserInfo":{
                  ...student
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:'10h'}
        );

        res.status(200).json({accessToken});
    } catch (error) {
        res.status(500).json({"message":`${error}`});
    }
}

module.exports={loginHandler};