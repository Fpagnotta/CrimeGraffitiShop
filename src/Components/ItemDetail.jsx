import React from 'react'
import Card from 'react-bootstrap/Card';

const ItemDetail = ({detalle}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={detalle.img} />
      <Card.Body>
        <Card.Title>{detalle.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{detalle.tipo}</Card.Subtitle>
        <Card.Text>{detalle.description}</Card.Text>
        <Card.Text>Precio: ${detalle.price}</Card.Text>
        {/* Podés agregar más detalles acá si querés */}
      </Card.Body>
    </Card>
  );
}

export default ItemDetail