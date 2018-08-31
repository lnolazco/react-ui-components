import React, { Component } from 'react';
import './styles.scss';

class Tile extends Component {
  render() {
    return (
      <div className="ui-tile">
        {this.props.children}
      </div>
    );
  }
}

export default Tile;
