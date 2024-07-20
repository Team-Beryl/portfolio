
import { useForm } from 'react-hook-form';
import { apiAddSkill } from '../../../services/skills';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Loader from '../../../components/loader';

const AddSkill = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)
    try {
      const res = await apiAddSkill({
        name: data.name,
        levelOfProficiency: data.proficiency.toLowerCase(),
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
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Skill</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Skill Name</label>
          <input
            type="text"
            {...register("name", { required: "Skill name is required" })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter a skill"
          />
          {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Proficiency</label>
          <select
            {...register("proficiency", { required: "Proficiency is required" })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Select</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
            <option>Expert</option>
          </select>
          {errors.proficiency && <p className="text-red-500 text-sm mt-2">{errors.proficiency.message}</p>}
        </div>

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
  );
}

export default AddSkill;






























// import { useForm } from 'react-hook-form';

// const AddSkill = () => {

//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     console.log(data)
//   }

//   return (

//     <div className="flex flex-col gap-5 items-center p-4 bg-gray-100 min-h-screen">
//       <form onSubmit={handleSubmit(onSubmit)} className='w-1/2'>
//         <label className="text-lg font-semibold mb-2">Add Skill  </label>
//         <input
//           type="text" {...register("name", {required: "name is required"})}
//           className="h-[300px] md:w-1/2 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//           placeholder="Enter a skill"
//         />
//         <div>
//           <label className="block text-gray-700 font-bold mb-2 pt-3">Proficiency</label> <br />
//           <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" {...register("proficiency", {required: "proficiency is required"})}>
//             <option >Select</option>
//             <option >Beginner</option>
//             <option >Intermediate</option>
//             <option >Advance</option>
//           </select>
//         </div>

//         <div className=" bg-blue-500 text-white px-3 py-2 rounded-lg hcursor-pointer">
//           <button type="submit" className='pt-3'>Submit</button>
//         </div>
        
//       </form>
//     </div>
//   )
// }

// export default AddSkill;
