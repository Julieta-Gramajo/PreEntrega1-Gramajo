import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { categoria } = useParams()

    useEffect(() => {
        if (categoria) {
            fetch('../json/productos.json')
                .then(response => response.json())
                .then(items => {
                    const products = items.filter(prod => prod.categoria === categoria)
                    const productsList = ItemList({products})
                    setProductos(productsList)
                })
        }
        else{
            fetch('./json/productos.json')
            .then(response => response.json())
            .then(products => {
                const productsList = ItemList({products})
                setProductos(productsList)
            })
        }
        
    }, [categoria])


    return (
        <div className="row justify-content-center my-5">
            {productos}
        </div>
    );
}

export default ItemListContainer;
