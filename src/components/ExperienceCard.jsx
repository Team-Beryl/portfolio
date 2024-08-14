import { ArrowUpRight } from "lucide-react"


const ExperienceCard = ({title, role, responsibility, location, startDate, endDate,  skills}) => {
  return (
    <div  className=" text-white flex justify-center gap-7 items-center">

      <div className=" gap-6">

      <div className="flex flex-col w-96 gap-1">
       
      <h2 className="text-cyan-400 font-bold text-[17px] "> {title} </h2>
       <p className="text-cyan-400 font-semibold"> {role} </p>
       <h4>{startDate}</h4>
       <h4> {endDate} </h4>
       <p>{responsibility}</p>
       <p> {location} </p>
       <p> {skills} </p>

       <div className=" pt-5 pr-6 flex flex-wrap gap-3">
            {skills && skills.split(',').map((skill, index) => (
              <span key={index} className="skill-badge bg-[#183656] text-white rounded-full px-3 py-1">{skill}</span>
            ))}
          </div>

       </div>
       
       
      </div>
      
    </div>
  )
}
export default ExperienceCard