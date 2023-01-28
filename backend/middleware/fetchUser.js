const jwt = require('jsonwebtoken');
const privateKey = "DhruwangIsABillionare"


const fetchUser = (req,res,next)=>{
    // Get the user from jwt token and add id to req object 
    const token = req.header('auth-token')
    if(!token){
        res.status(401).json({err:"please send valid auth token"})
    }
    try {
        const data = jwt.verify(token,privateKey)
        req.user = data.user
        // console.log(req.user)
    } catch (error) {
        res.status(400).send({err:"please enter valid token"})
    }
    next()
}

module.exports = fetchUser