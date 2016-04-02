var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function (result) {
        res.json(result);
      });
    },

    post: function (req, res) {
      var params = [req.body.text, req.body.userName, req.body.roomName];
      models.messages.post(params, function (result) {
        res.json(result);
      });
    },
  },

  users: {
    get: function (req, res) {
      models.users.get(function (result) {
        res.json(result);
      });
    },

    post: function (req, res) {
      var params = [req.body.userName];
      models.users.post(params, function (result) {
        res.json(result);
      });
    },
  },
};
