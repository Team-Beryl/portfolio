




const AboutCard = ({description, description1, description2}) => {
  return (
    <div className=" h-screen  flex justify-center  w-[60] shadow-2xl rounded-lg   ">

      <div className="flex flex-col justify-center items-center text-justify w-5/6 text-[#8094BB] gap-4 ">
      <p> {description} </p>
      <p>{description1}</p>
      <p>{description2}</p>
      </div>
      

    </div>
  )
}

export default AboutCard