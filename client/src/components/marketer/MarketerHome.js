import React, {Component} from 'react';
import {Form, ListGroup, ListGroupItem, Row, Col, Container} from 'react-bootstrap';
import {Link, Switch, Router, Route} from 'react-router-dom';
import ActiveCampaigns from './ActiveCampaigns';
import JoinCampaign from './JoinCampaign';
import MyCampaigns from './MyCampaigns';
import './marketer.scss';

export default class MarketerHome extends Component {
  componentWillMount() {
    this.props.fetchOpenCampaigns();
  }
  render() {
    return (
      <Container>
        <Row className="tab-header">
          <Col lg={2}>
            <Link to="/app/campaign">Open Campaigns</Link>
          </Col>
          <Col lg={3}>
            <Link to="/app/campaign/my_campaigns">My current campaigns</Link>
          </Col>
        </Row>
        <Switch>
          <Route exact path="/app/campaign">
            <ActiveCampaigns {...this.props}/>
          </Route>
          <Route exact path="/app/campaign/my_campaigns">
            <MyCampaigns {...this.props}/>
          </Route> 
          <Route path="/app/campaign/:id">
            <JoinCampaign {...this.props}/>
          </Route>

        </Switch>
      </Container>
      )
  }
}