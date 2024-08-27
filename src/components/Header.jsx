import React, { useState, useEffect } from 'react';
import '../css/header.css';
import { FaSmileBeam, FaQuestionCircle, FaApple, FaGoogle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isLoginVisible, setLoginVisible] = useState(false); // State to control login panel visibility

  const toggleLoginPanel = () => {
    setLoginVisible(!isLoginVisible); // Toggle login panel visibility
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLoginVisible && !event.target.closest('.login-content') && !event.target.closest('.auth-button')) {
        setLoginVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isLoginVisible]);

  return (
    <div className='header-sticky'>
      <div className='overall-header-container'>
        <div className='header-container'>
          <div className='logo'>
            <i><FaSmileBeam /></i>
            <h1><Link to="/" className='konga'>Konga</Link></h1>
          </div>
          <div className='menu'>
            <h6>Shop Locator</h6>
            <h6>Sell on Konga</h6>
          </div>
          <div className='search'>
            <input type='search' placeholder='Search for products, brands and categories...' />
            <i><IoMdSearch /></i>
          </div>
          <div className="help">
            <i><FaQuestionCircle /></i>
            <p>Help</p>
            <i><MdOutlineKeyboardArrowDown /></i>
            <div className="dropdown">
              <ul>
                <li>FAQs</li>
                <li>Contact Us</li>
                <li>Track My Order</li>
                <li>Konga Return Policy</li>
              </ul>
            </div>
          </div>
          <div className='register'>
            <button onClick={toggleLoginPanel} className='auth-button'>Login/Signup</button>
          </div>
          <Link to="/cart" className="cart-button">
            <i><RiShoppingCartLine /></i>
            <h5>My Cart</h5>
            <p>0</p>
          </Link>
        </div>

        <div className='header-two'>
          <div className='header-content'>
            <a href="#" className='content-item'>All Categories <i><RxHamburgerMenu /></i></a>
            <p className='content-item'>Computers and Accessories</p>
            <p className='content-item'>Phones and Tablets</p>
            <p className='content-item'>Electronics</p>
            <p className='content-item'>Konga Fashion</p>
            <p className='content-item'>Home and Kitchen</p>
            <p className='content-item'>Baby, Kids and Toys</p>
            <p className='content-item'>Beauty, Health & Personal Care</p>
          </div>
        </div>
      </div>

      {/* Login Panel */}
      {isLoginVisible && (
        <div className='login-overlay'>
          <div className="login-panel">
            <div className="login-content">
              <button className="close-button" onClick={toggleLoginPanel}>X Close</button>
              <h2>Login</h2>
              <form>
                <label>Email Address or Phone Number</label>
                <input type="text" placeholder="Username" /><br />

                <label>Password</label>
                <input type="password" placeholder="Password" /><br />

                <button type="submit">Login</button>
              </form>
              <div className='or'>
                <p>OR</p><hr />
              </div>
              <div className='google-apple'>
                <div className='google'>
                  <i><FaGoogle /></i>
                  <p>Login with Google</p>
                </div>
                <div className='apple'>
                  <i><FaApple /></i>
                  <p>Login with Apple</p>
                </div>
              </div>
              <div className='signup'>
                <p><Link to={'/login'}>Don't have an account? Sign Up</Link></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;