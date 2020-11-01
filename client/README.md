# SuperFluid marketing campaigns

## This is the client app for the SuperFluid marketing campaigns app.

## Currently supported networks are - Goerli test net.




### How it works?
You need to login via metamask to this app.

Switch metamask to the Goerli network.

You can use this app as a publisher or as a marketer.

A publisher creates campaigns with defined payouts for engagement.

A marketer/influencer can browse through active campaigns and choose a campaign to market.

They will then retweet/quote tweet the tweet that the publisher wants engagement on and the app backend will calculate payout based on 
engagement.

The payment will be automatically and seamlessly sent to the marketer once every interval defined by publisher in their campaign via 
SuperFluid instant distribution.


## Run locally
Create env file with endpoint for the gateway server and name it as REACT_APP_API_SERVER
```
npm install

npm start // You might want to start the client and server on different ports if running on the same machine.
This can be done via specifying the PORT env variable
PORT=8083 npm start
```




