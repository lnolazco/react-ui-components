import React, { Component } from 'react';
import Card from '../Card/Card';
import './styles.scss';

class Tile extends Component {
  render() {
    const { title, image, onClick } = this.props;

    return (
      <div className="ui-tile" onClick={onClick}>
        <Card>
          <div>
            <div className="ui-tile__image-container">
              <img className="ui-tile__image-container__image" src={image} alt="" />
            </div>
            <div className="ui-tile__title">
              <h3>{title}</h3>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Tile;
