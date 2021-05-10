const login = require('../model/loginModel');


module.exports = {

    UserLogin: function (req, res, next) {
        console.log('good')
        var email = req.body.Email;
        var password = req.body.Password;
        if (email == 0) {
            res.redirect('/admin')
        }
        else if (password == 0 || password < 8) {
            res.redirect('/admin')
        }
      
        else {
            login.loginUser(email, password ,function (data) {
                console.log(data)
                if(data==0){

                    res.redirect('/register');
                }else{
                    var user =  req.session.data

                    res.redirect('/');
                }
           
            })
        }
    },



    AdminLogin: function (req, res, next) {
      
        var email = req.body.email;
        var password = req.body.password;
        if (email == 0) {
            return res.render()
        }
        else if (password == 0 || password > 8) {
            return res.render()
        }
      
        else {
            login.LoginAdmin(email, password ,function (err) {
                res.redirect('/admin');
            })
        }
    },


   

    isLoggedIn:function(req, res, next) { 
        if(req.isAuthenticated()) { 
            return next(); 
        } 
        req.session.oldUrl = req.url; 
        res.redirect('/user/signin'); 
    }

}