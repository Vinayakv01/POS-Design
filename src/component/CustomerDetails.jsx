import React, { useState } from 'react';
import { Button } from '@nextui-org/react';

const CustomerForm = ({ handleFormSubmit }) => {
  const [paymentMode, setPaymentMode] = useState('Cash');
  const [orderSource, setOrderSource] = useState('');

  const [mobileNumber, setMobileNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof handleFormSubmit === 'function') {
      const formData = {
        orderSource,
        paymentMode,
        recipientName: customerName,
        phoneNumber: mobileNumber,
        email,
        address,
      };
      handleFormSubmit(formData);
    }
  };

  const handleOrderSourceChange = (e) => {
    setOrderSource(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
      <h2 className="text-center col-span-2">Customer Details</h2>

      <div className="flex flex-col space-y-4">
        <label htmlFor="orderSource" className="block font-semibold text-gray-700">
          Order Source:
        </label>
        <select
          id="orderSource"
          value={orderSource}
          onChange={handleOrderSourceChange}
          className="border border-gray-300 bg-gray-100 p-2 rounded focus:outline-none focus:border-blue-500"
        >
          <option value="Dine-In">Dine-In</option>
          <option value="Takeaway">Takeaway</option>
          <option value="Delivery">Delivery</option>
        </select>
      </div>

      <div className="flex flex-col space-y-4">
        <label htmlFor="paymentMode" className="block font-semibold text-gray-700">
          Payment Mode:
        </label>
        <select
          id="paymentMode"
          value={paymentMode}
          onChange={(e) => setPaymentMode(e.target.value)}
          className="border border-gray-300 bg-gray-100 p-2 rounded focus:outline-none focus:border-blue-500"
        >
          <option value="Cash">Cash</option>
          <option value="PayPal">PayPal</option>
          <option value="Debit Card">Debit Card</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Sodexo">Sodexo</option>
        </select>
      </div>

      <div className="flex flex-col space-y-4">
        <label htmlFor="customerName" className="block font-semibold text-gray-700">
          Customer's Name:
        </label>
        <input
          type="text"
          id="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="border border-gray-300 bg-gray-100 p-2 rounded focus:outline-none focus:border-blue-500"
          placeholder="Enter customer's name"
        />
      </div>
      <div className="flex flex-col space-y-4">
            <label htmlFor="mobileNumber" className="block font-semibold text-gray-700">
              Phone Number:
            </label>
            <input
              type="text"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="border border-gray-300 bg-gray-100 p-2 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter phone number"
            />
          </div>

          <div className="flex flex-col space-y-4">
            <label htmlFor="email" className="block font-semibold text-gray-700">
              Email:
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 bg-gray-100 p-2 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter email"
            />
          </div>

      {(orderSource === 'Delivery') && (
        <>
          <div className="flex flex-col space-y-4">
            <label htmlFor="address" className="block font-semibold text-gray-700">
              Address:
            </label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border border-gray-300 bg-gray-100 p-2 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter address"
            />
          </div>
        </>
      )}

<div className="col-span-2 flex justify-end">
  <div className="flex items-center space-x-4">
    <Button bordered color="primary" auto>
      Submit
    </Button>
    <Button bordered color="secondary" auto>
      Print Bill
    </Button>
  </div>
</div>

    </form>
  );
};

export default CustomerForm;