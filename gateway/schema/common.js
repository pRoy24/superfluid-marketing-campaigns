module.exports = {
getDBConnectionString: function() {
    var mongoose = require('mongoose');
    if (process.env.CURRENT_ENVIRONMENT === 'TEST') {
        mongoose.connect('mongodb://localhost/smc', {useNewUrlParser: true, useUnifiedTopology: true});  
    } else {
        mongoose.connect('mongodb://localhost/smc', {useNewUrlParser: true, useUnifiedTopology: true});
    }

    var db = mongoose.connection;
    return mongoose;
}
}