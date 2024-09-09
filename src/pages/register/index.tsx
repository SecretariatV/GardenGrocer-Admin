import axios from "axios";
import S from "./index.module.scss";
import { FormEvent, useState } from "react";
import { InputController } from "@features/ui";
import googleImg from "@assets/google-logo.webp";
import clsx from "clsx";
import { IRegisterInfoType } from "@utils/typeUtils";

const RegisterPage = () => {
  const [registerInfo, setRegisterInfo] = useState<IRegisterInfoType>({
    useremail: undefined,
    userpassword: undefined,
    userconfirmpassword: undefined,
    username: undefined,
    email: undefined,
    password: undefined,
    remember: false,
    viewpassword: false,
    error: {
      useremail: "",
      userpassword: "",
      username: "",
      userconfirmpassword: "",
      email: "",
      password: "",
    },
  });

  const [registerType, setRegisterType] = useState<boolean>(false);

  const changeRegisterHandle = () => {
    setRegisterType(!registerType);
  };

  const validateRegisterForm = () => {
    let errors = { ...registerInfo.error };
    let isValid = true;

    if (!registerInfo.username) {
      errors.username = "Username is required";
      isValid = false;
    } else {
      errors.username = "";
    }

    if (!registerInfo.useremail) {
      errors.useremail = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(registerInfo.useremail)) {
      errors.useremail = "Invalid email address";
      isValid = false;
    } else {
      errors.useremail = "";
    }

    if (!registerInfo.userpassword || !registerInfo.userconfirmpassword) {
      errors.userpassword = "Password and confirmation are required";
      isValid = false;
    } else if (registerInfo.userpassword !== registerInfo.userconfirmpassword) {
      errors.userconfirmpassword = "Passwords do not match";
      isValid = false;
    } else {
      errors.userpassword = "";
      errors.userconfirmpassword = "";
    }

    setRegisterInfo((prev) => ({ ...prev, error: errors }));
    return isValid;
  };

  const validateLoginForm = () => {
    let errors = { ...registerInfo.error };
    let isValid = true;

    if (!registerInfo.useremail) {
      errors.useremail = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(registerInfo.useremail)) {
      errors.useremail = "Invalid email address";
      isValid = false;
    } else {
      errors.useremail = "";
    }

    if (!registerInfo.userpassword) {
      errors.userpassword = "Password is required";
      isValid = false;
    } else {
      errors.userpassword = "";
    }

    setRegisterInfo((prev) => ({ ...prev, error: errors }));
    return isValid;
  };

  const handleLocalRegister = async (e: FormEvent) => {
    e.preventDefault();
    if (validateRegisterForm()) {
      try {
        await axios.post("http://localhost:4000/auth/register", {
          username: registerInfo.username,
          email: registerInfo.useremail,
          password: registerInfo.userpassword,
        });
      } catch (error) {
        console.error("Register failed", error);
      }
    }
  };

  const handleLocalLogin = (e: FormEvent) => {
    e.preventDefault();

    if (validateLoginForm()) {
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:4000/auth/google";
  };

  return (
    <div className={S.root}>
      <div className={S.wrapper}>
        <div className={clsx(S.wrapper_container, S.login)}>
          <h2>LogIn</h2>
          <div className={S.wrapper_container_infos}>
            <InputController
              type="email"
              label="Email"
              style="email"
              data={registerInfo}
              setData={setRegisterInfo}
            />
            <InputController
              type="password"
              label="Password"
              style="password"
              data={registerInfo}
              setData={setRegisterInfo}
            />
            <div className={S.wrapper_container_infos_remember}>
              <input type="checkbox" id="" />
              <span>Remember me</span>
            </div>
          </div>
          <button
            type="button"
            className={S.wrapper_container_loginbtn}
            onClick={handleLocalLogin}
          >
            Login
          </button>
          <button
            type="button"
            className={S.wrapper_container_google}
            onClick={handleGoogleLogin}
          >
            <img src={googleImg} alt="Google Login Logo" />
            Google
          </button>
          <p className={S.wrapper_container_change}>
            If you haven't get account yet,{" "}
            <label htmlFor="change-register">
              register{" "}
              <input
                type="checkbox"
                id="change-register"
                checked={registerType}
                onChange={changeRegisterHandle}
              />
            </label>
          </p>
        </div>
        <div className={clsx(S.wrapper_container, S.register)}>
          <h2>Register</h2>
          <div className={S.wrapper_container_infos}>
            <InputController
              type="text"
              label="Username"
              style="username"
              data={registerInfo}
              setData={setRegisterInfo}
            />
            <InputController
              type="email"
              label="Email"
              style="useremail"
              data={registerInfo}
              setData={setRegisterInfo}
            />
            <InputController
              type="password"
              label="Password"
              style="userpassword"
              data={registerInfo}
              setData={setRegisterInfo}
            />
            <InputController
              type="password"
              label="Confirm Password"
              style="userconfirmpassword"
              data={registerInfo}
              setData={setRegisterInfo}
            />
          </div>
          <button
            type="button"
            className={S.wrapper_container_loginbtn}
            onClick={handleLocalRegister}
          >
            Register
          </button>
          <button
            type="button"
            className={S.wrapper_container_google}
            onClick={handleGoogleLogin}
          >
            <img src={googleImg} alt="Google Register Logo" />
            Google
          </button>
          <p className={S.wrapper_container_change}>
            If you have get account,{" "}
            <label htmlFor="change-login">
              login{" "}
              <input
                type="checkbox"
                id="change-login"
                checked={!registerType}
                onChange={changeRegisterHandle}
              />
            </label>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
