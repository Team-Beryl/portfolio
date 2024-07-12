

const SkillsCard = ({name, levelOfProficiency}) => {
  return (
    <div className="flex   justify-center items-center h-screen w-[60] shadow-2xl rounded-lg">
        <div className="flex flex-col text-[#8094BB]">
        <h1>{name}</h1>
        <p> {levelOfProficiency} </p>
        </div>
       
    </div>
  )
}

export default SkillsCard