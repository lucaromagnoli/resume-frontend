import type { RouteObject } from 'react-router';
import Root from "./components/Root";
import Profile from "./components/Profile";
import IndexComponent from "./components/Index";
import History from "./components/History";
import Contact from "./components/Contact";


const routes: RouteObject[] = [{
    path: "/",
    element: <Root/>,
    children: [
        {
            index: true,
            element: <IndexComponent />
        },
        {
            path: "/profile",
            element: <Profile />
        },
        {
            path: "/history",
            element: <History />
        },
        {
            path: "/contact",
            element: <Contact />
        }
    ]
}];
export default routes;
