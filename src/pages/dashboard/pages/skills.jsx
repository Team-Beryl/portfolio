import React, { useEffect, useState } from 'react'
import PagesLayout from '../layout/pageslayout'
import { Edit, Trash2Icon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { apiDeleteSkill, apiGetSkills } from '../../../services/skills'
import PageLoader from '../../../components/PageLoader'
import { toast } from 'react-toastify'
import Loader from '../../../components/loader'

const Skills = () => {
  const navigate = useNavigate()
  const [skills, setSkills] = useState([])
  const [isLoading, setIsLoading] = useState([])
  const [isDeleting, setIsDeleting] = useState([])

  const fetchSkills = async () => {
    setIsLoading(true)
    try {

      const res = await apiGetSkills()
      console.log(res.data)
      setSkills(res.data.Skills)

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async(_id) => {
    try {
      const res = await apiDeleteSkill(_id)
      console.log(res.data)
      toast.success(res.data.message)
    } catch (error) {
      console.log(error)
      toast.error("An error occured")
      
    }
  }

  useEffect(() => {
    fetchSkills()
  }, [])

  return (
    <PagesLayout headerText="skills" buttonDashboard="Back to Dashboard" buttonText="Add new skills " onClick={() => navigate("/dashboard/skills/add-skill")}>

      {
        isLoading ? <PageLoader /> :
          <div>
            {
              skills.length == 0 ?
                <p>No Skill added yet</p> :
                <div className='bg-gray-500 min-h-screen p-6'>
                  <div className='grid grid-cols-3 gap-6 pt-14 '>
                    {
                      skills.map((skill, index) => (
                        <div key={index} className='h-52 shadow-md rounded-lg flex flex-col gap-2 pl-5 bg-white'>

                          <span className='font-semibold text-lg'>{skill.title}</span>
                          <span>{skill.name}</span>
                          <span className='pt-5 font-semibold'>{skill.levelofProficiency}</span>

                          <div className='ml-auto flex gap-x-2'>
                            <button>
                              <Edit className='text-blue-500' />
                            </button>
                            <button className='text-red-500' onClick={() => handleDelete(skill._id)}>
                              {
                                isDeleting? <Loader/> : <Trash2Icon  />
                              }
                            </button>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>

            }
          </div>
      }


    </PagesLayout>
  )
}

export default Skills;
