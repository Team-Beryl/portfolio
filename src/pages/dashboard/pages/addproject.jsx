import { useForm } from 'react-hook-form';
import { apiAddSkill } from '../../../services/skills';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Loader from '../../../components/loader';
import { apiAddProject } from '../../../services/projects';
import PageLoader from '../../../components/PageLoader';

const AddProject = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)
    try {
      const res = await apiAddProject({
        name: data.name,
        levelOfProficiency: data.proficiency.toLowerCase(),
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
      <form className="space-y-4">

        <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">Project Name</label>
        <input type="text" id="projectName" {...register("projectname", { required: "Project name is required" })} className="mt-1 block w-full p-2 border border-gray-300 rounded" />

        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <input type="text" id="description" {...register("description", { required: "Description is required" })} className="mt-1 block w-full p-2 border border-gray-300 rounded" />

        <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills</label>
        <input type="text" id="skills" {...register("skills", { required: "Skill is required" })} className="mt-1 block w-full p-2 border border-gray-300 rounded" />

        <label htmlFor="institution" className="block text-sm font-medium text-gray-700">Name of Institution</label>
        <input type="text" id="institution" {...register("institution", { required: "Institution is required" })} className="mt-1 block w-full p-2 border border-gray-300 rounded" />

        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
        <input type="date" id="startDate" {...register("startdate", { required: "StartDate is required" })} className="mt-1 block w-full p-2 border border-gray-300 rounded" />

        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
        <input type="date" id="endDate" {...register("enddate", { required: "Enddate is required" })} className="mt-1 block w-full p-2 border border-gray-300 rounded" />

        <button
          type="submit"
          className="w-full flex justify-center bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >

          {
            isSubmitting ? <PageLoader /> : "Add Projects"
          }
        </button>
      </form>
    </div>
  );
};

export default AddProject;
