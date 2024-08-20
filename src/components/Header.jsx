import React from 'react'
import '../css/header.css'
import { FaSmileBeam } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className='overall-header-container'>
      <div className='header-container'>
        <div className='logo'>
            <i><FaSmileBeam /></i>
            <h1>Konga</h1>
        </div>
        <div className='menu'>
            <h6>Shop Locator</h6>
            <h6>Sell on Konga</h6>
        </div>
        <div className='search'>
            <input type='search' placeholder='Search for products, brands and categories...' />
            <i><IoMdSearch /></i>
        </div>
        <div className='help'>
            <i><FaQuestionCircle /></i>
            <p>Help</p>
            <i><MdOutlineKeyboardArrowDown /></i>
        </div>
        <div className='register'>
            <a href="">Login/Signup</a>
        </div>
        <button>
            <i><RiShoppingCartLine /></i>
            <h5>My Cart</h5>
            <p>0</p>
        </button>
      </div>
    </div>
  )
}

export default Header
