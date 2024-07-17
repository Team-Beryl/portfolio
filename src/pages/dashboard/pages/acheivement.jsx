
import { Edit, Trash2Icon } from 'lucide-react'
import F from '../../../constants/constants'
import PagesLayout from '../layout/pageslayout'
import { useNavigate } from 'react-router-dom'


const Acheivement = () => {
  const navigate = useNavigate ()
  return (
 <div>
    <PagesLayout headerText="Acheivements" buttonDashboard= "Back to Dashboard" buttonText="Add Acheivement" onClick={() => navigate("/dashboard/acheivements/addacheivement")}>

      <div className='bg-gray-500 min-h-screen p-6'>

        <div className='grid grid-cols-4 gap-6 pt-14'>

          {
            F.ACHEIVEMENTS.map((acheivement, index) => (

              <div key={index} className='h-96 shadow-md rounded-lg flex flex-col gap-2 pl-5 bg-white'>
                <span className='font-semibold text-lg'>{acheivement.award}</span>
                <span className='font-semibold'>{acheivement.nameOfInstitution}</span>
                <span className='pt-5'>{acheivement.description}</span>
                <img src={acheivement.image} alt="" className='w-40' />
                <div className='ml-auto flex gap-x-2 pr-3'>
                  <span className=''>
                    <Edit className='text-blue-500' />
                  </span>
                  <span>
                    <Trash2Icon className='text-red-500' />
                  </span>
                </div>
              </div>
            ))
          }
        </div>
        </div>
        </PagesLayout>
      </div>

  )
}

export default Acheivement