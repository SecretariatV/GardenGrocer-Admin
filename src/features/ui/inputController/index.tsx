import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import S from "./index.module.scss";
import { IRegisterInfoType } from "@utils/typeUtils";
import clsx from "clsx";

interface IProps {
  type: string;
  label: string;
  style:
    | "useremail"
    | "userpassword"
    | "userconfirmpassword"
    | "username"
    | "email"
    | "password";
  data: IRegisterInfoType;
  setData: Dispatch<SetStateAction<IRegisterInfoType>>;
}

export const InputController: FC<IProps> = ({
  type,
  label,
  style,
  data,
  setData,
}) => {
  const handleChangeData = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({ ...prevData, [style]: e.target.value }));
  };

  return (
    <div className={S.root}>
      {data.error[style] && (
        <span
          id={`${label}-${style}-error`}
          className={S.error}
          role="alert"
          aria-live="assertive"
        >
          {data.error[style]}
        </span>
      )}
      <label
        htmlFor={`${label}-${style}-input`}
        className={clsx(
          S.label,
          data[style] !== undefined && S.active,
          data.error[style] && S.label_error
        )}
      >
        {label}
      </label>
      <input
        type={type}
        id={`${label}-${style}-input`}
        onChange={handleChangeData}
        className={clsx(S.input, data.error[style] && S.input_error)}
        aria-describedby={
          data.error[style] ? `${label}-${style}-error` : undefined
        }
        aria-invalid={!!data.error[style]}
      />
    </div>
  );
};
