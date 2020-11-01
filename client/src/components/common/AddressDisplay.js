import React, {Component} from 'react';

export default class AddressDisplay extends Component {
  render() {
    const {address} = this.props;
    let addressDisplay= <span/>
    if (address && address.length > 0) {
      addressDisplay = <div className="small-text">{address.substring(0, 10)}...</div>
    }
    return (
      <div>
        {addressDisplay}
      </div>
      )
  }
}