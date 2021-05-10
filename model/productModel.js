var db = require('../database');

module.exports = {


  findById: function (id,callback) {
        var sql = 'SELECT * FROM products WHERE id = ?';
        db.query(sql,id, function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },

    index: function (callback) {
        var sql = 'SELECT * FROM products ORDER BY id DESC ';
        db.query(sql, function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },

      
    ads: function (callback) {
        var sql = 'SELECT * FROM products ORDER BY id DESC ';
        db.query(sql, function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },
    

                         ////BY CATEGORIES

                         
    Electronics: function (callback) {
      var category = 'electronics'
        var sql = 'SELECT * FROM products WHERE category =?  ORDER BY id DESC ';
        db.query(sql,[category], function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },

      
    Cloths: function (callback) {
      var category = 'cloth'
        var sql = 'SELECT * FROM products WHERE category = ? ORDER BY id DESC ';
        db.query(sql,[category], function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },

      
    Food: function (callback) {
      var category = 'food'
        var sql = 'SELECT * FROM products WHERE category = ? ORDER BY id DESC ';
        db.query(sql,[category], function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },
      
    Beauty: function (callback) {
      var category = 'beauty'
        var sql = 'SELECT * FROM products WHERE category = ? ORDER BY id DESC ';
        db.query(sql,[category], function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },
    Sports: function(callback) {
      var category = 'sports'
        var sql = "SELECT * FROM products  WHERE category = ? ORDER BY id DESC";//WHERE category = sports
        db.query(sql,[category], function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },


      
    Laptop: function (callback) {
      var category = 'laptop'
        var sql = 'SELECT * FROM products WHERE category = ? ORDER BY id DESC ';
        db.query(sql,[category], function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },

      
    Phones: function (callback) {
      var category = 'phone'
        var sql = 'SELECT * FROM products WHERE category = ? ORDER BY id DESC ';
        db.query(sql, [category],function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },
}