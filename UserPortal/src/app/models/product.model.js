/*
var mongoose = require("mongoose");
mongoose.pluralize(null);           //avoid s post fix for collection. 
const Company = require('../models/company.js');

var ProductSchema = mongoose.Schema;

var ProductSchemaRef = new ProductSchema({
    _id: Number,
    name: String,
    details: String,
    image: String,
    price: Number,
    company: {type: Schema.Types.ObjectId, ref: 'Company'}
});

var ProductModel = mongoose.model("Product",ProductSchemaRef);

module.exports = ProductModel;

*/



const Company = require('../models/company.js');
var mongoose = require("mongoose"), Schema = mongoose.Schema;
mongoose.pluralize(null);           //avoid s post fix for collection. 

const ProductSchema = mongoose.Schema({
    _id: String,
    name: String,
    details: String,
    image: String,
    price: Number,
    company: String
});

module.exports = mongoose.model('Product', ProductSchema)
