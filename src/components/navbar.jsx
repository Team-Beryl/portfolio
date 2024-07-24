import { Link } from "react-router-dom";
import { logo } from "../assets";
import F from "../constants/constants";

const Navbar = () => {
  return (
    <div className="flex justify-between px-32 py-8 fixed w-full left-0 top-0 z-50 bg-white bg-opacity-90">
      <img className="w-60 mb-0 animate-bounce" src={logo} alt="logo" />

      <div className="flex gap-x-12 text-[18px] font-semibold text-black">
        {F.NAV.map((item, index) => {
          return (
            <Link key={index} to={item.path} className="hover:text-purple-500 transition-colors duration-300">
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
