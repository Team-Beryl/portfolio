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
      path: "prev",
      element: <Preview />
    },

    {
      path: "sign",
      element: <SignUp />
    },

    {
      path: "sig",
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
      path: "dashboard/acheivements/acheivement",
      element: <AddAcheivement/>
    }


  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App