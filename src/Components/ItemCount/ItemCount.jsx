import { useState } from "react";

export const ItemCount = ({ valInicial, stock }) => {

    const [contador, setContador] = useState(valInicial)

    const sumar = () => (contador < stock) && setContador(contador + 1)
    const restar = () => (contador > valInicial) && setContador(contador - 1)

    return (
        <div className="d-flex">
            <div className="d-flex align-items-center ">
                <button type="button" className="btn botonPrincipal btnCount" onClick={() => sumar()}>+</button>
                <p className="card-text mb-0 px-2">{contador}</p>
                <button type="button" className="btn botonPrincipal btnCount" onClick={() => restar()}>-</button>
            </div>
            <div>
                <button type="button" className="btn botonPrincipal mx-5 btnCount">Agregar</button>
            </div>
        </div>
    );
}

export default ItemCount;
