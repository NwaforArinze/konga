import React from 'react'
import '../css/header.css'
import { RxHamburgerMenu } from "react-icons/rx";

const HeaderTwo = () => {
  return (
    <div className='header-two'>
      <div className='header-content'>
        <a href="">All Categories <i><RxHamburgerMenu /></i></a>
        <p>Computers and Accessories</p>
        <p>Phones and Tablets</p>
        <p>Electronics</p>
        <p>Konga Fashion</p>
        <p>Home and Kitchen</p>
        <p>Baby, Kids and Toys</p>
        <p>Beauty, Health & Personal Care</p>
      </div>
    </div>
  )
}

export default HeaderTwo
