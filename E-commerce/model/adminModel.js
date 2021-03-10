var db = require('../database');


module.exports = {

  addCategory: function (inputData, callback) {
    var sql = "INSERT INTO `category` (name_c)VALUES('"+ inputData+"')";
    db.query(sql,  function (err, data) {
      if (err) throw err;
      return callback(data);
    });
  },

  categoryCheck: function (inputData, callback) {
    var sql = `SELECT name_c FROM category WHERE name_c='${inputData}'`;
    db.query(sql,  function (err, data) {
      if (err) throw err;
      return callback(data);
    });
  },

  categoryz: function (callback) {
    var sql = 'SELECT * FROM category ';
    db.query(sql, function (err, datac) {
      if (err) throw err;
      return callback(datac);
    });
  },

  productlist: function (callback) {
    var sql = 'SELECT * FROM products ORDER BY id DESC ';
    db.query(sql, function (err, data) {
      if (err) throw err;
      return callback(data);
    });
  },


  productById: function (id, callback) {
    var sql = `SELECT * FROM products WHERE id='${id}' `;
    db.query(sql, function (err, data) {

      if (err) throw err;
      return callback(data);
    });
  },

  insertproduct: function (title, category, currency, quantity, price, description, newpath, d, callback) {
    var sql = "INSERT INTO `products` (name,category,currency, quantity, price, description,image,date) VALUES('" + title + "', '" + category + "', '" + currency + "', '" + quantity + "', '" + price + "', '" + description + "' , '" + newpath + "', '" + d + "')";
    db.query(sql, function (err, data) {
      if (err) throw err;
      return callback(data);

    })
  }
}