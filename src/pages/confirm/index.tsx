import { useLocation, useNavigate } from "react-router-dom";
import S from "./index.module.scss";
import { useEffect, useState } from "react";
import { axiosGet } from "@utils/axiosUtil";

const ConfirmPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    setToken(location.search.split("=")[1]);
  }, [location]);

  const confirmHandler = async () => {
    const res = await axiosGet(`/auth/confirm/${token}`);
    if (res.confirm) {
      navigate("/register");
    }
  };

  return (
    <div className={S.root}>
      <div className={S.wrapper}>
        <h3>Please Confirm Your Link</h3>
        <button type="button" onClick={confirmHandler}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmPage;
