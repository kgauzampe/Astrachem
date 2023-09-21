import React from 'react';
import Domestic from '../../../images/Home.png'
import './card1.css'; // Create a CSS file for styling

function Card1({ title, imageUrl }) {
  return (
    <div className="card">
      <img src={Domestic} alt={title} className="card-image" />
      <div className="card-title">
        <h2>Domestic/Homes</h2>
      </div>
    </div>
  );
}

export default Card1;
