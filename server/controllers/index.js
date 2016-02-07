var models = require('../models');
var Promise = require('bluebird');

/*

data = {result: [ {text: '', username:'',  } ]}


*/




module.exports = {
  messages: {
    get: function (req, res) {
      //writehead
      
      var messages = models.messages.get(function(result){
        //console.log(result);
        res.end(JSON.stringify(result));
      });
      //console.log(messages._results);
      res.end();
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

