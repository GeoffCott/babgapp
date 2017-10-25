import React, { Component } from 'react';


class Header extends Component {
  render() {
    let {logo} = this.props;
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Betrayal At Baldurs Gate</h1>
        </header>
    );
  }
}

export default Header;

