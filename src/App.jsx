import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import Preview from "./pages/preview";
import SignUp from "./pages/signup";
import Signin from "./pages/signin";
import Skills from "./pages/dashboard/pages/skills";
import Projects from "./pages/dashboard/pages/projects";
import Experience from "./pages/dashboard/pages/experience";
import Acheivement from "./pages/dashboard/pages/acheivement";
import UserProfile from "./pages/dashboard/pages/userprofile";
import DashboardHome from "./pages/dashboard/pages/home";
import AddSkill from "./pages/dashboard/pages/addSkill";
import AddProfile from "./pages/dashboard/pages/addprofile";
import AddProject from "./pages/dashboard/pages/addproject";
import AddExperience from "./pages/dashboard/pages/addexperience";
import AddAcheivement from "./pages/dashboard/pages/addacheivement";
import Education from "./pages/dashboard/pages/education";
import Volunteering from "./pages/dashboard/pages/volunteering";
import AddEducation from "./pages/dashboard/pages/addeducation";
import AddVolunteering from "./pages/dashboard/pages/addvolunteering";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />

    },

    {
      path: "dashboard",
      element: <DashboardHome />
    },
    {
      path: "dashboard/profile",
      element: <UserProfile />
    },

    {
      path: "dashboard/skills",
      element: <Skills />
    },

    {
      path: "dashboard/projects",
      element: <Projects />
    },

    {
      path: "dashbaord/experiences",
      element: <Experience />
    },
    {
      path: "dashboard/acheivements",
      element: <Acheivement />
    },

    {
      path: "dashboard/education",
      element: <Education />
    },

    {
      path: "dashboard/volunteering",
      element: <Volunteering />
    },

    {
      path: "prev",
      element: <Preview />
    },
  

    {
      path: "signup",
      element: <SignUp />
    },

    {
      path: "signin",
      element: <Signin />
    },

    {
      path: "dashboard/skills/add-skill",
      element: <AddSkill />
    },

    {
      path: "dashboard/profile/addprofile",
      element: <AddProfile />
    },

    {
      path: "dashboard/projects/addproject",
      element: <AddProject />
    },

    {
      path: "dashboard/experiences/addexperience",
      element: <AddExperience />
    },

    {
      path: "dashboard/acheivements/addacheivement",
      element: <AddAcheivement />
    },

    {
      path: "dashboard/volunteering/addvolunteering",
      element: <AddVolunteering />
    },

    {
      path: "dashboard/education/addeducation",
      element: <AddEducation />
    },

  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App