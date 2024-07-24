




const AboutCard = ({description, title}) => {
  return (
    <div className=" h-screen  flex justify-center  w-[60] shadow-2xl pl-24  ">

      <div className="flex flex-col justify-center items-center text-justify w-5/6 text-white gap-4 ">
      <h1 className="text-[20px] text-cyan-400 font-semibold "> {title} </h1>
      <p className=""> {description} </p>
      
      </div>
      

    </div>
  )
}

export default AboutCard