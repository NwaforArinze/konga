import React from 'react';
import '../css/footer.css';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className='overall-footer-top'>
        <div className="footer-top">
            <div className='support-class'>
                <div className="support-section">
                    <i className="support-icon"><MdEmail /></i>
                    <h3>EMAIL SUPPORT</h3>
                    <p>help@konga.com</p>
                </div>
                <div className="support-section">
                    <i className="support-icon"><FaPhoneAlt /></i>
                    <h3>PHONE SUPPORT</h3>
                    <p><pre>0909 344 2438, 0703 871 0957</pre></p>
                </div>
                <div className="support-section">
                    <i className="support-icon"><IoLogoWhatsapp /></i>
                    <h3>WHATSAPP</h3>
                    <p><pre>0909 344 2438, 0703 871 0957</pre></p>
                </div>
            </div>
            <div className="subscribe-section">
                <h3>GET LATEST DEALS</h3>
                <p>Our best promotions sent to your inbox.</p>
            </div>
            <div className="subscribe-form">
                <input type="search" placeholder="Email Address" />
                <button>Subscribe</button>
            </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <h3>ABOUT KONGA</h3>
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Our Blog</a>
          <a href="#">Forum</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <div className="footer-links">
          <h3>PAYMENT</h3>
          <a href="#">KongaPay</a>
          <a href="#">Wallet</a>
          <a href="#">Verve</a>
          <a href="#">MasterCard</a>
          <a href="#">Visa</a>
        </div>
        <div className="footer-links">
          <h3>BUYING ON KONGA</h3>
          <a href="#">Buyer Safety Centre</a>
          <a href="#">FAQs</a>
          <a href="#">Delivery</a>
          <a href="#">Digital Services</a>
          <a href="#">Bulk Purchase</a>
        </div>
        <div className="footer-links">
          <h3>MORE INFO</h3>
          <a href="#">Site Map</a>
          <a href="#">Track my Order</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Authentic Items Policy</a>
        </div>
        <div className="footer-links">
          <h3>MAKE MONEY ON KONGA</h3>
          <a href="#">Become a Konga Affliate</a>
        </div>

        <div className="footer-app-social">
          <div className="app-links">
            <img src="" alt="App Store" />
            <img src="" alt="Google Play" />
          </div>
          <div className="social-media">
            <h3>CONNECT WITH US</h3>
            <a href='#' className="social-icon"><FaFacebookF /></a>
            <a href='#' className="social-icon"><FaXTwitter /></a>
            <a href='#' className="social-icon"><FaInstagram /></a>
            <a href='#' className="social-icon"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <p>Copyright © 2024 Konga.com. All rights reserved</p><hr />
      </div>
    </div>
  );
}

export default Footer;
