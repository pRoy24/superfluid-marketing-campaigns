import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Form, Button, Row, Col} from 'react-bootstrap';

class JoinCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaignLink: '',
      currentView: 'submit'
    }
  }
  componentWillMount() {
    const {match: {params}} = this.props;
    this.props.fetchCurrentCampaign(params.id);
  }
  
  submitProfile = () => {
    const {campaignLink} = this.state;
    const { user: {selectedAddress}, } = this.props;
    const {match: {params}} = this.props;
    const payload = {'campaignLink': campaignLink, 'userAddress': selectedAddress, '_id': params.id};
    this.props.submitJoinCampaign(payload)
  }
  
  campaignLinkChanged = (evt) => {
    this.setState({'campaignLink': evt.target.value});
  }
  
  componentWillReceiveProps(nextProps) {
    const {history} = this.props;
    const {campaign: {joinCampaignSubmitting, approvalPending}} = nextProps;
    if (this.props.campaign.joinCampaignSubmitting && !joinCampaignSubmitting) {
      this.setState({'currentView': 'approve'});
    }
    if (this.props.campaign.approvalPending && !approvalPending) {
      history.replace('/app/campaign/my_campaigns');
    }
  }
  
  approvePublisher = () => {
    const {campaign: {currentCampaign}, user: {selectedAddress}} = this.props;
    
    this.props.approveSubscription(currentCampaign.publisherWalletAddress, selectedAddress);
  }
  
  render() {
    const {campaign: {currentCampaign}, user: {selectedAddress}} = this.props;
    const {campaignLink, currentView} = this.state;
    if (currentView === 'submit') {
    return (
      <div className="join-campaign-container">
        <div className="text-center h4">Join Campaign</div>
        <Row>
        <Col lg={4}>
        <div>Quote tweet or retweet the following tweet</div>
        </Col>
        <Col lg={6}>
        <div>{currentCampaign.marketLink}</div>
        </Col>
        </Row>
        <Row>
        <Col lg={4}>
        <div>Post retweet link here</div>
        </Col>
        <Col lg={6}>
        <Form.Control type="text" value={campaignLink} onChange={this.campaignLinkChanged}/>
        </Col>
        </Row>
        <div>Payout will be made every {currentCampaign.payoutInterval} {currentCampaign.payoutIntervalUnit} to the address
         {selectedAddress}</div>
        <div>You need to approve in the next step</div>
        <div className="text-center">
        <Button onClick={this.submitProfile} >Submit</Button>
        </div>
      </div>
      )
   } else{
      return (
        <div>
          <div>Approve the publisher to automatically receive your xDai payouts.</div>
          <div><Button onClick={this.approvePublisher}>Approve</Button></div>
        </div>
        )  
    }
}
}

export default withRouter(JoinCampaign);