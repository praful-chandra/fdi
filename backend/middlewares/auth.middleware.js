const admin = require("../firebase");
const User = require("../models/user.model");

exports.authCheck = async (req, res, next) => {  
  try{
    const token = req.headers.authtoken;
    if(!token) throw Error("token required"); 
    
    admin.auth().verifyIdToken(token).then(decodedToken =>{
      if(!decodedToken.email){
        decodedToken.email = decodedToken.phone_number;
      }
      req.user = decodedToken;   
      next();

    }).catch(err=> {   res.status(401).json({error : "Invalid or expired token"})});

  }catch(err){
    res.status(401).json({error : "Invalid or expired token"})
  }
};
  

exports.adminCheck = async(req,res,next) =>{

    const {email} = req.user;
    const adminUser = await User.findOne({email});
    if(adminUser.role !== 'Admin'){
      res.status(403).json({error : "Access denied !"})
    }else{
      next();
    }
}