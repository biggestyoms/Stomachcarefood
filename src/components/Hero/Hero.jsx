import React,{useEffect} from 'react'
import  './Hero.css'
import hero from '../../assets/image1.jpeg'
import Aos, { init } from 'aos'
import 'aos/dist/aos.css'
import { IoCall } from 'react-icons/io5'


const Hero = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
      },[])
  return (
    <div className='hero'>
      <div className="hero-info">
        <h1 data-aos="fade-left" >Welcome!</h1>
        <h2 data-aos="fade-right">Pick something from our menu  & place your call <a href="tel:+16477055758"><IoCall  className='icon'/></a></h2>
      </div>
    </div>
  )
}

export default Hero
