import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//Components
import NavBar from './NavBar/NavBar';
import Welcome from './Welcome/Welcome';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Welcome username={"Tutor corrector"} />

        <Routes>
          <Route path='/' element={<ItemListContainer />}/> 
          <Route path='/item/:id' element={<ItemDetailContainer />} /> 
          <Route path='/category/:categoria' element={<ItemListContainer />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
