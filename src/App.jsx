import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormPage from "./pages/form/FormPage";
import LandingPage from "./pages/landing/LandingPage";
import Login from "./pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/form",
    element: <FormPage />,
  },
  // {
  //   path: "/cards",
  //   element: <UserCard />,
  // },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
