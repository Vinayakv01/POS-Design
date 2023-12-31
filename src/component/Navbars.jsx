import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Menu from './Menu'
import React, {useState} from 'react';

const navigation = [
  { name: 'Reservation', href: '#', current: true },
  { name: 'Menu', href: '#', current: false, component: Merge },
  { name: 'Delievry', href: '#', current: false },
  { name: 'Accounting', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbars() {
  const [currentTab, setCurrentTab] = useState(navigation.find((item) => item.current)?.name)

  const renderTabComponent = () => {
    if (currentTab === 'Menu') {
      const TabComponent = navigation.find((item) => item.name === 'Menu')?.component;
      return <TabComponent />;
    } else {
      return null;
    }
  };
  return (
    <div>
    <Disclosure as="nav" className="bg-white border-b border-gray-300">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
            <div className="mr-5">
            <span className="text-black font-extrabold text-3xl font-Quicksand mr-2">Kafe</span>
            <span className="text-green-500 font-extrabold text-3xl font-Quicksand mr-1">Sans</span>
          </div>
          
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex items-center">
          
        </div>
                <div className="relative">
                
  <input
    type="text"
    placeholder="SearchMenu"
    className="pl-8 pr-3 py-2 w-64 rounded-md bg-white border border-gray-300 text-sm focus:outline-none focus:bg-white focus:border-gray-400 text-gray-700"
  />
  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4 text-gray-500"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  </div>
</div>
                <div className="hidden sm:block ml-auto">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                     <a
                 key={item.name}
                 href={item.href}
                 className={classNames(
                   item.name === currentTab ? 'bg-green-400 text-white' : 'bg-white text-gray-700',
                   'rounded-md px-3 py-2 text-sm font-medium',
                   { 'hover:text-white': item.name === currentTab }
                 )}
                 aria-current={item.name === currentTab ? 'page' : undefined}
                 onClick={() => setCurrentTab(item.name)}
               >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3  border-gray-300">
                  <div>
                  <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-white focus:ring-offset-gray-800 w-36 border-0">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="flex flex-col items-start ml-2">
                    <span className="text-black text-xl font-bold">Cashier</span>
                  </div>
                </Menu.Button>
                
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    {renderTabComponent()}
    </div>
  )
}