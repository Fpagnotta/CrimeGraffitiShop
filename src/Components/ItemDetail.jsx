import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

const ItemDetail = ({detalle}) => {

  const onAdd = (cantidad)=>{
    alert(`Sumaste ${cantidad} de Productos`)
  }


  return (
    <div className="d-flex justify-content-center align-items-center">
    <Card style={{ width: '18rem',marginTop: "100px" }}>
      <Card.Img variant="top" src={detalle.img} />
      <Card.Body>
        <Card.Title>{detalle.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{detalle.tipo}</Card.Subtitle>
        <Card.Text>{detalle.description}</Card.Text>
        <Card.Text>Precio: ${detalle.price}</Card.Text>
        <ItemCount stock={detalle.stock} onAdd={onAdd}/>
        {/* Podés agregar más detalles acá si querés */}
      </Card.Body>
    </Card>
    </div>
  );
}

export default ItemDetail