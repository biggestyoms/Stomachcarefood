import React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo2.jpg'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
  
const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const openNav = () => {
  //   setIsOpen(true);
  // };

  // const closeNav = () => {
  //   setIsOpen(false);
  //   setTimeout(() => {
  //     setIsOpen(false);
  //   }, 200);
  // };
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
  
    const openNav = () => {
      setIsOpen(true);
      setIsClosing(false);
    };
  
    const closeNav = () => {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 200); // The duration should match the transition duration in CSS
    };
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

      <GiHamburgerMenu className="hamburger" onClick={openNav} />

      <div className={`sidenav ${isOpen ? 'open' : ''} ${isClosing ? 'closing' : ''}`} id='mySideNav'>
        <button className="closebtn" onClick={closeNav}>&times;</button>
        <Link to={"/menu"} onClick={closeNav}><li>Menu</li></Link>
        <Link to={"/reservation"} onClick={closeNav}><li>Pre-order</li></Link>
        <Link to={"/bulkordering"} onClick={closeNav}><li>Bulk Orders</li></Link>
        <Link to={"/bulkordering"} onClick={closeNav}><li>Events & Caterings</li></Link>
        <div className="socials">
        <a href="https://www.instagram.com/care.stomach?igsh=NXR5NG9lZTI5d3dk
        https://www.instagram.com/care.stomach?igsh=NXR5NG9lZTI5d3dk"> <FaInstagram className='icon' /></a>
        <a href="https://www.facebook.com/adenike.fadayomi?mibextid=LQQJ4d
        https://www.facebook.com/adenike.fadayomi?mibextid=LQQJ4d"><FaFacebook className='icon' /></a>
        <a href="https://wa.me/+16477055758"><FaWhatsapp className='icon' /></a>
      </div>
      </div>
    </div>


  )
}


export default Navbar
