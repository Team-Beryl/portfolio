import { ArrowUpRight } from "lucide-react";

const ProjectsCard = ({ name, description, contributors, startDate, endDate, institution, skills, title }) => {
  return (
    <div className=" text-white p-6 ">
      <div className="flex flex-col justify-center gap-3">
        
        <div className="flex items-center mb-4">
         
          <span className="text-[20px] text-cyan-400 font-semibold">{title} </span>
        </div>



        <div className="flex flex-col gap-2">
          <a href="#" className="hover:underline">
            <h1 className="text-cyan-400 text-[20px] font-bold">{name}</h1>
          </a>
          <div className="flex flex-col gap-1 text-sm">
            <p>{startDate}</p>
            <p>{endDate}</p>
          </div>
          <p>{description}</p>
          <p>{contributors}</p>
          <p>{institution}</p>

          <div className="pt-5 flex flex-wrap gap-3">
            {skills && skills.split(',').map((skill, index) => (
              <span key={index} className="bg-[#183656] text-white rounded-full px-3 py-1">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>



  );
}

export default ProjectsCard;
