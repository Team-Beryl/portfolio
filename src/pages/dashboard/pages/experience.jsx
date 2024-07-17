import React from 'react'
import PagesLayout from '../layout/pageslayout'
import F from '../../../constants/constants'
import { Edit, Trash2Icon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Experience = () => {
  const navigate = useNavigate()
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

                <div className='ml-auto flex gap-x-2 mt-auto'>
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
      </PagesLayout>
    </div>
  )
}

export default Experience;
