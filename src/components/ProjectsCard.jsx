

const ProjectsCard = ({name, description,contributors,skills,link, institution, startDate, endDate}) => {

  return (
    <div className="bg-white h-[40vh] w-[30vw] shadow-2xl rounded-lg">
      <h1> {name}  </h1>
       <p> {description} </p>
      <h2> {contributors} </h2>
       <p>{skills}</p> 
      <a href=""> {link} </a>
      <h1> {institution}  </h1>
       <h2> {startDate} </h2>
       <h2> {endDate}  </h2>
    </div>
  )
}

export default ProjectsCard