import { lazy } from "react";
import { INavType, IRouterType } from "./typeUtils";

const LazyMainLayout = lazy(() => import("@features/layout/mainLayout"));
const LazyLeaderboard = lazy(() => import("@pages/leaderboard"));

const ROUTER_DATA: IRouterType[] = [
  {
    title: "Main Layout",
    path: "/",
    element: <LazyMainLayout />,
    children: [{ title: "Dashboard", path: "", element: <LazyLeaderboard /> }],
  },
];

const NAV_DATA: INavType[] = [
  {
    title: "Dashboard",
  },
];

export { ROUTER_DATA, NAV_DATA };
