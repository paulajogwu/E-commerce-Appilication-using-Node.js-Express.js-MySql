const productModel = require('../model/productModel');
const Cart = require('../model/cartModel');
var mail = require('../model/email')
module.exports = {
    addtocart: function (req, res) {

        var id = req.param('id');
        var cart = new Cart(req.session.cart ? req.session.cart :{});
        productModel.findById(id, function (data) {
            if (data==null) {
                return res.redirect('/');
            }
            console.log('cart details',data);
            cart.add(data, id); 
            req.session.cart = cart;
            console.log(req.session.cart);
            res.redirect('/sports');
        })

    },
    detail: function (req, res) {
        var id = req.param('id');
        productModel.findById(id,function (data) {
            res.render('products/productdetails', {layout:'index', products: data })
        })
    },

    reduce: function (req, res) {
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});
        cart.reduceByOne(productId);
        req.session.cart = cart;
        res.redirect('/shopping-cart');
    },

    increase: function (req, res) {
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});
        cart.increaseByOne(productId);
        req.session.cart = cart;
        res.redirect('/shopping-cart');
    },
    remove: function (req, res) {
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});
        cart.removeItem(productId);
        req.session.cart = cart;
        res.redirect('/shopping-cart');
    },

    showcart: function(req, res){
        // if(!req.session.cart) {
        //     return res.render('products/productdetails', {products: null});
        // }
        var cart = new Cart(req.session.cart);
        return res.render('products/carts', {products:cart.generateArray(), totalPrice: cart.totalPrice});

    },

    checkout:function (req, res, next) { 
        if(!req.session.cart) { 
            return res.redirect('/shopping-cart'); 
        } 
        var cart = new Cart(req.session.cart); 
        var errMsg = req.flash('error')[0]; 
        return res.render('shop/checkout', {total: cart.totalPrice, errMsg: errMsg, noError: !errMsg}); 
    },
    //  router.post('/checkout', isLoggedIn, 
    order:function(req, res, next) { 
        if(!req.session.cart) { 
            return res.redirect('/shopping-cart'); 
        } 
        var cart = new Cart(req.session.cart); 
     
        var stripe = require("stripe")( 
            "sk_test_pVJhFSD0tie3QmfWqzusM6ib" 
        ); 
     
        stripe.charges.create({ 
            amount: cart.totalPrice * 100, 
            currency: "usd", 
            source: req.body.stripeToken, // obtained with Stripe.js 
            description: "Test Charge" 
        }, function(err, charge) { 
            if(err) { 
                req.flash('error', err.message); 
                return res.redirect('/checkout'); 
            } 
            var order = new Order({ 
                user: req.user, 
                cart: cart, 
                address: req.body.address, 
                name: req.body.name, 
                paymentId: charge.id 
            }); 
            order.save(function(err, result) { 
                req.flash('success', 'Successfully bought product!'); 
                req.session.cart = null; 
                res.redirect('/'); 
            }); 
        }); 
    }, 



    
    ElectronicView: function (req, res) {
        productModel.Electronics(function (data) {
            res.render('products/product', {layout:'index', products: data })
        })
    }, 

    
    ClothsView: function (req, res) {
        productModel.Cloths(function (data) {
            res.render('products/product', {layout:'index', products: data })
        })
    }, 

    
    BeautyView: function (req, res) {
        productModel.Beauty(function (data) {
            res.render('products/product', {layout:'index', products: data })
        })
    }, 

    
    SportsView: function (req, res) {
        productModel.Sports(function (data) {
            res.render('products/product', {layout:'index', products: data })
        })
    },
    
    
    PhonesView: function (req, res) {
        productModel.Phones(function (data) {
            res.render('products/product', {layout:'index', products: data })
        })
    }, 

    
    LaptopView: function (req, res) {
        productModel.Laptop(function (data) {
            res.render('products/product', {layout:'index', products: data })
        })
    }, 

    FoodView: function (req, res) {
        productModel.Food(function (data) {
            res.render('products/product', {layout:'index', products: data })
        })
    }, 

    AdsView: function (req, res) {
        productModel.ads(function (data) {
            res.render('products/product', {layout:'index', products: data })
        })
    }, 




   
     
    

    // sendmail: function(req,res){
    //     var details = {}
    //     mail.mailTransporter.sendMail(details,function(err){
    //         if(err){
    //             console.log(err)
    //         }else{
    //             console.log('Email sent')
    //         }
    //     })
    // }



}