// src/App.js

import React from 'react';
import './App.css'; // You might have other imports here
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import About from './pages/About';
import Blog from './pages/Blog';
import BSingle from './pages/BSingle';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import PSingle from './pages/PSingle';
import Shop from './pages/Shop';

function App() {
  return (
    
    <Router>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogsingle" element={<BSingle />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/productsingle" element={<PSingle />} />
      <Route path="/shop" element={<Shop />} />
      {/* Define routes for other pages here */}
    </Routes>
  </Router>
    
  );
}

export default App;
