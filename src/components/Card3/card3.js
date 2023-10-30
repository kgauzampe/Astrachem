import React from 'react';
import Medical from '../../images/Medical.png'
import './card3.css';

const Card3 = ({ title, content, imageUrl }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        {imageUrl && <img src={Medical} alt="Card" className="card-image" />}
        <h3 className="card-title1">{title}</h3>
      </div>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default Card3;
