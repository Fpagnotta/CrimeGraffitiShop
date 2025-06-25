import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const { itemId } = useParams() // asegurate que sea itemId, con i minúscula

    useEffect(() => {
        getOneProduct(itemId)
          .then((res) => setDetalle(res))
          .catch((error) => console.log(error))
    }, [itemId])

    return (
        <>
            <ItemDetail detalle={detalle} />
        </>
    )
}

export default ItemDetailContainer