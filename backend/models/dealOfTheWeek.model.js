const mongoose =  require('mongoose');

const DealOfTheDaySchema = new mongoose.Schema({
    product :{
        type : mongoose.Schema.Types.ObjectId,
        ref:'ProductVarianceColor',
        unique : true,
        index : true
    },
    discountPrice :{
        type : Number,
        required : true,
        default : 0
    }
    
},{
    timestamps : true
})

module.exports = mongoose.model('DealOfTheWeek',DealOfTheDaySchema);