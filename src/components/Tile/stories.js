import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import Tile from './Tile';

const stories = storiesOf('Tile', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => {
  const title = text('Title', 'Title sample');
  const image = text('Image url', 'https://www.w3schools.com/css/rock600x400.jpg');

  return (
    <Tile
      title={title}
      image={image}
      onClick={action('clicked')}
    />);
});
