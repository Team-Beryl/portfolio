import React, { useEffect, useState } from 'react'
import PagesLayout from '../layout/pageslayout'
import F from '../../../constants/constants'
import { Edit, Trash2Icon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import {apiDeleteExperience, apiGetExperiences} from "../../../services/experiences"
import Loader from '../../../components/loader'


const Experience = () => {
const navigate = useNavigate()

const [experiences, setExperiences] = useState([])
  const [isLoading, setIsLoading] = useState([])
  const [isDeleting, setIsDeleting] = useState([])

  const fetchExperiences= async () => {
    setIsLoading(true)
    try {

      const res = await apiGetExperiences()
      console.log(res.data)
      setExperiences(res.data.experience)

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async(_id) => {
    try {
      const res = await apiDeleteExperience(_id)
      console.log(res.data)
      toast.success(res.data.message)
    } catch (error) {
      console.log(error)
      toast.error("An error occured")
      
    }
  }

  useEffect(() => {
    fetchExperiences()
  }, [])

  return (
    <div className='space-y-10'>
      <PagesLayout headerText="Experience" buttonDashboard="Back to Dashboard" buttonText="Add Experience" onClick={() => navigate("/dashboard/experiences/addexperience")}>
        <div className="space-y-4">
          {
            F.EXPERIENCES.map((experience, index) => (
              <div key={index} className='h-72 shadow-md rounded-lg flex flex-col gap-2 p-5 bg-[#ECEFF7]'>
                <span className='font-semibold text-lg'>{experience.role}</span>
                <span className='font-semibold'>{experience.Companyname}</span>
                <span>{experience.responsibilty}</span>
                <span className='pt-8 font-semibold'>{experience.date}</span>
                <span className='pt-4 font-semibold'>{experience.location}</span>

                <div className='ml-auto flex gap-x-2'>
                  <button>
                    <Edit className='text-blue-500' />
                  </button>
                  <button className='text-red-500' onClick={() => handleDelete(experience._id)}>
                    {
                      isDeleting ? <Loader/> : <Trash2Icon />
                    }
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </PagesLayout>
    </div>
  )
}

export default Experience;
