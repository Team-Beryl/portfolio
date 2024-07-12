
import { Outlet } from 'react-router-dom'
import Overview from './pages/overview'

const Dashboard = () => {
  return (
    <div>
      <Overview/>
      <Outlet />
    </div>
  )
}

export default Dashboard