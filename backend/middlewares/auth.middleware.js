const admin = require("../firebase");
const User = require("../models/user.model");

exports.authCheck = async (req, res, next) => {
  const token = req.headers.authtoken;

  
  try{
    if(!token) throw Error("token required");

    const firebaseUser = await admin.auth().verifyIdToken(token);
    req.user = firebaseUser;
    next();

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