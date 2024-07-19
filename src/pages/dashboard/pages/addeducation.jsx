

const AddEducation = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow-md">
    <form className="space-y-4">

      <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">School Name</label>
      <input type="text" id="projectName" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

      <label htmlFor="description" className="block text-sm font-medium text-gray-700">Program</label>
      <input type="text" id="description" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

      <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Qualification</label>
      <input type="text" id="skills" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

      <label htmlFor="institution" className="block text-sm font-medium text-gray-700">Grade</label>
      <input type="text" id="institution" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

      <label htmlFor="institution" className="block text-sm font-medium text-gray-700">Location</label>
      <input type="text" id="institution" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

      <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
      <input type="date" id="startDate" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

      <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
      <input type="date" id="endDate" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

      <input type="submit" value="Submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer" />

    </form>
  </div>
  )
}

export default AddEducation