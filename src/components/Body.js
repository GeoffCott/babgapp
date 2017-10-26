import React, { Component } from 'react';


class Body extends Component {
  render() {
      let {labelText} = this.props;
    return (
        <p className="App-intro">
        {labelText}
      </p>
    );
  }
}

export default Body;

