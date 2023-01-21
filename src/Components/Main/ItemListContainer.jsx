import React from 'react';

const ItemListContainer = ({username}) => {
    return (
        <div className='d-flex justify-content-center aling-items-center welcome'>
            <h1>¡Bienvenido, {username}!</h1>
        </div>
    );
}

export default ItemListContainer;
