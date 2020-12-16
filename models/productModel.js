var mongoose = require('mongoose');

/// --- declare MODEL "structure"
var productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    information: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

/// --- DEFINE MODEL
var Product = mongoose.model('Product', productSchema, "product");

/// --- EXports
module.exports = Product;
