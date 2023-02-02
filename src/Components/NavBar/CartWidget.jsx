import bolsa from '../images/bolsa.png';

const CartWidget = ({cantCarrito}) => {
    return (
        <div className='d-flex mx-3'>
            <img className='bolsa' src={bolsa} alt=""/>
            <p className='contador'>{cantCarrito}</p>
        </div>
    );
}

export default CartWidget;
