import { useNavigate } from "react-router-dom";
import uploadimg from "../../../images/uploadimg.png";
import experienceimg from "../../../images/experienceimg.png";
import skillimg from "../../../images/skillimg.png";
import projectimg from "../../../images/projectimg.png";
import acheiveimg from "../../../images/acheiveimg.png";
import volun from "../../../images/volun.png"
import edu from "../../../images/edu.png"

const DashboardHome = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='bg-blue-900 h-20 flex justify-around items-center pl-10 pr-10' >
                <h3 className='text-white text-2xl' onClick={() => navigate("/")} >Portfolio Hub</h3>
                <button className='h-9 rounded-full text-white hover:bg-white hover:text-blue-500 px-10 shadow-inner' onClick={() => navigate("/signin")}>SIGN OUT</button>
            </div>

            <div className="text-center pt-7">
                <h3 className="text-3xl">Welcome to Portfolio Hub</h3>
                <p className="text-lg">Let's create your first Portfolio!!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
                <div className="border p-4 rounded-md shadow-lg mx-auto transform hover:scale-105 hover:shadow-2xl transition duration-300" onClick={() => navigate("/dashboard/overview")}>
                    <img src={uploadimg} alt="User Profile" className="w-48 mx-auto" />
                    <span className="block text-center mt-4 font-semibold text-lg text-blue-500">Overview</span>
                    <p className="text-center mt-2">
                        Create a user profile to showcase who you <br />
                        are and help others understand your expertise and experience <br />
                        , making it easier to connect and collaborate.
                    </p>
                </div>

                <div className="border p-4 rounded-md shadow-lg mx-auto transform hover:scale-105 hover:shadow-2xl transition duration-300" onClick={() => navigate("/dashboard/profile")}>
                    <img src={uploadimg} alt="User Profile" className="w-48 mx-auto" />
                    <span className="block text-center mt-4 font-semibold text-lg text-blue-500">UserProfile</span>
                    <p className="text-center mt-2">
                        Create a user profile to showcase who you <br />
                        are and help others understand your expertise and experience <br />
                        , making it easier to connect and collaborate.
                    </p>
                </div>

                <div className="border p-4 rounded-md shadow-lg mx-auto transform hover:scale-105 hover:shadow-2xl transition duration-300" onClick={() => navigate("/dashbaord/experiences")}>
                    <img src={experienceimg} alt="Experiences" className="w-48 mx-auto" />
                    <span className="block text-center mt-4 font-semibold text-lg text-blue-500">Experiences</span>
                    <p className="text-center mt-2">This is your opportunity to tell your story and show potential employers the value you bring to their team.</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg mx-auto transform hover:scale-105 hover:shadow-2xl transition duration-300" onClick={() => navigate("/dashboard/skills")}>
                    <img src={skillimg} alt="Skills" className="w-48 mx-auto" />
                    <span className="block text-center mt-4 font-semibold text-lg text-blue-500">Skills</span>
                    <p className="text-center mt-2">Your skills section is a quick snapshot of what you bring to the table. This is your chance to present a comprehensive view of your capabilities and strengths to potential employers.</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg mx-auto transform hover:scale-105 hover:shadow-2xl transition duration-300" onClick={() => navigate("/dashboard/projects")}>
                    <img src={projectimg} alt="Projects" className="w-48 mx-auto" />
                    <span className="block text-center mt-4 font-semibold text-lg text-blue-500">Projects</span>
                    <p className="text-center mt-2">Your projects section is where you bring your skills to life. This is your chance to impress potential employers by showing what you can build and achieve.</p>
                </div>

                <div className="border p-4 rounded-md shadow-lg mx-auto transform hover:scale-105 hover:shadow-2xl transition duration-300" onClick={() => navigate("/dashboard/acheivements")}>
                    <img src={acheiveimg} alt="Achievements" className="w-48 mx-auto" />
                    <span className="block text-center mt-4 font-semibold text-lg text-blue-500">Achievements</span>
                    <p className="text-center mt-2">Your achievements section is where you highlight your standout moments. This section is your opportunity to showcase the impact you've made and the goals you've achieved, making a strong impression on potential employers.</p>
                </div>
                <div className="border p-4 rounded-md shadow-lg mx-auto transform hover:scale-105 hover:shadow-2xl transition duration-300" onClick={() => navigate("/dashboard/education")}>
                    <img src={volun} alt="Achievements" className="w-48 mx-auto" />
                    <span className="block text-center mt-4 font-semibold text-lg text-blue-500">Education</span>
                    <p className="text-center mt-2">Your education section is where you showcase the knowledge and skills you've acquired through your academic journey. This section is crucial for demonstrating your foundational expertise and dedication to your field, giving potential employers a clear understanding of your qualifications and readiness for professional challenges.</p>
                </div>
                <div className="border p-4 rounded-md shadow-lg mx-auto transform hover:scale-105 hover:shadow-2xl transition duration-300" onClick={() => navigate("/dashboard/volunteering")}>
                    <img src={edu} alt="Achievements" className="w-48 mx-auto" />
                    <span className="block text-center mt-4 font-semibold text-lg text-blue-500">Volunteering</span>
                    <p className="text-center mt-2">Your volunteering section is where you highlight your contributions and commitment to community service. This section is your opportunity to showcase the impact you've made through your volunteer work, demonstrating your dedication to making a difference and your ability to work collaboratively.</p>
                </div>
            </div>
        </div>
    );
}

export default DashboardHome;
