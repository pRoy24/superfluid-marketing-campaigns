import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class PublisherCampaigns extends Component {
  componentWillMount() {
    console.log(this.props);
    const {user: {selectedAddress}} = this.props;
    this.props.authenticateUser({address: selectedAddress});
    
  }
  render() {
    const {user: {profile}} = this.props;
    if (profile == undefined) {
      return <span/>;
    } 
    let campaignItems = <span/>;
    if (profile.publisherAccounts && profile.publisherAccounts.length > 0) {
      campaignItems = <ListGroup>
      {profile.publisherAccounts.map(function(item, idx){
        return <ListGroupItem>
        <Link to={`/app/publisher/campaign/${item}`}>{item}</Link>
        </ListGroupItem>
      })}
      </ListGroup>
    }
    return (
      <div>
        {campaignItems}
      </div>
      )
  }
}