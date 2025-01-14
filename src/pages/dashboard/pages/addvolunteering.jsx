import React from 'react'

const AddVolunteering = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow-md">
    <form className="space-y-4">

      <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">Project Name</label>
      <input type="text" id="projectName" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

      <label htmlFor="description" className="block text-sm font-medium text-gray-700">Organization</label>
      <input type="text" id="description" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

      <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Role</label>
      <input type="text" id="skills" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

      <label htmlFor="institution" className="block text-sm font-medium text-gray-700">Description</label>
      <input type="text" id="institution" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

      <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
      <input type="date" id="startDate" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

      <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
      <input type="date" id="endDate" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

      <button
          type="submit"
          className="w-full flex justify-center bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
        
          {
            isSubmitting? <Loader/> : "Add Skill"
          }
        </button>

    </form>
  </div>
  )
}

export default AddVolunteering