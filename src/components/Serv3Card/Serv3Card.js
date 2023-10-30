import React from 'react';
import { Link } from 'react-router-dom';
import Card3 from '../Card3/card3';

const Serv3Card = () => {
  return (
    <Link className='Serv1' to="/Medical" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card3
        title="Medical Sector"
        // content="This is the content of the card. You can add more details here."
        imageUrl="path_to_image.jpg"
      />
    </Link>
  );
};

export default Serv3Card;
