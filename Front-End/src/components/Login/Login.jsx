import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import s from "../Login/Login.module.css"


export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  
  return (
    <>
    <div className={s.containerLog}>
      <div className={s.inner}>
      <div className={s.loginBtn} onClick={() => loginWithRedirect()}>
        Login
      </div>
      </div>
      </div>
    </>
  );
};
