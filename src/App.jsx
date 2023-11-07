import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UseFormContext } from "./context/useFormContext";
import FormPage from "./pages/form/FormPage";
import LandingPage from "./pages/landing/LandingPage";
import Login from "./pages/login/Login";
import UserCards from "./pages/userCards/UserCards";

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
  {
    path: "/cards",
    element: <UserCards />,
  },
]);
function App() {
  return (
    <UseFormContext>
      <RouterProvider router={router} />;
    </UseFormContext>
  );
}

export default App;
