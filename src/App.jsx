import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/form",
  //   element: <Form />,
  // },
  // {
  //   path: "/cards",
  //   element: <UserCard />,
  // },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
