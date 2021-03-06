const User = require("../models/user.model");

exports.createOrUpdateUser = async (req, res) => {
 try{
  const { name,picture,  email } = req.user;


  const user = await User.findOneAndUpdate( 
    { email },
    { name, picture },
    { new: true }
  );
  if (user) {
    res.json(user);
  } else {
    const newUser = await new User({ email, name, picture }).save();
    res.json(newUser);
  }
 }catch(err){
   console.log(err);
   res.status(500).json({error : "Internal server error"})
 }
};

exports.currentUser = async (req, res) => {
  try { 
    const user = await User.findOne({ email: req.user.email });
    if (user) {
      res.json(user);
    } else {
      throw Error();
    }
  } catch (err) {
    res.status(401).json({ error: "Authentication error" });
  }
};
  