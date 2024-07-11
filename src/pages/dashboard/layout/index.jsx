import React from 'react'
import SideBar from '../../../components/sidebar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <div className='w-full'>
            <Outlet/>
        
        </div>
    </div>
  )
}

export default DashboardLayout