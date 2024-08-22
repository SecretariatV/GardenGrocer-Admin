import { useEffect, useRef, useState } from "react";
import S from "./index.module.scss";
import { useApp } from "@contexts/appContext";
import clsx from "clsx";

export const HamburgerMenu = () => {
  const screenRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<boolean>(false);
  const { app, setApp } = useApp();

  useEffect(() => {
    if (app.hamburger) {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        setActive(true);
        mainRef.current?.focus();
      }, 300);
    }
  }, [app]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mainRef.current && !mainRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    if (screenRef.current) {
      screenRef.current.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (screenRef.current) {
        screenRef.current.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [screenRef]);

  const closeMenu = () => {
    setActive(false);
    const timer = setTimeout(() => {
      setApp((prevState) => ({ ...prevState, hamburger: false }));
      clearTimeout(timer);
      app.hamburgerButtonRef?.current?.focus();
    }, 300);
  };

  return (
    <div
      className={clsx(S.root, app.hamburger && S.active)}
      ref={screenRef}
      aria-hidden={!app.hamburger}
    >
      <div
        className={clsx(S.root_wrapper, active && S.active)}
        ref={mainRef}
        role="menu"
        aria-labelledby="hamburger-button"
        tabIndex={-1}
      >
        <div className={S.root_wrapper_header}>
          <h3 id="hamburger-menu-title">Garden Grocer</h3>
        </div>
        <ul></ul>
      </div>
    </div>
  );
};
