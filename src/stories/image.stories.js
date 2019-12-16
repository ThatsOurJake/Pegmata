import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from '../components/image';

storiesOf('Image')
  .add('Default', () => <Image data={{
    image_url: 'https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548_1280.jpg',
    title: {
      type: 'plain_text',
      text: 'doggo.png'
    }
  }} />)
  .add('No title', () => <Image data={{
    image_url: 'https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548_1280.jpg',
  }} />)
  .add('Landscape Image', () => <Image data={{
    image_url: 'https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566_1280.jpg',
    title: {
      type: 'plain_text',
      text: 'doggo.png'
    }
  }} />)
  .add('Portrait Image', () => <Image data={{
    image_url: 'https://cdn.pixabay.com/photo/2018/05/11/08/11/pet-3389729_1280.jpg',
    title: {
      type: 'plain_text',
      text: 'doggo.png'
    }
  }} />);
