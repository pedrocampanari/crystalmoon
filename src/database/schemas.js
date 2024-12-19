const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    productName: String,
    price: Number,
    category: Number,
    images_url: Array,
    changed: Date,
    description: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;