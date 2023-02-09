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

//Context
import { DarkModeProvider } from '../context/DarkModeContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <NavBar />
          <Welcome username={"Tutor corrector"} />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/category/:categoria' element={<ItemListContainer />} />
            <Route path='/contacto' element={<Contacto />} />
          </Routes>
          <ToastContainer />
        </DarkModeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
