var db = require('../database');

module.exports = {
    subCustomer: function ( title,first_name,last_name,email,password,address,city,state,gender,phone,date,callback) {
        var sql = "INSERT INTO `user` (title, first_name,last_name,email,password,address,city,state,gender,phone,date) VALUES('"+title +"','"+ first_name+"','"+last_name+"','"+email+"','"+password+"','"+address+"','"+city+"','"+state+"','"+gender+"','"+ phone+"','"+ date+"') ";
        db.query(sql, function (err, data) {
            if (err) throw err;
            return callback(data);

        })


    },

    Customerlist: function (callback) {
        var sql = 'SELECT * FROM user ORDER BY id DESC ';
        db.query(sql, function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },
}