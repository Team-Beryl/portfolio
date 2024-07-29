
const AboutCard = ({ title, description}) => {
  return (
    <div className=" h-screen  flex justify-center  w-[60] shadow-2xl  pb-24  ">

      <div className="flex flex-col justify-center items-center text-justify w-5/6 text-white gap-4 ">
      <p className="text-[20px] text-cyan-400 font-semibold  "> {title} </p>
      <p className=""> {description} </p>
      </div>
      

   </div> 
  )
}

export default AboutCard