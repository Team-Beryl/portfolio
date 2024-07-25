import { Edit, Trash2 } from 'lucide-react'
import PagesLayout from '../layout/pageslayout'
import { useNavigate } from 'react-router-dom'
import { apiGetAcheivements, apiDeleteAcheivement } from '../../../services/acheivements'

import { toast } from 'react-toastify'
import Loader from '../../../components/loader'
import { useEffect, useState } from 'react'

const Acheivement = () => {
  const navigate = useNavigate()

  const [acheivements, setAcheivements] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isDeleting, setIsDeleting] = useState({})

  const fetchAcheivements = async () => {
    setIsLoading(true)
    try {
      const res = await apiGetAcheivements()
      if (res.data && res.data.acheivements) {
        setAcheivements(res.data.acheivements)
      } else {
        setAcheivements([])
      }
    } catch (error) {
      console.log(error)
      setAcheivements([])
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (_id) => {
    setIsDeleting((prevState) => ({ ...prevState, [_id]: true }))
    try {
      const res = await apiDeleteAcheivement(_id)
      if (res.data && res.data.message) {
        toast.success(res.data.message)
        setAcheivements((prevAcheivements) => prevAcheivements.filter(ach => ach._id !== _id))
      }
    } catch (error) {
      console.log(error)
      toast.error("An error occurred")
    } finally {
      setIsDeleting((prevState) => ({ ...prevState, [_id]: false }))
    }
  }

  useEffect(() => {
    fetchAcheivements()
  }, [])

  return (
    <div>
      <PagesLayout 
        headerText="Acheivements" 
        buttonText="Add Acheivement" 
        onClick={() => navigate("/dashboard/acheivements/addacheivement")}
      >
        {isLoading ? (
          <Loader/>
        ) : (
          <div className=' min-h-screen p-6'>
            <div className='grid grid-cols-4 gap-6 pt-14'>
              {acheivements.length === 0 ? (
                <p>No Acheivement added yet</p>
              ) : (
                acheivements.map((acheivement, index) => (
                  <div key={index} className='h-96 shadow-md rounded-lg flex flex-col gap-2 pl-5 bg-white'>
                    <span className='font-semibold text-lg'>{acheivement.award}</span>
                    <span className='font-semibold'>{acheivement.nameOfInstitution}</span>
                    <span className='pt-5'>{acheivement.description}</span>
                    {acheivement.image && <img src={acheivement.image} alt="" className='w-40' />}
                    <div className='ml-auto flex gap-x-2 pr-3'>
                      <button onClick={() => navigate(`/dashboard/acheivements/edit/${acheivement._id}`)}>
                        <Edit className='text-blue-500' />
                      </button>
                      <button className='text-red-500' onClick={() => handleDelete(acheivement._id)}>
                        {isDeleting[acheivement._id] ? <Loader /> : <Trash2 />}
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </PagesLayout>
    </div>
  )
}

export default Acheivement
