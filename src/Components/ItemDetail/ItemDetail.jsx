import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="d-flex contenedor justify-content-center align-items-center itemDetail">
            <div className="col-md-4">
                <img src={`../json/img/${item.img}`} width={300} alt={`Imagen de ${item.categoria} ${item.marca} ${item.nombre}`} />
            </div>
            <div className="col-md-8 p-3">
                <div className="card-body">
                    <h5 className="card-title encabezado text-center">{item.categoria}</h5>
                    <p className="card-text fw-bold my-3">{item.marca} "{item.nombre}" {item.talle}</p>
                    <p className="card-text">{item.descripcion}</p>
                    <p className="card-text fw-bold">${new Intl.NumberFormat("de-DE").format(item.precio)}</p>
                    <p className="card-text">Quedan: {item.stock} disponible.</p>
                    <ItemCount valInicial={1} stock={item.stock} />
                    <button type="button" className="btn button mt-4 py-1 botonPrincipal">Finalizar compra</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
