import React from 'react'
import F from '../../../constants/constants'
import { Edit, Trash2Icon } from 'lucide-react'

const Volunteering = () => {
  return (
    <div>

      {
        F.VOLUNTEERING.map((volunteering, index) => (

          <div key={index} className='h-56 shadow-md rounded-lg flex flex-col gap-2 pl-5 bg-white'>
            <span className='font-semibold text-lg pt-3'>{volunteering.projectName}</span>
            <span className=''>{volunteering.organization}</span>
            <span>{volunteering.role}</span>
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
  )
}

export default Volunteering