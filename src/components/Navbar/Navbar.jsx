import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo2.jpg'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to={"/"} >
      <img src={logo} alt="" className='logo' />
      </Link>
      <ul>
        <Link to={"/menu"}><li>menu</li></Link>
        <Link to={"/reservation"}><li>Pre-order</li></Link>
      
      </ul>
      <div className="socials">
     <a href="https://www.instagram.com/care.stomach?igsh=NXR5NG9lZTI5d3dk
https://www.instagram.com/care.stomach?igsh=NXR5NG9lZTI5d3dk"> <FaInstagram className='icon' /></a>
      <a href="https://www.facebook.com/adenike.fadayomi?mibextid=LQQJ4d
https://www.facebook.com/adenike.fadayomi?mibextid=LQQJ4d"><FaFacebook className='icon' /></a>
      <a href="https://wa.me/+16477055758"><FaWhatsapp className='icon' /></a>
      </div>

      <GiHamburgerMenu />
    </div>
  )
}

export default Navbar
