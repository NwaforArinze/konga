import React from 'react'
import '../css/brand.css'
import { MdLuggage } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { FaSmileBeam } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { FaTv } from "react-icons/fa";

const Brand = () => {
  return (
    <div className='overall-container'>
      <div className='brand-container'>
        <h6 className='travel'><i><MdLuggage /></i>TRAVEL</h6>
        <h5 className='pay'><i><FaWallet /></i>Konga<span>Pay</span></h5>
        <i className='corp'><FaSmileBeam /></i><h1 className='corporate'>Konga <span>corporate</span></h1>
        <h4 className='health'><i><MdOutlineHealthAndSafety /></i>Konga<span>Health</span></h4>
        <h6 className='logistics'><i><TbTruckDelivery /></i>LOGISTICS</h6>
        <h6 className='groceries'><i><TiShoppingCart /></i>GROCERIES</h6>
        <h5 className='tele'><i><FaTv /></i>Konga<span>TV</span></h5>
        <h4 className='now'><i><FaSmileBeam /></i>Konga<span>NOW</span></h4>
      </div>
    </div>
  )
}

export default Brand
