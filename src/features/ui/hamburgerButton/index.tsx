import { useApp } from "@contexts/appContext";
import S from "./index.module.scss";

export const HamburgerButton = () => {
  const { app, setApp } = useApp();

  const handleChange = () => {
    setApp((prevState) => ({ ...prevState, hamburger: !prevState.hamburger }));
  };

  return (
    <button
      id="hamburger-button"
      className={S.root}
      onClick={handleChange}
      aria-expanded={app.hamburger}
      aria-label={app.hamburger ? "Close menu" : "Open menu"}
      ref={app.hamburgerButtonRef}
    >
      <div className={S.line} />
      <div className={S.line} />
      <div className={S.line} />
      <input
        type="checkbox"
        id="hamburger"
        className={S.hidden}
        onChange={handleChange}
        checked={app.hamburger}
        aria-hidden="true"
      />
    </button>
  );
};
