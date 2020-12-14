const BestSeller = require("../models/bestSeller.model");


exports.get = async (req, res) => {

    try {

        const { product } = req.params;

        const prod = await BestSeller.findOne({ product })
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
        res.json(prod);


    } catch (err) {
        res.status(500).json({ error: "Internal server error" })
    }

}

exports.list = async (req, res) => {
    try{

        const prods = await BestSeller.find()
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

exports.add = async (req, res) => {
try{
    const {product} = req.params;

    const oldBestSeller = await BestSeller.findOne({product});

    if(oldBestSeller){
        await oldBestSeller.deleteOne();
        res.json(oldBestSeller);
    }else{
        const newBestSeller = await new BestSeller({product}).save();
        res.json(newBestSeller);
    }

    
}
catch (err) {
    res.status(500).json({ error: "Internal server error" })
}



}

