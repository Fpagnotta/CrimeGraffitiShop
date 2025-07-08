import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

const Item = ({produc}) => {
  const {name,price,img,tipo} = produc 
  return (
     <Card className='card-container' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{tipo}</Card.Text>
        <Card.Text>${price}</Card.Text>
        <Link to={`/item/${produc.id}`}>
          <Button variant="outline-light">VER MÁS!!</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Item