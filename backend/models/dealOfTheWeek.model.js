const mongoose =  require('mongoose');

const DealOfTheDaySchema = new mongoose.Schema({
    product :{
        type : mongoose.Types.ObjectId,
        ref:'Product'
    },
    discountPrice :{
        type : Number,
        required : true
    }
},{
    timestamps : true
})

module.exports = mongoose.model('DealOfTheDay',DealOfTheDaySchema);