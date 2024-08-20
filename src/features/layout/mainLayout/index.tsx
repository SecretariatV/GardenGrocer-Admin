import { Outlet } from "react-router-dom";
import S from "./index.module.scss";

const MainLayout = () => {
  return (
    <div className={S.root}>
      <Outlet />
    </div>
  );
};

export default MainLayout;
