import React from 'react';
import { Link } from 'react-router-dom';
import Card2 from '../Card2/card2'; // Assuming you have your Card1 component

const Serv2Card = () => {
  return (
    <Link className='Serv1' to="/Hospitalty" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card2
        title="Hospitality Sector"
        // content="This is the content of the card. You can add more details here."
        imageUrl="path_to_image.jpg"
      />
    </Link>
  );
};

export default Serv2Card;
