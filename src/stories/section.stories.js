import React from 'react';
import { storiesOf } from '@storybook/react';

import Section from '../components/section';

storiesOf('Section')
  .add('Default', () => <Section data={{
    text: {
      type: 'plain_text',
      text: 'Current Shopping list'
    },
    fields: [
      {
        type: 'plain_text',
        text: 'Eggs'
      }
    ]
  }} />)
  .add('Markdown', () => <Section data={{
    text: {
      type: 'mrkdwn',
      text: '**Current Shopping list**'
    },
    fields: [
      {
        type: 'mrkdwn',
        text: '**Eggs:** Quantity = 1'
      }
    ]
  }} />)
  .add('No Fields', () => <Section data={{
    text: {
      type: 'mrkdwn',
      text: '**Current Shopping list**'
    }
  }} />)
  .add('Fields Only', () => <Section data={{
    fields: [
      {
        type: 'mrkdwn',
        text: '**Eggs**  \nQuantity: 1'
      },
      {
        type: 'mrkdwn',
        text: '**Salmon**  \nQuantity: 1'
      },
      {
        type: 'mrkdwn',
        text: '**Chicken**  \nQuantity: 1'
      },
      {
        type: 'mrkdwn',
        text: '**Toothbrush**  \nQuantity: 1'
      }
    ]
  }} />);
