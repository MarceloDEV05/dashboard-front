import { createBrowserRouter } from "react-router-dom";

import { Home } from "./Pages/Home/Home";
import { Layout } from "./Components/Layout/Layout";
import { Appointments } from "./Pages/Appointments/Appointments";
import { Services } from "./Pages/Services/Services";
import { Clients } from "./Pages/Clients/Clients";
import { Finance } from "./Pages/Finance/Finance";
import { Settings } from "./Pages/Settings/Settings";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/appointments",
        element: <Appointments />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/clients",
        element: <Clients />,
      },
      {
        path: "/finance",
        element: <Finance />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      
    ],
  },
]);
