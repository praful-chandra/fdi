const Exchange = require("../models/exchange.model");


exports.addExchange = async(req,res) =>{

    try{
        const {categoryName, subCategory , type} = req.body;

        let maxPrice = 0;

        type.map(t=>{
            if(t.exchangePrice > maxPrice){
                maxPrice = t.exchangePrice
            }
        })

        const newExchange = await new Exchange({categoryName,subCategory,type,maxPrice}).save();

        res.json(newExchange);

    }catch(err){
        res.status(500).json({error : "An error has occured !"})
    }

}

exports.deleteExchange = async(req,res) =>{
    try{
        const {id} = req.params;

        const deletedExchange = await Exchange.findByIdAndDelete(id);

        res.json(deletedExchange);
    }catch(err){
        res.status(500).json({error : "An error has occured !"})

    }
}

exports.listExchange = async(req,res) =>{
    try{
        const {subCategory} = req.params;

        const exchange = await Exchange.findOne({subCategory});
        res.json(exchange);
    }catch(err){
        res.status(500).json({error : "An error has occured !"})

    }
}