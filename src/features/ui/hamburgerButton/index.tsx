import { useApp } from "@contexts/appContext";
import S from "./index.module.scss";

export const HamburgerButton = () => {
  const { app, setApp } = useApp();

  const handleChange = () => {
    setApp((prevState) => ({ ...prevState, hamburger: !prevState.hamburger }));
  };

  return (
    <div id="hamburger-button" className={S.root} onClick={handleChange}>
      <div className={S.line} />
      <div className={S.line} />
      <div className={S.line} />
      <input
        type="checkbox"
        id="hamburger"
        onChange={handleChange}
        checked={app.hamburger}
      />
    </div>
  );
};
