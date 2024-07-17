import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Preview from "./pages/preview";
import SignUp from "./pages/signup";
import Signin from "./pages/signin";
import DashboardLayout from "./pages/dashboard/layout";
import Overview from "./pages/dashboard/pages/overview";
import Skills from "./pages/dashboard/pages/skills";
import Projects from "./pages/dashboard/pages/projects";
import Experience from "./pages/dashboard/pages/experience";
import About from "./pages/dashboard/pages/about";
import SocialMedia from "./pages/dashboard/pages/socialmedia";
import Acheivement from "./pages/dashboard/pages/acheivement";
import LandingPage from "./pages/Landingpage/index";

function App () {
  const router = createBrowserRouter ([
{
  path: "/",
  element: <LandingPage/>

},

{
  path: "dash",
  element: <DashboardLayout/>,
  children:[
    {
      index: true,
      element:<Overview/>
    },

    {
      path: "skills",
      element: <Skills/>
    },

    {
      path: "projects",
      element: <Projects/>
    },

    {
      path: "experience",
      element: <Experience/>
    },

    {
      path: "about",
      element: <About/>
    },

    {
      path: "social",
      element: <SocialMedia/>
    },

    {
      path: "acheive",
      element: <Acheivement/>
    }
  ]
},

{
  path: "prev",
  element: <Preview/>
},

{
  path: "sign",
  element: <SignUp/>
},

{
  path: "sig",
  element: <Signin/>
}

  ])


return (
  <RouterProvider router={router} />
)
}

export default App