import useTimeout from "@hooks/useTimeout";
import S from "./index.module.scss";
import LoadingPage from "@pages/loading";

const LeaderboardPage = () => {
  useTimeout(4000);

  return (
    <>
      <LoadingPage effect />
      <div className={S.root}>Leaderboard</div>
    </>
  );
};

export default LeaderboardPage;
