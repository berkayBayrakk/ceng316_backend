const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

async function loginHandler(req,res){
    const{email,password}=req.body;
    if(!username || !password) return res.status(400).json({'message':'Username and password are required'});
    
    try {
        const accessToken=jwt.sign(
            {
                "UserInfo":{
                  
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:'10h'}
        );
        res.status(20).json({accessToken});
    } catch (error) {
        res.status(500).json({"message":`${error}`});
    }
}

module.exports={loginHandler};