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
}

export type { IRouterType, IAppProps, INavType };
