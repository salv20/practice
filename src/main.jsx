import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
<<<<<<< HEAD
import Signup from "./pages/signup.jsx";
import ForgetPassword from "./pages/forgetpass.jsx";
=======
>>>>>>> 92e170a5a615cd3d1a69b9bf5c1b2bf3acc387e3

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index Component={App} />
<<<<<<< HEAD
      <Route path="signup" Component={Signup} />
      <Route path="forget" Component={ForgetPassword} />
=======
>>>>>>> 92e170a5a615cd3d1a69b9bf5c1b2bf3acc387e3
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />
  </StrictMode>
);
