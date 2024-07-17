import { Link } from "react-router-dom"
import { logo } from "../assets"
import F from "../constants/constants"

const Navbar = () => {
  return (
    <div className="flex justify-between px-32 fixed w-full top-4">

      <img className="w-48 mb-10" src={logo} alt="image" />
      <div className="flex gap-x-12 text-[12px}">
        {
          F.NAV.map(
            (item, index) => {
              return <Link className="text-black" key={index}> {item.name} </Link>
            }
          )
        }
      </div>
      
    </div>
  )
}

export default Navbar