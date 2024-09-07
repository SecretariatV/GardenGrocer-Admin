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

interface IRegisterInfoType {
  useremail: string | undefined;
  userpassword: string | undefined;
  userconfirmpassword: string | undefined;
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
  viewpassword: boolean;
  remember: boolean;
  error: {
    useremail: string;
    userpassword: string;
    username: string;
    email: string;
    password: string;
    userconfirmpassword: string;
  };
}

export type { IRouterType, IAppProps, INavType, IRegisterInfoType };
