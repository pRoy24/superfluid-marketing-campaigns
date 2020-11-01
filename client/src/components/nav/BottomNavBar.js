import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';

export default class BottomNavBar extends Component {
  render() {
    return (
      <Navbar fixed="bottom">
        Powered by Superfluid
      </Navbar>
      )
  }
}