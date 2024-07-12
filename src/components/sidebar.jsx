import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import F from "../constants/constants";

const Sidebar = () => {
    return (
        <div className="h-screen w-[300px] bg-[#9E54D7] shadow-lg">
            <span className="text-3xl text-white font-bold px-5 py-3 block">PortfolioHub</span>
            <div className="flex flex-col gap-y-5 pt-14 px-5">
                {F.NAVLINKS.map((item, index) => {
                    return (
                        <Link 
                            className="flex gap-x-4 items-center p-2 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300"
                            key={index} 
                            to={item.link}
                        >
                            <span className="rounded bg-white p-1">{}</span>
                            {item.text}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
