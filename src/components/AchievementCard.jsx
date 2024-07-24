const AchievementCard = ({ title, award, description, image, date, nameOfInstitution, name }) => {
  return (
    <div className="text-white flex justify-center items-center h-screen w-[60] shadow-2xl pl-24"> 
      <div className="gap-6">
        <div className="text-center mb-9"> 
          <h1 className="text-[20px] text-cyan-400 font-semibold"> {title} </h1>
        </div>
        <a href="about">
          <img className="h-20" src={image} alt={name} />
        </a> 
        <div className="flex flex-col w-96 gap-1">
          <h2 className="text-cyan-400 font-bold text-[17px]">{award}</h2>
          <p>{description}</p>
          <h2>{nameOfInstitution}</h2>
        </div>
      </div>
    </div>
  )
}

export default AchievementCard
