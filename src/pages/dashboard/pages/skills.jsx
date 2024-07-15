import React from 'react'
import PagesLayout from '../layout/pageslayout'
import F from '../../../constants/constants'
import { Edit, Trash2Icon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Skills = () => {
  const navigate = useNavigate()
  return (
    <PagesLayout headerText="skills" buttonDashboard="Back to Dashboard" buttonText="Add new skills " onClick={() => navigate("/dashboard/skills/add-skill")}>
      <div className='bg-gray-100 min-h-screen p-6'>
        <div className='grid grid-cols-4 gap-6 pt-14'>
          {
            F.SKILLS.map((skill, index) => (
              <div key={index} className='h-52 shadow-md rounded-lg flex flex-col gap-2 pl-5 bg-white'>
                <span className='font-semibold text-lg'>{skill.title}</span>
                <span>{skill.name}</span>
                <span className='pt-5 font-semibold'>{skill.levelofProficiency}</span>
                <div className='ml-auto flex gap-x-2'>
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
  )
}

export default Skills;
