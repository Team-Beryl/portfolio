const SkillsCard = ({ image, image1, image3, image2, name, name1, name2, levelOfProficiency, levelOfProficiency1, levelOfProficiency2 }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full shadow-2xl">

      <span className="mb-8 flex gap-3 -mt-4">
       <img className="w-20" src={image} alt="img" />
       <img className="w-20"  src={image1} alt="" />
       <img className="w-20"  src={image2} alt="" />
       
      </span>

      <div className="flex justify-center items-start space-x-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-cyan-400 text-[20px] text-center">{name}</h1>
          <p className="border rounded-full bg-[#183656] text-white w-28 h-7 border-transparent outline-none text-center">
            {levelOfProficiency}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-cyan-400 text-[20px] text-center">{name1}</h1>
          <p className="border rounded-full bg-[#183656] text-white w-28 h-7 border-transparent outline-none text-center">
            {levelOfProficiency1}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-cyan-400 text-[20px] text-center">{name2}</h1>
          <p className="border rounded-full bg-[#183656] text-white w-28 h-7 border-transparent outline-none text-center">
            {levelOfProficiency2}
          </p>
        </div>
      </div>

    </div>
  );
};

export default SkillsCard;
