var db = require('../database');

module.exports = {
  

    Submitpayment: function (pay,callback) {
        var sql = 'ISERT INTO payment SET  ? ';
        db.query(sql,[pay], function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },
      
    }