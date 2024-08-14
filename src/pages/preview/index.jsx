import React, { useEffect, useState } from 'react';
import AboutCard from '../../components/AboutCard';
import SkillsCard from '../../components/SkillsCard';
import AchievementCard from '../../components/AchievementCard';
import ProjectsCard from '../../components/ProjectsCard';
import ExperienceCard from '../../components/ExperienceCard';
import VolunteeringCard from '../../components/VolunteeringCard';
import EducationCard from '../../components/EducationCard';
import { c, css, django,  html,  javascript,  pf, python,  } from '../../assets';
import UserProfileCard from '../../components/UserProfileCard';
import { apiGetUserDetails } from '../../services/preview';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



const Preview = () => {
  const [visibleCard, setVisibleCard] = useState('about'); // Default to 'about' card
  const [User, setUser] = useState({});
  const [loading, setLoading] = useState(true);


  const params = useParams();
  console.log("~ Preview ~params", params);

  useEffect(() => {
    const UserDetails = async () => {
      try {
        setLoading(true);
        const userData = await apiGetUserDetails(params.username);
        setUser(userData.user);
        console.log(User)
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    UserDetails();
  }, []);

  if (loading) {
    return <div>Loading.....</div>;
  }



  const handleLinkClick = (cardId) => {
    setVisibleCard(cardId);
  };

  return (
    <div className="flex bg-indigo-950 h-screen">
      <header className="w-2/5 flex flex-col justify-center items-center pl-24 h-screen fixed   bg-indigo-950">
       
          <UserProfileCard
            img={User.userProfile?.profilePicture ? `https://savefiles.org/${User.userProfile.profilePicture}?shareable_link=302` : pf}
            name={`${User.firstName} ${User.otherNames} ${User.lastName} `}
            location={User.userProfile?.location ? User.userProfile?.location : ''}
            contact={`${User.email }`}
            languages={User.userProfile?.languages?.map((language) => (
              language
            ))}
            linkedin={User.userProfile?.linkedInLink ? User.userProfile?.linkedInLink : ''}
            twitter={User.userProfile?.twitterLink ? User.userProfile?.twitterLink : ''}
            github={User.userProfile?.gitHubLink ? User.userProfile?.gitHubLink : ''}
          />
      
        <nav className="pt-10 pr-16">
          <ul>
            <li>
              <Link to="#about" onClick={() => handleLinkClick('about')} className="flex items-center py-3 group">
                <span className="mr-4 h-px w-8 bg-slate-200 transition-all group-hover:w-16 group-hover:bg-slate-600 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-white group-focus-visible:text-white">About</span>
              </Link>
            </li>
            <li>
              <Link to="#skills" onClick={() => handleLinkClick('skills')} className="flex items-center py-3 group">
                <span className="mr-4 h-px w-8 bg-slate-200 transition-all group-hover:w-16 group-hover:bg-slate-600 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-white group-focus-visible:text-white">Skills</span>
              </Link>
            </li>
            <li>
              <Link to="#achievement" onClick={() => handleLinkClick('achievement')} className="flex items-center py-3 group">
                <span className="mr-4 h-px w-8 bg-slate-200 transition-all group-hover:w-16 group-hover:bg-slate-600 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-white group-focus-visible:text-white">Achievements</span>
              </Link>
            </li>
            <li>
              <Link to="#projects" onClick={() => handleLinkClick('projects')} className="flex items-center py-3 group">
                <span className="mr-4 h-px w-8 bg-slate-200 transition-all group-hover:w-16 group-hover:bg-slate-600 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-white group-focus-visible:text-white">Projects</span>
              </Link>
            </li>
            <li>
              <Link to="#experience" onClick={() => handleLinkClick('experience')} className="flex items-center py-3 group">
                <span className="mr-4 h-px w-8 bg-slate-200 transition-all group-hover:w-16 group-hover:bg-slate-600 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-white group-focus-visible:text-white">Experiences</span>
              </Link>
            </li>
            <li>
              <Link to="#education" onClick={() => handleLinkClick('education')} className="flex items-center py-3 group">
                <span className="mr-4 h-px w-8 bg-slate-200 transition-all group-hover:w-16 group-hover:bg-slate-600 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-white group-focus-visible:text-white">Education</span>
              </Link>
            </li>
            <li>
              <Link to="#volunteering" onClick={() => handleLinkClick('volunteering')} className="flex items-center py-3 group">
                <span className="mr-4 h-px w-8 bg-slate-200 transition-all group-hover:w-16 group-hover:bg-slate-600 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-white group-focus-visible:text-white">Volunteering</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>


      <main className="flex-1 h-screen overflow-y-auto ml-[600px] justify-center items-center  w-3/5">
            
        {visibleCard === 'about' && (
          <div id="about">
            <AboutCard
              title="About"
              description={User.userProfile?.about ? User.userProfile?.about : <h1>No about yet</h1>}
            />
          </div>
        )}

        {visibleCard === 'skills' && (
          <div id="skills" className='flex flex-col justify-center items-center gap-3 pt-10'>
            <div className="flex justify-center items-center gap-5">
              <img className="w-16" src={python} alt="python" />
              <img className="w-16" src={javascript} alt="js" />
              <img className="w-16" src={html} alt="html" />
              <img className="w-16" src={django} alt="django" />
              <img className="w-16" src={css} alt="css" />
              <img className="w-16" src={c} alt="c" />
            </div>

            <div className="grid grid-cols-3 gap-5">
              {User.skills.map((skill, index) => (
                <SkillsCard
                  key={skill.id || index} 
                  name={skill.name ? skill.name : <p>No skill</p>}
                  levelOfProficiency={skill.levelOfProficiency ? skill.levelOfProficiency : ''}
                />
              ))}
            </div>
          </div>
        )}




        {visibleCard === 'achievement' && (
          <div id="achievement" className="flex flex-col gap-3 pt-10 pl-11  justify-center items-center">

            <h1 className="text-2xl  text-cyan-400 font-semibold text-center">Achievements</h1>

            {User.achievements.map((achievements) => (
              <AchievementCard
                key={achievements.id || index}
                image={achievements.image ? `https://savefiles.org/${achievements.image}?shareable_link=302` : ""}
                award={achievements.award ? achievements.award : ''}
                description={achievements.description ? achievements.description : ''}
                nameOfInstitution={achievements.nameOfInstitution ? achievements.nameOfInstitution : ''}
              />

            ))}
          </div>
        )}


        {visibleCard === 'projects' && (
          <div id="projects" className="flex flex-col  gap-3 pt-10 overflow-auto">
             <h1 className="text-2xl  text-cyan-400 font-semibold text-center">Projects</h1>
            {User.projects.map((project) => (
              <ProjectsCard
                key={project.id || index}
                name={project.projectName ? project.projectName : ''}
                description={project.description ? project.description : <p> No project yet</p>}
                contributors={project.contributors ? project.contributors : ''}
                link={project.link ? project.link : ''}
                startDate={project.startDate ? project.startDate : ''}
                endDate={project.endDate ? project.endDate : ''}
                institution={project.nameOfInstitution ? project.nameOfInstitution : ''}
                skills={project.skills ? project.skills : ''}
              />
            ))}
          </div>
        )}


        {visibleCard === 'experience' && (
          <div id="experience" className='flex flex-col pt-10 gap-7  justify-center items-center'>
             <h1 className="text-2xl  text-cyan-400 font-semibold text-center">Experiences</h1>
            {User.experiences.map((experiences) => (
              <ExperienceCard
                key={experiences.id || index}
                title={experiences.companyName ? experiences.companyName : ''}
                role={experiences.role ? experiences.role : ''}
                responsibility={experiences.responsibility ? experiences.responsibility : ''}
                location={experiences.location ? experiences.location : ''}
                startDate={experiences.startDate ? experiences.startDate : ''}
                endDate={experiences.endDate ? experiences.endDate : ''}
                skills={experiences.skills ? experiences.skills : ''}
              />
            ))}
          </div>
        )}


        {visibleCard === 'education' && (
          <div id="education" className='flex-wrap flex-col justify-center items-center pt-10 gap-4'>
             <h1 className="text-2xl  text-cyan-400 font-semibold text-center">Education</h1>
            {User.education.map((education) => (
              <EducationCard
                key={education.id || index}
                schoolName={education.schoolName ? education.schoolName : <p> No education</p>}
                program={education.program ? education.program : ''}
                qualification={education.qualification ? education.qualification : ''}
                grade={education.grade ? education.grade : ''}
                location={education.location ? education.location : ''}
                startDate={education.startDate ? education.startDate : ''}
                endDate={education.endDate ? education.endDate : ''}
              />
            ))}
          </div>
        )}


        {visibleCard === 'volunteering' && (
          <div id="volunteering" className='flex flex-col justify-center items-center pt-10 gap-4'>
            <h1 className="text-2xl  text-cyan-400 font-semibold text-center">Volunteering</h1>
            {User.volunteering.map((volunteering) => (
              <VolunteeringCard
                key={volunteering.id || index}
                projectName="Website Enhancement Project"
                organization={volunteering.organization ? volunteering.organization : ''}
                description={volunteering.description ? volunteering.description : 'No volunteering yet'}
                skills={volunteering.skills ? volunteering.skills : ''}
                startDate={volunteering.startDate ? volunteering.startDate : ''}
                endDate={volunteering.endDate ? volunteering.endDate : ''}
                location={volunteering.location ? volunteering.location : ''}
                role={volunteering.role ? volunteering.role : ''}
                responsibility={volunteering.responsibility ? volunteering.responsibility : ''}
              />

            ))}
          </div>
        )}

      </main>
    </div>
  );
};

export default Preview;
