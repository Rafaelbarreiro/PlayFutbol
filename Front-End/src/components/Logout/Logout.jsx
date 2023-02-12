import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Profile } from "../ProfileNav/Profile";
import s from "../../components/ProfileNav/ProfileNav.module.css"


export const LogoutButton = () => {
  const { logout , user} = useAuth0();

 console.log(user)

  return (
    <div className={s.logoutAndProfile}>
      <Profile />
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Logout
      </button>
    </div>
  );
};