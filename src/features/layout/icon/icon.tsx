import { FC } from "react";
import { IconNames, Icons } from "./icons";

interface IProps {
  color: string;
  name: IconNames;
  size: number;
}

export const Icon: FC<IProps> = ({ color, name, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Icons[name](color)}
    </svg>
  );
};
