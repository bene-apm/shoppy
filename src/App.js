import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import { Routes, Route } from 'react-router-dom';
import Product from './components/Product';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/products' element={<Products/>} />
        <Route exact path='/products/:id' element={<Product/>}/>
      </Routes>
    </>
  );
}

export default App;
