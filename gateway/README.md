# REST APIs for SuperFluid marketing campaigns

## This is a proof of concept for marketing campaign infrastructure that can be built over the SuperFluid framework.

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