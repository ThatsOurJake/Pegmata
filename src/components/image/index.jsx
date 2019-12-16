import React from 'react';
import ReactMarkdown from 'react-markdown';

import './image.css';

const renderText = ({ type, text }) => {
  if (type === 'mrkdwn') {
    return <ReactMarkdown source={text} />;
  }

  return <p>{text}</p>;
};

const image = ({ data }) => {
  const { title, image_url: imageUrl } = data;

  return (
    <div className="c-image">
      {
        title ? renderText(title) : null
      }
      {
        imageUrl ? <img src={imageUrl} alt="ugh" /> : null
      }
    </div>
  );
};

export default image;
