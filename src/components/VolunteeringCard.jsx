

const VolunteeringCard = ({ organization, description, skills, skills1, skills2, startDate, endDate, location, role, responsibility, projectName }) => {
  return (
    <div className=" h-[80vh] text-white flex justify-center items-center  w-[60] shadow-2xl rounded-lg " >

        <div className="flex gap-6">
      <span className="flex ">
        {startDate}
        {endDate}
      </span>

      
      <div className="flex flex-col w-96 gap-2">
      <h1 className="text-cyan-400 font-semibold text-[20px]">{organization}</h1>
        <p>{description}</p>
       <p>{location}</p> 
        <h3>{role}</h3> 
        <h3>{responsibility}</h3>
        <h1>{projectName}</h1>
        <div className="flex justify-center items-center text-white pr-9 pt-2 gap-5 " >
        <button className=" flex flex-col border rounded-full bg-[#183656] w-16 h-7 pl-3 border-transparent outline-none pr-4">{skills}</button>
        <button className="border rounded-full bg-[#183656] w-28 h-7 border-transparent outline-none"> {skills1} </button>
        <button className="border rounded-full bg-[#183656] w-28 h-7 border-transparent outline-none">{skills2}</button>
        </div>

      </div>
      </div>


    </div>
  )
}

export default VolunteeringCard