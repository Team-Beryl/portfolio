
import { useForm } from 'react-hook-form';
import { apiAddSkill } from '../../../services/skills';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Loader from '../../../components/loader';
import { apiAddUserProfile } from '../../../services/userprofile';


  

const AddProfile = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)
    try {
      const res = await apiAddUserProfile({
        profilePicture: data.profilePicture,
        location: data.location,
        sex: data.sex,
        about: data.about,
        dateOfBirth: data.dateOfBirth,
        contact: data.contact,
        languages: data.languages,
        gitHubLink: data.gitHubLink,
        linkedInLink: data.linkedInLink,
        twitterLink:data.twitterLink

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
    <div className="pt-24 pb-24 flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full max-w-md">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="firstName">First Name</label>
          <input className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter your name" {...register("firstname", { required: "First name is required" })} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">Last Name</label>
          <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter your last name" {...register("lastname", { required: "Last name is required" })} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="additionalName">Additional Name</label>
          <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter other name"  />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="sex">Sex</label>
          <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" {...register("sex", { required: "Sex is required" })}>
            <option value="">Select</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="location">Location</label>
          <input className="w-full px-3 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Country/Region" {...register("location", { required: "location is required" })}  />
          <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="City" {...register("location", { required: "location is required" })} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="dob">Date of Birth</label>
          <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="date" name="date" {...register("date", { required: "Date of birth is required" })} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="contactInfo">Contact Information</label>
          <select className="w-full px-3 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" {...register("contact", { required: "contact is required" })}>
            <option value="">Phone type</option>
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="mobile">Mobile</option>
          </select>
          <input type="text" placeholder='Enter number' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" {...register("contact", { required: "Contact is required" })} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="languages">Languages</label>
          <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" {...register("language", { required: "Language is required" })}>
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
          <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" {...register("about", { required: "about is required" })} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="profilePicture">Profile Picture</label>
          <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="file" {...register("profile", { required: "Profile picture is required" })} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="socialmedia">Add Social Media Handle</label>
          <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text"{...register("social", { required: "Socials is required" })} />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
        
          {
            isSubmitting? <Loader/> : "Add UserProfile"
          }
        </button>
      </form>
    </div>
  );
}

export default AddProfile;
