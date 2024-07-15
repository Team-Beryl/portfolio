

const ProjectsCard = ({ name, description, contributors, skills,startDate,endDate, link, institution, Date, h2, h4}) => {

  return (
    <div className=" text-white flex justify-center items-center h-screen w-[60] shadow-2xl rounded-lg">

      <div className="flex gap-6">

        <span className="flex">
          <h2> {startDate} </h2>
          <h2> {endDate} </h2>
        </span>

        <div className="flex flex-col w-96 gap-1">
          <h1 className="text-cyan-400 text-[20px] font-bold"> {name}  </h1>
          <p> {description} </p>
          <h2> {contributors} </h2>
          <a href=""> {link} </a>
          <h1> {institution}  </h1>
          <div className="flex text-[#50C8CD] pt-5 pr-6  gap-5">
            <button className="border rounded-full text-white bg-[#183656] w-24 h-7 border-transparent outline-none">{h2}</button>
            <button className="border rounded-full text-white bg-[#183656] w-24 h-7 border-transparent outline-none">{h4} </button>
          </div>
        </div>



      </div>
    </div>

  )
}

export default ProjectsCard