const SkillsCard = ({  name, levelOfProficiency,}) => {
  return (
   
      
        <div className="flex flex-col gap-3  justify-center items-center pt-7">
          <h1 className="text-cyan-400 text-2xl text-center">{name}</h1>
          <p className="border rounded-full bg-[#183656] text-white w-28 h-7 border-transparent outline-none text-center">
            {levelOfProficiency}
          </p>
        </div>

        
      
  );
};

export default SkillsCard;
