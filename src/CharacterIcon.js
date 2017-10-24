import React, { Component } from 'react';

class CharacterIcon extends Component {
    render() {
        let {charText} = this.props;
      return (
          <div>
          { charText }
        </div>
      );
    }

}

export default CharacterIcon;