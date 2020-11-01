import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import './nav.scss';
import AddressDisplay from '../common/AddressDisplay';

export default class TopNavbar extends Component {
  render() {
    const {user: {selectedAddress, selectedNetwork}} = this.props;
    let addressString = <span/>;
    let networkString = <span/>;
    let wrongNetworkDisplay = <span/>;
    if (selectedNetwork && selectedNetwork !== '5') {
      wrongNetworkDisplay = <div>You are in the wrong network. Please switch to Goerli testnet.</div>
    }
    if (selectedNetwork === '5') {
        networkString = <div>Goerli Network</div>
    }
    if (selectedAddress) {
      addressString = <div><AddressDisplay address={selectedAddress}/></div>
    }
    
    return (
      <div>
      <Navbar expand="lg" fixed="top">
        <Navbar.Brand href="/">SuperFluid Marketing Campaigns</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/app/campaign">Campaigns</Nav.Link>    
            <Nav.Link href="/app/publisher">Publisher</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div>
         {wrongNetworkDisplay}
         {networkString}
         {addressString}
        </div>
      </Navbar>
      </div>
      )
  }
}