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
      }, 300);
    }
  }, [app.hamburger]);

  useEffect(() => {
    console.log("Hmaburger", app.hamburger);
  }, [app.hamburger]);

  useEffect(() => {
    console.log("active", active);
  }, [active]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mainRef.current && !mainRef.current.contains(event.target as Node)) {
        setActive(false);
        const timer = setTimeout(() => {
          setApp((prevState) => ({ ...prevState, hamburger: false }));
          clearTimeout(timer);
        }, 300);
      }
    };

    if (screenRef.current) {
      screenRef.current.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      if (screenRef.current) {
        screenRef.current.removeEventListener("mousedown", handleClickOutside);
      }
    };
  }, [screenRef]);

  return (
    <div className={clsx(S.root, app.hamburger && S.active)} ref={screenRef}>
      <div className={clsx(S.root_wrapper, active && S.active)} ref={mainRef}>
        <div className={S.root_wrapper_header}>
          <h3>Garden Grocer</h3>
        </div>
      </div>
    </div>
  );
};
