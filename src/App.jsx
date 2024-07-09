import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import Dashboard from "./pages/dashboard";
import Preview from "./pages/preview";
import SignUp from "./pages/signup";
import Signin from "./pages/signin";

function App () {
  const router = createBrowserRouter ([
{
  path: "/",
  element: <LandingPage/>

},

{
  path: "dash",
  element: <Dashboard/>
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