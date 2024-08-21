import { Outlet } from "react-router-dom";
import S from "./index.module.scss";
import { Header } from "../header";
import { Footer } from "../footer";
import LoadingPage from "@pages/loading";
import { HamburgerMenu } from "@features/ui";

const MainLayout = () => {
  return (
    <>
      <LoadingPage effect />
      <div className={S.root}>
        <Header />
        <Outlet />
        <Footer />
      </div>
      <HamburgerMenu />
    </>
  );
};

export default MainLayout;
