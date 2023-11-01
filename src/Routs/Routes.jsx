import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import RagistrationForm from "../Pages/SignUp/RagistrationForm";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>,
        },
        {
          path:'/register',
          element:<RagistrationForm></RagistrationForm>
        }
      ]
    },
  ]);
  export default router;
  
