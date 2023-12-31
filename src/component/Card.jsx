
import React, { useState } from 'react';
import { FiInfo } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';

import defaultImage from '../assets/Image/default.jpg'; // Import the fallback image

const Card = ({ product, handleAddToCart }) => {
  const { name, price, image, description, allergyInfo } = product;
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const fallbackImage = defaultImage; // Assign the imported fallback image

  const handleClick = (e) => {
    if (!modalVisible && !e.target.classList.contains('info-button')) {
      handleAddToCart(product);
    }
  };
  

  const handleError = (e) => {
    e.target.onerror = null;
    e.target.src = fallbackImage;
  };

  const handleInfoClick = (e) => {
    e.stopPropagation(); // Prevent click event propagation to the parent div
    toggleModal();
  };

  const handleCloseClick = (e) => {
    e.stopPropagation(); // Prevent click event propagation to the parent div
    toggleModal();
  };


  return (
    <div onClick={handleClick} className="overflow-hidden h-64 sm:h-64 md:h-44 lg:h-200 xl:h-200 w-54 sm:w-54 md:w-54 lg:w-54 xl:w-150 relative">
    <div className="bg-white shadow-lg h-full">
      <div className="md:h-20 lg:h-28 flex items-center justify-center">
        <img
          src={image || fallbackImage}
          alt={name}
          onError={handleError} // Attach the onError event handler
          className="object-contain h-full w-full"
        />
      </div>
      <div className="p-2">
        <h2 className="text-gray-500 text-lg fontsize-lg font-bold font-Quicksand truncate">{name}</h2>
        <div className="mt-3 flex items-end justify-between">
          <p className="text-xl font-bold text-green-400 font-Quicksand">${price}</p>
          <button
  className="border-2 border-blue-400 rounded-lg text-blue-400 cursor-pointer hover:bg-blue-400 hover:text-blue-200 lg:text-xl  xl:text-lg px-3 py-0  info-button"
  onClick={handleInfoClick}
>
  i
</button>
        </div>
      </div>
    </div>

      
      {/* Modal */}
      {modalVisible && (
         <div className="fixed inset-0 flex items-center justify-center z-50">
         <div className="max-w-xl w-300 h-450 mx-auto">
            {/* Modal content */}
            <div className="bg-pink-200 rounded-lg shadow relative w-full h-full ">
              {/* Modal header */}
              <div className="flex items-center justify-center  dark:border-gray-600 ">
                <h3 className="text-center text-gray-900 text-xl lg:text-xl ml-4 mt-2 font-semibold font-Quicksand dark:text-black">
                  {name}
                </h3>
                <button
  type="button"
  className="text-gray-400 px-3 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
  onClick={handleCloseClick}
>
  <span className="sr-only">Close</span>
  <FaTimes className="w-4 h-4" />
</button>

              </div>
              {/* Modal body */}
              <div className="p-6 ">
                <div className=" space-y-6 flex items-center justify-center">
                  <img
                    src={image || fallbackImage}
                    alt={name}
                    onError={handleError} // Attach the onError event handler
                    className="object-contain  h-150 w-150"
                  />
                </div>
                <p className="text-2a font-Quicksand font-bold">Description:</p>
                <p className="text-sm font-Quicksand">{description}</p>
                <p className="text-2a font-Quicksand font-bold">Allergy-Info:</p>
                <p className="text-sm font-Quicksand">
                  {allergyInfo.map((info) => info.name).join(', ')}
                </p>
              </div>
              {/* Modal footer */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;











