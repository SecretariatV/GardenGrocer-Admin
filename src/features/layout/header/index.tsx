import { HamburgerButton } from "@features/ui";
import S from "./index.module.scss";

export const Header = () => {
  return (
    <header className={S.root}>
      <HamburgerButton />
    </header>
  );
};
