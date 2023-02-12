import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import s from "../ProfileNav/ProfileNav.module.css"
import { postUser, getUser} from "../../redux/actions";
import { Link } from "react-router-dom";


export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const loggedUser = useSelector(state => state.user);
  const dispatch = useDispatch();
  const users = useSelector(state => state.user)

  const dbUser = { username: user.nickname, email: user.email };
  

  useEffect(() => {
    dispatch(getUser(user.email));
    dispatch(postUser(dbUser));
  }, [dispatch]);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className={s.container}>
        <h2>{user.name}</h2>
        <img src={user.picture} alt={user.name} />
        
      </div>
    )
  );
};