import { ArrowUpRight } from "lucide-react"


const ExperienceCard = ({title, role, responsibility, location,Date,  skills, skills3, skills4}) => {
  return (
    <div  className=" text-white flex justify-center items-center  h-screen  shadow-2xl pl-24">

      <div className=" gap-6">

      <div>
        
      </div>

      <div className="flex flex-col w-96 gap-1">
      <h1 className="text-cyan-400 font-bold "> {title} </h1>
       <p className="text-cyan-400 font-semibold"> {role} </p>
       <h4>{Date}</h4>
       <p>{responsibility}</p>
       <p> {location} </p>
       <p> {skills} </p>
       <div className="flex text-[#50C8CD]  gap-5 pt-5 pr-4 ">
      <button className="border rounded-full text-white bg-[#183656] w-28 h-7 border-transparent outline-none">{skills}</button>
       <button className="border rounded-full text-white bg-[#183656] w-20 h-7 border-transparent outline-none">{skills3} </button>
       <button className="border rounded-full text-white bg-[#183656]  w-28 h-7 border-transparent outline-none"> {skills4} </button>
       </div>

       </div>
       
       
      </div>
      
    </div>
  )
}
export default ExperienceCard