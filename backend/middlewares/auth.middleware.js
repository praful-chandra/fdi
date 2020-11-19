const admin = require("../firebase");

exports.authCheck = async (req, res, next) => {
  const token = req.headers.authtoken;
  try{

    const firebaseUser = await admin.auth().verifyIdToken(token);
    req.user = firebaseUser;

  }catch(err){
    res.status(401).json({error : "Invalid or expired token"})
  }
  next();
};
  