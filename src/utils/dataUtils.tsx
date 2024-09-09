import { lazy } from "react";
import { INavType, IRouterType } from "./typeUtils";

const LazyMainLayout = lazy(() => import("@features/layout/mainLayout"));
const LazyLeaderboard = lazy(() => import("@pages/leaderboard"));
const LazyRegister = lazy(() => import("@pages/register"));
const LazyConfirm = lazy(() => import("@pages/confirm"));

const ROUTER_DATA: IRouterType[] = [
  {
    title: "Main Layout",
    path: "/",
    element: <LazyMainLayout />,
    children: [
      { title: "Dashboard", path: "", element: <LazyLeaderboard /> },
      { title: "Register", path: "register", element: <LazyRegister /> },
      { title: "Confirm", path: "confirm", element: <LazyConfirm /> },
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
