import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct imports
import Brand from './components/Brand'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';

const App = () => {
  return (
    <Router>
      <Brand /> {/* Include the brand inside the Router */}
      <Header /> {/* Include the header inside the Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="*" element={<h1>Page not found</h1>} /> {/* 404 Page */}
      </Routes>
      <Footer /> {/* Include the footer inside the Router */}
    </Router>
  );
}

export default App;