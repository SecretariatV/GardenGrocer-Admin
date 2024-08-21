import { Outlet } from "react-router-dom";
import S from "./index.module.scss";
import { Header } from "../header";
import { Footer } from "../footer";
import LoadingPage from "@pages/loading";

const MainLayout = () => {
  return (
    <>
      <LoadingPage effect />
      <div className={S.root}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
