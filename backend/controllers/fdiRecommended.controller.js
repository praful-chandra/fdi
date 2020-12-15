const FdiR = require("../models/fdiRecommended.model");

exports.get = async (req, res) => {
    try {
        const { product } = req.params;

        const fdir = await FdiR.findOne({ product })
            .populate("product")
            .populate({
                path: "product",
                populate: {
                    path: "product"
                }
            })
            .populate({
                path: "product",
                populate: {
                    path: "variance"
                }
            });

            res.json(fdir)

    } catch (err) {
        res.status(500).json({ error: "Intrnal server error" })
    }
}

exports.add = async(req,res)=>{
    try{
        const {product} = req.params;
    
        const oldFdir = await FdiR.findOne({product});
    
        if(oldFdir){
            await oldFdir.deleteOne();
            res.json(oldFdir);
        }else{
            const newFdir = await new FdiR({product}).save();
            res.json(newFdir);
        }
    
        
    }
    catch (err) {
        res.status(500).json({ error: "Internal server error" })
    }
    
}


exports.list = async(req,res)=>{
    try{

        const prods = await FdiR.find()
        .populate("product")
        .populate({
            path: "product",
            populate: {
                path: "product"
            }
        })
        .populate({
            path: "product",
            populate: {
                path: "variance"
            }
        });
    res.json(prods);

    }catch (err) {
        res.status(500).json({ error: "Internal server error" })
    }
}

exports.status = async (req,res)=>{
    try {
        const { product } = req.params;

        const fdir = await FdiR.findOne({ product })
        res.json(fdir)

    } catch (err) {
        res.status(500).json({ error: "Intrnal server error" })
    }
}