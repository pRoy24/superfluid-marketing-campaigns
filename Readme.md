# Superfluid Marketing Campaigns


* This is a proof of concept for marketing campaign application infrastructure that can be built over the SuperFluid framework. 

Web UI link http://d3nsoorrxk3psz.cloudfront.net/

Video demo link https://drive.google.com/file/d/15GKRBOCzhQB6_vcMWTf3FS7vkdqF4aIA/view?usp=sharing

## Client

### Currently supported networks are - Goerli test net.

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


### Run locally

```
cd client
```
Create env file with the following env variable REACT_APP_API_SERVER = 
```
npm install

npm start // You might want to start the client and server on different ports if running on the same machine.
This can be done via specifying the PORT env variable
PORT=8083 npm start
```

## Gateway server


## This is the backend server for SuperFluid marketing campaigns.

### How it works

- Publisher creates a campaign (tweet they want promoted)
- When marketer/Influncer signs up, they enter their retweet/quote tweet link via UI.
- The backend queries Twitter API to calculate engagement metrics on the retweet.
- A periodic task pays the marketer in the predefined interval as set by the publisher using SuperFluid instant distribution.
- A production implementation could have the maketer sign-in to Twitter via oAuth to prove that they are indeed the owner of 
the tweet, as well as get additional metrics such as click through rates, impressions etc.


To run locally

You need to install Mongodb to store application specific user data.

```
cd gateway
```
Create a .env file with the following parameters.
WEB3_PROVIDER=
TWITTER_API_KEY=
TWITTER_SECRET_KEY=
TWITTER_ACCESS_TOKEN=
TWITTER_TOKEN_SECRET=

```
  npm install
  npm start
```


### Limitations and future work

- Currently payout is made every one minute regardless of payment interval chosen by publisher.
- There is no oAuth against Twitter to verify whether the person joining the campaing is indeed the person who posted the retweet.
- There is no check to verify that the quoted tweet is indeed a retweet of the parent tweet.
- OAuth would also allow the app to get more metrics such as Clickthrough rate and impressions and make the campaign more expansive.
- App currently only works on the Gorli testnet.
- The client side web3 interaction has only been tested with Metamask.