import React from 'react';
import Industrial from '../../../images/Industrial.png'
import './card4.css'; // Create a CSS file for styling

function Card4({ title, imageUrl }) {
  return (
    <div className="card">
      <img src={Industrial} alt={title} className="card-image" />
      <div className="card-title">
        <h2>Industrial Sector</h2>
      </div>
    </div>
  );
}

export default Card4;
