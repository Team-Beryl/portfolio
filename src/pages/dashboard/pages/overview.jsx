import React, { useEffect, useState } from 'react'
import { apiGetSkills } from '../../../services/skills'
import { apiGetAcheivements } from '../../../services/acheivements'
import { apiGetProjects } from '../../../services/projects'
import { apiGetEducation } from '../../../services/education'
import { apiGetVolunteering } from '../../../services/volunteering'
import { apiGetExperiences } from '../../../services/experiences'
import F from '../../../constants/constants'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import CountUp from "react-countup";
import PagesLayout from '../layout/pageslayout'
import Loader from '../../../components/loader'


const OverView = () => {
  const navigate = useNavigate()
  const [data, setdata] = useState({

    skills: 0,
    projects: 0,
    acheivements: 0,
    volunteering: 0,
    education: 0,
    experiences: 0,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [profile] = useOutletContext();

  const getPreviewLink = () => {
    if (!profile) return "/prev/elsie";

    return `/prev/${profile.userName}`;
  };
  // anytime you async, you do trycatch
  const getData = async () => {
    setIsLoading(true);
    try {
      const [
        totalSkills,
        totalAcheivements,
        totalProjects,
        totalEducation, totalVolunteering, totalExperiences,
      ] = await Promise.all([
        apiGetSkills(),
        apiGetAcheivements(),
        apiGetProjects(),
        apiGetEducation(),
        apiGetVolunteering(),
        apiGetExperiences()
      ]);

      console.log("Total skills: ", totalSkills.data.Skills.length);



      const newData = {
        skills: totalSkills.data.Skills.length ?? 0,
        projects: totalProjects.data.projects.length ?? 0,
        acheivements: totalAcheivements.data.Achievements.length ?? 0,
        volunteering: totalVolunteering.data.Volunteerings.length ?? 0,
        education: totalEducation.data.education.length ?? 0,
        experiences: totalExperiences.data.Experiences.length ?? 0,
      };

      setdata(newData);

    } catch (error) {
      console.log(error)

    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {
        isLoading ? (<Loader/>) : (
          <PagesLayout
            headerText="Overview"
            buttonDashboard="Preview Page"
            onClick={() => navigate("/prev")}
          >
            <div className="bg-gray-100 min-h-screen p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-14">
                
                {F.OVERVIEW.map(({ icon, text, id }, index) => (
                  <div
                    key={index}
                    className="h-52 shadow-md rounded-lg flex flex-col gap-2 p-5 bg-white"
                  >

                    <div className="flex flex-col justify-between flex-grow">

                      <span className="text-2xl text-blue-500">{icon}</span>
                      <span className="text-3xl font-bold text-gray-800">
                        {text}
                      </span>
                    </div>

                    <CountUp
                      className='text-2xl font-semibold'
                      start={0}
                      end={data[id]}
                    />
                  </div>
                ))}
              </div>
           </div>
         </PagesLayout>
        )}
    </>

  );
};

export default OverView