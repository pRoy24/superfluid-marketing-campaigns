var express = require('express');
var router = express.Router();
var web3 = require('web3');
var Payment = require('../models/payment');
var Campaign = require('../models/campaign');
var User = require('../schema/User');

/* GET home page. */

router.get('/', function(req, res){
  res.send({'message': 'success'});
})


router.get('/test', function(req, res, next) {
  
  Payment.testFlow().then(function(testResponse){
    res.send({'message': 'success'});
  });
  
  
});


router.post('/publisher', function(req, res){

Payment.createNewFlowForNewAccount();
  res.send({'message': 'success'});
});


router.get('/publisher_address', function(req, res) {
  const userWallet = req.query.address;
  const newPublisherAddress = Payment.createNewAccount();
  
  res.send({'message': 'success', 'account': newPublisherAddress});
  
  
});


router.post('/publisher_wallet', function(req, res){
  let userWallet = req.body.address;
  
  Payment.createNewAccount().then(function(newAccountAddress){
    console.log("NEW ACCOUNT ADDRESS"+newAccountAddress); 
    userWallet = web3.utils.toChecksumAddress(userWallet);
    res.send({'message': 'success', 'account': newAccountAddress});  
            
    User.findOne({
      'address': userWallet
    }).then(function(userResponse){
      if (userResponse) {
      userResponse.publisherAccounts.push(newAccountAddress);
      userResponse.save({}).then(function(saveResponse){
       // res.send({'message': 'success', 'account': newAccountAddress});  
      });
      } else {
      //  res.send({'message': 'failure'});
      }
    });
    
  });
});

router.post('/generate_funds', function(req, res){
  const publisherWallet = req.body.publisherWallet;
  Payment.generateFundsForAccount(publisherWallet).then(function(response){
  res.send({'message': 'success'});    
  }).catch(function(err){
    res.send({'message': 'failure'});
  })

});

router.get('/authenticate', function(req, res){
  let  userAddress = req.query.address;
  if (userAddress) {
    userAddress = web3.utils.toChecksumAddress(userAddress);
  }

  Payment.getUserBalance(userAddress).then(function(userBalance){
    
  console.log("BALANCE");
  console.log(userBalance);
  console.log('&&&&');
  
  User.findOne({'address': userAddress}).then(function(userData){
    if (userData === undefined || userData === null) {
      var user = new User({
        'address': userAddress
      });
      user.save({}).then(function(userData){
        res.send({'message': 'success', 'balance': userBalance});
      })
    } else {
      res.send({'message': 'success', 'user': userData, 'balance': userBalance});
    }
  });
  });
});


router.get('/account_flow', function(req, res){
  const publisherId = req.query.id;
  Payment.getNetFlow(publisherId).then(function(response){
  res.send({'address': publisherId, 'flow': response});
  
  });
});

router.post('/campaign_details', function(req, res){
  const payload = req.body;
  Campaign.submitCampaignDetails(payload).then(function(response){
    res.send({'message': 'success'});
  })
});

router.get('/campaigns', function(req, res){
  Campaign.getOpenCampaigns().then(function(response){
    res.send({'message': 'success', 'campaigns': response});
  })
});

router.get('/campaign', function(req, res){
  const id = req.query.id;
  Campaign.getCurrentCampaign(id).then(function(currentCampaign){
    res.send({'message': 'success', campaign: currentCampaign});    
  });
});

router.post('/join_campaign', function(req, res){
  const payload = req.body;
  Campaign.joinCampaign(payload).then(function(joinResponse){
    res.send({'message': 'success'});
  });
});



module.exports = router;
