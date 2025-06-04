import React from 'react'
import Item from './Item'

const ItemList = ({data}) => {
  return (
    <div className='item-list'>
      {data.map((produc)=><Item key={produc.id} produc ={produc}/>)}
    </div>
  )
}

export default ItemList