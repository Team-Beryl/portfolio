import React from 'react'
import F from '../../../constants/constants'
import { Edit, Trash2Icon } from 'lucide-react'
import PagesLayout from '../layout/pageslayout'
import { useNavigate } from 'react-router-dom'

const Volunteering = () => {
  const navigate = useNavigate()
  return (
    <div>

      <PagesLayout headerText="Volunteering" buttonDashboard="Back to Dashboard" buttonText="Add Volunteer Work" onClick={() => navigate("/dashboard/volunteering/addvolunteering")}>

        <div className='bg-gray-500 min-h-screen p-6 pl-32'>

          <div className='grid grid-cols-4 gap-6 pt-14'>

            {
              F.VOLUNTEERING.map((volunteering, index) => (

                <div key={index} className='h-96 shadow-md rounded-lg flex flex-col gap-2 pl-5 bg-white'>
                  <span className='font-semibold text-2xl pt-3'>{volunteering.projectName}</span>
                  <span className='font-semibold'>{volunteering.organization}</span>
                  <span className='font-semibold'>{volunteering.role}</span>
                  <span>{volunteering.description}</span>
                  <span className='font-semibold'>{volunteering.startDate}</span>
                  <span className='font-semibold'>{volunteering.endDate}</span>
 
                  <div className='ml-auto flex gap-x-2 mt-auto pb-4 pr-3'>
                    <span>
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

export default Volunteering