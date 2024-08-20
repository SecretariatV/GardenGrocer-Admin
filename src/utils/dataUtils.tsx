import { lazy } from "react";
import { IRouterType } from "./typeUtils";

const LazyMainLayout = lazy(() => import("@features/layout/mainLayout"));
const LazyLeaderboard = lazy(() => import("@pages/leaderboard"));

const ROUTER_DATA: IRouterType[] = [
  {
    title: "Main Layout",
    path: "/",
    element: <LazyMainLayout />,
    children: [
      { title: "Leaderboard", path: "", element: <LazyLeaderboard /> },
    ],
  },
];

export { ROUTER_DATA };
