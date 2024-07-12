

const ProjectsCard = ({ name, description, contributors, skills,startDate,endDate, link, institution, Date, h2, h4}) => {

  return (
    <div className=" text-[#8094BB] flex justify-center items-center h-screen w-[60] shadow-2xl rounded-lg">

      <div className="flex gap-6">

        <span className="flex">
          <h2> {startDate} </h2>
          <h2> {endDate} </h2>
        </span>

        <div className="flex flex-col w-96 gap-1">
          <h1 className="text-cyan-400 font-semibold"> {name}  </h1>
          <p> {description} </p>
          <h2> {contributors} </h2>
          <a href=""> {link} </a>
          <h1> {institution}  </h1>
          <div className="flex text-[#50C8CD]  gap-5 bg-">
            <button className="border rounded-full bg-[#183656] w-28 h-7 border-transparent outline-none">{h2}</button>
            <button className="border rounded-full bg-[#183656] w-20 h-7 border-transparent outline-none">{h4} </button>
          </div>
        </div>



      </div>
    </div>

  )
}

export default ProjectsCard