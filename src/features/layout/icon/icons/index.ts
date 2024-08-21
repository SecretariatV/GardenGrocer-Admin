import Home from "./home";

export const Icons = {
  Home,
} as const;

export type IconNames = keyof typeof Icons;
