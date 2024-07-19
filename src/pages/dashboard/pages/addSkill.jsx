import React from 'react';

const AddSkill = () => {
  return (
    <div className="flex flex-col gap-5 items-center p-4 bg-gray-100 min-h-screen">
      <label className="text-lg font-semibold mb-2">Add Skill</label>
      <input
        type="text"
        className="h-[300px] md:w-1/2 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Enter a skill"
      />
      <div>
        <label className="block text-gray-700 font-bold mb-2">Level of Proficiency</label> <br />
        <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Select</option>
          <option value="female">Beginner</option>
          <option value="male">Intermediate</option>
          <option value="male">Advance</option>
        </select>
      </div>
      <input
        className=" bg-blue-500 text-white px-3 py-2 rounded-lg hcursor-pointer"
        type="submit"
        value="Submit"
      />
    </div>
  )
}

export default AddSkill;
