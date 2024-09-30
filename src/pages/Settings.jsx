import React from 'react';
import { motion } from 'framer-motion';
import Breadcrumb from "./Breadcrumb";

const Settings = () => {
  const settingsOptions = [
    { name: "Profile", description: "Manage your profile information", path: "/settings/profile" },
    { name: "Account", description: "Update your account settings", path: "/settings/account" },
    { name: "Privacy", description: "Manage your privacy preferences", path: "/settings/privacy" },
    { name: "Notifications", description: "Customize your notification preferences", path: "/settings/notifications" },
    { name: "Security", description: "Update your security settings", path: "/settings/security" },
    { name: "Help", description: "Access help and support", path: "/settings/help" },
  ];

  return (
    <div className="min-h-screen">
      <Breadcrumb />
      <div className="max-w-4xl mx-auto py-10 px-5">
        <h1 className="text-4xl font-bold mb-6 text-center text-white">Settings</h1>
        <p className="mb-8 text-lg text-gray-600 text-center">
          Manage your preferences and account settings below.
        </p>
        <div className="grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {settingsOptions.map((option, index) => (
            <motion.div
              key={index}
              className="p-6 bg-slate-100 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-gray-800">{option.name}</h2>
              <p className="text-gray-500 mb-4">{option.description}</p>
              <a
                href={option.path}
                className="text-pink-500 hover:underline"
              >
                Go to {option.name}
              </a>
            </motion.div>
          ))}
        </div>
        
<form className="max-w mx-auto p-10 bg-white shadow-lg rounded-lg">
  <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Create Your Account</h2>
  <div className="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
      <input
        type="text"
        id="first_name"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-500 focus:border-blue-500 block w-full p-3 transition duration-200 ease-in-out"
        placeholder="John"
        required
      />
    </div>
    <div>
      <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
      <input
        type="text"
        id="last_name"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-500 focus:border-blue-500 block w-full p-3 transition duration-200 ease-in-out"
        placeholder="Doe"
        required
      />
    </div>
    <div>
      <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">Company</label>
      <input
        type="text"
        id="company"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-500 focus:border-blue-500 block w-full p-3 transition duration-200 ease-in-out"
        placeholder="Flowbite"
        required
      />
    </div>  
    <div>
      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
      <input
        type="tel"
        id="phone"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-500 focus:border-blue-500 block w-full p-3 transition duration-200 ease-in-out"
        placeholder="123-45-678"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        required
      />
    </div>
    <div>
      <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900">Website URL</label>
      <input
        type="url"
        id="website"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-500 focus:border-blue-500 block w-full p-3 transition duration-200 ease-in-out"
        placeholder="flowbite.com"
        required
      />
    </div>
    <div>
      <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900">Unique Visitors (per month)</label>
      <input
        type="number"
        id="visitors"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-500 focus:border-blue-500 block w-full p-3 transition duration-200 ease-in-out"
        placeholder="1000"
        required
      />
    </div>
  </div>
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
    <input
      type="email"
      id="email"
      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-500 focus:border-blue-500 block w-full p-3 transition duration-200 ease-in-out"
      placeholder="john.doe@company.com"
      required
    />
  </div> 
  <div className="mb-6">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
    <input
      type="password"
      id="password"
      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-500 focus:border-blue-500 block w-full p-3 transition duration-200 ease-in-out"
      placeholder="•••••••••"
      required
    />
  </div> 
  <div className="mb-6">
    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
    <input
      type="password"
      id="confirm_password"
      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-500 focus:border-blue-500 block w-full p-3 transition duration-200 ease-in-out"
      placeholder="•••••••••"
      required
    />
  </div> 
  <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input
        id="remember"
        type="checkbox"
        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
        required
      />
    </div>
    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">
      I agree with the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>.
    </label>
  </div>
  <button
    type="submit"
    className="w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-white px-5 py-2.5 transition duration-200 ease-in-out"
  >
    Submit
  </button>
</form>

      </div>
    </div>
  );
};

export default Settings;
