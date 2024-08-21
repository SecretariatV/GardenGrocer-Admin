import useTimeout from "@hooks/useTimeout";
import S from "./index.module.scss";

const LeaderboardPage = () => {
  useTimeout(4000);

  return <div className={S.root}>Leaderboard</div>;
};

export default LeaderboardPage;
