import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Loader from '../../../components/loader';
import { apiAddExperience } from '../../../services/experiences';

const AddExperience = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)
    try {
      const res = await apiAddExperience({
        companyName: data.companyName,
        role: data.role,
        responsibility: data.responsibility,
        location: data.location,
        startDate: data.startDate,
        endDate: data.endDate,
        skills: data.skills
      })

      console.log(res.data)
      toast.success(res.data.message)
    
      
    } catch (error) {
      console.log(error)
      toast.error("An error occured")
      
    }finally{
      setIsSubmitting(false)
    }
  }

  return (
    
<div className="max-w-2xl mx-auto p-6 bg-white rounded shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">Company Name</label>
        <input type="text"{...register("name", { required: "Company name is required" })}  id="projectName" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Role</label>
        <input type="text" {...register("role", { required: "Role is required" })} id="description" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

        <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Responsibilty</label>
        <input type="text" {...register("role", { required: "role is required" })} id="skills" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

        <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills</label>
        <input type="text" {...register("skills", { required: "Skill name is required" })} id="skills" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
        <input type="date" {...register("date", { required: "Start Date is required" })} id="startDate" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
        <input type="date" {...register("date", { required: "End Date is required" })} id="endDate" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

        <button
          type="submit"
          className="w-full flex justify-center bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
        
          {
            isSubmitting? <Loader/> : "Add Experience"
          }
        </button>

      </form>
    </div>


  )
}

export default AddExperience