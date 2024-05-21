import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Menu from './pages/Menu/Menu';
import Home from './pages/Home/Home';
import Reservation from './pages/Reservation/Reservation';
import Bulkordering from './pages/Bulkordering/Bulkordering';
import Footer from './components/Footer/Footer';
import Bulk from './pages/Bulk/Bulk';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/bulkordering" element={<Bulkordering />} />
        <Route path="/bulk" element={<Bulk />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
