import {useEffect} from 'react'
import './Home.css'
import bulkordering from '../../assets/Buffet.jpeg'
import eventandcatering from '../../assets/Venue.jpeg'
import menu from '../../assets/image1.jpeg'
import preorder from '../../assets/efo riro.jpeg'
import {Link} from 'react-router-dom'

import Aos, { init } from 'aos'
import 'aos/dist/aos.css'



const Home = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
      },[])
    
  return (

   
    <div className='home'>
      <div className="home-container">
        <div className="home-container-one">
        <Link to={"/menu"} className='link'> <img src={menu} alt="" /></Link>
       <h1 data-aos="fade-up">Menu</h1> 
        </div>
        <div className="home-container-two">
        <Link to={"/preorder"} className='link'> <img src={preorder} alt="" /></Link>
       <h1 data-aos="fade-up">Pre-Order</h1> 
        </div>
        <div className="home-container-three">
          <Link to={"/Bulkordering"} ><img src={bulkordering} alt="" /></Link>
        <h1  data-aos="fade-up" >Bulk Ordering</h1>
        </div>
        <div className="home-container-four">
          <Link to={"/Bulkordering"}><img src={eventandcatering} alt="" /></Link>
        <h1  data-aos="fade-up" >Event & Catering</h1>
        </div>
      </div>
    </div>

  )
}

export default Home
