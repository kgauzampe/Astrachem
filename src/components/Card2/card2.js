import React from 'react';
import Hospitality from '../../images/Hospitality.png'
import './card2.css';

const Card2 = ({ title, content, imageUrl }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        {imageUrl && <img src={Hospitality} alt="Card" className="card-image" />}
        <h3 className="card-title1">{title}</h3>
      </div>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default Card2;
