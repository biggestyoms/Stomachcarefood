import './Reservation.css'
import { useEffect } from 'react'

import Aos, { init } from 'aos'
import 'aos/dist/aos.css'

const Reservation = () => {

  const Home = () => {
    useEffect(()=>{
      Aos.init({duration:2000})
        },[])
      }
  return (
    <div className='pre-order'>
      <div className="pre-order-info">
        <h1 data-aos="fade-in" >To make a preorders.....</h1>
        <p data-aos="fade-in" >All you need to do is put a call through to any of our contact medium and we get right to it immedietely!</p>
        <p data-aos="fade-in" >Ordering from this website will be available as soon as possible Thanks! </p>
      </div>
    </div>
  )
}

export default Reservation
