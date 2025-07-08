import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import { CartContext } from '../Context/cartContext';




const ItemDetail = ({detalle}) => {

  const { addItem } = useContext(CartContext);

  const onAdd = (cantidad)=>{
    console.log(" Detalle enviado al carrito:", detalle); 
    addItem(detalle, cantidad);
    alert(`Sumaste ${cantidad} de Productos`)
  }


  return (
    <div className="d-flex justify-content-center align-items-center">
    <Card className='card-item'  >
      <Card.Img variant="top" src={detalle.img} />
      <Card.Body >
        <Card.Title>{detalle.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{detalle.tipo}</Card.Subtitle>
        <Card.Text>{detalle.description}</Card.Text>
        <Card.Text>Precio: ${detalle.price}</Card.Text>
        <ItemCount stock={detalle.stock} onAdd={onAdd}/>
        
      </Card.Body>
    </Card>
    </div>
  );
}

export default ItemDetail




