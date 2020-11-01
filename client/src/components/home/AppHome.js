import React, {Component} from 'react';
import TopNavBarContainer from '../nav/TopNavBarContainer';
import {Container} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PublisherHomeContainer from '../publisher/PublisherHomeContainer';
import MarketerHomeContainer from '../marketer/MarketerHomeContainer';
import './apphome.scss';
import Web3 from 'web3';

export default class AppHome extends Component {

  componentWillMount() {
    this.ethEnabled();
    const self = this;

    if (window.web3) {
      const web3 = window.web3;

      const selectedAddress = web3.currentProvider.selectedAddress;
      const networkVersion = web3.currentProvider.networkVersion;
      const payload = {'address': selectedAddress,
        'network': networkVersion
      }
      self.props.setUserAccount(payload);  
            self.props.authenticateUser(payload);
    }
    
    window.ethereum.on('accountsChanged', function (accounts) {

      const web3 = window.web3;

      const selectedAddress = web3.currentProvider.selectedAddress;
      const networkVersion = web3.currentProvider.networkVersion;
      const payload = {'address': selectedAddress,
        'network': networkVersion
      }
      self.props.setUserAccount(payload);
      self.props.authenticateUser(payload);
    });
    
    window.ethereum.on('networkChanged', function (networkId) {
      // Time to reload your interface with the new networkId
          const web3 = window.web3;
    
          const selectedAddress = web3.currentProvider.selectedAddress;
          const networkVersion = web3.currentProvider.networkVersion;
          
          const payload = {
            'address': selectedAddress,
            'network': networkVersion
          };
          self.props.setUserAccount(payload);
      self.props.authenticateUser(payload);            
    });
  }
  
  ethEnabled = () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    return true;
  }
  return false;
}

  componentWillReceiveProps(nextProps) {
    const {user: {selectedAddress}} = nextProps;
    const web3 = window.web3;
    const self = this;
    if (this.props.user.selectedAddress !== selectedAddress && selectedAddress) {

          const networkVersion = web3.currentProvider.networkVersion;      
          const payload = {
            'address': selectedAddress,
            'network': networkVersion
          };
          self.props.setUserAccount(payload);      
    }
  }
  
  render() {

    return (
      <Container fluid className="app-home-container">
        <TopNavBarContainer/>
        <Container className="app-content-container">
        <Switch>
          <Route path="/app/campaign">
            <MarketerHomeContainer/>
          </Route>
          <Route path="/app/publisher">
            <PublisherHomeContainer/>
          </Route>
        </Switch>
        </Container>
      </Container>
      )
  }
}