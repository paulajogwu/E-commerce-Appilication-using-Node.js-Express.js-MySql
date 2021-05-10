var db = require('../database');

module.exports = {
  

    SubmitOrder: function (Details,callback) {
        var sql = 'ISERT INTO orderDetails SET  ? ';
        db.query(sql,[Details], function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },
      
    }