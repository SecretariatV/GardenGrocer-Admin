import { FC } from "react";
import S from "./index.module.scss";

interface IProps {
  type: string;
  label: string;
}

export const InputController: FC<IProps> = ({ type, label }) => {
  return (
    <div className={S.root}>
      <label htmlFor={`${label}-input`}>{label}</label>
      <input type={type} id={`${label}-input`} />
    </div>
  );
};
