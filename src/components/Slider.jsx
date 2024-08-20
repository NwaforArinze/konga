import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../css/swiper.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import sliderOne from '../images/sliderOne.png'
import sliderTwo from '../images/sliderTwo.jpg'
import sliderThree from '../images/sliderThree.webp'
import sliderFour from '../images/sliderFour.webp'
import sliderFive from '../images/sliderFive.webp'
import sliderSix from '../images/sliderSix.webp'
import gridOne from '../images/gridOne.webp'
import gridTwo from '../images/gridTwo.webp'
import gridThree from '../images/gridThree.jpg'
import gridFour from '../images/gridFour.webp'
import { HiOutlineTv } from "react-icons/hi2";
import { FaTv } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";

const Slider = () => {
  return (
    <div>
        <div className='contain'>
        <div className='swipe'>
            <Swiper 
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide><img src={sliderOne} alt="" /> </SwiperSlide>
            <SwiperSlide><img src={sliderTwo} alt="" /></SwiperSlide>
            <SwiperSlide><img src={sliderThree} alt="" /></SwiperSlide>
            <SwiperSlide><img src={sliderFour} alt="" /></SwiperSlide>
            <SwiperSlide><img src={sliderFive} alt="" /></SwiperSlide>
            <SwiperSlide><img src={sliderSix} alt="" /></SwiperSlide>
        </Swiper>
        </div>
        <div className="grid">
            <div className="grid-item"><img src={gridOne} alt="" /> </div>
            <div className="grid-item"><img src={gridTwo} alt="" /> </div>
            <div className="grid-item"><img src={gridThree} alt="" /> </div>
            <div className="grid-item"><img src={gridFour} alt="" /> </div>
      </div>
    </div>
        <div className='btns'>
            <button><i><HiOutlineTv /></i>Konga Blogs</button>
            <button><i><IoWalletOutline /></i>Pay Bills</button>
            <button><i><IoStorefrontOutline /></i>Offline Store</button>
            <button><i><BsHandbag /></i>Brand Stores</button>
            <button><i><MdFlight /></i>Book Flights</button>
            <button><i><FaTv /></i>Watch KongaTV</button>
        </div>
    </div>
  )
}

export default Slider
