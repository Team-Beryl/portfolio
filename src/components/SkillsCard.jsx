

const SkillsCard = ({name, name1,name2, levelOfProficiency, levelOfProficiency1, levelOfProficiency2}) => {
  return (
    <div className="flex   justify-center items-center h-screen w-[60] shadow-2xl ">
      
        <div className="flex flex-col gap-3">
        <h1 className="text-cyan-400 text-[20px] text-center">{name}</h1>
        <p className="border rounded-full bg-[#183656] text-white w-28 h-7 border-transparent outline-none text-center"> {levelOfProficiency} </p>
        </div>

        <div className="flex flex-col gap-3 pl-10">
        <h1 className="text-cyan-400 text-[20px] text-center">{name1}</h1>
        <p className="border rounded-full bg-[#183656] text-white w-28 h-7 border-transparent outline-none text-center">{levelOfProficiency1} </p>
        </div>

        <div className="flex flex-col gap-3 pl-10">
        <h1 className="text-cyan-400 text-[20px] text-center">{name2}</h1>
        <p className="border rounded-full bg-[#183656] text-white w-28 h-7 border-transparent outline-none text-center">{levelOfProficiency2} </p>
        </div>
       
       
    </div>
  )
}

export default SkillsCard