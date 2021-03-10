const customerModel = require('../model/customerModel');


module.exports = {

    addCustomer: function (req, res, next) {
        //console.log('title',req.body.first_name)

        var title = req.body.title;
        var first_name = req.body.first_name;
        var last_name = req.body.last_name;
        var email = req.body.email;
        var password = req.body.password;
        var address = req.body.address;
        var city = req.body.city;
        var state = req.body.state;
        var gender = req.body.gender;
        var phone = req.body.phone;

        if (title == 0) {
            return res.render()
        }
        else if (first_name == 0) {
            return res.render()
        }
        else if (last_name == 0) {
            return res.render()
        }
        else if (email == 0) {
            return res.render()
        }
        else if (password == 0 || password > 8) {
            return res.render()
        }
        else if (address == 0) {
            return res.render()
        }
        else if (city > 0) {
            return res.render()
        }
        else if (state > 0 || state == 'Select-your-State') {
            return res.render()
        }
        else if (gender > 0) {
            return res.render()
        }
        else if (phone > 0 || phone < 11) {
            return res.render()
        }
        else {
            customerModel.subCustomer(title, first_name, last_name, email, password, address, city, state, gender, phone, function (err) {
                res.redirect('/');
            })
        }
    },


    Customer: function (req, res) {
        customerModel.Customerlist(function (data) {
            res.render('admin/customerView', { layout: 'admin', customers: data })
        })
    },

    isLoggedIn:function(req, res, next) { 
        if(req.isAuthenticated()) { 
            return next(); 
        } 
        req.session.oldUrl = req.url; 
        res.redirect('/user/signin'); 
    }

}