import React from 'react';
import componentMap from './componentMap';

const blockRenderer = ({ blocks = []}) => {
  return (
    <div className="c-block">
      { blocks.map((block, index) => {
        return React.createElement(componentMap[block.type], {
          data: block,
          key: `block-${index}`,
        });
      })}
    </div>
  );
};

export default blockRenderer;
