import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../mock/AsyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] =useState({})
    const {ItemId} = useParams()

    useEffect(()=>{
        getOneProduct(ItemId)
        .then((res)=> setDetalle(res))
        .catch((error)=> console.log(error))
    },[])

  return (
    <>
    <ItemDetail detalle={detalle}/>
    </>
  )
}

export default ItemDetailContainer