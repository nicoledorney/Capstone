
var express = require("express");
var router = express.Router();

var ProductController = require("../controllers/product.controller.js");



router.get('/api/products', ProductController.GetProductFromDb);// sub path 
router.get("/productInfoById/:id",ProductController.GetProductById) // sub path using path param 
router.post("/storeProduct",ProductController.StoreProductInfo);     //Store Product Info
router.put("/updateProduct",ProductController.UpdateProductInfo);      //Update Product Details
router.delete("/deleteProductById/:id",ProductController.DeleteProductInfo); //Delete product using Id




module.exports = router;
