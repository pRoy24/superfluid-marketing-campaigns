let accounts;
let minAmount;
let web3;
let dai;
let daix;
let sfObject;


module.exports = {
  
  setup: function() {
    setupWeb3Instance();
    setupSFProvider().then(function(response){
      setupFDai().then(function(){
        setupDaiX();
      })
    })
  },

  getNetFlow: function(account) {
    return getNetFlow(account).then(function(response){
      return response;
    })
  },

  createNewAccount: function() {
   return createNewAccount().then(function(response){
      return response;
    })
  },

  generateFundsForAccount: function(account) {
     return mintTokensForAccount(account).then(function(response){
      return {'funds': response, 'address': account};
    })
  },
  
  performInstantDistribution: function(fromAccount, toAccount, amount) {
    return performInstantDistribution(fromAccount, toAccount, amount).then(function(response){
      return response;
    })
  },
  
  getUserBalance: function(account) {
    return getUserBalance(account).then(function(userBalance){
      return userBalance;
    })
  },
  
  updateSubscriptionForProvider(accountFrom, accountTo) {
    return updateSubscriptionForProvider(accountFrom, accountTo).then(function(response){
      return response;
    })
  }

}

// private functions


function createNewAccount() {
    return web3.eth.personal.newAccount("test password!").then(function(newAccount){
      return web3.eth.personal.unlockAccount(newAccount, "test password!", 6000000).then(function(res){
        return newAccount;
      });
    });
}

function getNetFlow(account) {
    const sf = sfObject;
    const acccountAddress = web3.utils.toChecksumAddress(account);
    return sf.agreements.cfa.getNetFlow(daix.address, acccountAddress).then(function(response){
      return response;
    })
}

function setupWeb3Instance() {
  const Web3 = require("web3");
  web3 = new Web3(new Web3.providers.HttpProvider(process.env.WEB3_PROVIDER));
}

function setupSFProvider() {
  if (sfObject !== undefined ) {
    return new Promise((resolve) => (resolve(sfObject)));
  } else {
    const SuperfluidSDK = require("@superfluid-finance/ethereum-contracts");
    const sfInit = new SuperfluidSDK.Framework({version: "preview-20200928", web3Provider: web3.currentProvider, chainId: 5 });
    return sfInit.initialize().then(function(response){
      sfObject = sfInit;
      return;
    }).catch(function(err){
      console.log(err);
   })
  }  
}

function setupFDai() {
  const sf = sfObject;
  return sfObject.resolver.get("tokens.fDAI").then(function(daiAddress){
    return sf.contracts.TestToken.at(daiAddress).then(function(daiContract){
      dai = daiContract;
      console.log('generated Dai contract');
      return; 
    });
  });
}

function setupDaiX() {
  const sf = sfObject;
 return sf.getERC20Wrapper(dai).then(function(daixWrapper){
  return sf.contracts.ISuperToken.at(daixWrapper.wrapperAddress).then(function(daixObject){
    daix = daixObject;
    console.log('Generated DaiX contract');
    return;
  });
 });
}

function mintTokensForAccount(account) {

    const sf = sfObject;
    const minAmount = web3.utils.toBN(web3.utils.toWei("1000000000", "ether"));
    dai.mint(account, minAmount, { from: account })
    
    return dai.approve(daix.address, minAmount, { from: account }).then(function(response){
      return daix.upgrade(minAmount, { from: account }).then(function(daixResponse){
        return daix.balanceOf(account).then(function(response){
          return sf.host.callAgreement(sf.agreements.ida.address, sf.agreements.ida.contract.methods.createIndex(daix.address, 42, "0x").encodeABI(), { from: account })
          .then(function(createIndexResponse){
         //   return updateIndexForProvider().then(function(updateResponse){
              return response.toString();
          //  });
          });
        })
      })
    })
}

function updateIndexForProvider(account) {
  const sf = sfObject;
  return sf.host.callAgreement(sf.agreements.ida.address, sf.agreements.ida.contract.methods.updateIndex(daix.address, 42, web3.utils.toWei("0.01", "ether"), "0x").encodeABI(), { from: accountFrom })
    .then(function(dataRes){
      return dataRes;
    });
}


function updateSubscriptionForProvider(accountFrom, accountTo) {
   const sf = sfObject;
   return sf.host.callAgreement(sf.agreements.ida.address, sf.agreements.ida.contract.methods.updateSubscription(daix.address, 42, accountTo, 1, "0x").encodeABI(), { from: accountFrom })
  .then(function(subscriptionUpdated){
    
    return subscriptionUpdated;
  });
}

function performInstantDistribution(accountFrom, accountTo, amount) {
  const sf = sfObject;
  console.log("Amount to be paid "+amount);
  return sf.host.callAgreement(sf.agreements.ida.address, sf.agreements.ida.contract.methods.updateIndex(daix.address, 42, web3.utils.toWei(amount.toString(), "ether"), "0x").encodeABI(), { from: accountFrom })
  .then(function(indexUpdateResponse){
      daix.balanceOf(accountTo).then(function(newBalance){
         console.log("New user balance "+newBalance);
         return newBalance;
    });
  });
}

function getUserBalance(address) {
  return daix.balanceOf(address).then(function(balanceResponse){
    return balanceResponse.toString();
  })
}

function createFlow(accountFrom, accountTo) {
  const sf = sfObject;
  return sf.host.callAgreement(sf.agreements.ida.address, sf.agreements.ida.contract.methods.updateSubscription(daix.address, 42, accountTo, 100, "0x").encodeABI(), { from: accountFrom })
  .then(function(response){
    
    
    return response;
  })    
}