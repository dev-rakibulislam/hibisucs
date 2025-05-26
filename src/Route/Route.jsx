import { createBrowserRouter } from "react-router";
import App from "../App";
import Signup from "../Components/Authentication/Signup";
import Login from "../Components/Authentication/Login";
import Error from "../Components/Error";
import Profile from "../Private/Profile";
import IsPrivate from "../Private/IsPrivate";
import Home from "../Components/Home";
import CompanieDetails from "../Private/CompanieDetails";
import Loading from "../Components/loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        HydrateFallback: <Loading />,
        loader: () => fetch('/Compani.json'),
        Component: Home
      },
      {
        path: '/Company-Details/:id',
        HydrateFallback: <Loading />,
        loader: () => fetch(`/Compani.json`),
        element: <IsPrivate><CompanieDetails /></IsPrivate>
      },
      {
        path: '/my-profile',
        element: <IsPrivate><Profile /></IsPrivate>
      },
      {
        path: '/signup',
        Component: Signup
      },
      {
        path: '/signin',
        Component: Login
      }
    ]
  },
  {
    path: '*',
    Component: Error
  }
]);

