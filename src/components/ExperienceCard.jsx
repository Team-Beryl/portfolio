

const ExperienceCard = ({title, role, responsibility, location,Date,  skills, skills3, skills4}) => {
  return (
    <div  className=" text-white flex justify-center items-center  h-screen  shadow-2xl rounded-2xl">

      <div className="flex gap-6">

      <div>
        <h4>{Date}</h4>
      </div>

      <div className="flex flex-col w-96 gap-1">
      <h1 className="text-cyan-400 font-bold text-[20px]"> {title} </h1> 
       <p className="text-cyan-400 font-semibold"> {role} </p>
       <p>{responsibility}</p>
       <p> {location} </p>
       <p> {skills} </p>
       <div className="flex text-[#50C8CD]  gap-5 pt-5 pr-4 ">
      <button className="border rounded-full text-white bg-[#183656] w-28 h-7 border-transparent outline-none">{skills}</button>
       <button className="border rounded-full text-white bg-[#183656] w-20 h-7 border-transparent outline-none">{skills3} </button>
       <button className="border rounded-full text-white bg-[#183656]  w-28 h-7 border-transparent outline-none"> {skills4} </button>
       </div>

       </div>
       
       
      </div>
      
    </div>
  )
}
export default ExperienceCard