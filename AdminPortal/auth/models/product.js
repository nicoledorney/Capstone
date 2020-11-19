const Company = require('../models/company.js');
var mongoose = require("mongoose"), Schema = mongoose.Schema;
mongoose.pluralize(null);           //avoid s post fix for collection. 

const ProductSchema = mongoose.Schema({
    _id: String,
    pname: String,
    description: String,
    image: String,
    price: Number,
    company: String
});

module.exports = mongoose.model('Product', ProductSchema)