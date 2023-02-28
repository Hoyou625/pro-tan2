import Header from './Header.js';
import Footer from './Footer.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Product from './pages/Product.js';
import Counter from './pages/Counter.js';
import Input from './pages/Input.js';
import NotFound from './pages/NotFound.js';
import { Routes, Route } from 'react-router-dom';
import './Main.css';


function Main() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/product' element={<Product />} />
      <Route path='/counter' element={<Counter />} />
      <Route path='/input' element={<Input />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default Main;
