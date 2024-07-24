import React, { useState } from 'react';
import AboutCard from '../../components/AboutCard';
import SkillsCard from '../../components/SkillsCard';
import AchievementCard from '../../components/AchievementCard';
import ProjectsCard from '../../components/ProjectsCard';
import ExperienceCard from '../../components/ExperienceCard';
import VolunteeringCard from '../../components/VolunteeringCard';
import EducationCard from '../../components/EducationCard';
import { emely, github, internet, java, linkedin, node, react, ts, twitter } from '../../assets';
import UserProfileCard from '../../components/UserProfileCard';

const Preview = () => {
  const [visibleCard, setVisibleCard] = useState('about'); // Default to 'about' card

  const handleLinkClick = (cardId) => {
    setVisibleCard(cardId);
  };

  return (
    <div className='flex justify-evenly items-center space-x-[400px] bg-gradient-to-r from-purple-500 to-pink-500 h-screen'>
      <header className='w-1/2 flex justify-center h-screen flex-col fixed top-8 left-48'>

        <div className=''>
          <UserProfileCard
            img={emely}
            name={"Britanny Chiang"}
            location={"California"}
            contact={"britchiang23@gmail.com"}
            languages={"English, Spanish"}
            linkedin={"https://www.linkedin.com/in/elsiesebiyam/"}
            twitter={"https://x.com/eve51237?s=21"}
            github={"https://github.com"}
          />  
        </div>

        <nav className='pt-6'>
          <ul>
            <li>
              <a
                className='flex items-center py-3 group'
                href='#about'
                onClick={() => handleLinkClick('about')}
              >
                <span className='mr-4 h-px w-8 bg-slate-200 transition-all group-hover:w-16 group-hover:bg-slate-600 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>

                <span className='text-xs font-bold uppercase tracking-widest text-white group-hover:text-white group-focus-visible:text-white'>About</span>
              </a>
            </li>
            <li>
              <a
                className='flex items-center py-3 group'
                href='#skills'
                onClick={() => handleLinkClick('skills')}
              >
                <span className='mr-4 h-px w-8 bg-slate-200 transition-all group-hover:w-16 group-hover:bg-slate-600 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>

                <span className='text-xs font-bold uppercase tracking-widest  text-white group-hover:text-white group-focus-visible:text-white'>Skills</span>
              </a>
            </li>
            <li>
              <a
                className='items-center flex py-3 active group'
                href='#achievement'
                onClick={() => handleLinkClick('achievement')}
              >
                <span className='mr-4 h-px w-8 bg-slate-200 transition-all group-hover:w-16 group-hover:bg-slate-600 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                <span className='text-xs font-bold uppercase tracking-widest text-white group-hover:text-white group-focus-visible:text-white'>Achievement</span>
              </a>
            </li>
            <li>
              <a
                className='items-center flex py-3 active group'
                href='#projects'
                onClick={() => handleLinkClick('projects')}
              >
                <span className='mr-4 h-px w-8 bg-slate-200 transition-all group-hover:w-16 group-hover:bg-slate-600 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                <span className='text-xs font-bold uppercase tracking-widest text-white group-hover:text-white group-focus-visible:text-white'>Projects</span>
              </a>
            </li>
            <li>
              <a
                className='items-center flex py-3 active group'
                href='#experience'
                onClick={() => handleLinkClick('experience')}
              >
                <span className='mr-4 h-px w-8 bg-slate-200 transition-all group-hover:w-16 group-hover:bg-slate-600 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                <span className='text-xs font-bold uppercase tracking-widest  text-white group-hover:text-white group-focus-visible:text-white'>Experiences</span>
              </a>
            </li>
            <li>
              <a
                className='items-center flex py-3 active group'
                href='#education'
                onClick={() => handleLinkClick('education')}
              >
                <span className='mr-4 h-px w-8 bg-slate-200 transition-all group-hover:w-16 group-hover:bg-slate-600 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                <span className='text-xs font-bold uppercase tracking-widest  text-white group-hover:text-white group-focus-visible:text-white'>Education</span>
              </a>
            </li>
            <li>
              <a
                className='items-center flex py-3 active group'
                href='#volunteering'
                onClick={() => handleLinkClick('volunteering')}
              >
                <span className='mr-4 h-px w-8 bg-slate-200 transition-all group-hover:w-16 group-hover:bg-slate-600 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                <span className='text-xs font-bold uppercase tracking-widest  text-white group-hover:text-white group-focus-visible:text-white'>Volunteering</span>
              </a>
            </li>
          </ul>
        </nav>

      </header>

      
      <div className='flex flex-col w-1/2 overflow-x-auto gap-5 '>
        {visibleCard === 'about' && (
          <div id='about'>
            <AboutCard
              title={"About"}
              description={"Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I've had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio."}


            />
          </div>
        )}
        {visibleCard === 'skills' && (
          <div id='skills'>
            <SkillsCard
              image={java}
              image2={node}
              
              image1={react}
              name={"JavaScript"}
              levelOfProficiency={"Advanced"}
              name1={"React"}
              levelOfProficiency1={"Intermediate"}
              name2={"Node.js"}
              levelOfProficiency2={"Intermediate"}
            />
          </div>
        )}
        {visibleCard === 'achievement' && (
          <div id='achievement'>
            <AchievementCard
              title={"Achievements"}
              award={"Best UI/UX Design"}
              description={"Awarded for exceptional user interface and user experience design skills. Describe the projects or features that led to winning the award, focusing on design principles, usability improvements, and visual aesthetics."}
              image={internet}
              nameOfInstitution={"Amalitech"}
            />
          </div>
        )}
        {visibleCard === 'projects' && (
          <div id='projects' className='flex flex-col gap-10 overflow-auto'>
            <ProjectsCard
              name={"Halycon Theme"}
              description={"Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more"}
              contributors={"Ray Clark, Emerald Jay"}
              link={"https://halcyon-theme.netlify.app/"}
              startDate={"January-"}
              endDate={"March 2023"}
              institution={"Amalitech"}
              h2={"React"}
              h4={"MongoDB"}
            />
            <ProjectsCard
              name={"Halycon Theme"}
              description={"Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more"}
              contributors={"Ray Clark, Emerald Jay"}
              link={"https://halcyon-theme.netlify.app/"}
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

              header={"Experiences"}
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
        {visibleCard === 'education' && (
          <div id='education'>
            <EducationCard
            title={"Education"}
              schoolName={"University of Leicester"}
              program={"Bachelor of Science in Computer Science"}
              qualification={"BSc"}
              grade={"First Class Honours"}
              location={"Leicester, UK"}
              startDate={"September 2018"}
              endDate={"- June 2022"}
            />
          </div>
        )}
        {visibleCard === 'volunteering' && (
          <div id='volunteering'>
            <VolunteeringCard
            title={"Volunteering"}
              organization={"Red Cross"}
              description={"The Red Cross is a humanitarian organization that provides emergency assistance, disaster relief, and education in the United States."}
              skills={"HTML"}
              skills1={"JavaScript"}
              skills2={"UX/UI design"}
              projectName={"Website Enhancement Project"}
              startDate={"July-"}
              endDate={"September 2023"}
              location={"Remote (virtual volunteering)"}
              role={"Volunteer Web Developer"}
              responsibility={"Collaborated with a team of developers and designers to enhance the organization's website. Developed new features, optimized code for performance, and ensured cross-browser compatibility and responsiveness."}

            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Preview;
