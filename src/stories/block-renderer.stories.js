import React from 'react';
import { storiesOf } from '@storybook/react';

import BlockRenderer from '../components/block-renderer';

const blocks = [
  {
    type: 'section',
    text: {
      type: 'plain_text',
      text: 'Current items on the shopping list are:'
    }
  },
  {
    type: 'divider'
  },
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: '- Apples  \n- Pears  \n- Bananas'
    }
  },
];

storiesOf('Block Renderer')
  .add('Default', () => <BlockRenderer blocks={blocks} />)
  // This is to check it doesn't crash
  .add('No blocks', () => <BlockRenderer />);
