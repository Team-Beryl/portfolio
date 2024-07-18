import React from 'react';

const AddProfile = () => {
  return (
    <div className="pt-24 pb-24 flex items-center justify-center min-h-screen bg-gray-100">
      <form className="space-y-6 w-full max-w-md">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="firstName">First Name</label>
          <input className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter your name" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">Last Name</label>
          <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter your last name" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="additionalName">Additional Name</label>
          <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter other name" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="sex">Sex</label>
          <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="location">Location</label>
          <input className="w-full px-3 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Country/Region" />
          <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="City" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="dob">Date of Birth</label>
          <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="date" name="date" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="contactInfo">Contact Information</label>
          <select className="w-full px-3 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Phone type</option>
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="mobile">Mobile</option>
          </select>
          <input type="text" placeholder='Enter number' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="languages">Languages</label>
          <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select Language</option>
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="spanish">Spanish</option>
            <option value="fante">Fante</option>
            <option value="twi">Twi</option>
            <option value="ga">GA</option>
          </select>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="about">About</label>
          <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="profilePicture">Profile Picture</label>
          <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="file" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="socialmedia">Add Social Media Handle</label>
          <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <input className="w-full bg-blue-500 text-white px-3 py-2 rounded-lg cursor-pointer" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default AddProfile;
