


const AchievementCard = ({ title, award, description, image, date, nameOfInstitution, name }) => {
  return (
    <div className="text-white flex justify-center items-center  h-screen w-[60]shadow-2xl rounded-2xl ">

      <div className="flex gap-6">

      <div> <img className="w-28" src={image} alt={name} /></div>

      <div className="flex flex-col w-96 gap-1">
        <h2 className="text-cyan-400 font-bold text-[20px]">{award}</h2>
      <p> {description} </p>
      <h2> {nameOfInstitution} </h2>
      </div>
      
      </div>


    </div>


  )
}

export default AchievementCard