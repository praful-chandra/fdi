const PinCode = require("../models/pincode.model");

exports.listPincodes = async(req,res)=>{
    try {
        let list = await PinCode.find();
        res.json(list);
      } catch (err) {
        res.status(500).json({ error: "Internal server error !" });
      }
}

exports.checkPincode = async(req,res)=>{
    try{

        let {pin} = req.params;
        const list = await PinCode.find();

        let result = false;

        list.map(p=>{
            if(p.pincodes.includes(pin)){
                result = p.estTime;
            }
        })

        res.json(result);

    } catch (err) {
        res.status(500).json({ error: "Internal server error !" });
      }
}

exports.addPincode = async (req, res) => {
  try {
    let { pincodes, estTime, groupName } = req.body;
    pincodes = pincodes.split(" ");
    await new PinCode({ pincodes, estTime, groupName }).save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Internal server error !" });
  }
};

exports.removePincode = async (req, res) => {
  try {
    let { groupName } = req.params;
    await PinCode.findOneAndDelete({ groupName });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Internal server error !" });
  }
};

exports.updatePincode = async (req, res) => {
  try {
    let { groupName, pincodes, estTime } = req.body;

    pincodes = pincodes.split(" ");

    let existingPincode = await PinCode.findOne({ groupName });

   if(existingPincode){
    existingPincode.pincodes = pincodes;
    existingPincode.estTime = estTime;
    await existingPincode.save();
    res.json({success : true});
   }else{
       throw Error();
   }

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error !" });
  }
};


