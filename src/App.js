import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import React from 'react';

import { UserAuthContextProvider } from "./Components/Mainpage/UserAuthContext";
import ProtectedRoute from "./ProtectedRoute.js";
import Signup from './Components/Mainpage/Signup.js';
import Mysignin from './Components/Mainpage/Mysignin.js';
import Meetup from './Components/Meetup_page/Meetup.js';
import Userprofile from './Components/Userprofile/Userprofile.js';
import AdminSignup from './Components/Admin/AdminSignup.js';
import AdminSignin from './Components/Admin/AdminSignin.js';
import AdminDashboard from './Components/Admin/AdminDashboard.js';
import Buttton from './Components/buttton.js';
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Signup /> },

    {
      path: "/Mysignin",
      element: <Mysignin />,
    },

    {
      path: "/profile",
       
      element: 
      <Userprofile />
      //<UserAuthContextProvider> 
      //     <ProtectedRoute>
       //    <Userprofile />
       //     </ProtectedRoute>
      //    </UserAuthContextProvider>
      
    },
    
    {
      path: "/meetup",
      element: <Meetup />,
    },
    
    {
      path: "/buttton",
      element: <Buttton />,
    },
    {
      path: "/adminsignup",
      element: <AdminSignup />,
    },

    {
      path: "/adminlogin",
      element: <AdminSignin />,
    },

    {
      path: "/adminconsole",
      element: <AdminDashboard />,
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
        
      </div>
    </>
  );
}


export default App;
