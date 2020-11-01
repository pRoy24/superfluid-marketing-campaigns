import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class CampaignHome extends Component {
  componentWillMount() {
    const {match: {params}} = this.props;
    
    this.props.getAccountFlow(params.id);
  }
  render() {
    const {match: {params}, publisher: {currentPublisher}} = this.props;
    console.log(this.props)
    
    return (
      <div>
        <div className="h3">Campaign</div>
        <div>
          Campaign Wallet {params.id}
          
        </div>
        <div>
          Current net outflow {currentPublisher.accountFlow? currentPublisher.accountFlow.flow: ''}
        </div>
      </div>
      )
  }
}

export default withRouter(CampaignHome);