import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Homes from "../Pages/Homes/Homes";
import Login from "../Pages/Login/Login";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Homes></Homes>
      },
      {
        path: "/login",
        element: <Login></Login>
      },

    ]
  },
]);

export default router;