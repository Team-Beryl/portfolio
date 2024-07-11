

const SkillsCard = ({name, levelOfProficiency}) => {
  return (
    <div className="bg-white h-[20vh] w-[30vw] shadow-2xl rounded-lg">
        <h1>{name}</h1>
        <p> {levelOfProficiency} </p>
    </div>
  )
}

export default SkillsCard