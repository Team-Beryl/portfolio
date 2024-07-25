import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Loader from '../../../components/loader';
import { apiAddAcheivement } from '../../../services/acheivements';
import PagesLayout from '../layout/pageslayout';
import { useNavigate } from 'react-router-dom';

const AddAcheivement = () => {
const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)
    try {
      const res = await apiAddAcheivement({
        award: data.award,
        description: data.description,
        date: data.date,
        image: data.image,
        nameOfInstitution: data.nameOfInstitution
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
{/* <PagesLayout buttonDashboard="Back to Acheivement" onClick={() => navigate("/dashboard/acheivements")} > */}

<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

<label htmlFor="projectName" className="block text-sm font-medium text-gray-700">Award Name</label>
<input type="text" {...register("award", { required: "Award name is required" })} id="projectName" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

<label htmlFor="description" className="block text-sm font-medium text-gray-700">Name of Institution</label>
<input type="text" {...register("name", { required: "Institution name is required" })} id="description" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

<label htmlFor="skills" className="block text-sm font-medium text-gray-700">Description</label>
<input type="text" {...register("description", { required: "Description is required" })} id="skills" className="mt-1 block w-full p-2 border border-gray-300 rounded" />

<label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Date</label>
<input type="date" {...register("date", { required: "Date is required" })} id="startDate" className="mt-1 block w-full p-2 border border-gray-300 rounded" />


<label className="block text-gray-700 font-bold mb-2" htmlFor="profilePicture">Image</label>
<input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="file" {...register("image", { required: "Image is required" })} />

<button
  type="submit"
  className="w-full flex justify-center bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
>

  {
    isSubmitting? <Loader/> : "Add Acheivement"
  }
</button>

</form>



{/* </PagesLayout> */}
    </div>
  )
}

export default AddAcheivement