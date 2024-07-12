
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar'

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Dashboard