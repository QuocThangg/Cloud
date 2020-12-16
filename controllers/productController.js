var express = require('express');
var router = express.Router();


/// --- DB CONNECTION OBJ/LIB
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var mongoose = require('mongoose');

/// --- DB Model
var Product = require('../models/productModel');

/// --- DB config
var dbconfig = require('../configs/config_DB');

/// --- Code CONTROLLERs
router.use(function timeLog(req, res, next) {
    console.log('\n\t Product controller - Time: ', Date().toString());
    next();
})

/// ..................................................


/// ..................................................
router.get('/list', listProductPage);

function listProductPage(req, res) {
    res.send('PRODUCT: list PRODUCT page');
}

/// ..................................................
router.get('/', productViewPage);

function productViewPage(req, res) {

    MongoClient.connect(dbconfig.urldb, { useUnifiedTopology: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbconfig.dbname);
        dbo.collection("product").find({}).toArray(function(err, productlist) {
            if (err) throw err;

            res.render("product-list", {
                title: "ATN-Shop PRODUCT page",
                username: "",
                products: productlist,
                configHeader: null,
                currpage: "Product"
            });
            console.log('Found:', productlist);

            db.close();
        });
    });

    console.log("\n\t ... connect PRODUCT from ", req.connection.remoteAddress, req.headers.host);
}


/// --- EXports
module.exports = router;