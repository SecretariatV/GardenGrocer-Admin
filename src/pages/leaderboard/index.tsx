import useTimeout from "@hooks/useTimeout";
import S from "./index.module.scss";
import { Toaster } from "react-hot-toast";

const LeaderboardPage = () => {
  useTimeout(4000);

  return (
    <div className={S.root}>
      Leaderboard
      <Toaster position="top-right" reverseOrder />
    </div>
  );
};

export default LeaderboardPage;
