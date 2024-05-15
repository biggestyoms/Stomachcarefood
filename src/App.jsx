
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Menu from './pages/Menu/Menu'
import Home from './pages/Home/Home'
import Reservation from './pages/Reservation/Reservation'
import Bulkordering from './pages/Bulkordering/Bulkordering'
import Footer from './components/Footer/Footer'
import Bulk from './pages/Bulk/Bulk'


const App = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Hero />
   <Routes>
   <Route path='/' element={<Home />} />
    <Route path='/menu' element={<Menu />} />
    <Route path='/reservation' element={<Reservation />} />
    <Route path='/Bulkordering' element={<Bulkordering/>} />
    <Route path='/bulk' element={<Bulk />} />
   </Routes>
  <Footer />
   
   </BrowserRouter>
  )
}

export default App
