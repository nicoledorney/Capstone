const mongoose = require('mongoose'), Schema = mongoose.Schema;
const Product = require('../models/product.js');

const CompanySchema = mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Company', CompanySchema);