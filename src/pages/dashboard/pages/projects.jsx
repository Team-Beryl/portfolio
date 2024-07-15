import React from 'react'
import PagesLayout from '../layout/pageslayout'
import F from '../../../constants/constants'
import { Edit, Trash2Icon } from 'lucide-react'


const Projects = () => {
  return (

    <PagesLayout headerText="Projects" buttonDashboard="Back to Dashboard" buttonText="Add Projects" onClick={() => navigate("/dashboard/projects/addproject")}> 
      <div className='bg-gray-100 min-h-screen p-6'>

        <div className='grid grid-cols-3 gap-6 pt-14'>
          {
            F.PROJECTS.map((project, index) => (
              <div className='h-72 shadow-md rounded-lg flex flex-col gap-2 pl-5 bg-white pt-6'>
                <span className='text-lg font-semibold'>{project.title}</span>
                <span>{project.discription}</span>
                <span className='text-lg font-semibold'>{project.year}</span>
                <span className='text-lg font-semibold'>{project.institution}</span>

                <div className='ml-auto flex gap-x-2 pr-3 '>
                  <span className=''>
                    <Edit className='text-blue-500' />
                  </span>
                  <span>
                    <Trash2Icon className='text-red-500' />
                  </span>
                </div>

              </div>

            )

            )
          }

        </div>

      </div>

    </PagesLayout>


  )
}

export default Projects 