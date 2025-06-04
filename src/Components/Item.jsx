import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({produc}) => {
  const {name,price,img,tipo} = produc 
  return (
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{tipo}</Card.Text>
        <Card.Text>${price}</Card.Text>
        <Button variant="primary">COMPRAR!!</Button>
      </Card.Body>
    </Card>
  )
}

export default Item