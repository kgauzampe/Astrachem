import React from 'react';
import { Link } from 'react-router-dom';
import Card4 from '../Card4/card4';

const Serv4Card = () => {
  return (
    <Link className='Serv1' to="/Industrial" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card4
        title="Industrial Sector"
        // content="This is the content of the card. You can add more details here."
        imageUrl="path_to_image.jpg"
      />
    </Link>
  );
};

export default Serv4Card;
