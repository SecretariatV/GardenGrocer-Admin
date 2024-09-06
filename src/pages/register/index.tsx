import axios from "axios";
import S from "./index.module.scss";
import { useState } from "react";
import { InputController } from "@features/ui";
import googleImg from "@assets/google-logo.webp";

const RegisterPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const handleLocalLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/auth/register", {
        username,
        email,
        password,
      });
      // Save the token to local storage and redirect
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleGoogleLogin = () => {
    // Redirect the user to the Google Auth endpoint in the backend
    window.location.href = "http://localhost:4000/auth/google";
  };

  return (
    <div className={S.root}>
      <div className={S.wrapper}>
        <div className={S.wrapper_container}>
          <h2>LogIn</h2>
          <div className={S.wrapper_container_infos}>
            <InputController type="email" label="Email" />
            <InputController type="password" label="Password" />
            <div className={S.wrapper_container_infos_remember}>
              <input type="checkbox" id="" />
              <span>Remember me</span>
            </div>
          </div>
          <button type="button" className={S.wrapper_container_loginbtn}>
            Login
          </button>
          <button type="button" className={S.wrapper_container_google}>
            <img src={googleImg} alt="Google Logo" />
            Google login
          </button>
          <span>If you havent register</span>
        </div>
      </div>
      <div className={S.wrapper}>
        <h2>Register</h2>
      </div>
    </div>
  );
};

export default RegisterPage;
