import React from 'react';
import Industrial from '../../images/Industrial.png'
import './card4.css';

const Card4 = ({ title, content, imageUrl }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        {imageUrl && <img src={Industrial} alt="Card" className="card-image" />}
        <h3 className="card-title1">{title}</h3>
      </div>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default Card4;
