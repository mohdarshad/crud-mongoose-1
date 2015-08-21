var mongoose=require('mongoose');

var Schema= mongoose.Schema;

var inventorySchema= new Schema({
    itemName:{
        type:String,
        required:true,
        unique:true
    },
    price:Number,
    quantity:Number,
    dateAdd:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('Inventory',inventorySchema);