import React from 'react'
import { images } from "../App";
function Footer() {
  return (
    <footer>
    <img class="fotbackg" src={images["fotbg.png"]} alt="bg" />
    <img class="fotimg" src={images["fot.png"]} alt="fotimg" />
    <div class="appplay">
      <div class="apple">
        <img src={images["apple.png"]} alt="app" />
        <p>app store</p>
      </div>
      <div class="play-store">
        <img src={images["play-store.png"]} alt="play store" />
        <p>play store</p>
      </div>
    </div>

    <div class="social">
      <img src={images["Icon awesome-instagram.png"]} alt="insta" class="insta" />
      <img src={images["Icon simple-whatsapp.png"]}  alt="wats" class="wats" />
      <img src={images["Icon feather-facebook.png"]}  alt="facebook" class="face" />
    </div>

    <div class="fotlink">
      <a href="#">Home</a>
      <a href="#" className='a1' >Services</a>
      <a href="#" className='a2' >About Us</a>
      <a href="#" className='a3' >Help Center</a>
    </div>


  </footer>
    )
}

export default Footer