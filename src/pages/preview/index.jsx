import React, { useState } from 'react';
import AboutCard from '../../components/AboutCard';
import SkillsCard from '../../components/SkillsCard';
import AchievementCard from '../../components/AchievementCard';
import Login from '../../assets/img/login.jpg';
import ProjectsCard from '../../components/ProjectsCard';
import ExperienceCard from '../../components/ExperienceCard';
import VolunteeringCard from '../../components/VolunteeringCard';

const Preview = () => {
  const [visibleCard, setVisibleCard] = useState('about'); // Default to 'about' card

  const handleLinkClick = (cardId) => {
    setVisibleCard(cardId);
  };

  return (
    <div className='flex justify-evenly items-center space-x-[400px] bg-[#111F44] h-screen'>
      <header className='w-1/2 flex justify-center flex-col fixed top-12 left-16'>
        <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
          <a href=''>Britanny Chiang</a>
        </h1>
        <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>Senior Frontend Engineer</h2>
        <p className='mt-4 max-w-xs leading-normal'>
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
        <nav>
          <ul>
            <li>
              <a
                className='flex items-center py-3 group'
                href='#about'
                onClick={() => handleLinkClick('about')}
              >
                <span className='mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                <span className='text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>About</span>
              </a>
            </li>
            <li>
              <a
                className='flex items-center py-3 group'
                href='#skills'
                onClick={() => handleLinkClick('skills')}
              >
                <span className='mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                <span className='text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Skills</span>
              </a>
            </li>
            <li>
              <a
                className='items-center flex py-3 active group'
                href='#achievement'
                onClick={() => handleLinkClick('achievement')}
              >
                <span className='mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                <span className='text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Achievement</span>
              </a>
            </li>
            <li>
              <a
                className='items-center flex py-3 active group'
                href='#projects'
                onClick={() => handleLinkClick('projects')}
              >
                <span className='mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                <span className='text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Projects</span>
              </a>
            </li>
            <li>
              <a
                className='items-center flex py-3 active group'
                href='#experience'
                onClick={() => handleLinkClick('experience')}
              >
                <span className='mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                <span className='text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Experiences</span>
              </a>
            </li>
            <li>
              <a
                className='items-center flex py-3 active group'
                href='#volunteering'
                onClick={() => handleLinkClick('volunteering')}
              >
                <span className='mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                <span className='text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Volunteer</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className='flex flex-col w-1/2 overflow-x-auto gap-5'>
        {visibleCard === 'about' && (
          <div id='about'>
            <AboutCard
              description={"Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I've had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio."}
              description1={"My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything you need to know to build a web app with the Spotify API."}
              description2={" When I'm not at the computer, I'm usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds Korokseeds."}
            />
          </div>
        )}
        {visibleCard === 'skills' && (
          <div id='skills'>
            <SkillsCard name={"Html"} levelOfProficiency={"Intermediate"} />
          </div>
        )}
        {visibleCard === 'achievement' && (
          <div id='achievement'>
            <AchievementCard
              title={"Achievements"}
              award={"Best UI/UX Design"}
              description={"Awarded for exceptional user interface and user experience design skills. Describe the projects or features that led to winning the award, focusing on design principles, usability improvements, and visual aesthetics."}
              image={Login}
              date={""}
              nameOfInstitution={"Amalitech"}
            />
          </div>
        )}
        {visibleCard === 'projects' && (
          <div id='projects'>
            <ProjectsCard
              name={"Halycon Theme"}
              description={"Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more"}
              contributors={"Ray Clark, Emerald Jay"}
              link={""}
              startDate={"January-"}
              endDate={"March 2023"}
              institution={"Amalitech"}
              h2={"React"}
              h4={"MongoDB"}
            />
          </div>
        )}
        {visibleCard === 'experience' && (
          <div id='experience'>
            <ExperienceCard
              title={"Senior Frontend Engineer, Accessibility.Klaviyo"}
              role={"Engineer"}
              responsibility={"Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."}
              location={"California, USA"}
              Date={"July-September 2023"}
              skills={"JavaScript"}
              skills3={"React"}
              skills4={"TypeScript"}
            />
          </div>
        )}
        {visibleCard === 'volunteering' && (
          <div id='volunteering'>
            <VolunteeringCard
              organization={"Red Cross"}
              description={"The Red Cross is a humanitarian organization that provides emergency assistance, disaster relief, and education in the United States."}
              skills={" HTML "}
              skills1={"JavaScript"}
              skills2={"UX/UI design"}
              startDate={"July-"}
              endDate={"September 2023"}
              location={"Remote (virtual volunteering)"}
              role={" Volunteer Web Developer"}
              responsibility={" Collaborated with a team of developers and designers to enhance the organization's website. Developed new features, optimized code for performance, and ensured cross-browser compatibility and responsiveness."}
              projectName={"Website Enhancement Project"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Preview;
