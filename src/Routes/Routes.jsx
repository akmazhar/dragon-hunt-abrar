import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Homes from "../Pages/Homes/Homes";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register";




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
        element: <Login></Login>,
        loader: () => fetch('news.json')
      },
      {
        path: "/register",
        element: <Register></Register>
      },

    ]
  },
]);

export default router;