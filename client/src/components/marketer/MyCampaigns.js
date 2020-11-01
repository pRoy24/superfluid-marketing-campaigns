import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';

export default class MyCampaigns extends Component {
  componentWillMount() {
    this.props.fetchOpenCampaigns();
  }
  render() {
    const {campaign: {campaignList}, user: {selectedAddress}} = this.props;

    const web3 = window.web3;
    let campaignsFilteredList = <span/>;
    const self = this;
    if (campaignList && campaignList.length > 0) {
       campaignsFilteredList = campaignList.filter(function(item, fIdx){
        let marketerFound = item.marketers.find(function(fItem, fIdx){
          return web3.utils.toChecksumAddress(fItem.userAddress) === web3.utils.toChecksumAddress(selectedAddress);
        });

        if (marketerFound) {
          return item;
        }
      }).map(function(item, idx){
        console.log(item);
        const myMarketItem = item.marketers.find(function(fItem, fIdx){
          return web3.utils.toChecksumAddress(fItem.userAddress) === web3.utils.toChecksumAddress(selectedAddress);
        });
        return <ListGroupItem className="list-group-item-menu">
          <Link to={`/app/campaign/${item._id}`}>
          <Row>
            <Col lg={4}>
              Publication link 
            </Col>
            <Col lg={8}>
            {item.marketLink}
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              My marketing link 
            </Col>
            <Col lg={8}>
              {myMarketItem.campaignLink}
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              My total payouts
            </Col>
            <Col l={8}>
              {myMarketItem.previous_payout} xDai
            </Col>
          </Row>
          
          <div>{item.marketLink}</div>
          <div>Engagement Payouts</div>
          <Row>
          <Col lg={3}>{item.retweetPayout} per Retweet</Col>
          <Col lg={3}>{item.likePayout} per Like</Col>
          <Col lg={3}>{item.commentPayout} per Comment</Col>
        
          </Row>
            </Link>
        </ListGroupItem>
      })
    }
    return (
      <div>
        <div className="text-center h4">
          My Campaigns
        </div>
        <ListGroup className="app-list-group">
          {campaignsFilteredList}
        </ListGroup>      
      </div>
      )
  }
}