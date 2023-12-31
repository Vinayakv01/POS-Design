
// import React, { useState, useEffect } from 'react';
// import defaultImage from '../Image/default.jpg';
// import CustomerForm from './CustomerDetails';

// const OrderDetails = ({ products, handleRemoveFromCart, handleIncreaseQuantity }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [totalPrice, setTotalPrice] = useState(0);

//   const handleRemoveOneFromCart = (productId) => {
//     handleRemoveFromCart(productId);
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const fallbackImage = defaultImage;

//   useEffect(() => {
//     // Calculate the total price whenever the products change
//     const calculateTotalPrice = () => {
//       let totalPrice = 0;
//       products.forEach((product) => {
//         totalPrice += product.price * product.quantity;
//       });
//       setTotalPrice(totalPrice);
//     };

//     calculateTotalPrice();
//   }, [products]);

//   return (
//     <div className="w-full bg-white  w-350 border-l-2 border-gray-100">
//       <div className="w-full w-350">
//         {/* header */}
//         <div className="flex flex-row items-center justify-between px-5 mt-1">
//           <div className="font-bold font-Montserrat mt-2 text-xl">Order Details</div>
//           <div className="font-semibold">
//             <span className="px-4 py-2 rounded-md font-Inter bg-blue-100 text-blue-500">Clear All</span>
//           </div>
//         </div>
//         {/* end header */}
//         {/* order list */}

//         <div className="px-5 py-4 mt-5 font-Quicksand flex-grow overflow-auto h-[calc(100vh-256px)]" style={{ scrollbarWidth: "none" }}>
//           <style>
//             {`
//             .overflow-auto::-webkit-scrollbar {
//               display: none;
//             }
//             `}
//           </style>
//           {products.map((product, index) => {
//             const itemTotalPrice = product.price * product.quantity;
//             return (
//               <div className="flex flex-row justify-between items-center mb-4" key={product.mnuid}>
//                 <div className="flex flex-row items-center w-2/5">
//                   <img
//                     src={product.image || fallbackImage}
//                     className="w-8 h-8 object-cover rounded-md"
//                     alt=""
//                     onError={(e) => { e.target.src = fallbackImage; }} // Assign the fallback image on error
//                   />
//                   <span className="ml-4 font-semibold text-sm">{product.name}</span>
//                 </div>

//                 <div className=" flex-row  xl:space-x-3 lg:space-x-1">
//                   <button
//                     className="xl:px-2 xl:py-2 lg:px-1 lg:py-1 md:px-1 md:py-1 rounded-md bg-gray-300 hover:bg-gray-400 focus:bg-gray-400 focus:outline-none"
//                     onClick={() => handleRemoveOneFromCart(product.mnuid)}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="xl:h-4 xl:w-4 lg:h-2 lg:w-2 md:h-2 md:w-2   text-gray-600"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M20 12H4"
//                       />
//                     </svg>
//                   </button>
//                   <span className="font-semibold xl:mx-2 lg:mx-1">{product.quantity}</span>
//                   <button
//                     className="xl:px-2 xl:py-2 lg:px-1 lg:py-1 md:px-1 md:py-1 rounded-md bg-gray-300 hover:bg-gray-400 focus:bg-gray-400 focus:outline-none"
//                     onClick={() => handleIncreaseQuantity(index)}
//                   >

//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="xl:h-4 xl:w-4 lg:h-2 lg:w-2 md:h-2 md:w-2  text-gray-600"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//                       />
//                     </svg>
//                   </button>
//                 </div>

//                 <div className="font-semibold text-blue-500 text-lg w-16 text-center">${itemTotalPrice.toFixed(2)}</div>
//               </div>
//             );
//           })}
//         </div>
//         {/* end order list */}
//         {/* totalItems */}
//         <div className="fixed w-full md:w-4/12 lg:w-3/12 xl:w-3/12 bottom-0 mb-14 mt-1">
//           <div className="py-4  bg-green-400 shadow-lg">
//             <div className="px-4 flex font-Inter text-white justify-between">
//               <span className="font-semibold text-sm">Subtotal</span>
//               <span className="font-bold text-sm">${totalPrice.toFixed(2)}</span>
//             </div>

//             <div className="px-4 flex font-Inter text-white justify-between">
//               <span className="font-semibold text-sm">Discount</span>
//               <span className="font-bold text-sm">- ${(totalPrice * 0.05).toFixed(2)}</span>
//             </div>
//             <div className="px-4 flex font-Inter text-white justify-between">
//               <span className="font-semibold text-sm">Sales Tax</span>
//               <span className="font-bold text-sm">${(totalPrice * 0.07).toFixed(2)}</span>
//             </div>
//             <div className="mt-3 px-4 flex font-Inter bg-green-400 text-white items-center justify-between">
//               <span className="font-bold text-2xl">Total</span>
//               <span className="font-bold text-2xl">
//                 ${(totalPrice + totalPrice * 0.07 - totalPrice * 0.05).toFixed(2)}
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="fixed w-full md:w-4/12 lg:w-3/12 xl:w-3/12 bottom-0  font-Inter">
//           <button
//             className="px-4 py-4 w-full font-bold text-2xl  shadow-lg text-center bg-blue-500 text-white "
//             onClick={openModal}
//           >
//             Payment
//           </button>
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white shadow-lg p-4 rounded w-96 sm:w-700">
//             <div className="flex justify-end">
//               <button className="text-gray-600" onClick={closeModal}>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
//             <CustomerForm closeModal={closeModal} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderDetails;





