

const VolunteeringCard = ({title, organization, description, skills, startDate, endDate, location, role, responsibility, projectName }) => {
  return (
    <div className="  text-white flex justify-center items-center  " >

      <div className="flex gap-6">
        <div className="flex flex-col w-96 gap-2">
          <h1 className="text-[20px] text-cyan-400 font-semibold text-center mb-7">{title}</h1>
          <h1 className="text-cyan-400 font-semibold text-[20px]">{organization}</h1>
          <p>{description}</p>
          <p>{location}</p>
          <p>{role}</p>
          <p>{projectName}</p>
           <p>{startDate}</p> 
           <p>{endDate}</p> 
          <p>{responsibility}</p>
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

export default VolunteeringCard