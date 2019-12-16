import React from 'react';
import { storiesOf } from '@storybook/react';

import Message from '../components/message';
import Section from '../components/section';
import BlockRenderer from '../components/block-renderer';

storiesOf('Message')
  .add('Default', () => <Message data={{
    imageUrl: 'https://www.gravatar.com/avatar/bb21622fe089a07b029d9851505f68e7.jpg?s=200',
    name: 'Jake King'
  }} />)
  .add('With content', () =>
    <Message data={{
      imageUrl: 'https://www.gravatar.com/avatar/bb21622fe089a07b029d9851505f68e7.jpg?s=200',
      name: 'Jake King'
    }}>
      <Section data={{
        text: {
          type: 'plain_text',
          text: 'Hello...'
        }
      }} />
    </Message>
  )
  .add('With Block Renderer', () => 
    <Message data={{
      imageUrl: 'https://www.gravatar.com/avatar/bb21622fe089a07b029d9851505f68e7.jpg?s=200',
      name: 'Jake King'
    }}>
      <BlockRenderer
        blocks={[
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
        ]}
      />
    </Message>
  );

