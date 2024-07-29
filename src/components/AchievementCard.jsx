import { Link } from "react-router-dom"

const AchievementCard = ({ title, award, description, image, date, nameOfInstitution, name }) => {
  return (
    <div className="text-white flex justify-center items-center "> 
      <div className="flex flex-col gap-6">
        <div className="text-center mb-4"> 
          <h1 className="text-[20px] text-cyan-400 font-semibold text-center"> {title} </h1>
        </div>
        <div className="flex flex-col w-96 gap-1">
          <h2 className="text-cyan-400 font-bold text-[17px]">{award}</h2>
          <p>{description}</p>
          <h2>{nameOfInstitution}</h2>
        </div>
        <Link to="about" >
        <img className="h-20" src={image} alt="image" />
        </Link>
      </div>
    </div>
  )
}

export default AchievementCard
