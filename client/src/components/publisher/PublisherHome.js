import React, {Component} from 'react';
import {Form, FormControl, InputGroup, Button} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import './publisher.scss';
import {Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import NewCampaign from './NewCampaign';
import PublisherCampaigns from './PublisherCampaigns';
import CampaignHome from './CampaignHome';

export default class PublisherHome extends Component {
  constructor(props) {
    super(props);
    this.state = {marketLink: ''};
  }
  submitPublisherRequest = (evt) => {
    evt.preventDefault();
    this.props.setupPublisher();
  }  
  marketLinkChanged = (evt) => {
    this.setState({marketLink: evt.target.value});
  }
  render() {
    const {marketLink} = this.state;

    return (
      <div className="">
       <Row className="tab-header">
         <Col lg={2}>
           <Link to="/app/publisher/list_active">Active Publications</Link>
         </Col>
 
         <Col lg={{span: 2, offset: 8}}>
           <Link to="/app/publisher/create">New Publication</Link>
         </Col>
       </Row>
       <Row>
        <Col md={{ span: 8, offset: 2 }}>
        <Switch>
          <Route exact path="/app/publisher">
            <NewCampaign {...this.props}/>
          </Route>
          <Route path="/app/publisher/create">
            <NewCampaign {...this.props}/>
          </Route>
          <Route path="/app/publisher/list_active">
            <PublisherCampaigns {...this.props}/>
          </Route>
          <Route path="/app/publisher/list_new">
            <NewCampaign {...this.props}/>
          </Route>
          <Route path="/app/publisher/list_expired">
            <NewCampaign {...this.props}/>
          </Route>
          <Route path="/app/publisher/campaign/:id">
            <CampaignHome {...this.props}/>
          </Route>
        </Switch>
        </Col>  
      </Row>  
      </div>
      )
  }
}