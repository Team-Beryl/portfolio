
import { Edit, Trash2Icon } from 'lucide-react'
import F from '../../../constants/constants'
import PagesLayout from '../layout/pageslayout'
import { useNavigate } from 'react-router-dom'
import { apiGetAcheivements } from '../../../services/acheivements'
import PageLoader from '../../../components/PageLoader'
import { toast } from 'react-toastify'
import Loader from '../../../components/loader'
import { useEffect, useState } from 'react'


const Acheivement = () => {
  const navigate = useNavigate()

  const [acheivements, setAcheivements] = useState([])
  const [isLoading, setIsLoading] = useState([])
  const [isDeleting, setIsDeleting] = useState([])

  const fetchAcheivements = async () => {
    setIsLoading(true)
    try {

      const res = await apiGetAcheivements()
      console.log(res.data)
      setAcheivements(res.data.Acheivements)

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
    fetchAcheivements()
  }, [])



  return (
    <div>
      <PagesLayout headerText="Acheivements" buttonDashboard="Back to Dashboard" buttonText="Add Acheivement" onClick={() => navigate("/dashboard/acheivements/addacheivement")}>

        {
          isLoading ? <PageLoader /> : <div className='bg-gray-500 min-h-screen p-6'>

            <div className='grid grid-cols-4 gap-6 pt-14'>

              {
                F.ACHEIVEMENTS.map((acheivement, index) => (

                  <div key={index} className='h-96 shadow-md rounded-lg flex flex-col gap-2 pl-5 bg-white'>
                    <span className='font-semibold text-lg'>{acheivement.award}</span>
                    <span className='font-semibold'>{acheivement.nameOfInstitution}</span>
                    <span className='pt-5'>{acheivement.description}</span>
                    <img src={acheivement.image} alt="" className='w-40' />
                    <div className='ml-auto flex gap-x-2 pr-3'>
                      <button>
                        <Edit className='text-blue-500' />
                      </button>
                      <button className='text-red-500' onClick={() => handleDelete(acheivement._id)}>

                        {
                          isDeleting?  <Loader/> : <Trash2Icon/> 
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

export default Acheivement