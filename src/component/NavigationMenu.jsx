import React, { useState, useEffect, useRef } from 'react';
import Merge from './Menu';

const ProfileTab = ({ active, onClick }) => (
   <button
  onClick={onClick}
  className={`flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 ${
    active ? 'bg-green-400 text-white' : 'bg-white text-gray-700'
  } hover:border-green-400 hover:text-green-400 light:border-green-400 dark:text-gray-800 dark:hover:border-green-400 dark:hover:text-green-400`}
>
    {/* HeroIcon - User */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 shrink-0"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>

    <small className="text-center text-xs font-medium">Profile</small>
  </button>
);

const RestaurantTab = ({ active, onClick }) => (
  <button
  onClick={onClick}
  className={`flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 ${
    active ? 'bg-green-400 text-white' : 'bg-white text-gray-700'
  } hover:border-green-400 hover:text-green-400 light:border-green-400 dark:text-gray-800 dark:hover:border-green-400 dark:hover:text-green-400`}
>
    {/* HeroIcon - Restaurant */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 shrink-0"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 3h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zM6 9v4M12 9v4M6 15h12"
      />
    </svg>

    <small className="text-center text-xs font-medium">Restaurant</small>
  </button>
);

const MenuTab = ({ active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 ${
      active ? 'bg-green-400 text-white' : 'bg-white text-gray-700'
    } hover:border-green-400 hover:text-green-400 light:border-green-400 dark:text-gray-800 dark:hover:border-green-400 dark:hover:text-green-400`}
  >
    {/* HeroIcon - Menu */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 shrink-0"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h8m-8 6h16"
      />
    </svg>

    <small className="text-center text-xs font-medium">Menu</small>
  </button>
);

const DeliveryTab = ({ active, onClick }) => (
  <button
  onClick={onClick}
  className={`flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 ${
    active ? 'bg-green-400 text-white' : 'bg-white text-gray-700'
  } hover:border-green-400 hover:text-green-400 light:border-green-400 dark:text-gray-800 dark:hover:border-green-400 dark:hover:text-green-400`}
>
    {/* HeroIcon - Truck */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 shrink-0"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v13M19 20H5c-1.5 0-2-1-2-2V8c0-1 1-2 2-2h2M8 4h8a1 1 0 011 1v3H7V5a1 1 0 011-1zM7 8h10v7M7 16h3m4 0h3m-3 3h-1m-4 0h-1"
      />
    </svg>

    <small className="text-center text-xs font-medium">Delivery</small>
  </button>
);

const AccountingTab = ({ active, onClick }) => (
  <button
  onClick={onClick}
  className={`flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 ${
    active ? 'bg-green-400 text-white' : 'bg-white text-gray-700'
  } hover:border-green-400 hover:text-green-400 light:border-green-400 dark:text-gray-800 dark:hover:border-green-400 dark:hover:text-green-400`}
>
    {/* HeroIcon - Calculator */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 shrink-0"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 14H6c-1 0-2-1-2-2V6c0-1 1-2 2-2h12c1 0 2 1 2 2v6c0 1-1 2-2 2zM14 14V8M10 14V8M14 14H4"
      />
    </svg>

    <small className="text-center text-xs font-medium">Accounting</small>
  </button>
);

const NavigationMenu = () => {
  const sidebarRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('profile');

  const handleSidebarToggle = (event) => {
    event.stopPropagation(); // Stop click event from propagating
    setSidebarOpen(!sidebarOpen);
  };

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  const handleClickOutsideSidebar = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideSidebar);
    return () => {
      document.removeEventListener('click', handleClickOutsideSidebar);
    };
  }, []);


  return (
    <div>
      {/* Sidebar Toggle Button */}
      <button
  onClick={handleSidebarToggle}
  className={`absolute left-0 top-1/2 transform -translate-y-1/2 py-2 rounded-md bg-white dark:bg-green-200 z-10 ${sidebarOpen ? 'opacity-0' : 'opacity-100'}`}
  style={{ left: sidebarOpen ? 'calc(3.5rem + 1rem)' : '0.5rem' }}
>
  {/* HeroIcon - Menu */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={`w-6 h-6 transform transition-transform ${sidebarOpen ? 'rotate-180' : 'rotate-0'}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
  </svg>
</button>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`flex flex-col gap-4 items-center justify-center py-6 w-16 bg-white dark:bg-white-400 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 absolute inset-y-1/4`}
        style={{ width: '4rem', maxWidth: '5rem', zIndex: 999 }}
      >
        <ProfileTab active={currentTab === 'profile'} onClick={() => handleTabClick('profile')} />
        <RestaurantTab
          active={currentTab === 'restaurant'}
          onClick={() => handleTabClick('restaurant')}
        />
        <MenuTab active={currentTab === 'menu'} onClick={() => handleTabClick('menu')} />
        <DeliveryTab active={currentTab === 'delivery'} onClick={() => handleTabClick('delivery')} />
        <AccountingTab
          active={currentTab === 'accounting'}
          onClick={() => handleTabClick('accounting')}
        />
      </aside>
      {currentTab === 'menu' && <Merge />}
    </div>
  );
};

export default NavigationMenu;
