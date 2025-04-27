import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Profile Form Component
const ProfileForm = ({ onSubmit, defaultValues = { firstName: '', email: '', address: '', mobile: '' } }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      const formData = new FormData(e.target);
      onSubmit({
        firstName: formData.get('firstName'),
        email: formData.get('email'),
        address: formData.get('address'),
        mobile: formData.get('mobile'),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[710px] mx-auto">
      <div className="flex flex-col gap-6 mb-8 sm:flex-row sm:gap-[50px] sm:mb-8">
        <div className="flex flex-col gap-2 sm:w-[330px]">
          <label htmlFor="firstName" className="text-black text-base font-normal leading-6">First Name</label>
          <input type="text" id="firstName" name="firstName" defaultValue={defaultValues.firstName} className="w-full h-[50px] px-4 border border-gray-200 rounded bg-[#f5f5f5] focus:outline-none focus:border-black" />
        </div>
        <div className="flex flex-col gap-2 sm:w-[330px]">
          <label htmlFor="mobile" className="text-black text-base font-normal leading-6">Mobile Number</label>
          <input type="text" id="mobile" name="mobile" defaultValue={defaultValues.mobile} className="w-full h-[50px] px-4 border border-gray-200 rounded bg-[#f5f5f5] focus:outline-none focus:border-black" />
        </div>
      </div>

      <div className="flex flex-col gap-6 sm:flex-row sm:gap-[50px] sm:mb-8">
        <div className="flex flex-col gap-2 sm:w-[330px]">
          <label htmlFor="email" className="text-black text-base font-normal leading-6">Email</label>
          <input type="email" id="email" name="email" defaultValue={defaultValues.email} className="w-full h-[50px] px-4 border border-gray-200 rounded bg-[#f5f5f5] focus:outline-none focus:border-black" />
        </div>
        <div className="flex flex-col gap-2 sm:w-[330px]">
          <label htmlFor="address" className="text-black text-base font-normal leading-6">Address</label>
          <input type="text" id="address" name="address" defaultValue={defaultValues.address} className="w-full h-[50px] px-4 border border-gray-200 rounded bg-[#f5f5f5] focus:outline-none focus:border-black" />
        </div>
      </div>
    </form>
  );
};

// Action Buttons Component
const ActionButtons = ({ onCancel, onSave, cancelText = 'Cancel', saveText = 'Save Changes', disabled = false }) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 sm:mt-8">
    <div className="flex flex-col sm:w-[330px] sm:ml-auto sm:flex-row sm:gap-4">
      <button onClick={onCancel} className="text-black font-normal text-base leading-6 font-poppins hover:opacity-80 sm:mb-0 mb-4">{cancelText}</button>
      <button onClick={onSave} disabled={disabled} className="bg-black text-[#fafafa] px-8 py-4 rounded-md font-poppins font-medium text-base leading-6 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed">{saveText}</button>
    </div>
  </div>
);

// Order List Component
const OrderList = ({ orders = [{ id: 1, itemName: 'Item 1', orderDate: '[Date]' }, { id: 2, itemName: 'Item 2', orderDate: '[Date]' }] }) => (
  <div className="flex flex-col gap-4 sm:w-[710px] mx-auto mt-8">
    <h1 className="text-2xl font-bold mb-8">My Orders</h1>
    {orders.map(order => (
      <div key={order.id} className="flex items-center justify-between bg-white h-[51px] w-full sm:w-[710px] shadow-md">
        <span className="text-base font-normal text-black font-poppins ml-8">{order.itemName}</span>
        <span className="text-base font-normal text-black font-poppins mr-8">Order Placed - {order.orderDate}</span>
      </div>
    ))}
  </div>
);

// User Profile Component
const UserProfile = () => {
  const handleProfileSubmit = (data) => { console.log('Profile Data:', data); };
  const handleCancel = () => { console.log('Cancel clicked'); };
  const handleSave = () => { console.log('Save clicked'); };

  return (
    <>
      <Navbar />
      <div className="p-8 max-w-[800px] mx-auto">
        <h1 className="text-2xl font-bold mb-8">Edit Your Profile</h1>
        <ProfileForm onSubmit={handleProfileSubmit} />
        <ActionButtons onCancel={handleCancel} onSave={handleSave} />
        <OrderList />
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
