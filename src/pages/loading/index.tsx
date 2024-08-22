import { FC } from "react";
import S from "./index.module.scss";
import clsx from "clsx";

interface IProps {
  effect: boolean;
}

const LoadingPage: FC<IProps> = ({ effect }) => {
  return (
    <div
      className={clsx(S.root, effect && S.anim)}
      role="alert"
      aria-busy="true"
      aria-live="polite"
    >
      <div className={S.root_wrapper}>
        <div className={S.bubbles} aria-hidden="true">
          <div className={S.bubbles_bubble} />
          <div className={S.bubbles_bubble} />
          <div className={S.bubbles_bubble} />
          <div className={S.bubbles_bubble} />
          <div className={S.bubbles_bubble} />
          <div className={S.bubbles_bubble} />
          <div className={S.bubbles_bubble} />
          <div className={S.bubbles_bubble} />
          <div className={S.bubbles_sat}>
            <div className={S.bubbles_sat_bubble} />
          </div>
        </div>
        <span>Garden Grocer</span>
        <p className={S.hidden}>Loading, please wait...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
