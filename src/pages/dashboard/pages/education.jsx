import { Edit, Trash2Icon } from 'lucide-react'
import F from '../../../constants/constants'
import PagesLayout from '../layout/pageslayout'

const Education = () => {
  return (
    <div>

      <PagesLayout headerText="Education" buttonDashboard="Back to Dashboard" buttonText="Add Education">

        <div className='bg-gray-100 min-h-screen p-6 pt-4'>

          <div className='grid grid-cols-4 gap-6 pt-14'>

            {
              F.EDUCATION.map((education, index) => (

                <div key={index} className='h-56 shadow-md rounded-lg flex flex-col gap-2 pl-5 bg-white'>
                  <span className='font-semibold text-lg pt-3'>{education.schoolName}</span>
                  <span className=''>{education.program}</span>
                  <span>{education.qualification}</span>
                  <span className='font-semibold'>{education.startDate}</span>
                  <span className='font-semibold'>{education.endDate}</span>

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

export default Education