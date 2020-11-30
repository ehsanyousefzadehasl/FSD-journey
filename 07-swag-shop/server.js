var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/swag-shop');


var Product = require('./model/product');
var WishList = require('./model/wishlist');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// post requests

app.post('/product', function (request, response) {
    var product = new Product;
    product.title = request.body.title;
    product.price = request.body.price;
    product.save(function (err, savedProduct) {
        if (err) {
            response.status(500).send({
                error: "Could not save product"
            });
        } else {
            response.send(savedProduct);
        }
    });
});

app.post('/wishlist', function (request, response) {
    var wishlist = new WishList();
    wishlist.title = request.body.title;

    wishlist.save(function (err, newWishList) {
        if (err) {
            response.status(500).send({
                error: "Could not save wishlist"
            });
        } else {
            response.send(newWishList);
        }
    });
});


// get requests

app.get('/products', function (request, response) {
    Product.find({}, function (err, products) {
        if (err) {
            response.status(500).send({
                error: "Could not fetch products!"
            });
        } else {
            response.send(products);
        }
    });

});


app.get('/wishlists', function (request, response) {
    WishList.find({}).populate({path: 'products', model:'Product'}).exec(function(err, wishLists) {
       if (err) {
           response.status(500).send({error: "could not fetch wishlist"});
       } else {
           response.status(200).send(wishLists);
       }
    });
});


// put requests

app.put('/wishlist/product/add', function (request, response) {
    Product.findOne({
        _id: request.body.productId
    }, function (err, product) {
        if (err) {
            response.status(500).send({
                error: "Could not add item to wishlist!"
            });
        } else {
            WishList.update({
                _id: request.body.wishListId
            }, {
                $addToSet: {
                    products: product._id
                }
            }, function (err, wishList) {
                if (err) {
                    response.status(500).send({
                        error: "Could not add item to wishlist!"
                    });
                } else {
                    response.send(wishList);
                }
            });
        }
    });
});

// runnning the server on 3000 port
app.listen(3000, function () {
    console.log("Swag shop API running on port 3000 ...");
});
