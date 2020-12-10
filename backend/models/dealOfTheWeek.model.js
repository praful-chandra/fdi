const mongoose =  require('mongoose');

const DealOfTheDaySchema = new mongoose.Schema({
    product :{
        type : mongoose.Types.ObjectId,
        ref:'Product',
        unique : true,
        index : true
    },
    discountPrice :{
        type : Number,
        required : true
    }
},{
    timestamps : true
})

module.exports = mongoose.model('DealOfTheWeek',DealOfTheDaySchema);