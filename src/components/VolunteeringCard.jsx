

const VolunteeringCard = ({ organization, description, skills, startDate, endDate, location, role, responsibility, projectName }) => {
  return (
    <div  className="bg-white h-80vh] w- shadow-2xl rounded-lg" >
      {organization}
      {description}
      {skills}
      {startDate}
      {endDate}
      {location}
      {role}
      {responsibility}
      {projectName}
    </div>
  )
}

export default VolunteeringCard