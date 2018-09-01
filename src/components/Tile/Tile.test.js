import React from 'react';
import { shallow } from 'enzyme';
import Tile from './Tile';

describe('Tile', () => {
  it('should render', () => {
    const component = shallow(<Tile />);

    expect(!!component).toBe(true);
  })
})