
import { Outlet } from 'react-router-dom'
import Overview from '../pages/overview'

const DashboardLayout = () => {
  return (
    <div className='flex'>
        <Overview/>
        <div className='w-full'>
            <Outlet/>
        
        </div>
    </div>
  )
}

export default DashboardLayout