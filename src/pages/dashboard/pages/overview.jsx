import React, { useEffect, useState } from 'react'
import { apiGetSkills } from '../../../services/skills'
import { apiGetAcheivements } from '../../../services/acheivements'
import { apiGetProjects } from '../../../services/projects'
import { apiGetEducation } from '../../../services/education'
import { apiGetVolunteering } from '../../../services/volunteering'
import { apiGetExperiences } from '../../../services/experiences'

const OverView = () => {

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
        apiGetSkills,
        apiGetAcheivements,
        apiGetProjects,
        apiGetEducation,
        apiGetVolunteering,
        apiGetExperiences
      ])

      useEffect(() => {
        // getData()
      }, [])

      const newData = {
        skills: totalSkills.length,
        projects: totalProjects.length,
        acheivements: totalAcheivements.length,
        volunteering: totalVolunteering.length,
        education: totalEducation.length,
        experiences: totalExperiences.length,
      }

      setdata(newData);
    
    } catch (error) {
      console.log(error)
    
    } finally{
      setIsLoading(false)
    }
  }
  return (
    <div>OverView</div>
  )
}

export default OverView