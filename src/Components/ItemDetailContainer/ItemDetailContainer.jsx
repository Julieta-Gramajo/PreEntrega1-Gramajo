import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProductos] = useState([])
    const {id} = useParams()
    useEffect(() => {
        fetch('../json/productos.json')
        .then(response => response.json())
        .then(products => {
            const item = products.find(prod => prod.id === parseInt(id))
            setProductos(item)
        })
    }, [])

    return (
        <div className="my-5 d-flex justify-content-center align-items-center">
            <ItemDetail item={producto}/>
        </div>
    );
}

export default ItemDetailContainer;
