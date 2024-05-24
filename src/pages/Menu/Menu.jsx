import React, { useState, useEffect } from 'react';
import './Menu.css';
import { FaSearch } from 'react-icons/fa';
import { riceDishes, soupDishes, swallowDishes} from '../../data/menuData';
import Aos, { init } from 'aos'
import 'aos/dist/aos.css'

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterMenuItems = (menuItem) => {
    return menuItem.name.toLowerCase().includes(searchQuery.toLowerCase());
  };
  useEffect(()=>{
    Aos.init({duration:2000})
      },[])

  return (
    <div className='menu'>
      <div className='menu-title'>
        <h1>Most Popular Dishes</h1>
      </div>
      <div className="menu-nav">
        <ul>
          <li><a href="#rice">Rice Dishes</a></li>
          <li><a href="#soup">Soup</a></li>
          <li><a href="#protein">Protein</a></li>
          <li><a href="#swallow">Swallow</a></li>
        </ul>
        <div className="search-box">
          <input
            type="text"
            id='searchInput'
            placeholder='Name of dish'
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button><FaSearch className='icon' /></button>
        </div>
      </div>

      {/* Render menu sections */}
      <div className="ricedishes" id='rice'>
        <h1>Rice Dishes</h1>
        <ul>
          {riceDishes.filter(filterMenuItems).map((dish, index) => (
            <li key={index} data-aos="fade-up">
              <img src={dish.image} alt={dish.name} className="dish-image" />
              {dish.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="soup" id='soup'>
        <h1>Soups</h1>
        <ul>
          {soupDishes.filter(filterMenuItems).map((dish, index) => (
            <li key={index} data-aos="fade-up">
              <img src={dish.image} alt={dish.name} className="dish-image" />
              {dish.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="swallow" id='swallow'>
        <h1>Swallow</h1>
        <ul>
          {swallowDishes.filter(filterMenuItems).map((dish, index) => (
            <li key={index} data-aos="fade-up">
              <img src={dish.image} alt={dish.name} className="dish-image" />
              {dish.name}
            </li>
          ))}
        </ul>
      </div>

  
    </div>
  );
}

export default Menu;