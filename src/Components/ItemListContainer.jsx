import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
    const [data, setData] = useState([]);
    const { categoriaId } = useParams();

    useEffect(() => {
        getProducts()
        .then((respuesta) => {
            if (categoriaId) {
                setData(respuesta.filter(prod => prod.category.toLowerCase() === categoriaId.toLowerCase()));
            } else {
                setData(respuesta);
            }
        })
        .catch((error) => console.log(error));
    }, [categoriaId]);

    return (
        <div>
            <h1>{categoriaId ? categoriaId.toUpperCase() : props.inicio}</h1>
            <ItemList data={data} />
        </div>
    );
};

export default ItemListContainer;

