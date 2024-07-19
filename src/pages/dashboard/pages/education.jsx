import { Edit, Trash2Icon } from 'lucide-react'
import F from '../../../constants/constants'
import PagesLayout from '../layout/pageslayout'
import { useNavigate } from 'react-router-dom'
import { apiDeleteEducation, apiGetEducation } from '../../../services/education'
import { useEffect, useState } from 'react'
import Loader from '../../../components/loader'
import PageLoader from '../../../components/PageLoader'

const Education = () => {

  const navigate = useNavigate()
  const [education, setEducation] = useState([])
  const [isLoading, setIsLoading] = useState([])
  const [isDeleting, setIsDeleting] = useState([])

  const fetchEducation = async () => {
    setIsLoading(true)
    try {

      const res = await apiGetEducation()
      console.log(res.data)
      setEducation(res.data.Skills)

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async(_id) => {
    try {
      const res = await apiDeleteEducation(_id)
      console.log(res.data)
      toast.success(res.data.message)
    } catch (error) {
      console.log(error)
      toast.error("An error occured")
      
    }
  }

  useEffect(() => {
    fetchEducation()
  }, [])

  return (
    <div>

      <PagesLayout headerText="Education" buttonDashboard="Back to Dashboard" buttonText="Add Education" onClick={() => navigate("/dashboard/education/addeducation")}>

        {
          isLoading? <PageLoader/> : 
          <div className='bg-gray-500 min-h-screen p-6 pt-4'>
          <div className='grid grid-cols-4 gap-6 pt-14'>

            {
              F.EDUCATION.map((education, index) => (

                <div key={index} className='h-56 shadow-md rounded-lg flex flex-col gap-2 pl-5 bg-white'>
                  <span className='font-semibold text-lg pt-3'>{education.schoolName}</span>
                  <span className=''>{education.program}</span>
                  <span>{education.qualification}</span>
                  <span className='font-semibold'>{education.startDate}</span>
                  <span className='font-semibold'>{education.endDate}</span>

                  <div className='ml-auto flex gap-x-2'>
                    <button>
                      <Edit className='text-blue-500' />
                    </button>
                    <button className='text-red-500' onClick={() => handleDelete(skill._id)}>
                      {
                        isDeleting ? <Loader/> : <Trash2Icon />
                      }
                    </button>
                  </div>
                </div>


              ))
            }
          </div>

        </div>

         }


      </PagesLayout>

    </div>
  )
}

export default Education