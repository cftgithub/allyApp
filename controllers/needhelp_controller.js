var db = require("../models");

module.exports = function (app) {
  // This route has been tested and is functioning
  app.get("/helpBlog", function (req, res) {
    db.Help.findAll({}).then(function (data) {
      console.log(data);
      res.render("helpBlog", { data });
    });
  });

  // POST route to save help requests
  app.post("/helpBlog", function (req, res) {
    db.Help.create({
      uid: req.body.help_userid,
      username: req.body.help_username,
      title: req.body.title,
      body: req.body.body
    }).then(function (data) {
      res.redirect("/helpBlog");
    });
  });

  // DELETE route to delete help requests
  // app.delete("/needhelp/:id", function (req, res) {
  //   db.Help.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (data) {
  //     res.json(data);
  //   });
  // });

  // PUT route to update help requests
  // app.put("/needhelp", function (req, res) {
  //   db.Help.update({
  //     subject: req.body.subject,
  //     body: req.body.body
  //     //Any other columns?
  //   }, {
  //     where: {
  //       id: req.body.id
  //     }
  //   }).then(function (data) {
  //     res.json(data);
  //   });
  // });
};
