import React from 'react'
import AboutCard from '../../components/AboutCard'
import SkillsCard from '../../components/SkillsCard'
import AchievementCard from '../../components/AchievementCard'
import Login from "../../assets/img/login.jpg"


const Preview = ({ }) => {
  return (
    <div className='flex justify-evenly items-center bg-[#111F44] place-content-center '>
      <header>
        <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="">Britanny Chiang</a>
        </h1>
        <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Senior Frontend Engineer</h2>
        <p class="mt-4 max-w-xs leading-normal">I build pixel-perfect, engaging, and accessible digital experiences.</p>
      <nav>
    <ul>
      <li>
        <a className='items-center flex py-3 active group ' href="#achievement">
        <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
          <span className='text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Achievement</span>
        </a>
      </li>
      <li></li>,
      <li></li>
    </ul>

      </nav>
      </header>

      <div className='flex flex-col gap-5'>
        <AboutCard
        description={ " Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio."} 
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

      </div>

    </div>
  )
}

export default Preview