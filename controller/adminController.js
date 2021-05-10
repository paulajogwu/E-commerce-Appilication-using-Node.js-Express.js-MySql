const adminModel = require("../model/adminModel");
var path = require("path");
var formidable = require("formidable");
var fs = require("fs");
const { names } = require("debug");

module.exports = {
  addproduct: function (req, res, next) {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
      var oldpath = files.upload.path;
      var newpaths = "./public/uploads/" + files.upload.name;
      var newpath = "../uploads/" + files.upload.name;

      fs.rename(oldpath, newpaths, function (err) {
        //if (err) throw err;
      });

      var title = fields.title;
      var category = fields.category;
      var currency = fields.currency;
      var description = fields.description;
      var price = fields.price;
      var quantity = fields.quantity;
      var d = new Date().toDateString();
      //console.log(title,currency)

      if (title == "") {
        return res.redirect("/");
      } else if (newpath == "") {
        return res.redirect("/");
      } 
      else if (category == "") {
        return res.redirect("/");
      } else if (currency == "") {
        return res.redirect("/");
      } else if (description == "" ) {//|| description < 15
        return res.redirect("/");
      } else if (price == "" || price < 0) {
        return res.redirect("/");
      } else if (price == "" || price < 0) {
        return res.redirect("/");
      } else if (newpath < 0) {
        return res.redirect("/");
      } else {
        adminModel.insertproduct( title,category,currency,quantity,price, description,newpath,d,function (data) {
            res.redirect("/admin");
          }
        );
      }
    });
  },
  CategoryAdd: function (req, res) {
    var inputData = req.body.name_c;
    if (inputData == 0) {
      return res.redirect("/");
    } else {
      adminModel.categoryCheck(inputData, function (data) {
         var name = (JSON.stringify(data))
         console.log('same',name)
        if (inputData == name) {
          return res.redirect("/");
        } 
        else {
          adminModel.addCategory(inputData, function (data) {
            res.redirect("/admin");
          });
        }
      });
    }
  },

  categoryForm: function (req, res) {
    adminModel.categoryz(function (datac) {
      res.render("admin/addproduct", { layout: "admin", cat: datac });
    });
  },

  productView: function (req, res) {
    adminModel.productlist(function (data) {
      res.render("admin/productView", { layout: "admin", products: data });
    });
  },

  selectUpdate: function (req, res) {
    var id = req.param("id");
    adminModel.productById(id, function (data) {
      adminModel.categoryz(function (datac) {
        console.log({ cat: datac });
        res.render("admin/productUpdate", {
          layout: "admin",
          products: data,
          cat: datac,
        });
      });
    });
  },

  updateproduct: function (req, res, next) {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
      var oldpath = files.upload.path;
      var newpaths = "./public/uploads/" + files.upload.name;
      var newpath = "../uploads/" + files.upload.name;

      fs.rename(oldpath, newpaths, function (err) {
        if (err) throw err;
      });

      var title = fields.title;
      var category = fields.category;
      var currency = fields.currency;
      var description = fields.description;
      var price = fields.price;
      var quantity = fields.quantity;
      var d = new Date().toDateString();

      if (title == 0) {
        return res.render();
      } else if (category == 0) {
        return res.render();
      } else if (currency == 0) {
        return res.render();
      } else if (description == 0 || description < 15) {
        return res.render();
      } else if (price == 0 || price > 0) {
        return res.render();
      } else if (price == 0 || price > 0) {
        return res.render();
      } else if (newpath > 0) {
        return res.render();
      } else {
        adminModel.insertproduct(
          title,
          category,
          currency,
          quantity,
          price,
          description,
          newpath,
          d,
          function (data) {
            res.redirect("/");
          }
        );
      }
    });
  },
};
