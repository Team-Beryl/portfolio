

const EducationCard = ({ schoolName, program, qualification, grade, location, startDate, endDate }) => {
    return (
        <div className="pl-28 text-white pt-16 flex  ">
            
           
                <div className="flex flex-col pr-16  gap-1">
                   
                    <h1 className="text-cyan-400 text-[20px] font-bold" > {schoolName} </h1>
                    <h2> {program} </h2>
                    <span className="flex flex-col">
                        <h2> {startDate} </h2>
                        <h2> {endDate} </h2>
                    </span>
                    <p> {qualification} </p>
                    <h3> {grade} </h3>
                    <p> {location} </p>
                </div>
            </div>
       
    )
}

export default EducationCard