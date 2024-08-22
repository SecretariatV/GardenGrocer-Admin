import { RefObject } from "react";

interface IRouterType {
  title: string;
  path: string;
  element: JSX.Element;
  children?: IRouterType[];
}

interface INavType {
  title: string;
  link?: string;
  icon?: string;
  children?: INavType[];
}

interface IAppProps {
  hamburger: boolean;
  hamburgerButtonRef: RefObject<HTMLButtonElement> | null;
}

export type { IRouterType, IAppProps, INavType };
