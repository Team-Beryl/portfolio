import React, { useEffect, useState } from 'react'
import PagesLayout from '../layout/pageslayout'
import F from '../../../constants/constants'
import { Edit, Trash2Icon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { apiDeleteProjects, apiGetProjects } from '../../../services/projects'
import Loader from '../../../components/loader'



const Projects = () => {
  const navigate = useNavigate()

  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState([])
  const [isDeleting, setIsDeleting] = useState([])

  const fetchProjects = async () => {
    setIsLoading(true)
    try {

      const res = await apiGetProjects()
      console.log(res.data)
      setProjects(res.data.Projects)

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (_id) => {
    try {
      const res = await apiDeleteProjects(_id)
      console.log(res.data)
      toast.success(res.data.message)
    } catch (error) {
      console.log(error)
      toast.error("An error occured")

    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (

    <PagesLayout headerText="Projects"  buttonText="Add Projects" onClick={() => navigate("/dashboard/projects/addproject")}>
      <div className='bg-gray-100 min-h-screen p-6'>

        {
          isLoading ? <Loader/> : <div className='grid grid-cols-3 gap-6 pt-14'>
            {
              projects.length == 0 ?
              <p>No Project added yet</p> :
              F.PROJECTS.map((project, index) => (
                <div className='h-72 shadow-md rounded-lg flex flex-col gap-2 pl-5 bg-white pt-6'>
                  <span className='text-lg font-semibold'>{project.title}</span>
                  <span>{project.discription}</span>
                  <span className='text-lg font-semibold'>{project.year}</span>
                  <span className='text-lg font-semibold'>{project.institution}</span>

                  <div className='ml-auto flex gap-x-2'>
                    <button>
                      <Edit className='text-blue-500' />
                    </button>
                    <button className='text-red-500' onClick={() => handleDelete(project._id)}>
                      {
                        isDeleting ? <Loader /> : <Trash2Icon />
                      }
                    </button>
                  </div>

                </div>

              )

              )
            }

          </div>

        }
      </div>

    </PagesLayout>


  )
}

export default Projects 