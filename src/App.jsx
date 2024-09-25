import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Clothings from './Pages/Clothings';
import Electronics from './Pages/Electronics';
import Kids from './Pages/Footwear';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import Footwear from './Pages/Footwear';
import SingleItemPage from './Pages/SingleItemPage';


function App() {
  const [data, setData] = useState({});
  const [data2, setData2] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartData,setCartData] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products/')
      .then(response => {
        setData2(response.data);
        setLoading(false);

      })
  }, [])

  





  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home data={data} data2={data2} setCartData = {setCartData}/>} />
          <Route path="/Clothings" element={<Clothings data={data} data2={data2} setCartData = {setCartData}/>} />
          <Route path="/Footwear" element={<Footwear data={data} data2={data2} setCartData = {setCartData}/>} />
          <Route path="/Electronics" element={<Electronics data={data} data2={data2} setCartData = {setCartData}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cartData={cartData} />} />
          <Route path="/singleitempage" element={<SingleItemPage cartData={cartData} />} />
          <Route
          path="/product/:id" 
          element={<SingleItemPage setCartData={setCartData} />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </>

  );
}

export default App;
