import React, { useState } from 'react';
import './Menu.css';
import { FaSearch } from 'react-icons/fa';

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterMenuItems = (menuItem) => {
    return menuItem.toLowerCase().includes(searchQuery.toLowerCase());
  };

  const riceDishes = [
    'WHITE RICE',
    'Fried rice',
    'jollof rice',
    'basmati rice',
    'ofada rice'
  ];

  const soupDishes = [
    'Smoked turkey stew',
    'Egusi soup',
    'Afang soup',
    'Ogbono soup',
    'Okra soup',
    'Efo riro',
    'Edikaikong soup',
    'Nigerian beans soup',
    'Oha soup',
    'Chicken pepper soup',
    'Ewedu soup',
    'Okro soup',
    'Nigerian white soup',
    'Ofe Owerri',
    'Buka stew',
    'Palm nut soup',
    'Pepper soup',
    'Vegetable soup',
    'Catfish pepper soup',
    'Atama soup',
    'Assorted meat Peppersoup',
    'Miyan Kuka',
    'Ofada stew'
  ];

  const swallowDishes = [
    'Eba',
    'amala',
    'fufu',
    'pounded yam',
    'semo'
  ];

  const proteinItems = [
    'Ponmo',
    'beef',
    'shaki',
    'all type of fish',
    'gizzard'
  ];

  return (
    <div className='menu'>
      <div className="menu-nav">
         <ul>
           <li><a href="#rice">Rish Dishes</a></li>
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
            <li key={index}>{dish}</li>
          ))}
        </ul>
      </div>

      <div className="soup" id='soup'>
        <h1>Soups</h1>
        <ul>
          {soupDishes.filter(filterMenuItems).map((dish, index) => (
            <li key={index}>{dish}</li>
          ))}
        </ul>
      </div>

      <div className="swallow" id='swallow'>
        <h1>Swallow</h1>
        <ul>
          {swallowDishes.filter(filterMenuItems).map((dish, index) => (
            <li key={index}>{dish}</li>
          ))}
        </ul>
      </div>

      <div className="protein" id='protein'>
        <h1>Protein</h1>
        <ul>
          {proteinItems.filter(filterMenuItems).map((dish, index) => (
            <li key={index}>{dish}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;









































