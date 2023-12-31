
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import menuData from '../Data/menuData.json';
import pokeBowlsIcon from '../assets/icons/pokebowls.png';
import rollsIcon from '../assets/icons/Rolls.png';
import beverageIcon from '../assets/icons/beverages.png';
import appitizerIcon from '../assets/icons/Appitizer.png';
import sportitiousIcon from '../assets/icons/Sportilitious.png';
import boxesIcon from '../assets/icons/Boxes.png';
import makiIcon from '../assets/icons/maki.png';
import nigiriIcon from '../assets/icons/nigiri.png';
import specialsIcon from '../assets/icons/specials.png';
import extrasIcon from '../assets/icons/extras.png';
import dessertsIcon from '../assets/icons/Desserts.png';
import extracharges from '../assets/icons/extracharges.png';

const Tab = ({ handleClick, activeCategory }) => {
  const handleScrollLeft = () => {
    const tabContainer = document.getElementById('tab-container');
    if (tabContainer) {
      tabContainer.scrollBy({ left: -120, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    const tabContainer = document.getElementById('tab-container');
    if (tabContainer) {
      tabContainer.scrollBy({ left: 120, behavior: 'smooth' });
    }
  };

  const getCategoryProducts = (category) => {
    const categoryData = menuData.MenuItem.MenuHead.find((head) => head.category === category);
    if (categoryData) {
      return categoryData.category_products;
    }
    return [];
  };

  const tabData = menuData.MenuItem.MenuHead.map((head) => {
    let icon = null;
    const categoryProducts = getCategoryProducts(head.category);
    switch (head.category) {
      case 'Poke Bowls':
        icon = pokeBowlsIcon;
        break;
      case 'Rolls':
        icon = rollsIcon;
        break;
      case 'Getränke':
        icon = beverageIcon;
        break;
      case 'Vorspeisen':
        icon = appitizerIcon;
        break;
      case 'Sportilicious':
        icon = sportitiousIcon;
        break;
      case 'Boxes':
        icon = boxesIcon;
        break;
      case 'Maki':
        icon = makiIcon;
        break;
      case 'Nigiri':
        icon = nigiriIcon;
        break;
      case 'Specials':
        icon = specialsIcon;
        break;
      case 'Extras':
        icon = extrasIcon;
        break;
      case 'Eis':
        icon = dessertsIcon;
        break;
      case 'ExtraCharges':
        icon = extracharges;
        break;
      default:
        break;
    }
    return {
      icon,
      label: head.category,
      count: categoryProducts.length,
    };
  });

  const [selectedTab, setSelectedTab] = useState(null);

  const handleTabClick = (label) => {
    handleClick(label);
    setSelectedTab(label);
  };

  return (
    <div className="xl:w-full px-6 ml-2 ">
      <div className="flex items-center mr-5 justify-between">
        <h2 className="lg:text-lg xl:text-2xl font-bold text-black mr-auto font-Inter">Categories</h2>
        <div className="space-x-5 ">
          <button className="py-0 px-1 w-6 h-6 bg-white-200 border border-gray-110 text-xs" onClick={handleScrollLeft}>
            <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
          </button>
          <button className="py-0 px-1 w-6 h-6 bg-white-200 border border-gray-110 text-xs" onClick={handleScrollRight}>
            <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
          </button>
        </div>
      </div>
      <div className="flex space-x-2 mt-2  bg-white overflow-hidden" id="tab-container">
  <div className="flex flex-shrink-0  md:space-x-2 lg:space-x-3 xl:space-x-4">
    {tabData.map((tab, index) => (
      <button
        key={index}
        className={`flex flex-col  items-center  justify-center md:w-50 lg:w-75 xl:w-100 md:h-50 lg:h-75 xl:h-100 transition-colors duration-300 border border-gray-51 font-Quicksand ${
          activeCategory === tab.label ? 'bg-green-400 text-white shadow' : 'bg-white-300 hover:bg-white-400'
        } ${tab.label === 'Poke Bowl' ? 'poke-bowl-tab' : ''}`}
        
        onClick={() => handleTabClick(tab.label)}
      >
        <div className="flex flex-col  items-center">
          {tab.icon && <img src={tab.icon} className=" md:w-4 md:h-4 lg:w-8 lg:h-8 xl:w-12 xl:h-12 mb-1" alt={tab.label} />}
          <span
            className={`font-semibold md:text-xs lg:text-sm ${
              activeCategory === tab.label ? 'text-white' : 'text-gray-800'
            } whitespace-nowrap`}
          >
            {tab.label}
          </span>
          <span
            className={`font-semibold md:text-xs lg:text-sm ${
              activeCategory === tab.label ? 'text-white-500' : 'text-gray-400'
            } ${tab.label === 'Poke Bowl' ? 'poke-bowl-count' : ''}`}
          >
            {`${tab.count} Items`}
          </span>
        </div>
      </button>
    ))}
  </div>
</div>

    </div>
  );
};

export default Tab;
