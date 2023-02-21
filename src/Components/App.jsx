import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import './App.css';

//Components
import NavBar from './NavBar/NavBar';
import Welcome from './Welcome/Welcome';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Contacto from './Contacto/Contacto';
import Cart from './Cart/Cart';
import { cargarBDD } from '../firebase/firebase';
import { updateProducto, deleteProducto } from '../firebase/firebase';
import Checkout from './Checkout/Checkout';

//Context
import { DarkModeProvider } from '../context/DarkModeContext';
import { CarritoProvider } from '../context/CarritoContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <DarkModeProvider>
            <NavBar />
            <Welcome username={"Tutor corrector"} />

            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/category/:categoria' element={<ItemListContainer />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
            <ToastContainer />
          </DarkModeProvider>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
