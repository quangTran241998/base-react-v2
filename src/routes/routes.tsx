import { BaseRoute } from "@/constants/baseRoute";
import { PERMISSION_ALL } from "@/interfaces/enum";
import React, { Fragment, lazy } from "react";
import withCheckRole from "../HOCs/withCheckRole";

// Bash importHere
const DefaultLayout = lazy(() => import("../layouts/DefaultLayout"));
const Login = lazy(() => import("../pages/Login"));
const Homepage = lazy(() => import("../pages/Home"));
const Components = lazy(() => import("../pages/DemoComponents"));
const OverviewSalesManagement = lazy(() => import("../pages/sales-management/overview"));
const Wholesale = lazy(() => import("../pages/sales-management/wholesale"));
const Retail = lazy(() => import("../pages/sales-management/retail"));
const CreateNewOrderWholesale = lazy(() => import("../pages/sales-management/wholesale/new-order"));
const DetailsOrderWholesale = lazy(() => import("../pages/sales-management/wholesale/detail"));
const DealerManagement = lazy(() => import("../pages/dealer-management"));
const RepoManagement = lazy(() => import("../pages/repo-management"));
const InputOutputManagement = lazy(() => import("../pages/input-output-management"));

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
    isPrivateRoute: false,
    routeChild: [
      {
        name: "Homepage",
        path: BaseRoute.Homepage,
        component: withCheckRole(Homepage, PERMISSION_ALL),
      },
      {
        name: "Components",
        path: BaseRoute.Components,
        component: withCheckRole(Components, PERMISSION_ALL),
      },
      {
        name: "Dealer management",
        path: BaseRoute.DealerManagement,
        component: withCheckRole(DealerManagement, PERMISSION_ALL),
      },
      {
        name: "Repo management",
        path: BaseRoute.RepoManagement,
        component: withCheckRole(RepoManagement, PERMISSION_ALL),
      },
      {
        name: "Input output management",
        path: BaseRoute.InputOutputManagement,
        component: withCheckRole(InputOutputManagement, PERMISSION_ALL),
      },
      {
        name: "Sales management",
        path: BaseRoute.SalesManagement,
        isPrivateRoute: true,
        routeChild: [
          {
            name: "Overview",
            path: BaseRoute.OverviewSalesManagement,
            component: withCheckRole(OverviewSalesManagement, PERMISSION_ALL),
          },
          {
            name: "Wholesale",
            path: BaseRoute.Wholesale,
            component: withCheckRole(Wholesale, PERMISSION_ALL),
          },
          {
            name: "Retail",
            path: BaseRoute.Retail,
            component: withCheckRole(Retail, PERMISSION_ALL),
          },
          {
            name: "Create new order wholesale",
            path: BaseRoute.CreateNewOrderWholesale,
            component: withCheckRole(CreateNewOrderWholesale, PERMISSION_ALL),
          },
          {
            name: "Detail order wholesale",
            path: BaseRoute.DetailsOrderWholesale,
            component: withCheckRole(DetailsOrderWholesale, PERMISSION_ALL),
          },
        ],
      },
    ],
  },
];

export default routes;
