import { HamburgerButton } from "@features/ui";
import S from "./index.module.scss";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <header className={S.root} role="banner">
      <HamburgerButton />
      <button type="button" onClick={handleRegister}>
        Register
      </button>
    </header>
  );
};
