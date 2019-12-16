import React from 'react';
import ReactMarkdown from 'react-markdown';

import './section.css';

const renderText = ({ type, text }) => {
  if (type === 'mrkdwn') {
    return <ReactMarkdown key={`field-${Math.random()}`} source={text} />;
  }

  return <p>{text}</p>;
};

const renderFields = fields => {
  return fields.map((field) => renderText(field));
};

const section = ({ data }) => {
  const { text, fields } = data;

  return (
    <div className="c-section">
      {
        text ? renderText(text) : null
      }
      {
        fields ? <div className="c-fields">{renderFields(fields)}</div> : null
      }
    </div>
  );
};

export default section;
