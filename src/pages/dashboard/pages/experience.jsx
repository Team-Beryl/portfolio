import React, { useEffect, useState } from 'react'
import PagesLayout from '../layout/pageslayout'
import { Edit, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { apiDeleteExperience, apiGetExperiences } from "../../../services/experiences"
import Loader from '../../../components/loader'
import { toast } from 'react-toastify'

const Experience = () => {
  const navigate = useNavigate()

  const [experiences, setExperiences] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isDeleting, setIsDeleting] = useState({})

  const fetchExperiences = async () => {
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

  const handleDelete = async (_id) => {
    setIsDeleting((prevState) => ({ ...prevState, [_id]: true }))
    try {
      const res = await apiDeleteExperience(_id)
      console.log(res.data)
      toast.success(res.data.message)
      setExperiences((prevExperiences) => prevExperiences.filter(exp => exp._id !== _id))
    } catch (error) {
      console.log(error)
      toast.error("An error occurred")
    } finally {
      setIsDeleting((prevState) => ({ ...prevState, [_id]: false }))
    }
  }

  useEffect(() => {
    fetchExperiences()
  }, [])

  return (
    <div className='space-y-10'>
      <PagesLayout headerText="Experience" buttonText="Add Experience" onClick={() => navigate("/dashboard/experiences/addexperience")}>
        {isLoading ? (
          <Loader  />
        ) : (
          <div className="space-y-4">
            {experiences.length === 0 ? (
              <p>No Experience added yet</p>
            ) : (
              experiences.map((experience, index) => (
                <div key={index} className='h-72 shadow-md rounded-lg flex flex-col gap-2 p-5 bg-[#ECEFF7]'>
                  <span className='font-semibold text-lg'>{experience.role}</span>
                  <span className='font-semibold'>{experience.Companyname}</span>
                  <span>{experience.responsibility}</span>
                  <span className='pt-8 font-semibold'>{experience.date}</span>
                  <span className='pt-4 font-semibold'>{experience.location}</span>

                  <div className='ml-auto flex gap-x-2'>
                    <button onClick={() => navigate(`/dashboard/experiences/edit/${experience._id}`)}>
                      <Edit className='text-blue-500' />
                    </button>
                    <button className='text-red-500' onClick={() => handleDelete(experience._id)}>
                      {isDeleting[experience._id] ? <Loader /> : <Trash2 />}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </PagesLayout>
    </div>
  )
}

export default Experience
