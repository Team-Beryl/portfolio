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
import Rootlayout from "./layout/rootlayout";
import OverView from "./pages/dashboard/pages/overview"
import { apiGetUserDetails } from "./services/preview";
import DashboardLayout from "./pages/dashboard/layout/dashboardLayout";

function App() {
  const router = createBrowserRouter([


    {
      path: "/",
      element: <Rootlayout />,
      children: [
        {
          index: true,
          element: <LandingPage />
        },


      ]

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
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <DashboardHome />
        },
        {
          path: "overview", 
          element: <OverView />
        },
        {
          path: "/dashboard/profile", 
          element: <UserProfile />
        },
        {
          path: "/dashboard/skills",
          element: <Skills />
        },
        {
          path: "/dashboard/projects", 
          element: <Projects />
        },
        {
          path: "dashbaord/experiences",
          element: <Experience />
        },
        {
          path: "/dashboard/acheivements",
          element: <Acheivement />
        },
        {
          path: "/dashboard/education",
          element: <Education />
        },
        {
          path: "/dashboard/volunteering",
          element: <Volunteering />
        },
        {
          path: "/dashboard/skills/add-skill", 
          element: <AddSkill />
        },
        {
          path: "/dashboard/profile/addprofile", 
          element: <AddProfile />
        },
        {
          path: "/dashboard/projects/addproject",
          element: <AddProject />
        },
        {
          path: "/dashboard/experiences/addexperience", 
          element: <AddExperience />
        },
        {
          path: "/dashboard/acheivements/addacheivement", 
          element: <AddAcheivement />
        },
        {
          path: "/dashboard/volunteering/addvolunteering", 
          element: <AddVolunteering />
        },
        {
          path: "/dashboard/education/addeducation", 
          element: <AddEducation />
        },
      ]
    },
    


    {
      path: "prev",
      element: <Preview />
    },


    {
      path: "prev/ :username",
      element: <Preview />,
      loader: async ({ params }) => {
        const username = params.username;
        try {
          const response = await apiGetUserDetails(username);
          const userProfileData = response?.data.user;
          return userProfileData;
        } catch (error) {
          toast.error("An error occured");
          return null;
        }
      },
    },

  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;