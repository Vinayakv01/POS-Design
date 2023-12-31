
import React, { useState } from 'react';
import Card from './Card';
import menuData from '../Data/menuData.json';

import Tab from './Tab';
import OrderDetails from './OrderDetails';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Poke Bowls');
  const [selectedProducts, setSelectedProducts] = useState([]);

  const getCategoryProducts = () => {
    const category = menuData.MenuItem.MenuHead.find((head) => head.category === activeCategory);
    if (category) {
      return category.category_products.map((product) => ({
        mnuid: product.mnuid,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
        allergyInfo: product.allergy_info,
      }));
    }
    return [];
  };

  const products = getCategoryProducts();

  const handleAddToCart = (product) => {
    setSelectedProducts((prevSelectedProducts) => {
      const existingProduct = prevSelectedProducts.find(
        (selectedProduct) => selectedProduct.mnuid === product.mnuid
      );
      
      if (existingProduct) {
        // If the product already exists in the selected products, increase its quantity by 1
        return prevSelectedProducts.map((selectedProduct) =>
          selectedProduct.mnuid === product.mnuid
            ? { ...selectedProduct, quantity: selectedProduct.quantity + 1 }
            : selectedProduct
        );
      } else {
        // If the product doesn't exist in the selected products, add it with a quantity of 1
        const updatedProduct = { ...product, quantity: 1 };
        return [...prevSelectedProducts, updatedProduct];
      }
    });
  };
  

  const handleRemoveFromCart = (productId) => {
    setSelectedProducts((prevSelectedProducts) => {
      const updatedSelectedProducts = prevSelectedProducts.map((selectedProduct) => {
        if (selectedProduct.mnuid === productId && selectedProduct.quantity > 0) {
          // If the product matches the given productId and its quantity is greater than 0
          return { ...selectedProduct, quantity: selectedProduct.quantity - 1 };
        }
        return selectedProduct;
      }).filter((selectedProduct) => selectedProduct.quantity > 0); // Remove products with quantity 0
      
      return updatedSelectedProducts;
    });
  };
  

  const handleIncreaseQuantity = (index) => {
    setSelectedProducts((prevSelectedProducts) => {
      const updatedSelectedProducts = prevSelectedProducts.map((product, i) => {
        if (i === index) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      return updatedSelectedProducts;
    });
  };
  
  

  const getTotalPrice = () => {
    return selectedProducts.reduce((total, item) => {
      const product = products.find(p => p.mnuid === item.mnuid);
      if (product) {
        return total + (product.price * item.quantity);
      }
      return total;
    }, 0);
  };
  
  const handleClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <div className="mt-2">
        <div className="tab-card-container   md:w-9/12 lg:w-9/12 xl:w-9/12">
          <div>
            <Tab handleClick={handleClick} activeCategory={activeCategory} />
            <div className="flex items-end">
  <h2 className="text-2xl lg:text-lg  font-Inter font-bold mt-4 ml-8">Special Menu for You</h2>
  <div className="relative ml-4">
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
        </div>
            <div className="h-[calc(100vh-220px)] overflow-y-auto ml-8 mt-4" style={{ scrollbarWidth: "none" }}>
              <style>
              {`
            .overflow-y-auto::-webkit-scrollbar {
              display: none;
            }
            `}
              </style>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xl:gap-3 md:gap-2">
                {products.map((product) => (
                  <Card
                    key={product.mnuid}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="fixed top-0 right-0 md:w-3/12 lg:w-3/12 xl:w-3/12">
          <OrderDetails
            products={selectedProducts}
            handleRemoveFromCart={handleRemoveFromCart}
            handleIncreaseQuantity={handleIncreaseQuantity}
            totalPrice={getTotalPrice()} // Pass the total price to the OrderDetails component
          />
        </div>
      </div>
    </div>
  );
  
};

export default Menu;




