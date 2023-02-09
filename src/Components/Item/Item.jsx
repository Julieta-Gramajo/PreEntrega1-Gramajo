import React from 'react';
import { Link } from 'react-router-dom';

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';

const Item = ({ item }) => {
    const { darkMode } = useDarkModeContext()

    return (
        <div className={`card m-3 ${darkMode ? "contenedorDark" : "contenedor"}`} style={{ width: '18rem' }}>
            <img src={`../json/img/${item.img}`} className="card-img-top" alt={`Imagen de ${item.categoria} ${item.marca} ${item.nombre}`} />
            <div className="card-body text-center">
                <h5 className="card-title encabezado text-center">{item.categoria}</h5>
                <p className="card-text">{item.marca} "{item.nombre}" {item.talle}</p>
                <p className="card-text fw-bold">${new Intl.NumberFormat("de-DE").format(item.precio)}</p>
                <button type="button" className="btn button mt-4 py-1 botonPrincipal">
                    <Link className='botonDetail' to={`/item/${item.id}`}>Ver producto</Link>
                </button>
            </div>
        </div>

    );
}

export default Item;
