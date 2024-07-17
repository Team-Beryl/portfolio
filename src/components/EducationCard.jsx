

const EducationCard = ({ schoolName, program, qualification, grade, location, startDate, endDate }) => {
    return (
        <div className=" text-white flex justify-center items-center h-screen w-[60] shadow-2xl pl-24">
            <div className="flex gap-6">


                <div className="flex flex-col w-96 gap-1">
                    <h1 className="text-cyan-400 text-[20px] font-bold" > {schoolName} </h1>
                    <h2> {program} </h2>
                    <span className="flex">
                        <h2> {startDate} </h2>
                        <h2> {endDate} </h2>
                    </span>
                    <p> {qualification} </p>
                    <h3> {grade} </h3>
                    <p> {location} </p>
                </div>
            </div>
        </div>
    )
}

export default EducationCard