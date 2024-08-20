import LoadingPage from "@pages/loading";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTER_DATA } from "./dataUtils";
import { IRouterType } from "./typeUtils";

const renderRoutes = (routes: IRouterType[]) => {
  return routes.map(({ title, path, element, children = [] }: IRouterType) => {
    return (
      <Route key={title} path={path} element={element}>
        {children.length > 0 && <Route>{renderRoutes(children)}</Route>}
      </Route>
    );
  });
};

const PageRouter = () => {
  const PAGE_ROUTER = renderRoutes(ROUTER_DATA);
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>{PAGE_ROUTER}</Routes>
    </Suspense>
  );
};

export default PageRouter;
