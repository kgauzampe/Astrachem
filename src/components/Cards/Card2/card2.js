import React from 'react';
import Hospitality from '../../../images/Hospitality.png'
import './card2.css'; // Create a CSS file for styling

function Card2({ title, imageUrl }) {
  return (
    <div className="card">
      <img src={Hospitality} alt={title} className="card-image" />
      <div className="card-title">
        <h2>Hospitality Sector</h2>
      </div>
    </div>
  );
}

export default Card2;
