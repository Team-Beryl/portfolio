import { Calendar, Database, Edit, Edit2, Edit2Icon, Locate, Phone, Trash2Icon } from "lucide-react";
import techbg from "../../../images/techbg.jpg"
import profileimg from "../../../images/profileimg.jpg";
import PagesLayout from "../layout/pageslayout";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Linkedin, Github, Twitter } from "lucide-react";
import { apiDeleteUserProfile, apiGetUserProfile } from "../../../services/userprofile";
import { useEffect, useState } from "react";


const UserProfile = () => {
  const navigate = useNavigate()

  const [userprofile, setUserProfile] = useState([])
  const [isLoading, setIsLoading] = useState([])
  const [isDeleting, setIsDeleting] = useState([])

  const fetchUserProfile = async () => {
    setIsLoading(true)
    try {

      const res = await apiGetUserProfile()
      console.log(res.data)
      setSkills(res.data.Skills)

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (_id) => {
    try {
      const res = await apiDeleteUserProfile(_id)
      console.log(res.data)
      toast.success(res.data.message)
    } catch (error) {
      console.log(error)
      toast.error("An error occured")

    }
  }

  useEffect(() => {
    fetchUserProfile()
  }, [])


  return (
    <div className="bg-[#ECEFF7] ">

      <PagesLayout headerText="UserProfile" buttonDashboard="Back to Dashboard" buttonText="Add Profile Section" onClick={() => navigate("/dashboard/profile/addprofile")}>

        <div>

        <div className="relative">
          <img src={techbg} alt="profilebg" className="w-full h-[400px] pt-1" />
          <div className="pt-10">
            <img
              src={profileimg}
              alt="profileimg"
              className="absolute -bottom-3 left-0 rounded-full w-5  border-4 border-white"
            />
          </div>

        </div>

        <div className="bg-white shadow-md rounded-2xl  p-6  mb-8">

          <div className='ml-auto flex gap-x-10 px-[1000px]'>

            <button className='flex items-center justify-center rounded-full border border-gray-300 p-2 hover:bg-gray-400'>
              <Edit className='text-blue-500' />
            </button >

            <button className='flex items-center justify-center rounded-full border border-gray-300 p-2 hover:bg-gray-400' onClick={() => handleDelete(skill._id)}>
              <Trash2Icon className='text-red-500' />
            </button>

          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Richlove Baidoo</h3>
          <h2 className="text-xl font-medium text-gray-600 mb-4">Senior Frontend Engineer</h2>
          <p className="text-base text-gray-700">I build pixel-perfect, engaging, and accessible digital experiences.</p>

        </div>

        <section className="pt-20 bg-white shadow-md rounded-3xl  p-6  mb-8 ">


          <div className='ml-auto flex gap-x-10 px-[1000px]'>

            <button className='flex items-center justify-center rounded-full border border-gray-300 p-2 hover:bg-gray-400'>
              <Edit className='text-blue-500' />
            </button>

            <button className='flex items-center justify-center rounded-full border border-gray-300 p-2 hover:bg-gray-400' onClick={() => handleDelete(skill._id)}>
              <Trash2Icon className='text-red-500' />
            </button>

          </div>


          <div className="max-w-4xl p-6">
            <h1 className="text-4xl font-bold mb-4">About</h1>

            <div className="pb-16">
              <div className="flex items-center gap-2 mb-4">
                <Locate className="text-red-500" />
                <h3 className="text-gray-800">Accra, Ghana</h3>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Calendar className="text-blue-500" />
                <h3 className="text-gray-800">15/02/1993</h3>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Phone className="text-green-500" />
                <span className="text-gray-800">+233245678901</span>
              </div>

              <div className='flex gap-3 pt-3 justify-self-auto '>

                <Link to={Twitter} className=' hover:bg-[#000000] w-[45px] shadow-md bg-white rounded-full flex justify-center'> <Twitter className='w-[30px] text-transparent h-10 fill-pink-600 text-center' /> </Link>

                <Link className='w-[45px] hover:bg-[#000000] shadow-md  bg-white rounded-full flex justify-center' to={Linkedin}> <Linkedin className=' w-[30px] text-transparent h-10  fill-blue-600 place-items-center ' /> </Link>

                <Link className='w-[45px] hover:bg-[#2563EB] shadow-md bg-white rounded-full flex justify-center' to={Github}> <Github className='w-[30px] h-10  fill-black place-items-center' /> </Link>
              </div>

            </div>

            <p className="text-lg leading-relaxed">
              Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.
              <br /><br />
              My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
              <br /><br />
              When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds.
            </p>


          </div>
        </section>

        </div>


      </PagesLayout>


    </div>
  );
}

export default UserProfile;
