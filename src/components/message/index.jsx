import React from 'react';

import './message.css';

const message = ({ children, data }) => {
  const { imageUrl, name } = data;

  return (
    <div className="c-message">
      <div className="c-message__profile">
        <img src={imageUrl} alt="profile" />
      </div>
      <div className="c-message__content">
        <p className="c-message__profile-name"><b>{name}</b></p>
        { children }
      </div>
    </div>
  );
};

export default message;
