import React from 'react'
import AboutCard from '../../components/AboutCard'
import SkillsCard from '../../components/SkillsCard'
import AchievementCard from '../../components/AchievementCard'
import Login from "../../assets/img/login.jpg"
import ProjectsCard from '../../components/ProjectsCard'
import ExperienceCard from '../../components/ExperienceCard'
import VolunteeringCard from '../../components/VolunteeringCard'


const Preview = ({ }) => {
  return (
    <div className='flex justify-evenly items-center bg-[#111F44] '>
      <header className='w-1/2 flex justify-center pb-[50px] flex-col '>
        <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="">Britanny Chiang</a>
        </h1>
        <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Senior Frontend Engineer</h2>
        <p class="mt-4 max-w-xs leading-normal">I build pixel-perfect, engaging, and accessible digital experiences.</p>
        <nav>
          <ul>
            <li>
              <a className='items-center flex py-3 active group ' href="#about">
                <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className='text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>About</span>
              </a>
            </li>,

            <li>
              <a className='items-center flex py-3 active group ' href="#skills">
                <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className='text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Skills</span>
              </a>
            </li>

            <li>
              <a className='items-center flex py-3 active group ' href="#achievement">
                <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className='text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Achievement</span>
              </a>
            </li>

            <li>
              <a className='items-center flex py-3 active group ' href="#projects">
                <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className='text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Projects</span>
              </a>
            </li>
            <li>
            <a className='items-center flex py-3 active group ' href="#experience">
                <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className='text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Experience</span>
              </a>
            </li>
            <li>
            <a className='items-center flex py-3 active group ' href="#volunteer">
                <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className='text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Volunteer</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className='flex flex-col gap-5 w-1/2  ' id='about'>
        <AboutCard
          description={" Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio."}
        />

        <div className='' id='skills'>
          <SkillsCard
            name={"html, CSS, JavaScript"}
            levelOfProficiency={"Intermediate"}
          />
        </div>


        <div className='' id='achievement'>
          <AchievementCard
            title={"Achievements"}
            award={"Best UI/UX Design"}
            description={"Awarded for exceptional user interface and user experience design skills. Describe the projects or features that led to winning the award, focusing on design principles, usability improvements, and visual aesthetics."}
            image={Login}
            date={"12-07-24"}
            nameOfInstitution={"Amalitech"}
          />
        </div>

        <div className='  ' id='projects'>
          <ProjectsCard
            name={"Halycon Theme"}
            description={"Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more."}
            contributors={"Ray Clark, Emerald Jay"}
            skills={'React, MongoDB,'}
            link={""}
            institution={"Amalitech"}
            startDate={'12/01/23 to'}
            endDate={'03/06/23'}
          />
        </div>
        <div id='experience'>
          <ExperienceCard
            title={"Senior Frontend Engineer, Accessibility.Klaviyo"}
            role={"Engineer"}
            responsibility={"Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product.Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility. "}
            location={"UK"}
            startDate={"4/03/23"}
            endDate={"08/05/23"}

          />
        </div>
        <div id='Volunteering' className='' >
          <VolunteeringCard 
          organization={"Red Cross"} 
          description={"The Red Cross is a humanitarian organization that provides emergency assistance, disaster relief, and education in the United States."}
          skills={"Web development, HTML, CSS, JavaScript, UX/UI design"}
          startDate={"July 1, 2023"}
          endDate={"September 30, 2023"}
          location={"Remote (virtual volunteering)"}
          role={" Volunteer Web Developer"}
          responsibility={" Collaborated with a team of developers and designers to enhance the organization's website. Developed new features, optimized code for performance, and ensured cross-browser compatibility and responsiveness."}
          projectName={"Website Enhancement Project"}
          />
        </div>

      </div>

    </div>
  )
}

export default Preview