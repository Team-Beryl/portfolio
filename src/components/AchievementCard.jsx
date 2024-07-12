


const AchievementCard = ({ title , award, description, image, date, nameOfInstitution, name}) => {
  return (
    <div className="text-[#8094BB] flex justify-center items-center flex-col h-screen w-[60]shadow-2xl rounded-2xl ">
        <div className="flex flex-col hover:bg-transparent">
        <h2>{award}</h2>
        <p> {description} </p>
        <img className="w-16" src={image} alt={name} />
        <h3> {date} </h3>
        <h2> {nameOfInstitution} </h2>
        </div>
    </div>
  )
}

export default AchievementCard