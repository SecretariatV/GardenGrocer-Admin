import { lazy } from "react";
import { INavType, IRouterType } from "./typeUtils";

const LazyMainLayout = lazy(() => import("@features/layout/mainLayout"));
const LazyLeaderboard = lazy(() => import("@pages/leaderboard"));
const LazyRegister = lazy(() => import("@pages/register"));

const ROUTER_DATA: IRouterType[] = [
  {
    title: "Main Layout",
    path: "/",
    element: <LazyMainLayout />,
    children: [
      { title: "Dashboard", path: "", element: <LazyLeaderboard /> },
      { title: "Register", path: "register", element: <LazyRegister /> },
    ],
  },
];

const NAV_DATA: INavType[] = [
  {
    title: "Dashboard",
  },
  { title: "Register" },
];

export { ROUTER_DATA, NAV_DATA };
