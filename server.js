var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');

var Inventory=require('./models/inventory');
//connect to mongodb using mongoose connect method
mongoose.connect('mongodb://localhost:27017/mongoose-crud');

var app=express();
var port= process.env.PORT || 3000;

app.use(bodyparser.urlencoded({
    extended:true
}))


app.post('/inventory',function(req,res){
    var inventory=new Inventory;

    inventory.itemName=req.body.itemName;
    inventory.price=req.body.price;
    inventory.quantity=req.body.quantity;

    inventory.save(function(err,inventory){
        if(err){
            //res.json({message:err});
            res.send("something bad happend");
        }else{
            res.json({message:inventory})
        }
    })
})

app.listen(port);
console.log('listening on the port: '+port);
