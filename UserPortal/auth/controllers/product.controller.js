
var ProductModel = require("../models/product.js");

//Retrieve Product Details From Db 

var GetProductFromDb = (req,res)=>{
    ProductModel.find({},(err,data)=>{
        if(err) throw err;
            
            res.json(data);
    
        })
}

var GetProductById = (req,res)=> {
    var idInfo = req.params.id;
    console.log("Param info "+idInfo)
    ProductModel.find({_id:idInfo},(err,data)=> {
            if(err) throw err;
            res.json(data);
    })
}


var StoreProductInfo = (req,res)=> {
            let product = new ProductModel({    //{pid:106,pname:"Computer",price:56000}
                _id:req.body._id,
                pname:req.body.pname,
                description:req.body.description,
                image:req.body.image,
                price:req.body.price,
                company:req.body.company

            });

            product.save((err,result)=> {
                if(err){
                   // console.log(err);
                    res.json({"msg":"Id must be unique"});
                   // res.json({"msg": err});
                }else {
               // res.send("Record stored successfully in Db");
               res.json({"msg":"Record stored successfully"});
                }
            });

}

var UpdateProductInfo = (req,res)=> {       //{pid:100,pname:"TV 65 inch",price:160000}
    var updateId = req.body._id;
    var updateName = req.body.pname;
    var updatePrice = req.body.price;
    ProductModel.updateOne({_id:updateId},{$set:{pname:updateName,price:updatePrice}},(err,result)=> {
        if(err) throw err;
        //console.log(result);
       // res.send("Record updated...."+result);
        if(result.nModified>0){
            res.json({"msg":"Record updated successfully"})
        }else {
            res.json({"msg":"REcord didn't update"})
        }
    })
}

var DeleteProductInfo = (req,res)=> {
        var deleteId = req.params.id;
        ProductModel.deleteOne({_id:deleteId},(err,result)=> {
            if(err) throw err;
           // console.log(result);
           // res.send("Record delete "+result);
           if(result.deletedCount>0){
               //res.send("Record deleted successfully...")
               res.json({"msg":"Record deleted successfully"})
           }else {
               //res.send("Record not present");
               res.json({"msg":"Record not present"})
           }
        })   
}
module.exports = {GetProductFromDb,GetProductById,StoreProductInfo,UpdateProductInfo,DeleteProductInfo}











