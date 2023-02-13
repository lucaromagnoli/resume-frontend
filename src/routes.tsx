import type { RouteObject } from "react-router";
import Root from "./components/Root";
import Profile from "./components/Profile";
import History from "./components/History";
import Contact from "./components/Contact";
import Home from "./components/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
];
export default routes;
