import { BaseRoute } from "@/constants/baseRoute";
import { PERMISSON_ALL } from "@/interfaces/enum";
import React, { Fragment, lazy } from "react";
import withCheckRole from "../HOCs/withCheckRole";

// Bash importHere
const DefaultLayout = lazy(() => import("../layouts/DefaultLayout"));
const Login = lazy(() => import("../pages/login/Login"));
const Homepage = lazy(() => import("../pages/Home"));
const Components = lazy(() => import("../pages/DemoComponents"));
const About = lazy(() => import("../pages/about"));
const Contact = lazy(() => import("../pages/contact"));
const Articles = lazy(() => import("../pages/articles"));

interface Route {
  name: string;
  path: string;
  isPrivateRoute?: boolean;
  layout: React.LazyExoticComponent<React.MemoExoticComponent<any>> | React.ExoticComponent<any> | typeof React.Component;
  routeChild: {
    name: string;
    path: string;
    component?: typeof React.Component | React.FC;
    isPrivateRoute?: boolean;
    routeChild?: {
      name: string;
      path: string;
      component: typeof React.Component | React.FC;
      isPrivateRoute?: boolean;
    }[];
  }[];
}

const routes: Route[] = [
  {
    name: "Login Layout",
    path: BaseRoute.Login,
    layout: Fragment,
    routeChild: [
      {
        name: "Login",
        path: BaseRoute.Login,
        component: Login,
      },
    ],
  },

  {
    name: "Home Layout",
    path: BaseRoute.Homepage,
    layout: DefaultLayout,
    isPrivateRoute: true,
    routeChild: [
      {
        name: "Homepage",
        path: BaseRoute.Homepage,
        component: withCheckRole(Homepage, PERMISSON_ALL),
      },
      {
        name: "Components",
        path: BaseRoute.Components,
        component: withCheckRole(Components, PERMISSON_ALL),
      },
      {
        name: "About",
        path: BaseRoute.About,
        component: withCheckRole(About, PERMISSON_ALL),
      },
      {
        name: "Contact",
        path: BaseRoute.Contact,
        component: withCheckRole(Contact, PERMISSON_ALL),
      },

      {
        name: "Cms",
        path: BaseRoute.Cms,
        isPrivateRoute: true,
        routeChild: [
          {
            name: "Articles",
            path: BaseRoute.Articles,
            component: withCheckRole(Articles, PERMISSON_ALL),
          },
        ],
      },
    ],
  },
];

export default routes;
