(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{1214:function(e,t){},1400:function(e,t){},1427:function(e,t){},1431:function(e,t){},1456:function(e,t){},1482:function(e,t,n){},1486:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),i=n(71),u=n.n(i),l=(n(559),n(560),n(561),n(562),n(5)),o=n(6),s=n(11),p=n(10),m=n(1492),d=n(1493),f=n(539),h=n(540),E=(n(563),n(538)),b=n.n(E),g=n(28),v=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).redirectToHome=function(){e.props.history.push("/app/campaign")},e}return Object(o.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"landing-page-container"},c.a.createElement(m.a,null,c.a.createElement("div",{className:"app-landing-text-container"},c.a.createElement("div",{className:"h4 app-heading"},"Superfluid marketing campaigns"),c.a.createElement(d.a,null,c.a.createElement(f.a,{lg:4},c.a.createElement("img",{src:b.a,className:"landing-page-image"})),c.a.createElement(f.a,{lg:8},c.a.createElement("div",null,c.a.createElement("div",{className:"landing-line"},"Get better social engagement and metrics."),c.a.createElement("div",{className:"landing-line"},"Engamanent is real-time, so should your payments be."),c.a.createElement("div",{className:"landing-line"},"Pay out your influencers and marketers in real-time based on engagement."),c.a.createElement("div",null,c.a.createElement(h.a,{onClick:this.redirectToHome,className:"primary-btn landing-btn"},"Go to App"))))))))}}]),n}(r.Component),y=Object(g.f)(v),O=n(30),j=n(541),C=n(1494),A=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.campaign.campaignList,t=c.a.createElement("span",null);return e&&e.length>0&&(t=e.map((function(e,t){return c.a.createElement(j.a,{className:"list-group-item-menu"},c.a.createElement(O.b,{to:"/app/campaign/".concat(e._id)},c.a.createElement(d.a,null,c.a.createElement(f.a,{lg:6},"Posted by ",e.publisherWalletAddress),c.a.createElement(f.a,{lg:6},"Link to promote ",e.marketLink)),c.a.createElement("div",null,"Engagement Payouts"),c.a.createElement(d.a,null,c.a.createElement(f.a,{lg:3},e.retweetPayout," xDai per Retweet"),c.a.createElement(f.a,{lg:3},e.likePayout," xDai per Like"),c.a.createElement(f.a,{lg:3},e.commentPayout," xDai per Comment")),c.a.createElement(d.a,null,c.a.createElement(f.a,{lg:12},"Payout interval ",e.payoutInterval," ",e.payoutIntervalUnit))))}))),c.a.createElement("div",null,c.a.createElement(C.a,{className:"app-list-group"},t))}}]),n}(r.Component),w=Object(g.f)(A),k=n(1496),P=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).submitProfile=function(){var e={campaignLink:a.state.campaignLink,userAddress:a.props.user.selectedAddress,_id:a.props.match.params.id};a.props.submitJoinCampaign(e)},a.campaignLinkChanged=function(e){a.setState({campaignLink:e.target.value})},a.approvePublisher=function(){var e=a.props,t=e.campaign.currentCampaign,n=e.user.selectedAddress;a.props.approveSubscription(t.publisherWalletAddress,n)},a.state={campaignLink:"",currentView:"submit"},a}return Object(o.a)(n,[{key:"componentWillMount",value:function(){var e=this.props.match.params;this.props.fetchCurrentCampaign(e.id)}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.history,n=e.campaign,a=n.joinCampaignSubmitting,r=n.approvalPending;this.props.campaign.joinCampaignSubmitting&&!a&&this.setState({currentView:"approve"}),this.props.campaign.approvalPending&&!r&&t.replace("/app/campaign/my_campaigns")}},{key:"render",value:function(){var e=this.props,t=e.campaign.currentCampaign,n=e.user.selectedAddress,a=this.state,r=a.campaignLink;return"submit"===a.currentView?c.a.createElement("div",{className:"join-campaign-container"},c.a.createElement("div",{className:"text-center h4"},"Join Campaign"),c.a.createElement(d.a,null,c.a.createElement(f.a,{lg:4},c.a.createElement("div",null,"Quote tweet or retweet the following tweet")),c.a.createElement(f.a,{lg:6},c.a.createElement("div",null,t.marketLink))),c.a.createElement(d.a,null,c.a.createElement(f.a,{lg:4},c.a.createElement("div",null,"Post retweet link here")),c.a.createElement(f.a,{lg:6},c.a.createElement(k.a.Control,{type:"text",value:r,onChange:this.campaignLinkChanged}))),c.a.createElement("div",null,"Payout will be made every ",t.payoutInterval," ",t.payoutIntervalUnit," to the address",n),c.a.createElement("div",null,"You need to approve in the next step"),c.a.createElement("div",{className:"text-center"},c.a.createElement(h.a,{onClick:this.submitProfile},"Submit"))):c.a.createElement("div",null,c.a.createElement("div",null,"Approve the publisher to automatically receive your xDai payouts."),c.a.createElement("div",null,c.a.createElement(h.a,{onClick:this.approvePublisher},"Approve")))}}]),n}(r.Component),_=Object(g.f)(P),S=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentWillMount",value:function(){this.props.fetchOpenCampaigns()}},{key:"render",value:function(){var e=this.props,t=e.campaign.campaignList,n=e.user.selectedAddress,a=window.web3,r=c.a.createElement("span",null);return t&&t.length>0&&(r=t.filter((function(e,t){if(e.marketers.find((function(e,t){return a.utils.toChecksumAddress(e.userAddress)===a.utils.toChecksumAddress(n)})))return e})).map((function(e,t){console.log(e);var r=e.marketers.find((function(e,t){return a.utils.toChecksumAddress(e.userAddress)===a.utils.toChecksumAddress(n)}));return c.a.createElement(j.a,{className:"list-group-item-menu"},c.a.createElement(O.b,{to:"/app/campaign/".concat(e._id)},c.a.createElement(d.a,null,c.a.createElement(f.a,{lg:4},"Publication link"),c.a.createElement(f.a,{lg:8},e.marketLink)),c.a.createElement(d.a,null,c.a.createElement(f.a,{lg:4},"My marketing link"),c.a.createElement(f.a,{lg:8},r.campaignLink)),c.a.createElement(d.a,null,c.a.createElement(f.a,{lg:4},"My total payouts"),c.a.createElement(f.a,{l:8},r.previous_payout," xDai")),c.a.createElement("div",null,e.marketLink),c.a.createElement("div",null,"Engagement Payouts"),c.a.createElement(d.a,null,c.a.createElement(f.a,{lg:3},e.retweetPayout," per Retweet"),c.a.createElement(f.a,{lg:3},e.likePayout," per Like"),c.a.createElement(f.a,{lg:3},e.commentPayout," per Comment"))))}))),c.a.createElement("div",null,c.a.createElement("div",{className:"text-center h4"},"My Campaigns"),c.a.createElement(C.a,{className:"app-list-group"},r))}}]),n}(r.Component),N=(n(569),function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentWillMount",value:function(){this.props.fetchOpenCampaigns()}},{key:"render",value:function(){return c.a.createElement(m.a,null,c.a.createElement(d.a,{className:"tab-header"},c.a.createElement(f.a,{lg:2},c.a.createElement(O.b,{to:"/app/campaign"},"Open Campaigns")),c.a.createElement(f.a,{lg:3},c.a.createElement(O.b,{to:"/app/campaign/my_campaigns"},"My current campaigns"))),c.a.createElement(g.c,null,c.a.createElement(g.a,{exact:!0,path:"/app/campaign"},c.a.createElement(w,this.props)),c.a.createElement(g.a,{exact:!0,path:"/app/campaign/my_campaigns"},c.a.createElement(S,this.props)),c.a.createElement(g.a,{path:"/app/campaign/:id"},c.a.createElement(_,this.props))))}}]),n}(r.Component)),I=(n(570),n(1495)),T=n(542),U=n(1497),L=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).createCampaignWallet=function(){var e=a.props.user;a.props.createCampaignWallet({address:e.selectedAddress})},a.generateTestDai=function(){var e=a.props,t=e.publisher.currentAccount,n={userWallet:e.user.selectedAddress,publisherWallet:t};a.props.generateFunds(n)},a.state={view:""},a}return Object(o.a)(n,[{key:"componentWillMount",value:function(){this.setState({view:"createAccount"})}},{key:"componentWillReceiveProps",value:function(e){var t=e.publisher,n=(t.currentAccount,t.newAccountAdding),a=t.generatingFunds,r=t.campaignDetailsSubmitting,c=this.props.history;this.props.publisher.campaignDetailsSubmitting&&!r&&c.replace("/app/publisher/list_active"),this.props.publisher.newAccountAdding&&!n&&this.setState({view:"fundAccount"}),this.props.publisher.generatingFunds&&!a&&this.setState({view:"createCampaign"})}},{key:"render",value:function(){var e=this.state.view,t=this.props.publisher;return"createAccount"===e?c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("div",null,"A new campaign publication allows you to specify a link that others can promote on Twitter."),c.a.createElement("div",null,"You can specify the payout rewards for engagement metrics on the Tweet"),c.a.createElement("div",null,"The payouts will be made seamlessly according to the specified payout parameters and interval using SuperFluid finance.")),c.a.createElement("div",null,c.a.createElement("div",null,"Ready to begin?"),c.a.createElement(h.a,{onClick:this.createCampaignWallet},"Create campaign wallet."),c.a.createElement("div",null,"Once created you need to fund the wallet with some Testnet Ether to process transaction fees."))):"fundAccount"===e?c.a.createElement("div",null,c.a.createElement("div",null,"Your publication wallet address is ",t.currentAccount?t.currentAccount:""),c.a.createElement("div",null,"Fund this account with Test ether ",c.a.createElement("a",{href:"https://goerli-faucet.slock.it/",target:"_blank"},"here")),c.a.createElement("div",null,"(Please wait until the transaction is confirmed before proceeding)"),c.a.createElement("div",null,"Now let's fund your campaign."),c.a.createElement(h.a,{onClick:this.generateTestDai},"Generate xDai")):"createCampaign"===e?c.a.createElement(R,this.props):void 0}}]),n}(r.Component),R=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).marketLinkChanged=function(e){a.setState({marketLink:e.target.value})},a.likePayoutChanged=function(e){a.setState({likePayout:e.target.value})},a.retweetPayoutChanged=function(e){a.setState({retweetPayout:e.target.value})},a.commentPayoutChanged=function(e){a.setState({commentPayout:e.target.value})},a.submitPublisherRequest=function(e){var t=a.props,n=t.publisher.currentAccount,r=t.user.selectedAddress;a.props.match.params;e.preventDefault();var c=a.state;c.publisherWalletAddress=n,c.publisherUserAddress=r,a.props.submitCampaignDetails(c)},a.state={marketLink:"",payoutInterval:"1",payoutIntervalUnit:"minutes",likePayout:"",retweetPayout:"",commentPayout:""},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.marketLink,n=e.payoutInterval,a=e.payoutIntervalUnit,r=e.likePayout,i=e.retweetPayout,u=e.commentPayout;return c.a.createElement("div",{className:"new-campaign-container"},c.a.createElement(k.a,{onSubmit:this.submitPublisherRequest},c.a.createElement(k.a.Group,{controlId:"formBasicEmail"},"Add the link of the tweet which you want to promote",c.a.createElement(k.a.Control,{type:"text",value:t,onChange:this.marketLinkChanged})),c.a.createElement("div",null,"Payout for engagement metrics"),c.a.createElement(d.a,null,c.a.createElement(f.a,{lg:4},c.a.createElement("div",null,"For every like",c.a.createElement(I.a,{className:"mb-2"},c.a.createElement(T.a,{id:"inlineFormInputGroup",placeholder:"Like payout",value:r,onChange:this.likePayoutChanged}),c.a.createElement(I.a.Append,null,c.a.createElement(I.a.Text,null,"xDAI"))))),c.a.createElement(f.a,{lg:4},c.a.createElement("div",null,"For every retweet",c.a.createElement(I.a,{className:"mb-2"},c.a.createElement(T.a,{id:"inlineFormInputGroup",placeholder:"Retweet payout",value:i,onChange:this.retweetPayoutChanged}),c.a.createElement(I.a.Append,null,c.a.createElement(I.a.Text,null,"xDAI"))))),c.a.createElement(f.a,{lg:4},c.a.createElement("div",null,"For every comment",c.a.createElement(I.a,{className:"mb-2"},c.a.createElement(T.a,{id:"inlineFormInputGroup",placeholder:"Comment payout",value:u,onChange:this.commentPayoutChanged}),c.a.createElement(I.a.Append,null,c.a.createElement(I.a.Text,null,"xDAI")))))),c.a.createElement(d.a,null,c.a.createElement(f.a,{lg:12},"Payout interval",c.a.createElement(d.a,null,c.a.createElement(f.a,{lg:6},c.a.createElement(T.a,{type:"text",value:n,onChange:this.payoutIntervalChanged})),c.a.createElement(f.a,{lg:6},c.a.createElement(U.a,null,c.a.createElement(U.a.Toggle,{id:"dropdown-basic"},a),c.a.createElement(U.a.Menu,null,c.a.createElement(U.a.Item,{href:"#/action-1"},"Hours"),c.a.createElement(U.a.Item,{href:"#/action-2"},"Days"),c.a.createElement(U.a.Item,{href:"#/action-3"},"Months"))))))),c.a.createElement(h.a,{type:"submit"},"Publish")))}}]),n}(r.Component),F=Object(g.f)(L),x=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentWillMount",value:function(){console.log(this.props);var e=this.props.user.selectedAddress;this.props.authenticateUser({address:e})}},{key:"render",value:function(){var e=this.props.user.profile;if(void 0==e)return c.a.createElement("span",null);var t=c.a.createElement("span",null);return e.publisherAccounts&&e.publisherAccounts.length>0&&(t=c.a.createElement(C.a,null,e.publisherAccounts.map((function(e,t){return c.a.createElement(j.a,null,c.a.createElement(O.b,{to:"/app/publisher/campaign/".concat(e)},e))})))),c.a.createElement("div",null,t)}}]),n}(r.Component),M=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentWillMount",value:function(){var e=this.props.match.params;this.props.getAccountFlow(e.id)}},{key:"render",value:function(){var e=this.props,t=e.match.params,n=e.publisher.currentPublisher;return console.log(this.props),c.a.createElement("div",null,c.a.createElement("div",{className:"h3"},"Campaign"),c.a.createElement("div",null,"Campaign Wallet ",t.id),c.a.createElement("div",null,"Current net outflow ",n.accountFlow?n.accountFlow.flow:""))}}]),n}(r.Component),D=Object(g.f)(M),G=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).submitPublisherRequest=function(e){e.preventDefault(),a.props.setupPublisher()},a.marketLinkChanged=function(e){a.setState({marketLink:e.target.value})},a.state={marketLink:""},a}return Object(o.a)(n,[{key:"render",value:function(){this.state.marketLink;return c.a.createElement("div",{className:""},c.a.createElement(d.a,{className:"tab-header"},c.a.createElement(f.a,{lg:2},c.a.createElement(O.b,{to:"/app/publisher/list_active"},"Active Publications")),c.a.createElement(f.a,{lg:{span:2,offset:8}},c.a.createElement(O.b,{to:"/app/publisher/create"},"New Publication"))),c.a.createElement(d.a,null,c.a.createElement(f.a,{md:{span:8,offset:2}},c.a.createElement(g.c,null,c.a.createElement(g.a,{exact:!0,path:"/app/publisher"},c.a.createElement(F,this.props)),c.a.createElement(g.a,{path:"/app/publisher/create"},c.a.createElement(F,this.props)),c.a.createElement(g.a,{path:"/app/publisher/list_active"},c.a.createElement(x,this.props)),c.a.createElement(g.a,{path:"/app/publisher/list_new"},c.a.createElement(F,this.props)),c.a.createElement(g.a,{path:"/app/publisher/list_expired"},c.a.createElement(F,this.props)),c.a.createElement(g.a,{path:"/app/publisher/campaign/:id"},c.a.createElement(D,this.props))))))}}]),n}(r.Component),W=n(73),H=n(1498),B=n(1499),V=(n(573),function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.address,t=c.a.createElement("span",null);return e&&e.length>0&&(t=c.a.createElement("div",{className:"small-text"},e.substring(0,10),"...")),c.a.createElement("div",null,t)}}]),n}(r.Component)),J=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.user,t=e.selectedAddress,n=e.selectedNetwork,a=c.a.createElement("span",null),r=c.a.createElement("span",null),i=c.a.createElement("span",null);return n&&"5"!==n&&(i=c.a.createElement("div",null,"You are in the wrong network. Please switch to Goerli testnet.")),"5"===n&&(r=c.a.createElement("div",null,"Goerli Network")),t&&(a=c.a.createElement("div",null,c.a.createElement(V,{address:t}))),c.a.createElement("div",null,c.a.createElement(H.a,{expand:"lg",fixed:"top"},c.a.createElement(H.a.Brand,{href:"/"},"SuperFluid Marketing Campaigns"),c.a.createElement(H.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(H.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(B.a,{className:"mr-auto"},c.a.createElement(B.a.Link,{href:"/app/campaign"},"Campaigns"),c.a.createElement(B.a.Link,{href:"/app/publisher"},"Publisher"))),c.a.createElement("div",null,i,r,a)))}}]),n}(r.Component),q=Object(W.b)((function(e){return{user:e.user}}),(function(e){return{}}))(J),Y=n(24),X=n(51),z=Object(W.b)((function(e){return{user:e.user,publisher:e.publisher}}),(function(e){return{setupPublisher:function(t){e(Object(Y.m)(t)).then((function(t){e(Object(Y.o)(t.payload.data))})).catch((function(t){e(Object(Y.n)(t))}))},createCampaignWallet:function(t){e(Object(Y.j)(t)).then((function(t){e(Object(Y.l)(t.payload.data))})).catch((function(t){e(Object(Y.k)(t))}))},generateFunds:function(t){e(Object(Y.p)(t)).then((function(t){e(Object(Y.r)(t.payload.data))})).catch((function(t){e(Object(Y.q)(t))}))},getAccountFlow:function(t){e(Object(Y.s)(t)).then((function(t){e(Object(Y.u)(t.payload.data))})).catch((function(t){e(Object(Y.t)(t))}))},submitCampaignDetails:function(t){e(Object(Y.v)(t)).then((function(t){e(Object(Y.x)(t.payload.data))})).catch((function(t){e(Object(Y.w)(t))}))},authenticateUser:function(t){e(Object(X.c)(t)).then((function(t){e(Object(X.e)(t.payload.data))})).catch((function(t){e(Object(X.d)(t))}))}}}))(G),Q=n(26),$=window.web3,K=new(n(590).Framework)({version:"preview-20200928",web3Provider:$.currentProvider,chainId:5}),Z=Object(W.b)((function(e){return{user:e.user,campaign:e.campaign}}),(function(e){return{fetchOpenCampaigns:function(){e(Object(Q.q)()).then((function(t){e(Object(Q.s)(t.payload.data))})).catch((function(t){e(Object(Q.r)(t))}))},fetchCurrentCampaign:function(t){e(Object(Q.n)(t)).then((function(t){e(Object(Q.p)(t.payload.data))})).catch((function(t){e(Object(Q.o)(t))}))},approveSubscription:function(t,n){e(Object(Q.l)()),K.initialize().then((function(r){K.resolver.get("tokens.fDAI").then((function(r){K.contracts.TestToken.at(r).then((function(r){K.getERC20Wrapper(r).then((function(r){K.contracts.ISuperToken.at(r.wrapperAddress).then((function(r){a=r,K.host.callAgreement(K.agreements.ida.address,K.agreements.ida.contract.methods.approveSubscription(a.address,t,42,"0x").encodeABI(),{from:n}).then((function(t){e(Object(Q.m)())}))}))}))}))}))}))},submitJoinCampaign:function(t){e(Object(Q.t)(t)).then((function(t){e(Object(Q.v)(t.payload.data))})).catch((function(t){e(Object(Q.u)(t))}))}}}))(N),ee=(n(1482),n(206)),te=n.n(ee),ne=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).ethEnabled=function(){return!!window.ethereum&&(window.web3=new te.a(window.ethereum),window.ethereum.enable(),!0)},e}return Object(o.a)(n,[{key:"componentWillMount",value:function(){this.ethEnabled();var e=this;if(window.web3){var t=window.web3,n={address:t.currentProvider.selectedAddress,network:t.currentProvider.networkVersion};e.props.setUserAccount(n),e.props.authenticateUser(n)}window.ethereum.on("accountsChanged",(function(t){var n=window.web3,a={address:n.currentProvider.selectedAddress,network:n.currentProvider.networkVersion};e.props.setUserAccount(a),e.props.authenticateUser(a)})),window.ethereum.on("networkChanged",(function(t){var n=window.web3,a={address:n.currentProvider.selectedAddress,network:n.currentProvider.networkVersion};e.props.setUserAccount(a),e.props.authenticateUser(a)}))}},{key:"componentWillReceiveProps",value:function(e){var t=e.user.selectedAddress,n=window.web3;if(this.props.user.selectedAddress!==t&&t){var a={address:t,network:n.currentProvider.networkVersion};this.props.setUserAccount(a)}}},{key:"render",value:function(){return c.a.createElement(m.a,{fluid:!0,className:"app-home-container"},c.a.createElement(q,null),c.a.createElement(m.a,{className:"app-content-container"},c.a.createElement(g.c,null,c.a.createElement(g.a,{path:"/app/campaign"},c.a.createElement(Z,null)),c.a.createElement(g.a,{path:"/app/publisher"},c.a.createElement(z,null)))))}}]),n}(r.Component),ae=Object(W.b)((function(e){return{user:e.user}}),(function(e){return{setUserAccount:function(t){e(Object(X.f)(t))},authenticateUser:function(t){e(Object(X.c)(t)).then((function(t){e(Object(X.e)(t.payload.data))})).catch((function(t){e(Object(X.d)(t))}))}}}))(ne),re=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return c.a.createElement(H.a,{fixed:"bottom"},"Powered by Superfluid")}}]),n}(r.Component);var ce=function(){return c.a.createElement(O.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(g.c,null,c.a.createElement(g.a,{exact:!0,path:"/"},c.a.createElement(y,null)),c.a.createElement(g.a,{path:"/app"},c.a.createElement(ae,null)))),c.a.createElement(re,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=n(549),ue=n.n(ie)()();u.a.render(c.a.createElement(W.a,{store:ue},c.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},1487:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n(89),r=n(550),c=n.n(r),i=n(15),u=n(51),l={selectedAddress:"",selectedNetwork:"",profile:{}};var o=n(24),s={accounts:[],currentAccount:"",newAccountAdding:!1,generatingFunds:!1,currentPublisher:{},campaignDetailsSubmitting:!1};var p=n(26),m={campaignList:[],currentCampaign:{},joinCampaignSubmitting:!1,approvalPending:!1};var d=Object(a.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.b:return Object(i.a)(Object(i.a)({},e),{},{selectedAddress:t.payload.address,selectedNetwork:t.payload.network});case u.a:return console.log(t.payload),Object(i.a)(Object(i.a)({},e),{},{profile:t.payload.user});default:return e}},publisher:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case o.a:return Object(i.a)(Object(i.a)({},t),{},{newAccountAdding:!0});case o.c:var a=n.payload.account,r=t.accounts;return r.push({address:a}),Object(i.a)(Object(i.a)({},t),{},{accounts:r,newAccountAdding:!1,currentAccount:a});case o.b:return Object(i.a)(Object(i.a)({},t),{},{newAccountAdding:!1});case o.d:return Object(i.a)(Object(i.a)({},t),{},{generatingFunds:!0});case o.f:case o.e:return Object(i.a)(Object(i.a)({},t),{},{generatingFunds:!1});case o.g:return(e=t.currentPublisher).accountFlow=n.payload.data,Object(i.a)(Object(i.a)({},t),{},{currentPublisher:e});case o.h:return Object(i.a)(Object(i.a)({},t),{},{campaignDetailsSubmitting:!0});case o.i:return Object(i.a)(Object(i.a)({},t),{},{campaignDetailsSubmitting:!1});default:return t}},campaign:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.f:return Object(i.a)({},e);case p.h:return Object(i.a)(Object(i.a)({},e),{},{campaignList:t.payload.campaigns});case p.g:case p.c:return Object(i.a)({},e);case p.e:return Object(i.a)(Object(i.a)({},e),{},{currentCampaign:t.payload.campaign});case p.d:return Object(i.a)({},e);case p.i:return Object(i.a)(Object(i.a)({},e),{},{joinCampaignSubmitting:!0});case p.k:case p.j:return Object(i.a)(Object(i.a)({},e),{},{joinCampaignSubmitting:!1});case p.a:return Object(i.a)(Object(i.a)({},e),{},{approvalPending:!0});case p.b:return Object(i.a)(Object(i.a)({},e),{},{approvalPending:!1});default:return e}}});function f(e){return Object(a.d)(Object(a.a)(c.a),window.devToolsExtension?window.devToolsExtension():function(e){return e})(a.e)(d,e)}},24:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"g",(function(){return p})),n.d(t,"h",(function(){return m})),n.d(t,"i",(function(){return d})),n.d(t,"p",(function(){return h})),n.d(t,"r",(function(){return E})),n.d(t,"q",(function(){return b})),n.d(t,"m",(function(){return g})),n.d(t,"o",(function(){return v})),n.d(t,"n",(function(){return y})),n.d(t,"j",(function(){return O})),n.d(t,"l",(function(){return j})),n.d(t,"k",(function(){return C})),n.d(t,"s",(function(){return A})),n.d(t,"u",(function(){return w})),n.d(t,"t",(function(){return k})),n.d(t,"v",(function(){return P})),n.d(t,"x",(function(){return _})),n.d(t,"w",(function(){return S}));var a=n(58),r=n.n(a),c="CREATE_CAMPAIGN_WALLET",i="CREATE_CAMPAIGN_WALLET_SUCCESS",u="CREATE_CAMPAIGN_WALLET_FAILURE",l="GENERATE_FUNDS",o="GENERATE_FUNDS_SUCCESS",s="GENERATE_FUNDS_FAILURE",p="GET_ACCOUNT_FLOW",m="SUBMIT_CAMPAIGN_DETAILS",d="SUBMIT_CAMPAIGN_DETAILS_SUCCESS",f="http://34.125.189.163:3004";function h(e){var t=r.a.post("".concat(f,"/generate_funds"),e);return{type:l,payload:t}}function E(e){return{type:o,payload:e}}function b(e){return{type:s,payload:e}}function g(e){return{type:"CREATE_PUBLISHER_INDEX",payload:r.a.post("".concat(f,"/publisher"),e)}}function v(e){return{type:"CREATE_PUBLISHER_INDEX_SUCCESS",payload:e}}function y(e){return{type:"CREATE_PUBLISHER_INDEX_FAILURE",payload:e}}function O(e){var t=r.a.post("".concat(f,"/publisher_wallet"),e);return{type:c,payload:t}}function j(e){return{type:i,payload:e}}function C(e){return{type:u,payload:e}}function A(e){var t=r.a.get("".concat(f,"/account_flow?id=").concat(e));return{type:p,payload:t}}function w(e){return{type:"GET_ACCOUNT_FLOW_SUCCESS",payload:e}}function k(e){return{type:"GET_ACCOUNT_FLOW_FAILURE",payload:e}}function P(e){var t=r.a.post("".concat(f,"/campaign_details"),e);return{type:m,payload:t}}function _(e){return{type:d,payload:e}}function S(e){return{type:d,payload:e}}},26:function(e,t,n){"use strict";n.d(t,"f",(function(){return c})),n.d(t,"h",(function(){return i})),n.d(t,"g",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"i",(function(){return p})),n.d(t,"k",(function(){return m})),n.d(t,"j",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return h})),n.d(t,"q",(function(){return b})),n.d(t,"s",(function(){return g})),n.d(t,"r",(function(){return v})),n.d(t,"n",(function(){return y})),n.d(t,"p",(function(){return O})),n.d(t,"o",(function(){return j})),n.d(t,"t",(function(){return C})),n.d(t,"v",(function(){return A})),n.d(t,"u",(function(){return w})),n.d(t,"l",(function(){return k})),n.d(t,"m",(function(){return P}));var a=n(58),r=n.n(a),c="FETCH_OPEN_CAMPAIGNS",i="FETCH_OPEN_CAMPAIGNS_SUCCESS",u="FETCH_OPEN_CAMPAIGNS_FAILURE",l="FETCH_CURRENT_CAMPAIGN",o="FETCH_CURRENT_CAMPAIGN_SUCCESS",s="FETCH_CURRENT_CAMPAIGN_FAILURE",p="SUBMIT_JOIN_CAMPAIGN",m="SUBMIT_JOIN_CAMPAIGN_SUCCESS",d="SUBMIT_JOIN_CAMPAIGN_FAILURE",f="APPROVAL_SUCCESS",h="APPROVAL_PENDING",E="http://34.125.189.163:3004";function b(){var e=r.a.get("".concat(E,"/campaigns"));return{type:c,payload:e}}function g(e){return{type:i,payload:e}}function v(e){return{type:u,payload:e}}function y(e){var t=r.a.get("".concat(E,"/campaign?id=").concat(e));return{type:l,payload:t}}function O(e){return{type:o,payload:e}}function j(e){return{type:s,payload:e}}function C(e){var t=r.a.post("".concat(E,"/join_campaign"),e);return{type:p,payload:t}}function A(e){return{type:m,payload:e}}function w(e){return{type:d,payload:e}}function k(){return{type:h}}function P(){return{type:f}}},51:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"f",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return s}));var a=n(58),r=n.n(a),c="SET_USER_ACCOUNT",i="AUTHENTICATE_USER_SUCCESS";function u(e){return{type:c,payload:e}}function l(e){return{type:"AUTHENTICATE_USER",payload:r.a.get("".concat("http://34.125.189.163:3004","/authenticate?address=").concat(e.address))}}function o(e){return{type:i,payload:e}}function s(e){return{type:"AUTHENTICATE_USER_FAILURE",payload:e}}},538:function(e,t,n){e.exports=n.p+"static/media/w903.6e641cf3.png"},549:function(e,t,n){e.exports=n(1487)},554:function(e,t,n){e.exports=n(1486)},559:function(e,t,n){},560:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},562:function(e,t,n){},563:function(e,t,n){},569:function(e,t,n){},570:function(e,t,n){},573:function(e,t,n){},602:function(e,t){},622:function(e,t){},624:function(e,t){},637:function(e,t){},638:function(e,t){},640:function(e,t){},641:function(e,t){},712:function(e,t){},714:function(e,t){},746:function(e,t){},748:function(e,t){},753:function(e,t){},755:function(e,t){},762:function(e,t){},763:function(e,t){},765:function(e,t){},777:function(e,t){},780:function(e,t){},793:function(e,t){},796:function(e,t){},905:function(e,t){},957:function(e,t){},966:function(e,t){}},[[554,1,2]]]);
//# sourceMappingURL=main.dae95b6a.chunk.js.map