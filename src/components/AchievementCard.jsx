


const AchievementCard = ({ title , award, description, image, date, nameOfInstitution, name}) => {
  return (
    <div className="bg-white h-[47vh] w-[30vw] shadow-2xl rounded-lg ">
        <h1> {title} </h1>
        <h2>{award}</h2>
        <p> {description} </p>
        <img className="w-16" src={image} alt={name} />
        <h3> {date} </h3>
        <h2> {nameOfInstitution} </h2>
    </div>
  )
}

export default AchievementCard