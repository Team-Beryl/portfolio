

const ExperienceCard = ({title, role, responsibility, location,startDate, endDate, skills}) => {
  return (
    <div  className="bg-white h-[40vh] w-[30vw] shadow-2xl rounded-lg">
       <h1> {title} </h1> 
       <p> {role} </p>
       <p>{responsibility}</p>
       <p> {location} </p>
       <h4>{startDate}</h4>
       <h4> {endDate} </h4>
       <p> {skills} </p>
    </div>
  )
}

export default ExperienceCard