import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UseFormContext } from "./context/useFormContext";
import FormPage from "./pages/form/formPage/FormPage";
import LandingPage from "./pages/landing/LandingPage";
import Login from "./pages/login/loginPage/Login";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import UserCards from "./pages/userCards/userCardsPage/UserCards";

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
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
function App() {
  return (
    <UseFormContext>
      <RouterProvider router={router} />
    </UseFormContext>
  );
}

export default App;
