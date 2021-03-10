var db = require('../database');

module.exports = {
    subCustomer: function ( title,first_name,last_name,email,password,address,city,state,gender,phone,callback) {
        var sql = "INSERT INTO `customers` (title, first_name,last_name,email,password,address,city,state,gender,phone) VALUES('"+title +"','"+ first_name+"','"+last_name+"','"+email+"','"+password+"','"+address+"','"+company+"','"+addressc+"','"+city+"','"+state+"','"+gender+"','"+ phone+"') ";
        db.query(sql, function (err, data) {
            if (err) throw err;
            return callback(data);

        })


    },

    Customerlist: function (callback) {
        var sql = 'SELECT * FROM customers ORDER BY id DESC ';
        db.query(sql, function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },
}