import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import './Footer.css'
import { useEffect } from 'react'
import Aos, { init } from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {


  useEffect(()=>{
    Aos.init({duration:2000})
      },[])
  return (
    <div className='footer'>
      <div className="footer-info">
        <div className="footer-info-left">
          <h1 data-aos="fade-right">Visit Us:</h1>
          <p data-aos="fade-right">89 Cooke ave Brantford ON Canada N3T 0T3</p>
        </div>
        <div className="footer-info-middle" data-aos="fade-up">
          <h1>Available Hours:</h1>
          <p>MONDAY  - THURSDAY  11:30 - 9:00</p>
          <p>FRIDAY - SATURDAY  11:30 - 10:00</p>
          <p>SUNDAY  11:30 - 9:00</p>

        </div>
        <div className="footer-info-right">
          <h1 data-aos="fade-left">Our Socials:</h1>
          <div className='icon' data-aos="fade-left">
          <a href="https://www.instagram.com/care.stomach?igsh=NXR5NG9lZTI5d3dk
https://www.instagram.com/care.stomach?igsh=NXR5NG9lZTI5d3dk"> <FaInstagram className='icon' /></a>
      <a href="https://www.facebook.com/adenike.fadayomi?mibextid=LQQJ4d
https://www.facebook.com/adenike.fadayomi?mibextid=LQQJ4d"><FaFacebook className='icon' /></a>
      <a href="https://wa.me/+16477055758
https://wa.me/+16477055758"><FaWhatsapp className='icon' /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
<p>© 2024 StomachCareFood, All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
