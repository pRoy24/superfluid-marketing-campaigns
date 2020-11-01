var DBConnection = require('./common');

const mongoose = DBConnection.getDBConnectionString()

var campaign = new mongoose.Schema({
    publisherWalletAddress: String,
    publisherUserAddress: String,
    marketLink: String,
    payoutInterval: String,
    payoutIntervalUnit: String,
    likePayout: String,
    retweetPayout: String,
    commentPayout: String,
    marketers: [{'campaignLink': String, 'userAddress': String,
                'favorite_count': {type: Number, default: 0}, 'retweet_count': {type: Number, default: 0},
                'previous_payout': {type: Number, default: 0}
    }],
    createdAt: Date,
    lastPayment: Date,
    
   });
  
var Campaign = mongoose.model('Campaign', campaign);




module.exports = Campaign;