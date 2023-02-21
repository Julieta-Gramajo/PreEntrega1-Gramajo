import bolsa from '../images/bolsa.png';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/CarritoContext';

const CartWidget = ({ cantCarrito }) => {
    const { getItemQuantity } = useCarritoContext()

    return (
        <div className='d-flex mx-3'>
            <Link className='nav-link' to={"/cart"}>
                <img className='bolsa' src={bolsa} alt="" />
                {/* <p className='contador'>{cantCarrito}</p> */}
                {getItemQuantity() > 0 && <p className='contador'>{getItemQuantity()}</p>}
            </Link>
        </div>
    );
}

export default CartWidget;
