import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';

class ActiveCampaigns extends Component {

  render() {
    const {campaign: {campaignList}} = this.props;
    let campignsList = <span/>;
    if (campaignList && campaignList.length > 0) {
      campignsList = campaignList.map(function(item, idx){
        return <ListGroupItem className="list-group-item-menu">
          <Link to={`/app/campaign/${item._id}`}>
          <Row>
            <Col lg={6}>
             Posted by {item.publisherWalletAddress}
            </Col>
            <Col lg={6}>
              Link to promote {item.marketLink}
            </Col>
          </Row>
          <div>Engagement Payouts</div>
          <Row>
          <Col lg={3}>{item.retweetPayout} xDai per Retweet</Col>
          <Col lg={3}>{item.likePayout} xDai per Like</Col>
          <Col lg={3}>{item.commentPayout} xDai per Comment</Col>
          </Row>
          <Row>
            <Col lg={12}>
            Payout interval {item.payoutInterval} {item.payoutIntervalUnit}
            </Col>
          </Row>
            </Link>
        </ListGroupItem>
      })
    }
    return (
      <div>

        <ListGroup className="app-list-group">
          {campignsList}
        </ListGroup>      
      </div>
      )
  }
}

export default withRouter(ActiveCampaigns)