import React, { useState, useEffect } from 'react';
import defaultImage from '../assets/Image/default.jpg';
import CustomerForm from './CustomerDetails';

const OrderDetails = ({ products, handleRemoveFromCart, handleIncreaseQuantity }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleRemoveOneFromCart = (productId) => {
    handleRemoveFromCart(productId);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fallbackImage = defaultImage;

  useEffect(() => {
    // Calculate the total price whenever the products change
    const calculateTotalPrice = () => {
      let totalPrice = 0;
      products.forEach((product) => {
        totalPrice += product.price * product.quantity;
      });
      setTotalPrice(totalPrice);
    };

    calculateTotalPrice();
  }, [products]);

  return (
    <div className="w-full bg-white  w-350 border-l-2 border-gray-100">
      <div className="w-full w-350">
        {/* header */}
        <div className="flex flex-row items-center justify-between px-5 mt-1">
          <div className="font-bold font-Montserrat mt-2 text-xl">Order Details</div>
          <div className="font-semibold">
            <span className="px-4 py-2 rounded-md font-Inter bg-blue-100 text-blue-500">Clear All</span>
          </div>
        </div>
        {/* end header */}
        {/* order list */}

        <div className="px-5 py-4 mt-5 font-Quicksand flex-grow overflow-auto h-[calc(100vh-256px)]" style={{ scrollbarWidth: "none" }}>
          <style>
            {`
            .overflow-auto::-webkit-scrollbar {
              display: none;
            }
            `}
          </style>
          {products.map((product, index) => {
            const itemTotalPrice = product.price * product.quantity;
            return (
              <div className="flex flex-row justify-between items-center mb-4" key={product.mnuid}>
                <div className="flex flex-row items-center w-1/5">
                  <img
                    src={product.image || fallbackImage}
                    className="xl:w-14 xl:h-14 lg:w-8 lg: h-8 object-cover rounded-md"
                    alt=""
                    onError={(e) => { e.target.src = fallbackImage; }} // Assign the fallback image on error
                  />
                  </div>
                

                <div className=" w-4/5">
                  <div>
                <span className="ml-4 flex items-center font-semibold xl:text-lg lg:text-sm">{product.name}</span>
                  </div>
                  <div className=" flex items-center ml-4 xl:space-x-3 lg:space-x-1">
                  <button
                    className="xl:px-2 xl:py-2 lg:px-1 lg:py-1 md:px-1 md:py-1  rounded-md bg-gray-300 hover:bg-gray-400 focus:bg-gray-400 focus:outline-none"
                    onClick={() => handleRemoveOneFromCart(product.mnuid)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xl:h-4 xl:w-4 lg:h-2 lg:w-2 md:h-2 md:w-2   text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                  </button>
                  <span className="font-semibold xl:mx-2 lg:mx-1">{product.quantity}</span>
                  <button
                    className="xl:px-2 xl:py-2 lg:px-1 lg:py-1 md:px-1 md:py-1 rounded-md bg-gray-300 hover:bg-gray-400 focus:bg-gray-400 focus:outline-none"
                    onClick={() => handleIncreaseQuantity(index)}
                  >

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xl:h-4 xl:w-4 lg:h-2 lg:w-2 md:h-2 md:w-2  text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                  <div className="font-semibold text-blue-500 xl:text-2xl lg:text-lg w-16 text-center">${itemTotalPrice.toFixed(2)}</div>
                  </div>
                
              </div>
              </div>
            );
          })}
        </div>
        {/* end order list */}
        {/* totalItems */}
        <div className="fixed w-full md:w-4/12 lg:w-3/12 xl:w-3/12 bottom-0 mb-14 mt-1">
          <div className="py-4  bg-green-400 shadow-lg">
            <div className="px-4 flex font-Inter text-white justify-between">
              <span className="font-semibold text-sm">Subtotal</span>
              <span className="font-bold text-sm">${totalPrice.toFixed(2)}</span>
            </div>

            <div className="px-4 flex font-Inter text-white justify-between">
              <span className="font-semibold text-sm">Discount</span>
              <span className="font-bold text-sm">- ${(totalPrice * 0.05).toFixed(2)}</span>
            </div>
            <div className="px-4 flex font-Inter text-white justify-between">
              <span className="font-semibold text-sm">Sales Tax</span>
              <span className="font-bold text-sm">${(totalPrice * 0.07).toFixed(2)}</span>
            </div>
            <div className="mt-3 px-4 flex font-Inter bg-green-400 text-white items-center justify-between">
              <span className="font-bold text-2xl">Total</span>
              <span className="font-bold text-2xl">
                ${(totalPrice + totalPrice * 0.07 - totalPrice * 0.05).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <div className="fixed w-full md:w-4/12 lg:w-3/12 xl:w-3/12 bottom-0  font-Inter">
          <button
            className="px-4 py-4 w-full font-bold text-2xl  shadow-lg text-center bg-blue-500 text-white "
            onClick={openModal}
          >
            Payment
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white shadow-lg p-4 rounded w-96 sm:w-700">
            <div className="flex justify-end">
              <button className="text-gray-600" onClick={closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <CustomerForm closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
