var DBConnection = require('./common');

const mongoose = DBConnection.getDBConnectionString()

var user = new mongoose.Schema({
    address: String,
    publisherAccounts: [String],
    
   });
  
var User = mongoose.model('User', user);




module.exports = User;