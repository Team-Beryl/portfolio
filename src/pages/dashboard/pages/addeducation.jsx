
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Loader from '../../../components/loader';
import { apiAddEducation } from '../../../services/education';


const AddEducation = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)
    try {
      const res = await apiAddEducation({
        schoolName: data.schoolName,
        program: data.program,
        qualification: data.qualification,
        grade: data.grade,
        location: data.location,
        startDate: data.startDate,
        endDate: data.endDate

      })

      console.log(res.data)
      toast.success(res.data.message)


    } catch (error) {
      console.log(error)
      toast.error("An error occured")

    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">School Name</label>
        <input type="text" {...register("Schoolname", { required: "School name is required" })} id="projectName" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Program</label>
        <input type="text" {...register("program", { required: "Program is required" })} id="description" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

        <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Qualification</label>
        <input type="text" {...register("qualification", { required: "Qualification is required" })} id="skills" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

        <label htmlFor="institution" className="block text-sm font-medium text-gray-700">Grade</label>
        <input type="text" {...register("institution", { required: "Institution is required" })} id="institution" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

        <label htmlFor="institution" className="block text-sm font-medium text-gray-700">Location</label>
        <input type="text" {...register("location", { required: "Location is required" })} id="institution" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
        <input type="date" {...register("date", { required: "date is required" })} id="startDate" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
        <input type="date" {...register("date", { required: "End Date is required" })} id="endDate" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

        <button
          type="submit"
          className="w-full flex justify-center bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >

          {
            isSubmitting ? <Loader /> : "Add Education"
          }
        </button>

      </form>
    </div>
  )
}

export default AddEducation