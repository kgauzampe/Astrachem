import React from 'react';
import Medical from '../../../images/Medical.png'
import './card3.css'; // Create a CSS file for styling

function Card3({ title, imageUrl }) {
  return (
    <div className="card">
      <img src={Medical} alt={title} className="card-image" />
      <div className="card-title">
        <h2>Medical Sector</h2>
      </div>
    </div>
  );
}

export default Card3;
