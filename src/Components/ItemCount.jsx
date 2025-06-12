import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] =useState(1)
    const sumar = ()=>{
        if(count < stock){

            setCount(count +1)
        }
    }
    const restar = ()=>{
        if(count > 0){

            setCount(count -1)
        }
    }
    
   const comprar = () =>{
    onAdd(count)
   }


  return (
    <div>
      <p>Cantidad: {count}</p>
      <Button onClick={restar}>-</Button>
      <Button onClick={sumar}>+</Button>
      <Button onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount