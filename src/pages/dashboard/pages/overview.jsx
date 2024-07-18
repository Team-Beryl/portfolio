import React, { useEffect, useState } from 'react'
import { apiGetSkills } from '../../../services/skills'
import { apiGetAcheivements } from '../../../services/acheivements'
import { apiGetProjects } from '../../../services/projects'
import { apiGetEducation } from '../../../services/education'
import { apiGetVolunteering } from '../../../services/volunteering'
import { apiGetExperiences } from '../../../services/experiences'
import PagesLayout from '../layout/pageslayout'
import F from '../../../constants/constants'
import { useNavigate } from 'react-router-dom'
import PageLoader from '../../../components/PageLoader'

const OverView = () => {
  const navigate = useNavigate()
  const [data, setdata] = useState({

    skills: 0,
    projects: 0,
    acheivements: 0,
    volunteering: 0,
    education: 0,
    experiences: 0
  })

  const [isLoading, setIsLoading] = useState(false)
  // anytime you async, you do trycatch
  const getData = async () => {
    setIsLoading(true)
    try {
      const [totalSkills, totalAcheivements, totalProjects, totalEducation, totalVolunteering, totalExperiences] = await Promise.all([

        apiGetSkills(),
        apiGetAcheivements(),
        apiGetProjects(),
        apiGetEducation(),
        apiGetVolunteering(),
        apiGetExperiences()
      ])

      console.log("Total skills:", totalSkills);



      const newData = {
        skills: totalSkills.length,
        projects: totalProjects.length,
        acheivements: totalAcheivements.length,
        volunteering: totalVolunteering.length,
        education: totalEducation.length,
        experiences: totalExperiences.length,
      }

      console.log(newData);

      setdata(newData);

    } catch (error) {
      console.log(error)

    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    getData()
  }, []);

  return (

    <>
      {
        isLoading ? <PageLoader /> :
        <div>
        <PagesLayout
          headerText="Overview"
          buttonDashboard="Back to Dashboard"
          onClick={() => navigate("/dashboard")}
        >
          <div className="bg-gray-100 min-h-screen p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-14">
              {F.OVERVIEW.map((overview, index) => (
                <div
                  key={index}
                  className="h-52 shadow-md rounded-lg flex flex-col gap-2 p-5 bg-white"
                >
                  <span className="text-2xl text-blue-500">{overview.icon}</span>
                  <div className="flex flex-col justify-between flex-grow">
                    <span className="font-semibold text-lg">{overview.title}</span>
                    <span className="text-3xl font-bold text-gray-800">
                      {overview.total}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PagesLayout>
      </div>
      
      }
    </>

  )
}

export default OverView